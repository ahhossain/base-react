import './NavBar.css'

function NavBar() {
    return (
        <header>
            <img className='logo' src='./logo192.png'></img>
            <nav>
                <ul className='nav-links'>
                    <li><a href='#' className='nav-items'>Item</a></li>
                    <li><a href='#' className='nav-items'>Item</a></li>
                    <li><a href='#' className='nav-items'>Item</a></li>
                </ul>
            </nav>
            <a className="cta nav-items" href="#"><button className='nav-items'>Contact</button></a>
        </header>
    );
}

export default NavBar