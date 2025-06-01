import CareerBanner from '@/components/shared/commonBanner/CareerBanner'
import CareerDetails from '@/components/pages/career/CareerDetails'
import React from 'react'

const page = () => {
  return (
      <main>
      <CareerBanner title='Ready to Elevate Your Career?' />
      <CareerDetails />
    </main>
  )
}

export default page