import React from 'react'

const AdminButtonDays = ({day, number}) => {
  return (
    <button className='bg-white p-2 text-sm'>
        <h4>{day}</h4>
        <span>{number}</span>
    </button>
  )
}

export default AdminButtonDays