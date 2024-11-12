import React, { useState } from 'react';
import { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const PhoneNumber = ({handleChange}) => {
    const [phone, setPhone] = useState('');
    const [isFocused, setIsFocused] = useState(false)
    const [country, setCountry] = useState('')
    const removeCC = (withCode , cc, dialCode, name) => {
        let pureNum = String(withCode).substring(cc.length)
        handleChange(pureNum, cc, dialCode, name)

    }
    useEffect(() => {
        fetch("https://get.geojs.io/v1/ip/country.json").then((resp)=> resp.json()).then(data => {
            setCountry(data.country.toLowerCase())
        })
        
    },[])
  return (
    <PhoneInput
              country={country}  // Default country (India in this case, you can change it)
              value={phone}
              onChange={(phone,e) => {
                // console.log(e);
                
                setPhone(phone)
                removeCC(phone, e.countryCode, e.dialCode, e.name)
            }}
              containerStyle={{marginTop: '4px'}}
              inputStyle={{width:'100%',border:`${isFocused ? '2px solid #4338ca' : '' }`,borderRadius:'0.375rem',boxShadow:'0 0 #0000'}}
              onFocus={() => setIsFocused(true)}   
      onBlur={() => setIsFocused(false)}
      onlyCountries={['in','lk']}
      masks={{in:'..... .....', lk:'.. .......'}}
            />
  )
}

export default PhoneNumber