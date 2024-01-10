import React from 'react'
import FilaEmpleado from './FilaEmpleado'
import { ListGroup } from 'react-bootstrap'

const ListaEmpleados = ({empleados}) => {
  return (
    <ListGroup>
      {
        empleados.map((empleado) => <FilaEmpleado key={empleado.id} empleado={empleado} />)
      }
    </ListGroup>
  )
}

export default ListaEmpleados