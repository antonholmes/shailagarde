import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from 'components/Header/Header'
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax";
// sections for this page
import HomeLinks from "components/Header/HomeLinks";
import SectionCarousel from "./Sections/SectionCarousel.js";
import JournalismSection from 'views/JournalismPage/Sections/JournalismSection'
import LifestyleSection from 'views/LifestylePage/Sections/LifestyleSection'
import MentalHealthSection from 'views/MentalHealthPage/Sections/MentalHealthSection'

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header brand="SHAI LAGARDE"
        href='#home'
        rightLinks={<HomeLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}>
      </Header>
      <Parallax image={require("assets/img/shai2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <JournalismSection />
        <LifestyleSection />
        <MentalHealthSection />
      </div>
      <Footer />
    </div>
  );
}
