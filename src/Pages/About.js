import React from 'react'
import GeneralInformations from '../components/AboutComponents/GeneralInformations'
import SkillsAndTraits from '../components/AboutComponents/SkillsAndTraits'
import WorkExperience from '../components/AboutComponents/WorkExperience'
import Education from '../components/AboutComponents/Education'
import NavBar from '../components/BaseComponents/NavBar'
function About() {
  return (
    <>
    <div className='h-[100vh]'>
      <NavBar/>
      {/* Content */}
      <div>
                
        {/* Content Card */}
        <GeneralInformations/>
        <SkillsAndTraits/>
        <WorkExperience/>
        <Education/>
      </div>
    </div>
    </>
  )
}

export default About