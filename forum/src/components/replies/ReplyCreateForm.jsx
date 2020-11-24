import React, { useState, useContext } from 'react'
import ForumKit from '../../data/ForumKit'
import { StyledReplyForm, StyledButtonSuccess, StyledErrorText } from '../../theme/styledComponents'
import { ReplyContext } from '../../contexts/ReplyContext'

export default function ReplyCreateForm(props) {

  const [replyFormData, setReplyFormData] = useState({
    title: '',
    content: '',
    parent: props.id
  })
  const { replyData, setReplyData } = useContext(ReplyContext)
  const [progress, setProgress] = useState('')
  const forumKit = new ForumKit()

  function handlOnClickCreateReply() {
    forumKit.createReply(replyFormData)
      .then(res => res.json())
      .then(data => {
        if (data.hasOwnProperty('parent')) {
          let replyDataCopy = { ...replyData }
          replyDataCopy.results.push(data);
          setReplyData(replyDataCopy);
          props.setAddReply(!props.addReply)
        } else {
          setProgress('Unable to create reply with provided data')
        }
      })
  }

  function handleInputOnChange(e) {
    setReplyFormData({ ...replyFormData, [e.target.name]: e.target.value })
  }

  return (
    <StyledReplyForm>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleInputOnChange}
        value={replyFormData['title']}
        placeholder="Enter title here"
      >
      </input>
      <br />
      <input
        type="text"
        id="content"
        name="content"
        onChange={handleInputOnChange}
        value={replyFormData['content']}
        placeholder="Enter content here"
      >
      </input>
      <br />
      <input
        type="text"
        id="parent"
        name="parent"
        onChange={handleInputOnChange}
        value={replyFormData['parent']}
        placeholder="Enter parent ID here"
        disabled
      >
      </input>
      <br />
      <StyledButtonSuccess onClick={handlOnClickCreateReply}>Send</StyledButtonSuccess>
      {progress !== '' && (
        <StyledErrorText>{progress}</StyledErrorText>
      )}

    </StyledReplyForm>
  )
}
