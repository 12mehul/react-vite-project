import React, { useEffect, useState } from "react";
import { IGithub } from "../interface/IGithub";
import axios from "axios";
import { Container, Grid2, Pagination, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GithubCard from "../common/GithubCard";

const GithubUsersCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IGithub[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (username: string) => {
    navigate(`/github-card/${username}/followers`);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Grid2 container spacing={3} justifyContent="center">
        <Typography
          sx={{ textTransform: "uppercase" }}
          gutterBottom
          variant="h5"
          component="div"
          marginY={2}
        >
          Welcome To GitHub
        </Typography>
      </Grid2>
      <Grid2 container spacing={3} justifyContent="center">
        {paginatedData.map((value) => {
          return (
            <GithubCard
              key={value.id}
              value={value}
              handleClick={handleClick}
            />
          );
        })}
      </Grid2>
      <Grid2 container spacing={3} justifyContent="center">
        <Stack spacing={2} margin={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="secondary"
          />
        </Stack>
      </Grid2>
    </Container>
  );
};

export default GithubUsersCard;
