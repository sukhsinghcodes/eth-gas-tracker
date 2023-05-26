import axios from "axios";

// Example response
// {
//   "baseFee": 38,
//   "blockNumber": 17331172,
//   "blockTime": 11.88,
//   "gasPrice": {
//     "fast": 45,
//     "instant": 47,
//     "standard": 43
//   },
//   "nextBaseFee": 38,
//   "priorityFee": {
//     "fast": 1,
//     "instant": 2,
//     "standard": 0
//   }
// }

export type PriceType = {
  fast: number
  instant: number
  standard: number
}

export type GasPriceResponse = {
  gasPrice: PriceType
  priorityFee: PriceType
  baseFee: number
  nextBaseFee: number
  blockNumber: number
  blockTime: number
}

export async function getGasPriceEstimate(): Promise<GasPriceResponse> {

  const resp = await axios.get('http://localhost:3000/gaspriceestimate')
  return resp.data

}