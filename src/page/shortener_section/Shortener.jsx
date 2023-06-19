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

            <div className="row justify-content-center py-4 pt-5 pt-md-5 py-md-0" id='statistics'>
                <div className="col-12 col-md-6 py-5 text-center">
                    <h3 className='font-tertiary-color font-weight-bold'>Advanced Statistics</h3>
                    <p className='font-secondary-color'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
            </div>

            <div className="row pb-5" id='cards'>

                <div className="col col-md-3 align-self-start px-md-0">
                    {/* card 1 */}
                    <div className="card py-4 px-md-4 align-items-center align-items-md-start text-center text-md-left border-0 rounded">
                        <div className='card-img'>
                            <img src={iconCard1} className="card-img-top" alt="Icon" />
                        </div>
                        <div className="card-body px-md-0 py-md-4">
                            <h5 className="card-title font-tertiary-color font-weight-bold">Brand Recognition</h5>
                            <p className="card-text font-secondary-color">Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.</p>
                        </div>
                    </div>
                </div>

                <div className="col col-md-3 align-self-center px-md-0">
                    {/* card 2 */}
                    <div className="card py-4 px-md-4 align-items-center align-items-md-start text-center text-md-left border-0 rounded">
                        <div className='card-img'>
                            <img src={iconCard2} className="card-img-top" alt="Icon" />
                        </div>
                        <div className="card-body px-md-0 py-md-4">
                            <h5 className="card-title font-tertiary-color font-weight-bold">Detailed Records</h5>
                            <p className="card-text font-secondary-color">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                        </div>
                    </div>
                </div>

                <div className="col col-md-3 align-self-end px-md-0">
                    {/* card 3 */}
                    <div className="card py-4 px-md-4 align-items-center align-items-md-start text-center text-md-left border-0 rounded">
                        <div className='card-img'>
                            <img src={iconCard3} className="card-img-top" alt="Icon" />
                        </div>
                        <div className="card-body px-md-0 py-md-4">
                            <h5 className="card-title font-tertiary-color font-weight-bold">Fully Customizable</h5>
                            <p className="card-text font-secondary-color">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Shortener