import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/invoices";
function Item() {
  const { productItems } = data;
  const { dataID } = useParams();
  const  navigate  = useNavigate();

  const productItem = productItems.find(
    (productItem) => productItem.id.toString() === dataID
  );
  console.log("productItem",productItem)
  useEffect(() => {
    if (!productItem) navigate("..");
  }, [productItem]);

  return (
    //Cach 1
    // <main>
    //   <p>{dataID}</p>
    //   {productItems.filter(productItems => productItems.id.toString() === dataID).map(f=>(
    //     <p>{f.name}</p>
    //   ))}
    // </main>
    //Cach 2
    // <h2  style={{paddingLeft:"20px"}}>{productItem ? `Item # ${productItem?.id} for ${productItem?.name}`:"No data"}</h2>
    //Cach 3
    <h2 style={{ paddingLeft: "20px" }}>
      {" "}
      Item ID {productItem.id} name {productItem.name}
    </h2>
  );
}
export default Item;
