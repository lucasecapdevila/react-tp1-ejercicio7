import React from 'react'
import AvatarEmpleado from './AvatarEmpleado'
import { ListGroupItem } from 'react-bootstrap'

const FilaEmpleado = ({empleado}) => {
  return (
    <ListGroupItem className='d-flex justify-content-start'>
      <AvatarEmpleado empleado={empleado} />
      <div className="d-flex flex-column ms-1 mt-3 w-100">
        <h2>{empleado.fullName}</h2>
        <div className='d-flex justify-content-between'>
          <p className='m-0 me-1'>{empleado.title}</p>
          <p className='m-0 px-1 area'>{empleado.department}</p>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default FilaEmpleado