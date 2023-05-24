import axios from "axios"

type EthUsdPriceResponse = {
  ethereum: {
    usd: number
  }
}

export async function getEthUsdPrice(): Promise<EthUsdPriceResponse> {
  const resp = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')

  return resp.data
}