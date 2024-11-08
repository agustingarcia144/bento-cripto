import React from 'react'
import { Card, CardContent } from '../../ui/card'
import { Badge } from '../../ui/badge'
import PercentageChange from '../../PercentageChange'
import { Crypto } from '@/app/types'

function CardMD({ data }: { data: Crypto }) {
  const percentChange =
    Math.round((data?.quote?.USD?.percent_change_24h ?? 0) * 100) / 100
  const isPositive = percentChange > 0
  const isNegative = percentChange < 0
  let shadowColor

  if (isPositive) {
    shadowColor = 'rgba(74, 222, 128, 0.3)' // green for positive
  } else if (isNegative) {
    shadowColor = 'rgba(248, 113, 113, 0.3)' // red for negative
  } else {
    shadowColor = 'rgba(160, 174, 192, 0.3)' // gray for neutral
  }

  return (
    <Card className="h-full w-full  relative overflow-hidden bg-zinc-900 rounded-lg">
      {/* Inner shadow using a pseudo-element */}
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          boxShadow: `inset 0 0 15px ${shadowColor}`,
          borderRadius: 'inherit',
          zIndex: 1
        }}
      />
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="text-start">
            <h2 className="text-2xl font-bold mb-2">{data?.name}</h2>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-muted-foreground">{data?.symbol}</p>
              <Badge variant="outline" className="text-muted-foreground">
                #{data?.cmc_rank}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">
              ${data?.quote?.USD?.price.toLocaleString()}
            </p>
            <PercentageChange
              percentage={data?.quote?.USD?.percent_change_24h}
            />
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-sm text-muted-foreground">Market Cap</p>
            <p className="text-lg font-semibold">
              ${(data?.quote?.USD?.market_cap / 1e9).toFixed(2)}B
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardMD
