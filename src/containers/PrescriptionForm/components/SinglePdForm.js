import Select from "react-select";

const SinglePdForm = ({
  singlePD,
  setSinglePd,
  options,
  singlePDValidationError,
}) => {
  return (
    <div className="">
      <Select
        placeholder={singlePD || "--- Please Select ---"}
        defaultValue={singlePD}
        onChange={setSinglePd}
        options={options}
      />
      {singlePDValidationError && (
        <p className="text-red-500 text-xs my-2 font-semibold">
          This field is required
        </p>
      )}
    </div>
  );
};

export default SinglePdForm;
