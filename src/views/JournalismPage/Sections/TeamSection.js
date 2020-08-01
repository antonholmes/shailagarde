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

import team1 from "assets/img/sft.jpg";
import team2 from "assets/img/gma.png";
import team3 from "assets/img/ny.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRounded,
    classes.imgRoundedCircle,
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
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                GMA News and Public Affairs
                <br />
                <small className={classes.smallTitle}>Field Reporter / Segment Producer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Stand for Truth - the digital newscast for millennials by
                  millennials, anchored by Atom Araullo
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.youtube.com/watch?v=FAFUl8uzrVc&list=PLG5yvmTxvDF1b5C57aEIlu4lmQiKsIAOD"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-youtube'} />
                </Button>
                <Button
                  href="https://www.facebook.com/standfortruthGMA"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                  href="https://www.twitter.com/GMA_PA"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} sm={6} md={10} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                GMA News Online
                <br />
                <small className={classes.smallTitle}>COVID-19 Reports</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I've been covering COVID-19 since the first person under
                  investigation landed in the Philippines. I do the daily updates on
                  GMA News, along with maintaining our COVID-19 dashboard.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.gmanetwork.com/news/specials/content/150/why-couldn-t-we-do-mass-testing-and-other-faqs-on-the-covid-19-beat-answered/"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-wpforms"} />
                </Button>
                <Button
                  href="https://www.gmanetwork.com/news/specials/content/156/are-we-actually-ready-for-gcq-here-s-what-the-data-says/"
                  target="_blank"
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
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Twitter
                <br />
                <small className={classes.smallTitle}>News and Analysis</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I post daily updates and analysis from the DOH Data Drop about the COVID-19 situation.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.twitter.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
