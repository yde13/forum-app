import React from 'react'
import { StyledReplyItem } from '../../theme/styledComponents'

export default function ReplyItem(props) {
  const replyData = props.data    

  return (
    <>
      <StyledReplyItem>
        <h2>{replyData.author.firstName} {replyData.author.lastName}</h2>
        <h3>{replyData.title}</h3>
        <span>{replyData.createdAt}</span>
      </StyledReplyItem>
      <StyledReplyItem>
        <p>{replyData.content}</p>
      </StyledReplyItem>
    </>
  )
}
