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
    pDD
}) => {

    return(
        <>{ pdType === 'double' ? <div className=" border border-2 my-4">
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
            <div className="border p-2">{pDD?.first}</div>
            <div className="border p-2">{rightAdd}</div>
        </div>
        <div className="grid grid-cols-6">
            <div className="border p-2">L</div>
            <div className="border p-2">{leftSphere}</div>
            <div className="border p-2">{leftCylinder}</div>
            <div className="border p-2">{leftAxis}</div>
            <div className="border p-2">{pDD?.second}</div>
            <div className="border p-2">{leftAdd}</div>
        </div>
    </div>: <div className=" border border-2 my-4">
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
        </div> }</>
    )

}

export default MiniCartDetailAdd;