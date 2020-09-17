import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import LibraryBooks from "@material-ui/icons/LibraryBooks"
import MenuBook from '@material-ui/icons/MenuBook'
import RssFeed from '@material-ui/icons/RssFeed'
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

// import profile from "assets/img/wedding2.jpg"

import styles from "assets/jss/material-kit-react/views/profilePage.js"
// import { Grid } from "@material-ui/core"

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
      <Parallax small filter image={require("assets/img/shai1.jpg")} />
      <div className={classNames(classes.main)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <h3 className={classes.title}>Published Works</h3>
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
                      tabButton: "Longform",
                      tabIcon: RssFeed,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/150/why-couldn-t-we-do-mass-testing-and-other-faqs-on-the-covid-19-beat-answered/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  ‘Why Couldn’t We Do Mass Testing?’
                                  and Other Frequently Asked Questions on the COVID-19 Beat, Answered
                              </p>
                                <small>May 14, 2020</small>
                              </a>
                            </div>
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/156/are-we-actually-ready-for-gcq-here-s-what-the-data-says/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  Are We Actually Ready for GCQ?
                                  Digging Deeper Into Backlogs, ‘Fresh’ vs. ‘Late’ Cases, and Other Issues Surrounding COVID-19 Data to Find Answers
                              </p>
                                <small>June 2, 2020</small>
                              </a>
                            </div>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Reports",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/150/why-couldn-t-we-do-mass-testing-and-other-faqs-on-the-covid-19-beat-answered/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  ‘Why Couldn’t We Do Mass Testing?’
                                  and Other Frequently Asked Questions on the COVID-19 Beat, Answered
                              </p>
                              </a>
                            </div>
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/156/are-we-actually-ready-for-gcq-here-s-what-the-data-says/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  Are We Actually Ready for GCQ?
                                  Digging Deeper Into Backlogs, ‘Fresh’ vs. ‘Late’ Cases, and Other Issues Surrounding COVID-19 Data to Find Answers
                              </p>
                              </a>
                            </div>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Magazines",
                      tabIcon: MenuBook,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/150/why-couldn-t-we-do-mass-testing-and-other-faqs-on-the-covid-19-beat-answered/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  ‘Why Couldn’t We Do Mass Testing?’
                                  and Other Frequently Asked Questions on the COVID-19 Beat, Answered
                              </p>
                              </a>
                            </div>
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/156/are-we-actually-ready-for-gcq-here-s-what-the-data-says/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  Are We Actually Ready for GCQ?
                                  Digging Deeper Into Backlogs, ‘Fresh’ vs. ‘Late’ Cases, and Other Issues Surrounding COVID-19 Data to Find Answers
                              </p>
                              </a>
                            </div>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Broadsheets",
                      tabIcon: LibraryBooks,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/150/why-couldn-t-we-do-mass-testing-and-other-faqs-on-the-covid-19-beat-answered/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  ‘Why Couldn’t We Do Mass Testing?’
                                  and Other Frequently Asked Questions on the COVID-19 Beat, Answered
                              </p>
                              </a>
                            </div>
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <a href="https://www.gmanetwork.com/news/specials/content/156/are-we-actually-ready-for-gcq-here-s-what-the-data-says/"
                                target="_blank"
                                rel='noopener noreferrer'
                                color="transparent">
                                <p>
                                  Are We Actually Ready for GCQ?
                                  Digging Deeper Into Backlogs, ‘Fresh’ vs. ‘Late’ Cases, and Other Issues Surrounding COVID-19 Data to Find Answers
                              </p>
                              </a>
                            </div>
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
