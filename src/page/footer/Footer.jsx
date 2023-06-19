import './Footer.sass'
import logoWhite from '../../../public/images/logo-white.svg';

function Footer() {
  return (
    <footer className='container-fluid bg-quaternary-color' id='footer'>
        <div className='container'>
            <div className="row justify-content-center justify-content-md-start pb-5 py-md-5">
                <div className="col-12 text-center py-5 col-md-4 text-md-left px-md-0 py-md-0">
                    <img src={logoWhite} alt="Logo" />
                </div>
                <div className="col-12 text-center pb-5 col-md-2 text-md-left px-md-0">
                    <h6 className='font-primary-color pb-3'>Feature</h6>
                    <div className='d-flex flex-column gap'>
                        <a className='font-secondary-color' href="#">Link Shortening</a>
                        <a className='font-secondary-color' href="#">Branded Links</a>
                        <a className='font-secondary-color' href="#">Analytics</a>
                    </div>
                </div>
                <div className="col-12 text-center pb-5 col-md-2 text-md-left px-md-0">
                    <h6 className='font-primary-color pb-3'>Resources</h6>
                    <div className='d-flex flex-column gap'>
                        <a className='font-secondary-color' href="#">Blog</a>
                        <a className='font-secondary-color' href="#">Developers</a>
                        <a className='font-secondary-color' href="#">Support</a>
                    </div>
                </div>
                <div className="col-12 text-center pb-5 col-md-2 text-md-left px-md-0">
                    <h6 className='font-primary-color pb-3'>Company</h6>
                    <div className='d-flex flex-column gap'>
                        <a className='font-secondary-color' href="#">About</a>
                        <a className='font-secondary-color' href="#">Our Team</a>
                        <a className='font-secondary-color' href="#">Careers</a>
                        <a className='font-secondary-color' href="#">Contact</a>
                    </div>
                </div>
                <div className="col-8  d-flex justify-content-around col-md-2 text-md-left px-md-0">
                    <a className='font-primary-color' href="#"><h4><i className="bi bi-facebook"></i></h4></a>
                    <a className='font-primary-color' href="#"><h4><i className="bi bi-twitter"></i></h4></a>
                    <a className='font-primary-color' href="#"><h4><i className="bi bi-pinterest"></i></h4></a>
                    <a className='font-primary-color' href="#"><h4><i className="bi bi-instagram"></i></h4></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer