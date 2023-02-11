import React from 'react'

const CardsUsers = ({user}) => {
  return (
    <div>
        <div>
            <p>{`${user['first_name']} ${user['last_name']}}`} </p>
            <p>{user.email}</p>
            <p>{user.birthday}</p>
        </div>
        <i className='bx bxs-message-alt-x'></i>
        <i className='bx bxs-edit-alt'></i>
    </div>
  )
}

export default CardsUsers