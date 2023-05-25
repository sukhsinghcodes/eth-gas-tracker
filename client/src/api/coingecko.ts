import axios from "axios"

type EthUsdPriceResponse = {
  ethereum: {
    usd: number
  }
}

export async function getEthUsdPrice(): Promise<EthUsdPriceResponse> {

    const resp = await axios.get('http://localhost:3000/ethusdprice')

    return resp.data
  
}