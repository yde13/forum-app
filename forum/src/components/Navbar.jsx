import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './login/Logout';
import AuthKit from '../data/AuthKit'
import UserInfo from './user/UserInfo';
import { StyledNavbar } from '../theme/styledComponents'


export default function Navbar() {
  const authKit = new AuthKit()

  return (
    <StyledNavbar>
      {authKit.decodeToken() === false ?
        <>
          <span>Forum-App</span>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </> :
        <>
          <span>Forum-App</span>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/posts">Posts</Link></span>
        </>
      }
      <UserInfo />
      <Logout />
    </StyledNavbar>
  )
}
