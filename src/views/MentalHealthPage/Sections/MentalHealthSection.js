import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
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

import image from "assets/img/mentalhealth1.jpg";
import image2 from "assets/img/mentalhealth2.jpg";
import image3 from "assets/img/mentalhealth3.jpg";

const useStyles = makeStyles(styles);

export default function MentalHealthSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgSquare,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Mental Health</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <div>
                  <a href="https://www.youtube.com/watch?v=6B9GLcOzRt4"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="transparent">
                    <img src={image} alt="..." className={imageClasses} /></a>
                  <a href="https://www.youtube.com/watch?v=HB8xc3WP4x8"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="transparent">
                    <h4 className={classes.cardTitle}>
                      Vlog
                          <br />
                    </h4>
                  </a>
                </div>
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  A series of videos I've prepared to share my experiences and thoughts I would've loved to hear when I was young.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <Link>
                  <img src={image2} alt="..." className={imageClasses} />
                  <h4 className={classes.cardTitle}>
                    Blog
                <br />
                  </h4>
                </Link>
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  After completing my training for counseling and mental hygiene, a few of my sentiments I would love to share with the young generation.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <Link
                  to="/talks"
                  color="transparent"
                  className={classes.navLink}
                >
                  <img src={image3} alt="..." className={imageClasses} />
                  <h4 className={classes.cardTitle}>
                    Talks
                <br />
                  </h4>
                </Link>
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  I love talking to crowds.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div >
    </div >
  );
}
