export type Crypto = {
  circulating_supply: number
  cmc_rank: number
  date_added: string
  id: number
  infinite_supply: boolean
  last_updated: string
  max_supply: number
  name: string
  num_market_pairs: number
  platform: unknown
  quote: {
    USD: {
      fully_diluted_market_cap: number
      last_updated: string
      market_cap: number
      market_cap_dominance: number
      percent_change_1h: number
      percent_change_24h: number
      percent_change_7d: number
      percent_change_30d: number
      percent_change_60d: number
      percent_change_90d: number
      price: number
      tvl: number
      volume_24h: number
      volume_change_24h: number
    }
  }
  self_reported_circulating_supply: string
  self_reported_market_cap: string
  slug: string
  symbol: string
  tags: string[]
  total_supply: number
  tvl_ratio: unknown
}

export type CryptoFilter = {
  largest: Crypto[]
  large: Crypto[]
  medium: Crypto[]
  small: Crypto[]
}
