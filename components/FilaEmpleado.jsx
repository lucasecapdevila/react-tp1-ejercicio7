import React from 'react'
import AvatarEmpleado from './AvatarEmpleado'
import { ListGroupItem } from 'react-bootstrap'

const FilaEmpleado = () => {
  return (
    <ListGroupItem className='d-flex justify-content-start'>
      <AvatarEmpleado />
      <div className="d-flex flex-column ms-2 mt-3">
        <h2>Laya Dueñas</h2>
        <div className='d-flex'>
          <p className='m-0 me-2'>CEO</p>
          <p className='m-0 px-1 area'>Business</p>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default FilaEmpleado