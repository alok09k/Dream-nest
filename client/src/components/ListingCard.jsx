import { useState } from "react";
import "../styles/ListingCard.scss";
import {
  ArrowForwardIos,
  ArrowBackIosNew,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ListingCard = ({
  listingId,
  creator,
  listingPhotoPaths,
  city,
  province,
  country,
  category,
  type,
  price,
  startDate,
  endDate,
  totalPrice,
  booking,
}) => {
  /* SLIDER FOR IMAGES */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false); // New state for like/dislike

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking like button
    setLiked(!liked);
  };

  return (
    <div
      className="listing-card"
      onClick={() => {
        navigate(`/properties/${listingId}`);
      }}
    >
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {listingPhotoPaths?.map((photo, index) => (
            <div key={index} className="slide">
              <img
                src={`https://dream-nest-server.onrender.com/${photo?.replace("public", "")}`}
                alt={`photo ${index + 1}`}
              />

              {/* Like/Dislike button */}
              <div
                className="heart-button"
                onClick={(e) => toggleLike(e)}
              >
                {liked ? (
                  <Favorite sx={{ fontSize: "24px", color: "red" }} />
                ) : (
                  <FavoriteBorder sx={{ fontSize: "24px", color: "white" }} />
                )}
              </div>

              <div
                className="prev-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevSlide(e);
                }}
              >
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div
                className="next-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextSlide(e);
                }}
              >
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>
        {city}, {province}, {country}
      </h3>
      <p>{category}</p>

      {!booking ? (
        <>
          <p>{type}</p>
          <p>
            <span>${price}</span> per night
          </p>
        </>
      ) : (
        <>
          <p>
            {startDate} - {endDate}
          </p>
          <p>
            <span>${totalPrice}</span> total
          </p>
        </>
      )}
    </div>
  );
};

export default ListingCard;
