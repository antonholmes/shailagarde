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

import shai1 from "assets/img/shai4.jpg";
import shai2 from "assets/img/shai5.jpg";
import shai3 from "assets/img/shai6.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Lifestyle</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={shai1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Blog
                <br />
                <small className={classes.smallTitle}>Lifestyle Blog</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  From Blogspot to WordPress to its new home
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="/blog"
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
                <img src={shai2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Vlog
                <br />
                <small className={classes.smallTitle}>YouTube Channel</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I've been vlogging since the mid 2000s, about pets, life, covers, beauty, mental health, and travel.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.youtube.com/shailagarde"
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
                <img src={shai3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Instagram
                <br />
                <small className={classes.smallTitle}>My favorite feed</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  More of my daily life on my profile
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.instagram.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
