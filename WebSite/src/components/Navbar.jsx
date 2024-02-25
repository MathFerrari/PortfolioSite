import { Link } from 'react-router-dom'

import '../sass/components/navbar.sass'

const Navbar = () => {
  return (
    <div className='container'>
      <div id='line'></div>
      <ul>
        <li><Link to='/about'>Sobre mim</Link></li>
        <li><Link to='/work'>Trabalhos</Link></li>
        <li><Link to='/experience'>Experiencias</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
  )
}

export default Navbar