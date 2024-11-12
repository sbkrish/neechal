import React from 'react'
import { Navbar } from '../../components'
import Privacy from '../../container/Terms/Privacy'
import { Info } from '../../container'

const PrivacyPolicy = () => {
  return (
    <div>
        <Navbar />
        <Privacy />
        <Info />
    </div>
  )
}

export default PrivacyPolicy