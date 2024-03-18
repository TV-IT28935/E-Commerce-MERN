import React from "react";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  return (
    <div
      style={{
        padding: "0 120px",
        backgroundColor: "#efefef",
        height: "1000px",
      }}
    >
      <h5 style={{ marginTop: "0" }}>Trang chủ</h5>
      <ProductDetailComponent />
    </div>
  );
};

export default ProductDetailPage;
