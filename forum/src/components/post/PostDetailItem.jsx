import React, { useEffect, useState } from 'react'
import ForumKit from '../../data/ForumKit'
import { StyledPostDetailInfo, StyledReplyList, StyledHeader, StyledPostDetailItem } from '../../theme/styledComponents'


export default function PostDetailItem(props) {
  const [detailData, setDetailData] = useState(null)

  const forumKit = new ForumKit()

  function fetchDetailData() {
    forumKit.fetchPostDetail(props.id)
      .then(res => res.json())
      .then(data => {
        setDetailData(data)
      })
  }

  useEffect(() => {
    fetchDetailData()
  }, [])

  return (
    <div>
      {detailData && (
        <StyledPostDetailItem>
          <StyledHeader>
            <h1>{detailData.title && detailData.title ? detailData.title : 'Anonymous'}
            </h1>
          </StyledHeader>

          <StyledPostDetailInfo>
            <div>
              <p>{detailData.author && detailData.author.email ? detailData.author.email : 'Email: Anonymous'}
              </p>
              <p>{detailData.author && detailData.author.firstName ? detailData.author.firstName : 'First Name: Anonymous'}
              </p>
              <p> {detailData.author && detailData.author.lastName ? detailData.author.lastName : 'Last Name: Anonymous'}
              </p>
            </div>

            <div>
              <p> {detailData.category && detailData.category.title ? detailData.category.title : 'Category: Anonymous'}
              </p>
              <p>Country: {detailData.country}</p>
              <p>Created At: {detailData.createdAt}</p>
              <p>Last visited: {detailData.updatedAt}</p>
              <p>{detailData.userSubcriptionUpdated && detailData.userSubcriptionUpdated
                == false ? 'User Subcription Updated: Yes' : 'User Subcription Updated: No'}</p>
            </div>

            <div>
              <p>View Count: {detailData.viewCount}</p>
              <p>Response Count: {detailData.countResponses}</p>
              <p>{detailData.isClosed && detailData.isClosed
                == false ? 'Is Closed: Yes' : 'Is Closed: No'}</p>
              <p>{detailData.isPinned && detailData.isPinned
                == true ? 'Is Pinned: Yes' : 'Is Pinned: No'}</p>
              <p>{detailData.userSubscribed && detailData.userSubscribed
                == false ? 'Subscribed: Yes' : 'Subscribed: No'}</p>
            </div>

          </StyledPostDetailInfo>

          <StyledReplyList>
            <h3>Content: {detailData.content}</h3>
          </StyledReplyList>
        </StyledPostDetailItem>
      )}
    </div>
  )
}
