import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
// @material-ui/icons
import LocalFlorist from "@material-ui/icons/LocalFlorist"
import DirectionsBoat from "@material-ui/icons/DirectionsBoat"
import Favorite from "@material-ui/icons/Favorite"
import Flight from '@material-ui/icons/Flight'
// core components
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import Button from "components/CustomButtons/Button"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import HeaderLinks from "components/Header/HeaderLinks"
import NavPills from "components/NavPills/NavPills"
import Parallax from "components/Parallax/Parallax"

// Sections for this page
import WorkSection from "./WorkSection";

import { SRLWrapper } from 'simple-react-lightbox'

import profile from "assets/img/wedding2.jpg"

import ceremony from 'assets/img/wedding/ceremony.jpg'
import ceremony2 from 'assets/img/wedding/ceremony2.jpg'
import ceremony3 from 'assets/img/wedding/ceremony3.jpg'
import ceremony4 from 'assets/img/wedding/ceremony4.jpg'
import ceremony5 from 'assets/img/wedding/ceremony5.jpg'
import reception from 'assets/img/wedding/reception.jpg'
import reception2 from 'assets/img/wedding/reception2.jpg'
import reception3 from 'assets/img/wedding/reception3.jpg'
import reception4 from 'assets/img/wedding/reception4.jpg'
import reception5 from 'assets/img/wedding/reception5.jpg'
import newyork from 'assets/img/wedding/newyork.jpg'
import newyork2 from 'assets/img/wedding/newyork2.jpg'
import newyork3 from 'assets/img/wedding/newyork3.jpg'
import newyork4 from 'assets/img/wedding/newyork4.jpg'
import newyork5 from 'assets/img/wedding/newyork5.jpg'
import lakeshore from 'assets/img/wedding/lakeshore.jpg'
import lakeshore2 from 'assets/img/wedding/lakeshore2.jpg'

import styles from "assets/jss/material-kit-react/views/profilePage.js"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(styles)

export default function ProfilePage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
  return (
    <div>
      <Header
        color="transparent"
        brand="SHAI LAGARDE"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/bg-antonshai.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.description}>
                  <h2 className={classes.title}>HOLMES-LAGARDE WEDDING</h2>
                  <p>
                    July 11, 2020
                <br />
                St. John Paul II Chapel,
                Lakeshore, Mexico, Pampanga
              </p>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="left">
              <GridItem xs={16} sm={16} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "New York",
                      tabIcon: Flight,
                      tabContent: (
                        <GridContainer justify="center">
                          <div className={classes.typo}>
                            {/* <div className={classes.note}>New York</div> */}
                            <p>
                              I will be the leader of a company that ends up being worth
                              billions of dollars, because I got the answers. I understand
                              culture. I am the nucleus. I think that’s a responsibility that
                              I have, to push possibilities, to show people, this is the level
                              that things could be at.
                            </p>
                          </div>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={newyork}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={newyork2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={newyork3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <div className={classes.typo}>
                            <p>
                              I will be the leader of a company that ends up being worth
                              billions of dollars, because I got the answers. I understand
                              culture. I am the nucleus. I think that’s a responsibility that
                              I have, to push possibilities, to show people, this is the level
                              that things could be at.
                            </p>
                          </div>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={newyork4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={newyork5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={newyork}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Ceremony",
                      tabIcon: LocalFlorist,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={ceremony}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={ceremony3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={ceremony2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={ceremony4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={ceremony5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Lakeshore",
                      tabIcon: DirectionsBoat,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={lakeshore}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={lakeshore2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={lakeshore}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={lakeshore2}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Reception",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={reception}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={reception2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reception3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={reception4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={reception5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
