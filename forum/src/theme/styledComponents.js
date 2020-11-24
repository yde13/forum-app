import styled from 'styled-components'

export const StyledPostList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));
  grid-gap: 20px;
  padding: 15px;
`

export const StyledPostDetailInfo = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 10px;
  
`

export const StyledPostDetailItem = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.darkerGrey};
  border-radius: 10px;
  margin: 15px;
  
`

export const StyledImageDiv = styled.div`
  position: relative;
  text-align: center;

  .info {
    position: absolute;
    top: 25%;
    left: 10%;
    color: black;
    font-size: 6vw;
  }

  .home {
    position: absolute;
    top: 8px;
    left: 16px;
    font-size: 4vw;

  }

  .info2{
    position: absolute;
    top: 40%;
    left: 12%;
    font-size: 2vw;
    width: 30%;
  }
`

export const StyledAbout = styled.div`
  padding: 15px;
  height: 200px;
`

export const StyledImage = styled.img`
  width: 100%;
  height: 90%;
`

export const StyledReplyList = styled.div`
  width: 100%
  display: flex;
  padding: 15px;
  margin: 15px;
  flex-direction: column;  
  border: 2px solid ${({ theme }) => theme.colors.secondaryDarkColor};
  background: ${({ theme }) => theme.colors.secondaryDarkColor};
  border-radius: 10px;
`

export const StyledReplyItem = styled.div`
  display: flex;
  justify-content: space-between; 
  margin: 15px;
`

export const StyledNavbar = styled.div`
  background: ${({ theme }) => theme.colors.navbarColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

`

export const StyledGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 20px;

`

export const StyledPostItem = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondaryDarkColor};
  border-radius: 5px;
  padding: 10px;
`

export const StyledForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
`

export const StyledErrorText = styled.div`
  color: ${({ theme }) => theme.colors.red};
  margin-top: 10px;
`

export const StyledLoginBox = styled.div`
  border-radius: 5px;
  width: 60%;
  max-width: 400px;
  min-height: calc(100vh - 40px);
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  input {
    width:100%;
    height: 30px;
    padding-left: 10px;
    background: ${({ theme }) => theme.colors.secondaryDarkColor};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 20px;
    font-size: 0.9rem;

  }

  select {
    width:100%;
    height: 30px;
    padding-left: 10px;
    background: ${({ theme }) => theme.colors.secondaryDarkColor};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 20px;
    font-size: 0.9rem;

  }

`

export const StyledReplyForm = styled(StyledLoginBox)`
  justify-content: flex-start;
  min-height: calc(4vh - 40px);
  margin: 0;
  padding: 15px;
}
`

export const StyledHeader = styled.div`
  padding: 15px;
`

export const StyledButton = styled.button`
border: none;
text-decoration: none;
color: ${({ theme }) => theme.colors.white};
font-size: 0.9rem;


&:hover{
  cursor: pointer;
  border: none;
}

`

export const StyledLogout = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.secondaryDarkColor};
  width: 60px;
  border-radius: 5px;

  &:hover{
    background: ${({ theme }) => theme.colors.mainDarkColor};
  }
`

export const StyledButtonSuccess = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.successButton};
  width: 100%;
  height: 30px;

&:hover{
  background: ${({ theme }) => theme.colors.successButtonHover};
}

`

export const StyledButtonInfo = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.infoButton};
  text-decoration: none;
  width: 100%;
  height: 30px;  



&:hover{
  background: ${({ theme }) => theme.colors.infoButtonHover};
}

`

export const StyledButtonCreatePost = styled(StyledButtonInfo)`
  width: 30%;
  margin-left: 15px;
  border-radius: 5px;
`

export const StyledLinkButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 5px;
  margin-top:10px;

  &:hover{
    background: ${({ theme }) => theme.colors.darkerGrey};
  }
`

