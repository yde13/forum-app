import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import AuthKit from '../../data/AuthKit'
import { StyledLoginBox, StyledButtonInfo, StyledButtonSuccess, StyledGridContainer, StyledErrorText } from '../../theme/styledComponents';

export default function RegisterForm() {

  const [countryData, setCountryData] = useState(null)

  const [registerFormData, setRegisterFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '1'
  })
  const [registerProgress, setRegisterProgress] = useState('')

  const authKit = new AuthKit()
  let history = useHistory();

  function handlOnClickRegister() {
    authKit.register(registerFormData)
      .then(res => res.json())
      .then(data => {
        if (data.hasOwnProperty('country')) {
          history.push('/login');

        } else {
          setRegisterProgress('Unable to register with provided credentials')
        }
      })
  }


  function handleInputOnChange(e) {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value })
  }

  function fetchCountries() {
    authKit.getCountries()
      .then(res => res.json())
      .then(data => {
        setCountryData(data)
      })
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <StyledLoginBox>

      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleInputOnChange}
        value={registerFormData['firstName']}
        placeholder="Enter your first name here"
      >
      </input>
      <br />

      <input type="text"
        id="lastName"
        name="lastName"
        onChange={handleInputOnChange}
        value={registerFormData['lastName']}
        placeholder="Enter your last name here">
      </input>
      <br />

      <input type="email"
        id="email"
        name="email"
        onChange={handleInputOnChange}
        value={registerFormData['email']}
        placeholder="Enter your email here">
      </input>
      <br />
      <input type="password"
        id="password"
        name="password"
        onChange={handleInputOnChange}
        value={registerFormData['password']}
        placeholder="Enter your password here"></input>
      <br />
      <select name="country" id="country" onChange={handleInputOnChange} >
        {countryData && Object.entries(countryData.results).map((item, index) => {
          let data = item[1]
          return (
            <>
              <option name={data.id} value={data.id}>{data.title}</option>
            </>
          )

        })}
      </select>

      <StyledGridContainer>
        <StyledButtonSuccess onClick={handlOnClickRegister}> Register </StyledButtonSuccess>
        <StyledButtonInfo><Link to="/login"><p>Login</p></Link></StyledButtonInfo>
      </StyledGridContainer>
      {registerProgress !== '' && (
        <StyledErrorText>{registerProgress}</StyledErrorText>
      )}
    </StyledLoginBox>
  )

}
