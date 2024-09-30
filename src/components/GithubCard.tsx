import React, { useEffect, useState } from "react";
import { IGithub } from "../interface/IGithub";
import axios from "axios";
import { Card, Container, Grid2 } from "@mui/material";

const GithubCard = () => {
  const [data, setData] = useState<IGithub[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/john-smilga/followers?per_page=100")
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
      <Grid2 container spacing={3} justifyContent="center">
        {data.map((value) => {
          return (
            <Grid2 key={value.id}>
              <Card
                sx={{
                  width: "100%",
                  overflow: "auto",
                }}
              ></Card>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
};

export default GithubCard;
