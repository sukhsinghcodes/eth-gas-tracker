export function gweiToEth(gwei: number): number {
  return gwei / 1e9
}

export function ethToUsd(eth: number, usd: number): number {
  return eth * usd
}

export function gweiToUsd(gwei: number | undefined, usd: number | undefined): number | undefined {
  if (gwei === undefined || usd === undefined) {
    return undefined
  }

  return ethToUsd(gweiToEth(gwei), usd)
}