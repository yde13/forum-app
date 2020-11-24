import React from 'react'
import { StyledAbout, StyledImage, StyledImageDiv } from '../theme/styledComponents'

export default function HomePage() {
  return (
    <div>

      <StyledImageDiv>
        <StyledImage src="https://www.klarna.com/assets/sites/5/2020/09/18113230/HERO_HEADER.jpg" alt="" />
        <h1 className='home'>Home</h1>
        <h1 className="info">Chat in our forums.</h1>
        <h1 className="info2">You can ask almost whatever you like and get answers and advice from others.</h1>
      </StyledImageDiv>

      <StyledAbout>
        <p>
          <span style={{ fontSize: '30px' }}>Forum App</span> is a popular forum and as the name reveals,
          most discussions are about relationships, finances,
          illnesses and other things that have to do with everyday life.
          Here, members often share personal things that they would not normally tell strangers,
          but thanks to anonymity, they feel safe talking about almost anything.
          The tone of family life is usually helpful and pleasant.
        </p>
      </StyledAbout>
    </div>
  )
}
