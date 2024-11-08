import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react'
import React from 'react'

function PercentageChange({
  percentage,
  isSmall
}: {
  percentage: number
  isSmall?: boolean
}) {
  const percentChange = Math.round((percentage ?? 0) * 100) / 100
  const isPositive = percentChange > 0
  const isNegative = percentChange < 0
  return (
    <div className={`flex items-center ${!isSmall ? 'justify-end' : ''} mt-2`}>
      {isPositive ? (
        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
      ) : isNegative ? (
        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
      ) : (
        <ArrowRight className="w-4 h-4 text-gray-500 mr-1" />
      )}
      <span
        className={
          isPositive
            ? 'text-green-500'
            : isNegative
            ? 'text-red-500'
            : 'text-gray-500'
        }
      >
        {Math.abs(percentage).toFixed(2)}%
      </span>
    </div>
  )
}

export default PercentageChange
