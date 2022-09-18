import Select from "react-select";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ReviewDataService from "../firebase/services/reviews.services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

const options = [
  { value: "Excellent", label: "Excellent" },
  { value: "Very Good", label: "Very Good" },
  { value: "Good", label: "Good" },
  { value: "Fair", label: "Fair" },
  { value: "Poor", label: "Poor" },
];
const ReviewModal = ({
  firstName,
  lastName,
  openReview,
  openReviewHandler,
}) => {
  const [category, setCategory] = useState(null);
  const [categoryValidationError, setCategoryValidationError] = useState();

  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewMessageValidationError, setReviewMessageValidationError] =
    useState("");
  const [firstNameValidationError, setFirstNameValidationError] = useState("");
  const [lastNameValidationError, setLastNameValidationError] = useState("");
  const [spinner, setSpinner] = useState(false);

  let rating = (
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

  if (category?.value === "Excellent") {
    rating = (
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
  } else if (category?.value === "Very Good") {
    rating = (
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
  } else if (category?.value === "Good") {
    rating = (
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
  } else if (category?.value === "Fair") {
    rating = (
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
  } else if (category?.value === "Poor") {
    rating = (
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

  const submitReview = async (e) => {
    e.preventDefault();

    reviewMessage === ""
      ? setReviewMessageValidationError(true)
      : setReviewMessageValidationError(false);
    category.value === null
      ? setCategoryValidationError(true)
      : setCategoryValidationError(false);
    firstName === ""
      ? setFirstNameValidationError(true)
      : setFirstNameValidationError(false);
    lastName === ""
      ? setLastNameValidationError(true)
      : setLastNameValidationError(false);

    setSpinner(true);

    const data = {
      id: JSON.parse(localStorage.getItem("uid")),
      review: reviewMessage,
      rating: category.value,
      firstName: firstName,
      lastName: lastName,
    };

    if (
      reviewMessage !== "" &&
      category.value !== null &&
      firstName !== "" &&
      lastName !== ""
    ) {
      const payload = await ReviewDataService.checkReview(
        JSON.parse(localStorage.getItem("id")),
        JSON.parse(localStorage.getItem("uid"))
      );
      const exist = payload.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      if (exist.length === 0) {
        setSpinner(false);
        const result = await ReviewDataService.addReview(
          JSON.parse(localStorage.getItem("id")),
          data
        );

        toast.success("your review was submitted ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setSpinner(false);
      } else {
        const result = await ReviewDataService.addReview(
          JSON.parse(localStorage.getItem("id")),
          data
        );
        toast.error("you have already reviewed this glass", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    setSpinner(false);
  };

  return (
    <>
      {openReview && (
        <section
          className=" fixed top-0 left-0 h-screen w-full z-50 overflow-y-hidden "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.774)" }}
          onClick={openReviewHandler}
        >
          <form className="bg-white w-96 mx-auto mt-44 p-5 w-72 lg:w-96  rounded-md relative">
            <h1 className="text-slate-700 my-2 text-xl font-semibold">
              Overall Rating
            </h1>
            <FontAwesomeIcon
              icon={faClose}
              className="md:mr-2 text-gray-500 font-bold pt-1 md:pt-0 lg:text-2xl cursor-pointer absolute top-0 right-0 mt-2"
            />
            {rating}
            <div className="my-3 ">
              <label>Your Name</label>
              <br />
              <input
                className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300"
                value={`${firstName} ${lastName}`}
                readOnly
              />
            </div>
            <div className="my-3 ">
              <label>Rate</label>
              <br />
              <div className=" w-full h-10  outline-none my-2 rounded-md border-slate-300">
                <Select
                  placeholder={"--- Please Select --"}
                  defaultValue={category}
                  onChange={setCategory}
                  options={options}
                />
              </div>
            </div>
            <div className="my-3">
              <label>Review</label>
              <br />
              <textarea
                className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300 h-12"
                onChange={(e) => setReviewMessage(e.target.value)}
              />
            </div>
            <div className="my-3">
              <button
                className="bg-indigo-800  text-white w-full text-lg py-2 rounded-md"
                onClick={submitReview}
              >
                {spinner ? (
                  <div className="mx-32">
                    <TailSpin color="white" height={30} width={80} />
                  </div>
                ) : (
                  "Submit Review"
                )}
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};
export default ReviewModal;
