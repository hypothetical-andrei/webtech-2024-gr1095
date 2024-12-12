import React from 'react'

const University = (props) => {
  const { item } = props
  return (
    <div>{item.universityName}</div>
  )
}

export default University