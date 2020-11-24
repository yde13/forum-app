import React from 'react'
import { Link } from 'react-router-dom'
import { StyledPostItem, StyledLinkButton } from '../../theme/styledComponents';

export default function PostItem(props) {
  const postData = props.data

  return (
    <StyledPostItem>
      <h2>{postData.title}</h2>
      <StyledLinkButton>      
        <Link to={`/posts/${postData.id}`} ><p>Go to forum</p></Link>
      </StyledLinkButton>
    </StyledPostItem>
  )
}
