import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { IGithub } from "../interface/IGithub";

const GithubCard = ({
  value,
  handleClick,
}: {
  value: IGithub;
  handleClick: Function;
}) => {
  return (
    <Grid2>
      <Card sx={{ maxWidth: 255 }}>
        <CardMedia component="img" alt={value.login} image={value.avatar_url} />
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
};

export default GithubCard;
