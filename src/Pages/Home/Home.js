import React from 'react'
import Header from '../../Shared/Header'
import Banner from './Banner'
import Features from './Features'
import Foods from './Foods'
import RawLogo from './RawLogo'

export default function Home() {
  return (
    <div>
       <Header/>
       <Banner/>
       <RawLogo/>
       <Features/>
       <Foods/>
    </div>
  )
}
