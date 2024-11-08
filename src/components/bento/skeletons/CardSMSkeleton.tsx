import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function CardSMSkeleton() {
  return (
    <Card className="h-full w-full overflow-hidden hover:shadow-lg transition-shadow bg-zinc-900 rounded-lg">
      <CardContent className="p-4 h-full flex flex-col justify-between">
        <div className="flex justify-between items-center w-full">
          <Skeleton className="w-12 h-5" />
          <Skeleton className="w-6 h-5" />
        </div>
        <div>
          <Skeleton className="w-20 h-8 mt-2" />
          <Skeleton className="w-16 h-5 mt-2" />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardSMSkeleton
