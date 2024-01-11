import { Container } from 'react-bootstrap'
import './App.css'
import Footer from '../components/Footer'
import ListaEmpleados from '../components/ListaEmpleados'

function App() {
  let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "/empleados/empleado01.png" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "/empleados/empleado02.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "/empleados/empleado03.png" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "/empleados/empleado04.png" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "/empleados/empleado05.png" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "/empleados/empleado06.png" },
    { id: 7, fullName: "Ellen Balderas", title: "DevOps Senior", department: "Marketing", pic: "/empleados/empleado07.png" },
    { id: 8, fullName: "Cyntia Valentín", title: "Backend Dev", department: "Engineering", pic: "/empleados/empleado08.png" },
    { id: 9, fullName: "Bernard Jung", title: "UX/UI Dev", department: "Engineering", pic: "/empleados/empleado09.png" }
    ]

  return (
    <>
      <main className='my-4 mainPage'>
        <Container>
          <h1 className='text-center'>Lista de empleados</h1>
          <ListaEmpleados empleados={empleados} />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
