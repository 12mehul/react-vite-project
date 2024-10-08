import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IGithub } from "../interface/IGithub";
import axios from "axios";
import { Container, Grid2, Pagination, Stack, Typography } from "@mui/material";
import GithubCard from "../common/GithubCard";

const GithubFollowersCard = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [followersData, setFollowersData] = useState<IGithub[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/followers?per_page=100`
      );
      setFollowersData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
    setCurrentPage(1);
  }, [username]);

  const handleClick = (username: string) => {
    navigate(`/github-card/${username}/followers`);
  };

  const totalPages = Math.ceil(followersData.length / itemsPerPage);

  const paginatedData = followersData.slice(
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
          Welcome To GitHub Followers
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

export default GithubFollowersCard;
