import React, { useEffect, useState } from "react";
import { IGithub } from "../interface/IGithub";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const GithubCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IGithub[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (username: string) => {
    navigate(`/github-card/${username}/followers`);
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Grid2 container spacing={3} justifyContent="center" marginTop="30px">
        {data.map((value) => {
          return (
            <Grid2 key={value.id}>
              <Card sx={{ maxWidth: 255 }}>
                <CardMedia
                  component="img"
                  alt={value.login}
                  image={value.avatar_url}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    {value.login}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href={value.html_url} target="_blank">
                    <Button size="small">View Profile</Button>
                  </a>
                  <Button size="small" onClick={() => handleClick(value.login)}>
                    Followers
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
};

export default GithubCard;
