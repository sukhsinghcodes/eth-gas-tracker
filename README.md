# eth-gas-tracker

A React app that tracks the price of gas for Ethereum

## Initial thoughts

- **Tools**: As this is a small app I will use Vite to create the project. If this app were to be scaled up I would use Next.js.
- **UX Design**: I've looked at various gas trackers such as Etherscan, Blocknative and gasprice.io. I will take inspiration of the layout from these sites.
- **UI Design**: I have also surfed Dribbble for some inspiration on the design of the app.
- **UI library**: Chakra UI - I haven't used this before, I'm more familiar with Material UI but Chaakra UI looks like a good lightweight alternative.
- **Data**: I will be using the api provided here [https://api.ethgasstation.info/api/fee-estimate]
- **Data fetching**: Because this is a simple client-side only app I will be using React Query with Axios, utilising React Query's refetch interval to update the data every 30 seconds. In a production app I would use WebSockets (Socket.IO) to update the UI in real time, fetch data on server side and cache for 30 seconds.
- **Currency conversion**: As I want to display the gas price in USD I will be using the CoinGecko API to get the current price of ETH in USD. I will also need to convert the gas price from Gwei to ETH. This is a simple calculation of dividing the gas price by 1,000,000,000. If I were to scale this app up I would use a library such as Ethers.js to use the utility functons for converting between units, but also to turn this into a dApp and add all sorts of features.
- **Testing**: I will be using Jest and React Testing Library for testing.

## Data

### Example response

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
