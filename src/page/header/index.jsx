import './index.sass'
import PropTypes from 'prop-types'
import logo from '../../../public/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ typeDisplay }) {
    return (
        <header className="container">
            {!typeDisplay ? (
                    <nav className="row align-items-center">
                        <div className="col-10">
                            <h1><img src={logo} alt="Logo" /></h1>
                        </div>
                        <div className="col-2">
                            <picture className='icon-menu'>
                                <FontAwesomeIcon icon={faBars} size='2xl' />
                            </picture>
                        </div>
                    </nav>
                ) : (
                    <nav className="row align-items-center">
                        <div className="col-1">
                            <h1><img src={logo} alt="Logo" /></h1>
                        </div>
                        <div className="col-8 list">
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Resources</a>
                        </div>
                        <div className="col-3 buttons">
                            <button className='login'>Login</button>
                            <button className='sing_up'>Sign Up</button>
                        </div>
                    </nav>
                )
            }
        </header>
    )
}

Header.propTypes = {
    typeDisplay: PropTypes.bool
}

export default Header