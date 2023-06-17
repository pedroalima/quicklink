import './Banner.sass'
import PropTypes from 'prop-types'

function Banner({ typeDisplay }) {
    return (
        <section className="container-fluid banner">
            {!typeDisplay ? (
                <>
                    <div className="row">
                        <div className="banner-image"></div>
                    </div>
                    <div className="row">
                        <div className='banner-content'>
                            <h1 className="banner-content-title">More than just shorter links</h1>
                            <p className='banner-content-description'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                            <button className='banner-content-button'>Get Started</button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="row">
                    <div className='col col-xl-7'>
                        <div className='banner-content'>
                            <h1 className="banner-content-title">More than just shorter links</h1>
                            <p className='banner-content-description'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                            <button className='banner-content-button'>Get Started</button>
                        </div>
                    </div>
                    <div className='col col-xl-5'>
                        <div className="banner-image"></div>
                    </div>
                </div>
            )
            }
            
        </section>
    )
}

Banner.propTypes = {
    typeDisplay: PropTypes.bool
}

export default Banner