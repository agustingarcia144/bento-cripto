'use client'

import React from 'react'
import { CryptoFilter } from '@/app/types'
import CardXL from '../cards/CardXL'
import CardLG from '../cards/CardLG'
import CardMD from '../cards/CardMD'
import CardSM from '../cards/CardSM'

const CryptoBentoGrid = ({ cryptoData }: { cryptoData: CryptoFilter }) => {
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-4 auto-rows-[120px]">
      {cryptoData?.largest.map((crypto, index) => (
        <div key={index} className="col-span-3 row-span-2">
          <CardXL data={crypto} />
        </div>
      ))}

      {cryptoData?.large.map((crypto, index) => (
        <div key={index} className="col-span-3 row-span-1">
          <CardLG data={crypto} />
        </div>
      ))}

      {cryptoData?.medium.map((crypto, index) => (
        <div key={index} className="col-span-2 row-span-1">
          <CardMD data={crypto} />
        </div>
      ))}

      {cryptoData?.small.map((crypto, index) => (
        <div key={index} className="col-span-1 row-span-1">
          <CardSM data={crypto} />
        </div>
      ))}
    </div>
  )
}

export default CryptoBentoGrid
