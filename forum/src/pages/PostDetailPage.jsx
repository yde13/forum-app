import React from 'react'
import PostDetailItem from '../components/post/PostDetailItem';
import ReplyList from '../components/replies/ReplyList';

export default function PostDetailPage(props) {
  const id = props.match.params.id

  return (
    <div>
      <PostDetailItem id={id}/>
      <ReplyList id={id} />
    </div>
  )
}
