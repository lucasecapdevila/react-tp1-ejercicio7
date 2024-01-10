import React from 'react'

const AvatarEmpleado = ({empleado}) => {
  return (
    <>
      <img src={empleado.pic} className='img-fluid avatar' />
    </>
  )
}

export default AvatarEmpleado