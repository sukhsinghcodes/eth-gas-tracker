# eth-gas-tracker

A React app that tracks the price of gas for Ethereum

## How to run

1. Clone the repo

### Server

1. From project root `cd server`
2. `npm install`
3. `npm start`

### Client

1. Open a new termial window and from project root `cd client`
2. `npm install`
3. `npm run dev`
4. Visit [http://localhost:5174]

## Notes

### Initial thoughts

- **Tools**: As this is a small app I will use Vite to create the project. If this app were to be scaled up I would use Next.js even though I don't have much experience with it, I have been meaning to use it on a personal project.
- **UX Design**: I've looked at various gas trackers such as Etherscan, Blocknative and gasprice.io. I will take inspiration of the layout from these sites.
- **UI Design**: I have also surfed Dribbble for some inspiration on the design of the app.
- **UI library**: Chakra UI - I haven't used this before, I'm more familiar with Material UI but Chaakra UI looks like a good lightweight alternative.
- **Data**: I will be using the api provided here [https://api.ethgasstation.info/api/fee-estimate]
- **Data fetching**: Because this is a simple client-side only app I will be using React Query with Axios, utilising React Query's refetch interval to update the data every 30 seconds. In a production app I would use WebSockets (Socket.IO) to update the UI in real time, fetch data on server side and cache for 30 seconds.
- **Currency conversion**: As I want to display the gas price in USD I will be using the CoinGecko API to get the current price of ETH in USD. I will also need to convert the gas price from Gwei to ETH. This is a simple calculation of dividing the gas price by 1,000,000,000. If I were to scale this app up I would use a library such as Ethers.js to use the utility functons for converting between units, but also to turn this into a dApp and add all sorts of features.
- **Testing**: I will be using Jest and React Testing Library for testing.

### Data

#### Example response

```javascript
{
  "baseFee": 38,
  "blockNumber": 17331172,
  "blockTime": 11.88,
  "gasPrice": {
    "fast": 45,
    "instant": 47,
    "standard": 43
  },
  "nextBaseFee": 38,
  "priorityFee": {
    "fast": 1,
    "instant": 2,
    "standard": 0
  }
}
```

Base fee is the minimum fee required to get a transaction included in a block. Priority fee is an optional tip to miners to give yourself a higher chance of getting your transaction included in the next block. Gas price is the sum of the base fee and priority fee.

```text
gasPrice = baseFee + priorityFee
```

However, in this data response it seems the gas price is already calculated for us. This is slightly confusing because the calculation is not documented so I will have to go with my assumption that I should display the gas price for the next block and ignore the calclated gas price as I won't be able to show a breakdown of it.

i.e.

```text
gasPrice = nextBaseFee + priorityFee
```

### Design

After looking at existing gas trackers I put together some wireframes using Excalidraw.

![Mobile](https://drive.google.com/uc?id=1uL3-zTUzuPEN8dJeULZc5AOPY-LUS8iD)
![Tablet](https://drive.google.com/uc?id=1z3mDFD0vnel0F5tMbpNzp0MSI2ircfVW)
![Desktop](https://drive.google.com/uc?id=1jDq_GcUbotYONGzCydPxpauBQtm0A_zV)

### Spanner in the works

After implementing the api for gas price estimate and testing I realised that it gives a CORS error so it should be a server-side call. I have two options now:

1. Whip up a basic Express.js server to make the call
2. Switch to using Next.js and make the call on the server side

I think the quickest option is to use Express.js so I will go with that, but as I mentioned in my initial thoughts, I would use Next.js if this were going to production.

### Conclusion

I'm happy with the result, I think it looks good and is easy to use. I would have liked to have added some more features such as a graph of the gas price over time, a breakdown of the gas price and a breakdown of the gas price for the next block. I would also have liked to have added some tests for the components and the api call. I would have also liked to have added some animations to make the app feel more responsive.

One improvement I would've like to make is to cached the last results of the api call this way if any of the end points are down the app will still display the last results with a timestamp.
