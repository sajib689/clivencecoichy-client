import React from 'react'


const CareerCard = () => {
  return (
      <section className='container mx-auto my-20 text-black'>
      <div className=' md:w-1/2 lg:w-1/3 xl:w-1/4 border px-5 py-3 rounded-md bg-[#FAFAFB] space-y-5'>
            <h1>Advisor</h1>
            <div className=' text-[#011936] '>
                  <h1 className='font-semibold text-xl'>Project Advisor</h1>
                  <p className='text-[14px]'>Type: Full-Time, Part-Time</p>
              </div>
            <button className='bg-red-700 text-white px-4 py-2 rounded-md'>Job Details</button>
          </div>
    </section>
  )
}

export default CareerCard