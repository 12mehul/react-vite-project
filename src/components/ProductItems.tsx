import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { red } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import ReviewsIcon from "@mui/icons-material/Reviews";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IProductPageProps } from "../interface/IProduct";
import ReadMore from "./ReadMore";

const ProductItems = (data: IProductPageProps) => {
  return (
    <Grid key={data.data.id} item xs={12} sm={6} md={4} lg={4}>
      {data.children}
      {data.i}
      <Card
        sx={{
          width: "100%",
          overflow: "auto",
        }}
      >
        <CardHeader
          className="capitalize"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.data.title.slice(0, 1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data.data.title}
          subheader={data.data.category}
        />
        <CardMedia
          component="img"
          image={data.data.image}
          alt="img"
          sx={{
            height: 400,
            width: "100%",
          }}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <ReadMore props={data.data.description} />
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: 1,
          }}
        >
          <IconButton
            aria-label="count"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              padding: "4px",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              sx={{ padding: 0, minWidth: 0 }}
            >
              {data.data.rating.count}
            </Button>
            <ReviewsIcon />
          </IconButton>
          <IconButton
            aria-label="rate"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              padding: "4px",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              sx={{ padding: 0, minWidth: 0 }}
            >
              {data.data.rating.rate}
            </Button>
            <StarIcon />
          </IconButton>
          <Button
            variant="contained"
            color="warning"
            sx={{
              padding: "4px 16px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            ${data.data.price}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItems;

ProductItems.defaultProps = {
  i: 0,
};
