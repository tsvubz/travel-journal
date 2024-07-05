import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {

    

  return (
    <div className='card-container'>
        <div className='card-image-container'>
            <img src={`../../images/${props.item.imageUrl}`} alt="Mount Fuji" className='card-image'/>
        </div>
        <div className='card-info-container'>
            <div className='card-location'>
                <span><FontAwesomeIcon icon={faLocationDot} style={{color: "#F55A5A"}}/> </span>
                <span className='location'>{props.item.location}</span>
                <span><a href={props.item.googleMapsUrl} target='_blank' className='card-map'>View on Google Maps</a></span>
            </div>
            <h2 className='card-title'>{props.item.title}</h2>
            <p className='card-date'><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
            <p className='card-text'>{props.item.description}</p>
        </div>
    </div>
  )
}

Card.propTypes = {
    item: PropTypes.string.isRequired,
}

export default Card