import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';
import axios from 'axios';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

// here we are adding middleware to parse all incoming requests as JSON 
app.use(express.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

app.route(`/gaspriceestimate`)
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const response = await axios.get('https://api.ethgasstation.info/api/fee-estimate')

      res.status(200).send(response.data);

    } catch (err) {
      console.error(err);
      res.status(500).send(err)
    }
  })

  app.route(`/ethusdprice`)
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')

      res.status(200).send(response.data);

    } catch (err) {
      console.error(err);
      res.status(500).send(err)
    }
  })

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

server.listen(port, () => {

  // our only exception to avoiding console.log(), because we
  // always want to know when the server is done starting up
  console.log(runningMessage);
});