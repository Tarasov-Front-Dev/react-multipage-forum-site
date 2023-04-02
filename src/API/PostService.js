import axios from "axios"

export default class PostService {
  static URL = `https://jsonplaceholder.typicode.com/posts/`;

  static async getAll(limit = 10, page = 1) {
    const response = await axios(this.URL, {
      params: {
        _limit: limit,
        _page: page,
      }
    })
    return response
  }
  
  static async getById(id) {
    const response = await axios(this.URL + id)
    return response
  }

  static async getCommById(id) {
    const response = await axios(`${this.URL}${id}/comments`)
    return response
  }
}