import './header.modules.scss'
import Link from 'next/link'

const Header = () => {
    return(
        <div className='headerContainer'>
            <Link className='headerLogo' href="/" >LOGO</Link>
            <div className='headerNavBar'>
                <Link href='/search'><div className='searchIcon'></div></Link>
                <div className='hamburgerIcon'>
                </div>
                <Link className='navBarLinks' href="/favorites">Favorites</Link>
                <Link className='navBarLinks' href="#">Log in</Link>
            </div>
        </div>
      
    )
}

export default Header