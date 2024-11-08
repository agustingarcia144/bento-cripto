import React from 'react'
import { Card, CardContent } from '../../ui/card'
import { Badge } from '../../ui/badge'
import PercentageChange from '../../PercentageChange'
import { Crypto } from '@/app/types'

function CardSM({ data }: { data: Crypto }) {
  const isPositive = data?.quote?.USD?.percent_change_24h > 0
  const isNegative = data?.quote?.USD?.percent_change_24h < 0
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
      <CardContent className="p-4 h-full flex flex-col justify-between">
        <div className="flex justify-between items-center w-full text-start">
          <h2 className="text-lg font-bold">{data?.symbol}</h2>
          <Badge variant="outline" className="text-muted-foreground">
            #{data?.cmc_rank}
          </Badge>
        </div>
        <div className="text-start">
          <p className="text-2xl font-bold">
            ${data?.quote?.USD?.price.toLocaleString()}
          </p>
          <PercentageChange
            percentage={data?.quote?.USD?.percent_change_24h}
            isSmall
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardSM
