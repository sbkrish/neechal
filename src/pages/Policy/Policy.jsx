import React, { useEffect } from 'react'
import { Navbar } from '../../components'
import Privacy from '../../container/Terms/NeechalPolicy'
import { Info } from '../../container'

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0,0)
},[])
  return (
    <div>
        <Navbar />
        <Privacy />
        <Info />
    </div>
  )
}

export default Policy;