import React, { useContext, useEffect, useState } from 'react'
import { ReplyContext } from '../../contexts/ReplyContext'
import ForumKit from '../../data/ForumKit'
import ReplyItem from '../replies/ReplyItem'
import ReplyCreateForm from '../replies/ReplyCreateForm'
import { StyledReplyList, StyledHeader, StyledButtonInfo } from '../../theme/styledComponents'


export default function ReplyList(props) {
  const { replyData, setReplyData } = useContext(ReplyContext)
  const [progress, setProgress] = useState('')
  const [addReply, setAddReply] = useState(false)

  const forumKit = new ForumKit()

  function fetchReplies() {
    forumKit.fetchReplyList(props.id)
      .then(res => res.json())
      .then(data => {
        setReplyData(data)
        if (data.count == 0) {
          setProgress('No replies created on this post yet.')
        }
      })
  }

  function handleOnClickAddReply() {
    setAddReply(!addReply)
  }

  useEffect(() => {
    fetchReplies()
  }, [])

  return (
    <>
      <StyledHeader>
        <h1>Replies</h1>
        <StyledButtonInfo onClick={handleOnClickAddReply}>{addReply === false ? 'Add Reply' : 'Exit'}</StyledButtonInfo>
        {addReply && <ReplyCreateForm id={props.id} data={replyData} addReply={addReply} setAddReply={setAddReply} />}

        {progress && (
          <h3>{progress}</h3>
        )}
      </StyledHeader>

      {replyData && Object.entries(replyData.results).reverse().map((item, index) => {
        let data = item[1]
        return (
          <StyledReplyList key={index}>
            <ReplyItem data={data} progress={progress} />
          </StyledReplyList>
        )
      })}
    </>
  )
}
