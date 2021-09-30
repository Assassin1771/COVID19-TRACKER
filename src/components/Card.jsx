import { Box, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";

const Card = ({ cardTitle, value, desc, lastUpdate }) => {
  return (
    <Grid>
      <Box>
        <Typography variant="h5" color="textSecondary">
          {cardTitle}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={3} seperator="," />
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default Card;
