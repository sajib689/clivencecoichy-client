import React from 'react'
const services = Array.from({ length: 500 }, (_, index) => ({
    title: 'Addison, IL',
    serviceId: `6010${index + 1}`,
}));

const Services = () => {
  return (
    <section className='container mx-auto my-20'>
            <div className=''>
                <div className="flex items-center gap-4">
                <div className="w-[50px] h-[2px] bg-title"></div>
                <h2 className="text-title font-semibold">Location</h2>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
                Our Service Areas
            </h3>
            <p className="text-md mt-5 text-[#86A0B0]">
            From inspections to full roof replacements, we deliver quality workmanship <br /> backed by years of experience.
            </p>
            </div>
           <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 '>
              {
                  services?.map((service, idx) => (
                      <div key={idx} className='w-full border px-5 py-3 rounded-md bg-[#FAFAFB] text-[#011936]'>
                         <h1 className='font-semibold text-xl'>{ service.title}</h1>
                         <p className='text-[14px]'>{service.serviceId}</p>
                      </div>
                  ))
              }
          
          </div>
    </section>
  )
}

export default Services