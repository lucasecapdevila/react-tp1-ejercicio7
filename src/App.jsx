import { Container } from 'react-bootstrap'
import './App.css'
import Footer from '../components/Footer'
import ListaEmpleados from '../components/ListaEmpleados'

function App() {
  return (
    <>
      <main className='my-4 mainPage'>
        <Container>
          <h1 className='text-center'>Lista de empleados</h1>
          <ListaEmpleados />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
