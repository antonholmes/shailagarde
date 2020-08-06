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

import lifestyle1 from "assets/img/lifestyle1.jpg";
import lifestyle2 from "assets/img/lifestyle2.jpg";
import lifestyle3 from "assets/img/lifestyle3.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgSquare,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Lifestyle</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <div>
                  <a href="https://www.youtube.com/shailagarde"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="transparent">
                    <img src={lifestyle1} alt="..." className={imageClasses} />
                    <h4 className={classes.cardTitle}>
                      Vlog
                  <br />
                    </h4>
                  </a>
                </div>
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  I've been vlogging since the mid 2000s, about pets, life, covers, beauty, mental health, and travel.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <Link>
                  <img src={lifestyle2} alt="..." className={imageClasses} />
                  <h4 className={classes.cardTitle}>
                    Blog
                  </h4>
                </Link>
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  From Blogspot to WordPress to its new home
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <div>
                  <a href="https://www.instagram.com/shailagarde"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="transparent">
                    <img src={lifestyle3} alt="..." className={imageClasses} />
                    <h4 className={classes.cardTitle}>
                      Instagram
                <br />
                    </h4>
                  </a>
                </div>
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  More of my daily life on my profile
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
