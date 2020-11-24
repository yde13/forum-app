import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from '../contexts/PostContext'
import ForumKit from '../data/ForumKit'
import PostItem from '../components/post/PostItem';
import { StyledPostList, StyledHeader, StyledButtonCreatePost } from '../theme/styledComponents';

export default function PostListPage() {
  const { postData, setPostData } = useContext(PostContext)
  const forumKit = new ForumKit()

  function fetchPostList() {
    if (!postData) {
      forumKit.fetchPostList()
        .then(res => res.json())
        .then(data => {
          setPostData(data)
        })
    }
  }

  useEffect(() => {
    fetchPostList()
    const interval = setInterval(() => {
      fetchPostList()
      console.log("Updated");
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StyledHeader>
        <h1>Posts</h1>
      </StyledHeader>

      <StyledButtonCreatePost><Link to="/posts/create"><p>Create Post</p></Link></StyledButtonCreatePost>

      <StyledPostList>

        {postData && Object.entries(postData.results).map((item, index) => {
          let data = item[1]
          return (
            <div key={index}>
              <PostItem data={data} />
            </div>
          )
        })}
      </StyledPostList>
    </>
  )
}
