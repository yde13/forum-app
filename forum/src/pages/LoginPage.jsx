import React, { useContext, useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import LoginForm from '../components/login/LoginForm';
import { UserContext } from '../contexts/UserContext';
import AuthKit from '../data/AuthKit';
import { StyledLoginBox, StyledButtonInfo, StyledButtonSuccess, StyledGridContainer, StyledErrorText } from '../theme/styledComponents';


export default function LoginPage() {
	const [emailInput, setEmailInput] = useState('philip.lagergren@gmail.com');
	const [passwordInput, setPasswordInput] = useState('Mamma4459');
	const [loginStatus, setLoginStatus] = useState('')
	const [token, setToken] = useState(null);
	let history = useHistory()
	const { userData, setUserData } = useContext(UserContext)

	const authKit = new AuthKit();

	const handleOnClick = () => {
		handleLogin(emailInput, passwordInput);
	};

	const handleLogin = (email, password) => {
		authKit.login(email, password)
			.then(res => res.json())
			.then(data => {
				if (!data.token) {
					history.push('/login')
					setLoginStatus('Unable to log in with provided credentials')
				} else {
					setToken(data.token);
					authKit.setToken(data.token);
					authKit.getMe()
						.then(res => res.json())
						.then(data => {
							setUserData(data)
							authKit.setUserInfo(data)
							history.push('/')
						})
				}
			})
	};

	return (
		<StyledLoginBox>
			<LoginForm
				emailInput={emailInput}
				passwordInput={passwordInput}
				setEmailInput={setEmailInput}
				setPasswordInput={setPasswordInput}
			></LoginForm>
			<StyledGridContainer>
				<StyledButtonSuccess onClick={handleOnClick}> Login </StyledButtonSuccess>
				<StyledButtonInfo><Link to="/register"><p>Register</p></Link></StyledButtonInfo>
			</StyledGridContainer>
			<StyledErrorText>{loginStatus && loginStatus}</StyledErrorText>
		</StyledLoginBox>
	);
}
