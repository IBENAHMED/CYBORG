import logo from '../../assets/image/logo.png';
import './Header.css';
import { NavItem } from '../../components/index';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg cyborg-navbar" data-bs-theme="dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img src={`${logo}`} className="navbar-brand" alt='brand' />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavItem><Link class="nav-link" to="/">Home</Link></NavItem>
                            <NavItem><Link class="nav-link" to="/profile">profile</Link></NavItem>
                            <NavItem><Link class="nav-link" to="/about">about</Link></NavItem>
                            <NavItem><Link class="nav-link" to="/contact">contact</Link></NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
