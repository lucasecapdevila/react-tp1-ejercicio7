import { Container } from 'react-bootstrap'
import './App.css'
import Footer from '../components/Footer'
import ListaEmpleados from '../components/ListaEmpleados'

function App() {
  return (
    <>
      <main className='mainPage'>
        <Container>
          <h1>Hola mundo !!</h1>
          <ListaEmpleados />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
