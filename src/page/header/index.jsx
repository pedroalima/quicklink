import './index.sass'
import PropTypes from 'prop-types'
import logo from '../../../public/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ typeDisplay }) {
    return (
        <header className="container header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" />
                </a>
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <FontAwesomeIcon icon={faBars} size='xl' />
                </button>
                <div className="collapse navbar-collapse navbar-menu" id="navbarSupportedContent">
                    {!typeDisplay ? (
                    <>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Resources</a>
                            </li>
                        </ul>
                        <hr />
                        <form className="form d-flex flex-column">
                            <button className="btn text-light rounded-pill" type="button">Login</button>
                            <button className="btn text-light rounded-pill btn-costumer" type="button">Sing Up</button>
                        </form>
                    </>
                    ) : (
                    <>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Resources</a>
                            </li>
                        </ul>
                        <form className="form d-flex flex-row">
                            <button className="btn text-secondary rounded-pill" type="button">Login</button>
                            <button className="btn text-light rounded-pill btn-costumer" type="button">Sing Up</button>
                        </form>
                    </>
                    )}
                    
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    typeDisplay: PropTypes.bool
}

export default Header