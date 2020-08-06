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
import GalleryCarouselNY from './Sections/GalleryCarouselNY'
import LightboxNY from './Sections/LightboxNY'
import LightboxPrep from './Sections/LightboxPrep'

import SimpleReactLightbox from 'simple-react-lightbox'

import profile from "assets/img/wedding2.jpg"

import church from 'assets/img/wedding/church/CHURCH_1.jpg'
import church2 from 'assets/img/wedding/church/CHURCH_2.jpg'
import church3 from 'assets/img/wedding/church/CHURCH_3.jpg'
import church4 from 'assets/img/wedding/church/CHURCH_4.jpg'
import church5 from 'assets/img/wedding/church/CHURCH_5.jpg'
import church6 from 'assets/img/wedding/church/CHURCH_6.jpg'
import church7 from 'assets/img/wedding/church/CHURCH_7.jpg'
import church8 from 'assets/img/wedding/church/CHURCH_8.jpg'
import church9 from 'assets/img/wedding/church/CHURCH_9.jpg'
import church10 from 'assets/img/wedding/church/CHURCH_10.jpg'
import reception from 'assets/img/wedding/reception.jpg'
import reception2 from 'assets/img/wedding/reception2.jpg'
import reception3 from 'assets/img/wedding/reception3.jpg'
import reception4 from 'assets/img/wedding/reception4.jpg'
import reception5 from 'assets/img/wedding/reception5.jpg'
import newyork from 'assets/img/wedding/newyork/New York-1.jpg'
import newyork2 from 'assets/img/wedding/newyork/New York-2.jpg'
import newyork3 from 'assets/img/wedding/newyork/New York-3.jpg'
import newyork4 from 'assets/img/wedding/newyork/New York-4.jpg'
import newyork5 from 'assets/img/wedding/newyork/New York-5.jpg'
import newyork6 from 'assets/img/wedding/newyork/New York-6.jpg'
import newyork7 from 'assets/img/wedding/newyork/New York-7.jpg'
import newyork8 from 'assets/img/wedding/newyork/New York-8.jpg'
import newyork9 from 'assets/img/wedding/newyork/New York-9.jpg'
import prep from 'assets/img/wedding/prep/Preps-1.jpg'
import prep2 from 'assets/img/wedding/prep/Preps-2.jpg'
import prep3 from 'assets/img/wedding/prep/Preps-3.jpg'
import prep4 from 'assets/img/wedding/prep/Preps-4.jpg'
import prep5 from 'assets/img/wedding/prep/Preps-5.jpg'
import prep6 from 'assets/img/wedding/prep/Preps-6.jpg'
import prep7 from 'assets/img/wedding/prep/Preps-7.jpg'
import prep8 from 'assets/img/wedding/prep/Preps-8.jpg'
import prep9 from 'assets/img/wedding/prep/Preps-9.jpg'
import lakeshore from 'assets/img/wedding/lakeshore.jpg'
import lakeshore2 from 'assets/img/wedding/lakeshore2.jpg'

import styles from "assets/jss/material-kit-react/views/profilePage.js"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(styles)

export default function ProfilePage(props) {
  const classes = useStyles()
  const { ...rest } = props
  const imageClasses = classNames(
    classes.imgFluid,
    classes.imgGallery
  );
  const navImageClasses = classNames(classes.imgFluid, classes.imgGallery)
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
      <div className={classNames(classes.main)}>
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
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={newyork2}
                              className={navImageClasses}
                            />
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
                            <img
                              alt="..."
                              src={newyork5}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
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
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={newyork7}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={newyork8}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={newyork9}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <SimpleReactLightbox>
                              {/* <GalleryCarouselNY /> */}
                              <LightboxNY />
                            </SimpleReactLightbox>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Prep",
                      tabIcon: ListAlt,
                      tabContent: (
                        <GridContainer justify="center">
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
                              src={prep}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={prep2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={prep3}
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
                              src={prep4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={prep5}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={prep6}
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
                              src={prep7}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={prep8}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={prep9}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <SimpleReactLightbox>
                              {/* <GalleryCarouselNY /> */}
                              <LightboxPrep />
                            </SimpleReactLightbox>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Church",
                      tabIcon: LocalFlorist,
                      tabContent: (
                        <GridContainer justify="center">
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
                              src={church}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={church2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={church3}
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
                              src={church4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={church5}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={church6}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={church7}
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
                              src={church8}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={church9}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={church10}
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
      <SectionForm />
      <Footer />
    </div >
  );
}
