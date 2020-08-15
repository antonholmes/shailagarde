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
import LightboxChurch from './Sections/LightboxChurch'
import LightboxLakeshore from './Sections/LightboxLakeshore'
import LightboxReception from './Sections/LightboxReception'

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
import reception from 'assets/img/wedding/reception/RECEPTION_1.jpg'
import reception2 from 'assets/img/wedding/reception/RECEPTION_2.jpg'
import reception3 from 'assets/img/wedding/reception/RECEPTION_3.jpg'
import reception4 from 'assets/img/wedding/reception/RECEPTION_4.jpg'
import reception5 from 'assets/img/wedding/reception/RECEPTION_5.jpg'
import reception6 from 'assets/img/wedding/reception/RECEPTION_6.jpg'
import reception7 from 'assets/img/wedding/reception/RECEPTION_7.jpg'
import reception8 from 'assets/img/wedding/reception/RECEPTION_8.jpg'
import reception9 from 'assets/img/wedding/reception/RECEPTION_9.jpg'
import reception10 from 'assets/img/wedding/reception/RECEPTION_10.jpg'
import reception11 from 'assets/img/wedding/reception/RECEPTION_11.jpg'
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
import lakeshore from 'assets/img/wedding/lakeshore/LAKESHORE_1.jpg'
import lakeshore2 from 'assets/img/wedding/lakeshore/LAKESHORE_2.jpg'
import lakeshore3 from 'assets/img/wedding/lakeshore/LAKESHORE_3.jpg'
import lakeshore4 from 'assets/img/wedding/lakeshore/LAKESHORE_4.jpg'
import lakeshore5 from 'assets/img/wedding/lakeshore/LAKESHORE_5.jpg'
import lakeshore6 from 'assets/img/wedding/lakeshore/LAKESHORE_6.jpg'
import lakeshore7 from 'assets/img/wedding/lakeshore/LAKESHORE_7.jpg'
import lakeshore8 from 'assets/img/wedding/lakeshore/LAKESHORE_8.jpg'
import lakeshore9 from 'assets/img/wedding/lakeshore/LAKESHORE_9.jpg'

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
      <Parallax filter video={"https://www.youtube.com/watch?v=teX_Z0h72cA"} />
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
            {/* <GridContainer justify="center">
              <Video src='https://www.youtube.com/watch?v=teX_Z0h72cA' />
            </GridContainer> */}
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
                                Anton proposed on January 29, 2018 shortly before leaving for the US. Anton would study software engineering and web development at Fullstack, while Shai would keep working as a freelance multimedia producer. Sometime in June we met a lawyer who thought we might have a chance at staying there based on our work experience, and that it might be easier if we were married (not knowing we were already engaged!)
                              <br />
                                <br />
                              That was June 21. We thought, sure! We may get to stay, we may not, but whatever happens, it should be fun!
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
                                We got our marriage license on June 26 and watched “Ocean’s 8” in Times Square instead of shopping for outfits (because movie tickets are $5 on Tuesdays—priorities!). The next day, we watched “Jurassic World” the next day (seats didn’t recline so AMC gave us free passes—priorities!) and finally scrambled on the 28th. As in, we walked around the city looking for a dress and shoes until we got to this department store Century 21 at 8pm and lined up at the counter just as it was gonna close.
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
                              src={newyork6}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <div className={classes.description}>
                              <p>
                                Anton’s outfit <br />
                                Suit - brought from Manila <br />
                                Bowtie - a 1000-won clip-on from Myeongdong <br />
                                Haircut - courtesy of Shai <br />
                                Leather boots - hand-me-down from a friend <br />
                                White dress shirt - $18 from Century 21 <br />
                                <br />
                              Shai’s outfit<br />
                              Hair and makeup - DIY<br />
                              Ivory lace dress - $70, from Silvian Heach at Century 21. Had to hand-stitch and pin the back to fit better<br />
                              Fascinator hat - friend bought it from Amazon as a gift<br />
                              Bouquet - $5 rental from City Hall, also their gift<br />
                              PRADA shoes - $34.95 (worth $1,800) from Beacon’s Closet, a chain of ukay shops around Williamsburg. Nice designer dresses there too, but none fit properly<br />
                              Accessories - brought from Manila
                              <br /><br />
                                We became really good friends with a Filipino couple from New Jersey, Mark and Beanne. We both have relatives in the US, but they’re spread out. To be fair to both parties, we asked Mark and Beanne to be our witnesses (at which point she ordered the hat). They not only agreed, but volunteered to help out with photos and other stuff.

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
                            <div className={classes.description}>
                              <p>
                                On the day itself, we took the cab from Queens to City Hall and lined up. It was first-come, first serve, so Shai did her makeup in line while in pambahay and tsinelas, then dressed later on when we had secured a slot.
                              <br />
                              We didn’t get rings, and we didn’t ask for anyone special to officiate. A City Hall official did it. Our thinking was that this would be a quick and fuss-free wedding, with a “real” one later on surrounded with our family and friends and done in a more traditional way.
                              </p>
                            </div>
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
                                On the day itself, we took the cab from Queens to City Hall and lined up. It was first-come, first serve, so Shai did her makeup in line while in pambahay and tsinelas, then dressed later on when we had secured a slot.
                              <br />
                              We didn’t get rings, and we didn’t ask for anyone special to officiate. A City Hall official did it. Our thinking was that this would be a quick and fuss-free wedding, with a “real” one later on surrounded with our family and friends and done in a more traditional way.
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
                                Photos were taken on the Brooklyn Bridge. It was a sweltering summer day!  Reception was at a bistro called Clinton Hall, near South Street Seaport FIDI. Our cake was called WTF Waffle (red velvet with a lot of things on it) and we had burgers, winter sangria, and kamote fries with marshmallow dip. So good. We played Connect-4.
                              <br />
                              Anton had to go to class in the afternoon, so we all parted ways after lunch.
                              <br />
                              Church wedding is planned for December 29, 2019 (January proposal, June civil wedding, December church wedding, all 29. We’d book-end the year with anniversaries!)

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
                          <GridItem xs={11} sm={11} md={11}>
                            <SimpleReactLightbox>
                              <LightboxChurch />
                            </SimpleReactLightbox>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Lakeshore",
                      tabIcon: DirectionsBoat,
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
                              src={lakeshore}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={lakeshore2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={lakeshore3}
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
                              src={lakeshore4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={lakeshore5}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={lakeshore6}
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
                              src={lakeshore7}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={lakeshore8}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={lakeshore9}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <SimpleReactLightbox>
                              <LightboxLakeshore />
                            </SimpleReactLightbox>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Reception",
                      tabIcon: Favorite,
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
                              src={reception4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reception6}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={reception5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reception7}
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
                              src={reception8}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reception10}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={10} sm={10} md={5}>
                            <img
                              alt="..."
                              src={reception9}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reception11}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <SimpleReactLightbox>
                              <LightboxReception />
                            </SimpleReactLightbox>
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
