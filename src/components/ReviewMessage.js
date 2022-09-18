import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewMessage = ({ firstName, lastName, rating, review }) => {
  let rate = (
    <div>
      <FontAwesomeIcon
        icon={faStar}
        className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
      />
      <FontAwesomeIcon
        icon={faStar}
        className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
      />
    </div>
  );

  if (rating === "Excellent") {
    rate = (
      <div>
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
      </div>
    );
  } else if (rating === "Very Good") {
    rate = (
      <div>
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
      </div>
    );
  } else if (rating === "Good") {
    rate = (
      <div>
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
      </div>
    );
  } else if (rating === "Fair") {
    rate = (
      <div>
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
      </div>
    );
  } else if (rating === "Poor") {
    rate = (
      <div>
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-orange-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="md:mr-2 text-gray-500 pt-1 md:pt-0 lg:text-sm"
        />
      </div>
    );
  }

  return (
    <div className="my-5">
      <div>
        {rate}
        <span className="mx-2">{rating}</span>
      </div>
      <div>
        <p>{review}</p>

        <p className="text-slate-500 text-sm my-3 font-semibold">
          {firstName} {lastName}-
        </p>
      </div>
    </div>
  );
};

export default ReviewMessage;
