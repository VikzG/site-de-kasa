import { FaStar, FaRegStar,  FaStarHalfAlt } from 'react-icons/fa';

function RatingStars({ rating }) {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<FaStar key={`star-${i}`} />);
  }

  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half-star" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-star-${i}`} />);
  }

  return <div>{stars}</div>;
}

export default RatingStars