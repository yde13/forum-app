import React from 'react'

export default function LoginForm(props) {
  return (
    <div>
			<input
				type='Email'
				name='Email'
				value={props.emailInput}
				onChange={e => props.setEmailInput(e.target.value)}
				placeholder='Email'
			/>
			<br/>
			<input
				type='password'
				name='password'
				value={props.passwordInput}
				onChange={e => props.setPasswordInput(e.target.value)}
				placeholder='Password'
			/>
    </div>
  )
}
