'use client'

import CryptoBentoGrid from '@/components/bento/grid/BentoGrid'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { useEffect, useState } from 'react'
import { getTopCryptos } from './actions'
import { CryptoFilter, Crypto } from './types'
import BentoGridSkeleton from '@/components/bento/skeletons/BentoGridSkeleton'

export default function Home() {
  const [cryptoData, setCryptoData] = useState<CryptoFilter | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCryptoData = async () => {
      const data: Crypto[] = await getTopCryptos(10)

      const groupedData: CryptoFilter = {
        largest: data.slice(0, 1),
        large: data.slice(1, 5),
        medium: data.slice(5, 6),
        small: data.slice(6, 10)
      }

      setCryptoData(groupedData)
      setLoading(false)
    }

    fetchCryptoData()
  }, [])

  return (
    <BackgroundBeamsWithCollision>
      <div className="p-6 w-[1200px] m-auto z-10">
        <h1 className="w-full mb-6 text-3xl font-bold bg-gradient-to-b from-white via-white to-gray-900 bg-clip-text text-transparent">
          BentoBTC
        </h1>
        <div>
          {loading ? (
            <BentoGridSkeleton />
          ) : (
            <CryptoBentoGrid
              cryptoData={
                cryptoData || { largest: [], large: [], medium: [], small: [] }
              }
            />
          )}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}
