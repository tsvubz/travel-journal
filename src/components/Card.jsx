import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {

    

  return (
    <div className='card-container'>
        <div className='card-image-container'>
            <img src={`../../images/${props.img}`} alt="Mount Fuji" className='card-image'/>
        </div>
        <div className='card-info-container'>
            <div className='card-location'>
                <span><FontAwesomeIcon icon={faLocationDot} style={{color: "#F55A5A"}}/> </span>
                <span className='location'>{props.country}</span>
                <span><a href={props.link} target='_blank' className='card-map'>View on Google Maps</a></span>
            </div>
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-date'><strong>{props.startDate} - {props.endDate}</strong></p>
            <p className='card-text'>{props.text}</p>
        </div>
    </div>
  )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Card