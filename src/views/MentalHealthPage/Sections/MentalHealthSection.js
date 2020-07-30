import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import image from "assets/img/shai3.jpg";
import image2 from "assets/img/ny.jpg";
import shai from "assets/img/shai.gif";

const useStyles = makeStyles(styles);

export default function MentalHealthSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Mental Health</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={image} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Blog
                <br />
                <small className={classes.smallTitle}>Thoughts and Musings</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  After completing my training for counseling and mental hygiene, a few of my sentiments I would love to share with the young generation.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="/profile-page"
                  color="transparent"
                  className={classes.margin5}
                >
                  Read more
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={image2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Vlog
                <br />
                <small className={classes.smallTitle}>Self-produced Videos</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  A series of videos I've prepared to share my experiences and thoughts I would've loved to hear when I was young.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.youtube.com/watch?v=6B9GLcOzRt4"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=HB8xc3WP4x8"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={shai} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Talks
                <br />
                <small className={classes.smallTitle}>Motivational and Inspirational</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I love talking to crowds.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="/login-page"
                  color="transparent"
                  className={classes.margin5}
                >
                  Book me
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
