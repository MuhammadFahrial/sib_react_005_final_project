import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetail } from "../../features/fakestore/fakeStoreSlice";
import CardDetail from "../molekuls/CardDetail";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.productDetail.entities);

  useEffect(() => {
    dispatch(productDetail(productId));
  }, [dispatch]);

  return (
    <>
      <div className="text-center p-6 text-4xl font-serif">
          <h1>Detail Product</h1>
      </div><br/>
      {/* <h1>{product?.title}</h1>
      <img src={product?.image} alt="" />
      <p>{product?.title}</p>
      <p>{product?.category}</p>
      <p>{product?.description}</p> */}
      <CardDetail
        // key={indey}
        img={product?.image}
        title={product?.title}
        category={product?.category}
        desc={product?.description}
        price={product?.price}
        addClick={() => alert("work")}
      /> 
      <br /><br />
    </>
  );
};

export default DetailProduct;
