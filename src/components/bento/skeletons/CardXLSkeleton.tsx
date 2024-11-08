import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function CardXLSkeleton() {
  return (
    <Card className="h-full w-full hover:shadow-lg transition-shadow bg-zinc-900 rounded-lg">
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <Skeleton className="w-32 h-6 mb-2" />
            <Skeleton className="w-24 h-8 mb-2" />
            <Skeleton className="w-16 h-4 mb-2" />
          </div>
          <div className="flex flex-col justify-center items-end">
            <Skeleton className="w-24 h-10" />
            <Skeleton className="w-16 h-6 mt-1" />
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-sm text-muted-foreground">Market Cap</p>
            <Skeleton className="w-20 h-6" />
          </div>
          <div className="flex flex-col justify-center items-end">
            <p className="text-sm text-muted-foreground">Dominance</p>
            <Skeleton className="w-12 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardXLSkeleton
