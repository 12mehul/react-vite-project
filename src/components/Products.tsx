import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ProductItems from "./ProductItems";
import { IProduct } from "../interface/IProduct";
import { useFetch } from "../customHooks/useFetch";

export default function Products() {
  // const [data, setData] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const products = useFetch<IProduct[]>("https://fakestoreapi.com/products");

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {products.loading ? (
          <p>Loading...</p>
        ) : products.data ? (
          products.data.map((value, index: number) => (
            <ProductItems key={index} data={value} i={index}>
              New Product
            </ProductItems>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </Grid>
    </Container>
  );
}
