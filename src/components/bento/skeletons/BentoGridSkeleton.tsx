import React from 'react'
import CardXLSkeleton from './CardXLSkeleton'
import CardLGSkeleton from './CardLGSkeleton'
import CardMDSkeleton from './CardMDSkeleton'
import CardSMSkeleton from './CardSMSkeleton'

function BentoGridSkeleton() {
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-4 auto-rows-[120px]">
      <div className="col-span-3 row-span-2">
        <CardXLSkeleton />
      </div>

      <div className="col-span-3 row-span-1">
        <CardLGSkeleton />
      </div>

      <div className="col-span-3 row-span-1">
        <CardLGSkeleton />
      </div>

      <div className="col-span-3 row-span-1">
        <CardLGSkeleton />
      </div>

      <div className="col-span-3 row-span-1">
        <CardLGSkeleton />
      </div>

      <div className="col-span-2 row-span-1">
        <CardMDSkeleton />
      </div>

      <div className="col-span-1 row-span-1">
        <CardSMSkeleton />
      </div>

      <div className="col-span-1 row-span-1">
        <CardSMSkeleton />
      </div>

      <div className="col-span-1 row-span-1">
        <CardSMSkeleton />
      </div>

      <div className="col-span-1 row-span-1">
        <CardSMSkeleton />
      </div>
    </div>
  )
}

export default BentoGridSkeleton
