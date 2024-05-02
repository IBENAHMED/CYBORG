import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p>Copyright 2026 <Link to='/'>Cayborg Coming</Link>Company. All rights reserved
                            <br />Desgin: <Link to='/'>Template</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
