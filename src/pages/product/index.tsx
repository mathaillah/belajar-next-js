/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [prducts, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data)
      });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {prducts.map((product : ProductType) =>(
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductPage;
