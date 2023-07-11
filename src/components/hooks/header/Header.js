import { Link } from '@mui/material'
import './header.scss'

function Header() {
  return (
    <div className="header-container">
      <img src={require('../../../assets/images/logo.jpg')} className={'logo'} />
      <div className='header-link-container'>
        <Link href='#'>Home</Link>
        <Link href='#'>Menú</Link>
        <Link href='#'>Aziende</Link>
        <Link href='#'>Chi siamo</Link>
      </div>
    </div>
  )
}

export default Header