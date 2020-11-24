import React from 'react'
import { Link } from 'react-router-dom'
import { StyledPostItem, StyledLinkButton } from '../../theme/styledComponents';

export default function PostItem(props) {
  const postData = props.data

  return (
    <StyledPostItem style={{
      backgroundColor: postData.isPinned && postData.isPinned
        == true ? '#80bfff' : '',
    }}>
      <h2>{postData.title}</h2>
      <h3>{postData.isPinned && postData.isPinned
                == true ? '📌' : '' }</h3>
      <StyledLinkButton>      
        <Link to={`/posts/${postData.id}`} ><p>Go to forum</p></Link>
      </StyledLinkButton>
    </StyledPostItem>
  )
}
