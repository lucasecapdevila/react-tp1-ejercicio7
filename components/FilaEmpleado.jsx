import React from 'react'
import AvatarEmpleado from './AvatarEmpleado'
import { ListGroupItem } from 'react-bootstrap'

const FilaEmpleado = () => {
  return (
    <ListGroupItem className='d-flex justify-content-start'>
      <AvatarEmpleado />
      
    </ListGroupItem>
  )
}

export default FilaEmpleado