import React, { useState } from 'react'

const UniversityAddForm = (props) => {
  const { onAdd } = props
  const [universityName, setUniversityName] = useState('')
  
  return (
    <div>
      <input type="text" placeholder="university name" onChange={(evt) => {
        setUniversityName(evt.target.value)
      }}/>
      <input type="button" value="add" onClick={(evt) => {
        onAdd({
          universityName
        })
      }} />
    </div>
  )
}

export default UniversityAddForm