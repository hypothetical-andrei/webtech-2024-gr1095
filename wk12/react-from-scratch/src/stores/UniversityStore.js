import EventEmitter from '../utils/EventEmitter'

const SERVER = 'http://localhost:8080'
class UniversityStore {
  constructor () {
    this.data = []
    this.count = 0
    this.emitter = new EventEmitter()
  }

  async getAll (pageNumber, pageSize, sortField, sortOrder, filterField, filterContent) {
    try {
      const response = await fetch(`${SERVER}/universities?pageNumber=${pageNumber}&pageSize=${pageSize}&sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterContent=${filterContent}`)
      if (!response.ok) {
        throw response
      }
      const content = await response.json()
      this.data = content.data
      this.count = content.count
      this.emitter.emit('GET_ALL_SUCCESS')
    } catch (e) { 
      this.emitter.emit('GET_ALL_ERROR')
    }
  }

  async addOne (item) {
    try {
      const response = await fetch(`${SERVER}/universities`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      if (!response.ok) {
        throw response
      }
      this.getAll()
    } catch (e) { 
      this.emitter.emit('ADD_ONE_ERROR')
    }
  }
}

export default UniversityStore