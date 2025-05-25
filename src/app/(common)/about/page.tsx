import AboutBanner from '@/components/pages/about/AboutBanner'
import AboutCompany from '@/components/pages/about/AboutCompany'
import AboutOwner from '@/components/pages/about/AboutOwner'
import AboutProjectAdvisor from '@/components/pages/about/AboutProjectAdvisor'
import AboutTeam from '@/components/pages/about/AboutTeam'
import React from 'react'

const page = () => {
  return (
      <div>
          <AboutBanner/>
          <AboutCompany />
          <AboutOwner />
          <AboutTeam />
          <AboutProjectAdvisor/>
    </div>
  )
}

export default page