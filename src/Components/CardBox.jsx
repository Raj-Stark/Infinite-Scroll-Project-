import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const CardBox = ({ id, title, body }) => {
  return (
    <Card sx={{ width: 350, height: 300 }}>
      <CardHeader avatar={<Avatar>{id}</Avatar>}></CardHeader>
      <CardContent>
        <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardBox;
