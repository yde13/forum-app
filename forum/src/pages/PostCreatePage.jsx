import React, { useState, useEffect, useContext } from 'react'
import ForumKit from '../data/ForumKit'
import { useHistory } from "react-router-dom";
import { StyledLoginBox, StyledErrorText, StyledButtonSuccess } from '../theme/styledComponents'
import { PostContext } from '../contexts/PostContext'


export default function PostCreatePage() {
  const [categoryData, setCategoryData] = useState(null)
  const [postFormData, setPostFormData] = useState({
    title: '',
    content: '',
    category: '1',
  })
  const { postData, setPostData } = useContext(PostContext)
  const [progress, setProgress] = useState('')
  const forumKit = new ForumKit()
  let history = useHistory()

  function handlOnClickCreate() {
    forumKit.createPost(postFormData)
      .then(res => res.json())
      .then(data => {
        if (data.hasOwnProperty('category')) {
          let postDataCopy = { ...postData }
          postDataCopy.results.push(data);
          setPostData(postDataCopy);
          history.push('/posts')

        } else {
          setProgress('Unable to create post with provided data')
        }
      })
  }


  function fetchCategory() {
    forumKit.fetchCategory()
      .then(res => res.json())
      .then(data => {
        setCategoryData(data)
      })
  }

  function handleInputOnChange(e) {
    setPostFormData({ ...postFormData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <>
      <StyledLoginBox>
        <label htmlFor="createPost">Create Post</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleInputOnChange}
          value={postFormData['title']}
          placeholder="Enter title here">
        </input>
        <br />
        <input type="text"
          id="content"
          name="content"
          onChange={handleInputOnChange}
          value={postFormData['content']}
          placeholder="Enter content here">
        </input>
        <br />
        <select name="category" id="category" onChange={handleInputOnChange} >
          {categoryData && Object.entries(categoryData.results).map((item, index) => {
            let data = item[1]
            return (
              <>
                <option key={index} name={data.id} value={data.id}>{data.title}</option>
              </>
            )

          })}
        </select>
        <br />
        <StyledButtonSuccess onClick={handlOnClickCreate}>Create</StyledButtonSuccess>
        {progress !== '' && (
          <StyledErrorText>{progress}</StyledErrorText>
        )}
      </StyledLoginBox>
    </>
  )
}
