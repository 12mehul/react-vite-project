import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ProductItems from "./ProductItems";
import { IProduct } from "./interface/IProduct";
import axios from "axios";

export default function Products() {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
        {data.map((value: IProduct, index: number) => {
          return (
            <ProductItems data={value} i={index}>
              New Product
            </ProductItems>
          );
        })}
      </Grid>
    </Container>
  );
}
