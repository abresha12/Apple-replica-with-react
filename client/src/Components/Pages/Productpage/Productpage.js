import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../iphonedata/database"; // Adjust the path accordingly
import Four04 from "../Four04/Four04";

function Productpage() {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);

  // 	// useEffect(() => {
// 	// 	fetch("http://localhost:3000/iphones")
// 	// 		.then((res) => res.json())
// 	// 		.then((products) => {
// 	// 			const productList = products.products;
// 	// 			const singleProduct = productList.filter(
// 	// 				(product) => product.product_url === productID
// 	// 			);
// 	// 			setProducts(singleProduct);
// 	// 		})
// 	// 		.catch(() => console.log("Error: unable to fetch!!"));
// 	// }, [productID]);

  useEffect(() => {
    // Find the product in the database based on the productID (pid)
    const foundProduct = database.find((product) => product.product_url === pid);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle the case where the product is not found
      console.log("Product not found");
    }
  }, [pid]);

  if (product) {
    const {
      product_id,
      product_name,
      product_img,
      product_brief_description,
      starting_price,
      price_range,
      product_description,
    } = product;

    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 mt-5">
                <div className="title-wraper font-weight-bold">{product_name}</div>
                <div className="brief-description">{product_brief_description}</div>
              </div>
            </div>

            <div className="row justify-content-center text-center product-holder h-100">
              <div className="col-sm-12 col-md-6 my-auto">
                <div className="starting-price">{`Starting at ${starting_price}`}</div>
                <div className="monthly-price">{price_range}</div>
                <div className="product-details">{product_description}</div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="prodict-image">
                  <img src={product_img} alt="product" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default Productpage;
