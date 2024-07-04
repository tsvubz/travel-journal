import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import mountFiji from '../../public/images/mount-fuji.png'

function Card() {

    

  return (
    <div className='card-container'>
        <div className='card-image-container'>
            <img src={mountFiji} alt="Mount Fuji" className='card-image'/>
        </div>
        <div className='card-info-container'>
            <div className='card-location'>
                <span><FontAwesomeIcon icon={faLocationDot} style={{color: "#F55A5A"}}/> </span>
                <span className='location'>JAPAN</span>
                <span><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target='_blank' className='card-map'>View on Google Maps</a></span>
            </div>
            <h2 className='card-title'>Mount Fuji</h2>
            <p className='card-date'><strong>12 Jan, 2021 - 24 Jan, 2021</strong></p>
            <p className='card-text'>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular 
                tourist site in Japan, for both Japanese and foreign tourists.
            </p>
        </div>
    </div>
  )
}

export default Card