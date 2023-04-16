import React, { useState } from "react";
import Product from "../../components/product";
import ProductDetail from "../../components/product/product-detail";
import { defaultProduct, productDatas } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyViewedList } from "../../redux/slice/cartSlice";

function Home() {
  const [isViewDetail, setIsViewDetail] = useState(false);
  const [product, setProduct] = useState(defaultProduct);
  const dispatch = useDispatch();
  const { items} = useSelector((item) => item.cart);

  const handleViewDetail = (item) => {
    setIsViewDetail(true);
    setProduct({
      id: item.id,
      img: item.img,
      name: item.name,
      price: item.price,
    });
    dispatch(getRecentlyViewedList(item));
  };

  return (
    <div className="max-w-full">
      {isViewDetail ? (
        <ProductDetail
          handleBackToHome={() => setIsViewDetail(false)}
          data={product}
        />
      ) : (
        //Nếu không có sản phẩm thì ẩn mục sản phẩm đã xem
        <div>
          {items.length > 0 && (
            <div>
              <div className="flex m-10 font-bold text-2xl">
                Recent Viewed Product
              </div>
              <div>
                <Product handleViewDetail={handleViewDetail} data={items} />
              </div>
            </div>
          )}
          <div>
            <div className="flex m-10 font-bold text-2xl">List Product</div>
            <div>
              <Product
                handleViewDetail={handleViewDetail}
                data={productDatas}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
