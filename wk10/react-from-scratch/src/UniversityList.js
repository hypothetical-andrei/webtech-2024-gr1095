import React, { useState, useEffect } from 'react'
import University from './University'
import UniversityStore from './UniversityStore'
import UniversityAddForm from './UniversityAddForm'

const store = new UniversityStore()

const UniversityList = () => {
  const [ universities, setUniversities ] = useState([]) 
  
  useEffect(() => {
    store.getAll()
      .then((data) => {
        setUniversities(data)
      })
      .catch((err) => {
        console.warn(err)
      })  
  }, [])

  const add = async (university) => {
    await store.addOne(university)
  }

  return (
    <div>
      <h3>List of universities</h3>
      <div>
        {
          universities.map(e => <University key={e.id} item={e} />)
        }
      </div>
      <div>
        <UniversityAddForm onAdd={add} />
      </div>
    </div>
  )
}

export default UniversityList