import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
const MiniCartDetailAdd = ({
  pdType,
  leftSphere,
  leftAxis,
  leftCylinder,
  leftAdd,
  rightSphere,
  rightCylinder,
  rightAxis,
  rightAdd,
  pD,
  firstPd,
  secondPd,
  setConfirm,
  remark,
}) => {
  return (
    <>
      {pdType === "double" ? (
        <>
          <div className=" border border-2 my-4">
            <div className="grid grid-cols-6">
              <div className="border p-2 font-semibold"></div>
              <div className="border p-2 font-semibold">SPH</div>
              <div className="border p-2 font-semibold">CYL</div>
              <div className="border p-2 font-semibold">Axis</div>
              <div className="border p-2 font-semibold">PD</div>
              <div className="border p-2 font-semibold">ADD</div>
            </div>
            <div className="grid grid-cols-6">
              <div className="border p-2">R</div>
              <div className="border p-2">{rightSphere}</div>
              <div className="border p-2">{rightCylinder}</div>
              <div className="border p-2">{rightAxis}</div>
              <div className="border p-2">{firstPd}</div>
              <div className="border p-2">{rightAdd}</div>
            </div>
            <div className="grid grid-cols-6">
              <div className="border p-2">L</div>
              <div className="border p-2">{leftSphere}</div>
              <div className="border p-2">{leftCylinder}</div>
              <div className="border p-2">{leftAxis}</div>
              <div className="border p-2">{secondPd}</div>
              <div className="border p-2">{leftAdd}</div>
            </div>
          </div>
          <button
            className="flex border border-sky-500 py-1 px-4 mx-1 rounded-md my-4"
            onClick={setConfirm}
          >
            <FontAwesomeIcon
              icon={faPencil}
              className="text-sky-500 my-1 mr-2 text-lg"
            />
            <p>Edit</p>
          </button>{" "}
        </>
      ) : (
        <>
          {" "}
          <div className=" border border-2 my-4">
            <div className="grid grid-cols-5">
              <div className="border p-2 font-semibold"></div>
              <div className="border p-2 font-semibold">SPH</div>
              <div className="border p-2 font-semibold">CYL</div>
              <div className="border p-2 font-semibold">Axis</div>
              <div className="border p-2 font-semibold">ADD</div>
              {/* <div className="border p-2 font-semibold">PD</div> */}
            </div>
            <div className="grid grid-cols-5">
              <div className="border p-2">R</div>
              <div className="border p-2">{rightSphere}</div>
              <div className="border p-2">{rightCylinder}</div>
              <div className="border p-2">{rightAxis}</div>
              <div className="border p-2">{rightAdd}</div>
              {/* <div className="border p-2">25</div> */}
            </div>
            <div className="grid grid-cols-5">
              <div className="border p-2">L</div>
              <div className="border p-2">{leftSphere}</div>
              <div className="border p-2">{leftCylinder}</div>
              <div className="border p-2">{leftAxis}</div>
              <div className="border p-2">{leftAdd}</div>
              {/* <div className="border p-2">27</div> */}
            </div>
            <div className="grid grid-cols-5">
              <div className="border p-2">PD</div>
              <div className="border p-2 col-span-4">{pD}</div>
              {/* <div className="border p-2">27</div> */}
            </div>
          </div>
          <button
            className="flex border border-sky-500 py-1 px-4 mx-1 rounded-md my-4"
            onClick={setConfirm}
          >
            <FontAwesomeIcon
              icon={faPencil}
              className="text-sky-500 my-1 mr-2 text-lg"
            />
            <p>Edit</p>
          </button>{" "}
          <p className="text-sm">{remark}</p>
        </>
      )}
    </>
  );
};

export default MiniCartDetailAdd;
