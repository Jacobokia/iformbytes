import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  Card,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Services() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="services">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>

      <div style={{ marginTop: "2%" }}>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>Why Choose Us</p>
        <p style={{ textAlign: "center" }}>
          IformByte or Bytehiveguru offers cool services
        </p>
      </div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            IformByte or Bytehiveguru
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            IformByte services
          </Typography>
          <Typography variant="body2" component="p">
            We offer all those that you may need
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <div className="serve">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>
    </div>
  );
}
