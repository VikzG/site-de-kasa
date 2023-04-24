import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style.scss'


const RatingStars = ({ rating }) => {
  return (
    <div className="rating-stars">
      {Array.from(Array(5).keys()).map((x) => (
        <span key={x} className="rating-star">
          <FontAwesomeIcon
            icon={faStar}
            color={x < rating ? '#FF6060' : '#C4C4C4'}
          />
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
