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
import ListAlt from '@material-ui/icons/ListAlt'
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
import SectionForm from "./Sections/SectionForm";
import GalleryCarousel from './Sections/GalleryCarousel'

import SimpleReactLightbox from 'simple-react-lightbox'

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
                <div className={classes.profile}>
                  <h3 className={classes.title}>#ShaiLockedHolmes</h3>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
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
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <p>
                                Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                              </p>
                            </div>
                          </GridItem>
                          < GridItem xs={10} sm={10} md={5} >
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
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={newyork3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <p>
                                Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                              </p>
                            </div>
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={newyork4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <p>
                                Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling. Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                              </p>
                            </div>
                          </GridItem>
                          <GridItem width='100%'>
                            <GalleryCarousel />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Prep",
                      tabIcon: ListAlt,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={ceremony2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={ceremony4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
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
                      tabButton: "Church",
                      tabIcon: LocalFlorist,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={ceremony2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={ceremony4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={reception}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={reception4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={reception5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}
