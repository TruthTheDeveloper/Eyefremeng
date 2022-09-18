import OrderCartDetail from "./OrderCartDetail";
const OrderItem = ({ item }) => {
  return (
    <div>
      {item.map((item, index) => {
        return (
          <OrderCartDetail
            key={index}
            id={item?.id}
            productImage={item?.productImage}
            productName={item?.productName}
            productPrice={item?.productPrice}
            productDescription={item.productDescription}
            prescriptionType={item.prescriptionType}
            leftSphere={item?.leftOD?.sphere}
            leftAxis={item?.leftOD?.axis}
            leftCylinder={item?.leftOD?.cylinder}
            leftAdd={item?.leftOD?.add}
            rightSphere={item?.rightOD?.sphere}
            rightAxis={item?.rightOD?.axis}
            rightCylinder={item?.rightOD?.cylinder}
            rightAdd={item?.rightOD?.add}
            subTotal={item?.subTotal}
            unitPrice={item.unitPrice}
            usageOption={item?.usageOption}
            pdType={item?.pdType}
            pD={item?.pD}
            pDD={item?.pDD}
            lenseType={item?.lenseType}
            qty={item.qty}
            Add={item?.Add}
            remark={item?.remark}
          />
        );
      })}
    </div>
  );
};
export default OrderItem;
