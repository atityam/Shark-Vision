import React from 'react'
import CustomCarousel from '../components/CustomCarousel'
import AssistanceSection from '../components/AssistanceSection'
import StatsSection from '../components/StatsSection'
import Features from '../components/Features'
import Services from '../components/Services'
import Contact from '../components/Contact'
import TeamSection from '../components/TeamSection'
import Feedback from '../components/Feedback'

export const HomePage = () => {
  return (
    <>
    <CustomCarousel/>
    <AssistanceSection/>
    <StatsSection/>
    <Features/>
    <Services/>
    <Contact/>
    <TeamSection/>
    <Feedback/>

    </>
  )
}

