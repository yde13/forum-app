import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { PostContext } from '../../contexts/PostContext'
import { StyledLogout } from '../../theme/styledComponents'

import AuthKit from '../../data/AuthKit'
import { useHistory } from "react-router-dom";

export default function Logout() {
  const { userData, setUserData } = useContext(UserContext)
  const { setPostData } = useContext(PostContext)
  const authKit = new AuthKit()
  const history = useHistory()

  function handleOnClickLogout() {
    authKit.logout()
    setUserData(null)
    setPostData(null)
    history.push('/login')
  }

  return (
    <>
      {userData && (
        <StyledLogout onClick={handleOnClickLogout}>Logout</StyledLogout>

      )}
    </>
  )
}
