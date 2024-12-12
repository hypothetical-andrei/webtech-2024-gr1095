const SERVER = 'http://localhost:8080'

class UniversityStore {
  async getAll () {
    try {
      const response = await fetch(`${SERVER}/universities`)
      if (!response.ok) {
        throw response
      }
      const data = await response.json()
      return data
    } catch (err) {
      console.warn(err)
    }
  }

  async addOne (university) {
    try {
      const response = await fetch(`${SERVER}/universities`, {
        method: 'post',
        body: JSON.stringify(university),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw response
      }
    } catch (err) {
      console.warn(err)
    }
  }
}

export default UniversityStore