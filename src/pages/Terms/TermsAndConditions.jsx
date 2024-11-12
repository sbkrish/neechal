import React, { useEffect } from 'react'
import { Navbar } from '../../components'
import { Footer, Header, Info } from '../../container'
import Terms from '../../container/Terms/Terms'

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

  
  return (
    <div>
        <Navbar />
        <Terms />
        <Info />
    </div>
  )
}

export default TermsAndConditions