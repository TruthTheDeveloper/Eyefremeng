import Select from "react-select";
import {
  Pd,
  doublePD,
  rightOd,
  leftOd,
  rightAxis,
  rightCylinder,
  leftAxis,
  leftCylinder,
  usage,
  LeftADD,
  RightADD,
} from "../../options/options";
import RightOd from "./RightOd";
import LeftOd from "./LeftOd";
import SinglePdForm from "../SinglePdForm";
import DoublePdForm from "../DoublePdForm";

const PrescriptionDetailForm = ({
  selectedRightOdOption,
  selectedRightAxisOption,
  selectedRightCylinderOption,
  selectedLeftOdOption,
  selectedLeftAxisOption,
  selectedLeftCylinderOption,

  setSelectedRightOdOption,
  setSelectedRightAxisOption,
  setSelectedRightCylinderOption,
  setSelectedLeftAxisOdOption,
  setSelectedLeftCylinderOption,
  setSelectedLeftOdOption,

  selectedRightOdOptionValidationError,
  selectedRightAxisOptionValidationError,
  selectedRightCylinderOptionValidationError,
  selectedLeftOdOptionValidationError,
  selectedLeftAxisOptionValidationError,
  selectedLeftCylinderOptioValidationError,

  remark,
  setRemark,

  selectedLeftADD,
  selectedLeftADDValidationError,
  setSelectedLeftADD,

  selectedRightADD,
  setSelectedRightADD,
  selectedRightADDValidationError,

  twoSinglePD,
  firstPd,
  secondPd,
  setFirstPd,
  setSecondPd,
  setSinglePd,
  setUsageOption,
  setTwoSinglePd,
  singlePD,

  firstPdValidationError,
  secondPdValidationError,
  singlePDValidationError,
  usageOptionValidationError,

  usageOption,
}) => {
  return (
    <div className="my-4">
      <div className="px-3 border-2 py-3">
        <p className="text-red-500 text-xs">
          *Please pay attention to the signs of the values, positive(+) and
          negative(-) values, positive(+) and negative(-) values are different
        </p>
      </div>
      <div className="px-3 border-2 py-3">
        <div className="my-4">
          <h1>Right(OD)</h1>
        </div>
        <RightOd
          selectedRightOdOption={selectedRightOdOption}
          selectedRightOdOptionValidationError={
            selectedRightOdOptionValidationError
          }
          selectedRightAxisOption={selectedRightAxisOption}
          selectedRightAxisOptionValidationError={
            selectedRightAxisOptionValidationError
          }
          selectedRightCylinderOption={selectedRightCylinderOption}
          selectedRightCylinderOptionValidationError={
            selectedRightCylinderOptionValidationError
          }
          setSelectedRightAxisOption={setSelectedRightAxisOption}
          setSelectedRightOdOption={setSelectedRightOdOption}
          setSelectedRightCylinderOption={setSelectedRightCylinderOption}
          selectedRightADD={selectedRightADD}
          selectedRightADDValidationError={selectedRightADDValidationError}
          setSelectedRightADD={setSelectedRightADD}
          rightOd={rightOd}
          rightCylinder={rightCylinder}
          rightAxis={rightAxis}
          rightAdd={RightADD}
        />
      </div>
      <div className="px-3 border-2 py-3">
        <div className="my-4">
          <h1>Left(OD)</h1>
        </div>
        <LeftOd
          selectedLeftOdOption={selectedLeftOdOption}
          selectedLeftOdOptionValidationError={
            selectedLeftOdOptionValidationError
          }
          selectedLeftAxisOption={selectedLeftAxisOption}
          selectedLeftAxisOptionValidationError={
            selectedLeftAxisOptionValidationError
          }
          selectedLeftCylinderOption={selectedLeftCylinderOption}
          selectedLeftCylinderOptioValidationError={
            selectedLeftCylinderOptioValidationError
          }
          setSelectedLeftAxisOdOption={setSelectedLeftAxisOdOption}
          setSelectedLeftOdOption={setSelectedLeftOdOption}
          setSelectedLeftCylinderOption={setSelectedLeftCylinderOption}
          selectedLeftADD={selectedLeftADD}
          setSelectedLeftADD={setSelectedLeftADD}
          selectedLeftADDValidationError={selectedLeftADDValidationError}
          leftOd={leftOd}
          leftCylinder={leftCylinder}
          leftAxis={leftAxis}
          leftADD={LeftADD}
        />
      </div>
      <div className="px-3 border-2 py-3">
        <label>PD*</label>
        {twoSinglePD ? (
          <DoublePdForm
            firstPd={firstPd}
            firstPdValidationError={firstPdValidationError}
            secondPd={secondPd}
            secondPdValidationError={secondPdValidationError}
            setFirstPd={setFirstPd}
            setSecondPd={setSecondPd}
            options={doublePD}
          />
        ) : (
          <SinglePdForm
            singlePD={singlePD}
            singlePDValidationError={singlePDValidationError}
            options={Pd}
            setSinglePd={setSinglePd}
          />
        )}
      </div>
      <div className="px-3 border-2 py-3">
        <div className="px-3 border-2 py-3">
          <div className="flex  border-b-2 py-3">
            <input
              type="checkbox"
              className="m-2"
              value={twoSinglePD}
              onChange={() => setTwoSinglePd((prev) => !prev)}
            />
            <label>i have 2 single PDS</label>
          </div>
        </div>
      </div>
      <div className="px-3 border-2 py-3">
        <label>Usage*</label>
        <div>
          <Select
            placeholder={usageOption || "--- Please Select ---"}
            defaultValue={usageOption}
            onChange={setUsageOption}
            options={usage}
          />
          {usageOptionValidationError && (
            <p className="text-red-500 text-xs my-2 font-semibold">
              This field is required
            </p>
          )}
        </div>
        <div className="my-8">
          <label className="">Remark*</label>
          <textarea
            className="h-24 w-full border-2 border-slate-400 outline-none my-2 rounded-sm p-2"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetailForm;
