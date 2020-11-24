const ROOT_URL = "https://lab.willandskill.eu"
const POST_LIST = `${ROOT_URL}/api/v1/forum/posts`
const POST_DETAIL = `${ROOT_URL}/api/v1/forum/posts`
const POST_CREATE = `${ROOT_URL}/api/v1/forum/posts/`
const CATEGORY_URL = `${ROOT_URL}/api/v1/forum/categories/`;

const REPLY_LIST = `${ROOT_URL}/api/v1/forum/posts`
const REPLY_CREATE = `${ROOT_URL}/api/v1/forum/posts/`

export default class {

  fetchPostList() {
    return fetch(POST_LIST, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  fetchPostDetail(id) {
    return fetch(`${POST_DETAIL}/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  createPost(payload) {
    return fetch(POST_CREATE, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  fetchCategory() {
    return fetch(CATEGORY_URL, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  fetchReplyList(id) {
    return fetch(`${REPLY_LIST}/${id}/replies`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  createReply(payload) {
    return fetch(REPLY_CREATE, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  getToken() {
    return localStorage.getItem("JWT_APP")
  }
}