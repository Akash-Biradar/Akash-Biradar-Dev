
import { About } from '@/components/About'
import Home from '@/components/Hero'
import { Project } from '@/components/Projects'
import { Stack } from '@/components/Stack'
import React from 'react'

const page = () => {
  return (
    <div className='inter.className bg-black'>
      <Home/>
      <About/>
      <Project/>
      <Stack/>
    </div>
  )
}

export default page;