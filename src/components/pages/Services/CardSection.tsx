import React from 'react'

const cardData = [
    {title:'Illinois Office',des:'16555 Oak Park Ave B, Tinley Park, IL 60477'},
    {title:'Ohio Office',des:'8200 Beckett Park Dr West Chester Township OH 45069'},
]

const CardSection = () => {
  return (
      <section className='container mx-auto my-20 text-black'>
          <div className='flex flex-col md:flex-row justify-center gap-5 '>
              {
                  cardData?.map((card,idx)=>  <div key={idx} className='w-full border px-5 py-3 rounded-md bg-[#FAFAFB] text-[#011936]'>
                      <h1 className='font-semibold text-xl'>{ card.title}</h1>
                <p className='text-[14px]'>{card.des}</p>
            </div>)
              }
          
          </div>
    </section>
  )
}

export default CardSection