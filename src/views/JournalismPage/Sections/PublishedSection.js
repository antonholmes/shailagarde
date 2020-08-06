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

import team1 from "assets/img/sft.jpg";
import team2 from "assets/img/gma.png";
import team3 from "assets/img/ny.jpg";

const useStyles = makeStyles(styles);

export default function PublishedSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgSquare,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Journalism</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <div>
                  <a href="https://www.youtube.com/watch?v=FAFUl8uzrVc&list=PLG5yvmTxvDF1b5C57aEIlu4lmQiKsIAOD"
                    target="_blank"
                    rel='noopener noreferrer'
                    color="transparent">
                    <img src={team1} alt="..." className={imageClasses} />
                    <h4 className={classes.cardTitle}>
                      GMA News and Public Affairs
              </h4>
                  </a>
                </div>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                GMA News Online
</h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.gmanetwork.com/news/specials/content/150/why-couldn-t-we-do-mass-testing-and-other-faqs-on-the-covid-19-beat-answered/"
                  target="_blank"
                  rel='noopener noreferrer'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-wpforms"} />
                </Button>
                <Button
                  href="https://www.gmanetwork.com/news/specials/content/156/are-we-actually-ready-for-gcq-here-s-what-the-data-says/"
                  target="_blank"
                  rel='noopener noreferrer'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-wpforms"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <div>
                  <a href="https://www.twitter.com/shailagarde"
                    target="_blank"
                    rel='noopener noreferrer'
                    color="transparent">
                    <img src={team3} alt="..." className={imageClasses} />
                    <h4 className={classes.cardTitle}>
                      Twitter
                  </h4>
                  </a>
                </div>
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  I post daily updates and analysis from the DOH Data Drop about the COVID-19 situation.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
