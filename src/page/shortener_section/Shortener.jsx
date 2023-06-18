import './Shortener.sass'
import iconCard1 from '../../../public/images/icon-brand-recognition.svg'
import iconCard2 from '../../../public/images/icon-detailed-records.svg'
import iconCard3 from '../../../public/images/icon-fully-customizable.svg'


function Shortener() {
  return (
    <section className="container-fluid bg-secondary-color shortener">
        <div className="container">
            <form className="row bg-tertiary-color" id='form'>
                <div className='col-12 col-md-10'>
                    <input className='w-100' type="text" placeholder='Shorten a link here...' />
                </div>
                <div className='col-12 col-md-2'>
                    <button className='w-100 h-100 bg-button-color font-primary-color' type="submit">Shorten It!</button>
                </div>
            </form>
            {/* <div className="row bg-primary-color" id='outputs'>
                <div className="col-12 col-md-7" id='outputs-link'>
                    <span className="font-tertiary-color">https...</span>
                </div>
                <div className="col-12 col-md-3">
                    <a href="#" className="font-quaternary-color">https...</a>
                </div>
                <div className="col-12 col-md-2">
                    <button className='btn p-2 w-100 h-100 bg-button-color font-primary-color' type="button">Copy!</button>
                </div>
            </div> */}
            <div className="row" id='statistics'>
                <div className="col-12 col-md-6 offset-md-3" id='introduction'>
                    <h2 className='font-tertiary-color'>Advanced Statistics</h2>
                    <p className='font-secondary-color'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className="col-12">
                    <div className="row" id='cards'>
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <div className='card-img'>
                                    <img src={iconCard1} className="card-img-top" alt="Icon" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title font-tertiary-color">Brand Recognition</h5>
                                    <p className="card-text font-secondary-color">Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <div className='card-img'>
                                    <img src={iconCard2} className="card-img-top" alt="Icon" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title font-tertiary-color">Brand Recognition</h5>
                                    <p className="card-text font-secondary-color">Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <div className='card-img'>
                                    <img src={iconCard3} className="card-img-top" alt="Icon" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title font-tertiary-color">Brand Recognition</h5>
                                    <p className="card-text font-secondary-color">Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shortener