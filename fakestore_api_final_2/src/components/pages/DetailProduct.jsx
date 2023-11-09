import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { productDetail } from "../../features/productdetails/productDetailsSlice";
import CardDetail from "../molekuls/CardDetail";
import { addItems } from "../../features/cart/cartSlice";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = useSelector((state) => state.productDetail.detail);

  useEffect(() => {
    dispatch(productDetail(productId));
  }, [dispatch]);

  const handleToAdd = (item, product) => {
    if (!localStorage.getItem("user")) {
      navigate(`/login`, { replace: location });
    } else {
      dispatch(addItems(item));
      alert("berhasil di tambahkan");
    }
  };

  // console.log(product);

  return (
    <>
      <div className="text-center p-6 text-4xl font-serif">
        <h1>Detail Product</h1>
      </div>
      <br />
      <CardDetail
        key={product?.id}
        img={product?.image}
        title={product?.title}
        category={product?.category}
        desc={product?.description}
        price={product?.price}
        addClick={() => handleToAdd(product)}
      />

      <br />
      <br />
    </>
  );
};

export default DetailProduct;
