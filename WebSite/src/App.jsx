import './sass/components/app.sass'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div id='container'>
        <h1 className='welcome'>Olá! Seja BEM VINDO</h1>
        <h1 className='welcome'>ao portfólio do</h1>
        <h1 className='welcome welcome-name'>Matheus Ferrari</h1>
        <Navbar />
      </div>
      <Footer />
    </>
  )
}

export default App
