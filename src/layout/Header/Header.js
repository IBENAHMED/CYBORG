import logo from '../../assets/image/logo.png';
import './Header.css';
import { NavItem } from '../../components/index';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg cyborg-navbar" data-bs-theme="dark">
                <div className="container">
                    <Link to='/'>
                        <img src={`${logo}`} className="navbar-brand" alt='brand' />
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavItem>
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/Profile" className="nav-link active" aria-current="page">Profile</Link>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
