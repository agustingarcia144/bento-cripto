import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function CardMDSkeleton() {
  return (
    <Card className="h-full w-full overflow-hidden hover:shadow-lg transition-shadow bg-zinc-900 rounded-lg">
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <Skeleton className="w-32 h-8 mb-2" />
            <div className="flex items-center space-x-2">
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-10 h-6" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-end">
            <div className="text-3xl font-bold">
              <Skeleton className="w-16 h-10" />
            </div>
            <Skeleton className="w-8 h-6 mt-1" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div>
            <div className="text-sm text-muted-foreground">Market Cap</div>
            <Skeleton className="w-20 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardMDSkeleton
