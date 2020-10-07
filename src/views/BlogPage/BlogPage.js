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
import LightboxButton from './Sections/LightboxButton'
import SlideshowNY from './Sections/SlideshowNY'

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
                                Civil wedding. New York City. June 29, 2018.
                              </p>
                              <p>
                                Anton proposed on January 29 in Manila, a few days before we left for the US. We planned to visit loved ones in a couple of states, plus he wanted to take some short courses in software engineering. One random day (June 21), a few friends broached the idea of getting married at City Hall and we thought, hey, why not?
                              </p>
                              <p>
                                We got our marriage license on the 26th and set the date for the 29th, same as the proposal. We put together our outfits the night before: Anton’s suit was brought from Manila, along with the clip-on bowtie (₩1,000) bought in Seoul. I cut his hair. His leather boots were hand-me-downs from our hosts Arya and Lester. The only thing we bought for him was the dress shirt ($18) from a bargain department store called Century 21. My Silvian Heach lace dress ($70) and bag ($20) were also from Century 21.
                              </p>
                              <p>
                                My shoes ($34.95) are PRADA—we were told they were worth $1,800. I got them from Beacon’s Closet, a chain of ukay-ukay (thrift stores). I wanted my dress to come from there, too, but none fit me quite right. (I had to handstitch the neckline and pin the back straps of the dress I ended up getting, too.) Accessories were brought from Manila, except for the hat, which our friend Beanne got from Amazon as a gift.
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
                                We became fast friends with a Filipino couple from New Jersey, Mark and Beanne. As soon as we decided to get married, we knew they would be the ones we ask to be our witnesses. Anton and I both have relatives spread out in the US, but we wouldn’t have the time (or money) to organize everything in such a way that’s fair to both parties, so we decided it was just gonna be the four of us. We asked them over a Korean barbecue dinner (one of many). Beanne promptly ordered the hat soon after.
                              </p>
                              <p>
                                The morning of the wedding, we took the cab from Queens to City Hall and lined up. It was first-come, first-serve, so I did my makeup while in line. Mark and Beanne drove there early and happily helped us with whatever we needed: carrying our bags, documentation, cheering us on. They even got me a rental bouquet ($5) to take photos with!
                              </p>
                              <p>
                                We didn’t get rings, and we didn’t ask for anyone special to officiate. Our thinking was that this would be a quick and fuss-free wedding, with a “real” one later on surrounded with our family and friends and done in a more traditional way.
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
                                We were famished and parched after taking photos on the Brooklyn Bridge. It was a sweltering summer day! These two treated us to brunch at a place called Clinton Hall, near South Street Seaport in Manhattan’s financial district. Our “wedding cake” was called WTF Waffle (red velvet with lots of things on it). We had burgers, fries, sangria, and kamote fries with marshmallow dip. We also played Connect Four. Too bad we had to cut it short, as Anton had to go to a class in the afternoon.
                              </p>
                              <p>
                                A lot of unexpected things happened to us in the US. They run the gamut from awesome or funny or good to bad or ugly or traumatic. This wedding is in its own category: perfect. We wouldn’t have had it any other way.

                              </p>
                            </div>
                          </GridItem>
                          <GridItem xs={11} sm={11} md={11}>
                            <SlideshowNY />
                            {/* <SimpleReactLightbox> */}
                            {/* <GalleryCarouselNY /> */}
                            {/* <LightboxButton /> */}
                            {/* <LightboxNY /> */}
                            {/* </SimpleReactLightbox> */}
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
                                How a church wedding looks like when there’s a pandemic and you have three weeks to pull it off.
                              </p>
                              <p>
                                Bride and groom masks and face mask souvenirs by our friend Russell Villafuerte. He made all of these overnight and had them delivered the next day!
                              </p>
                              <p>
                                We chose rings with the help of Tita Aida Lazatin, a florist and renowned events stylist in Pampanga. We met, bonded, and booked her all at a wedding fair we randomly chanced upon sometime in July 2019 (more on this later). Her family’s jeweller went all the way from Bulacan to show us rings, and even gave us a discount. It took us but a few minutes to find something priced just right with a design we both love.
                              </p>
                              <p>
                                Dress, veil, cord and pillows by Tita Adora Revilloza of Adora Couture. We worked with her on a design and concept (let’s just call it “simple K-drama wedding”) which she executed wonderfully in less than a week, including fittings. Shai’s aunt, Ofel, was the one who introduced Tita Adora to us, and also the one who took care of the expenses as her wedding gift to us.
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
                                Hair and makeup by Dey Caisip. We also met him at that random wedding fair we didn’t plan on attending—Tita Aida excitedly led us to his booth. His work and his personality got us to book him on the spot.
                              </p>
                              <p>
                                That was in July 2019, when our wedding was set in December (more on this later). Even as it got pushed back to June 2020 and then again to July, Dey not only agreed to still do hair and makeup, but also gave us a better price.
                              </p>
                              <p>
                                We went to his salon in Angeles for the makeup trial and then went to Tita Adora’s atelier in Quezon City for the fitting. Our schedule was that type of tight.
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
                            <div className={classes.description}>
                              <p>
                                We booked Lakeshore in January 2019 after we got back from the US. We wanted the location to be logistically easy for everyone. Not in the traffic-jammed streets of Manila, but not in a far-flung countryside either. Somewhere near the airport and hotels for our guests from abroad. A place with a beautiful church that’s very near the reception venue. A location with a beautiful church and scenic surroundings for an easier shoot. Lakeshore, 20 minutes from our home in Pampanga, was an easy choice.
                              </p>
                              <p>
                                We had wanted our church wedding to be on June 29, exactly a year after New York City Hall. Then life happened and we had to push it back to December. Another 29th would’ve been nice—an anniversary to celebrate at the start (proposal in January), middle (civil wedding in June), and end (church wedding in December) of every year. But one of the few things we were unwilling to compromise on was that our videographer had to be Jason Magbanua, and he was already booked for December 29. We settled for the 27th.
                              </p>
                              <p>
                                Why Jason? Because we had been working in media/video production for years. We needed someone whose work and style we were familiar with so we wouldn’t have to worry about the video team on the day itself.
                              </p>
                            </div>
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
                                Bouquet by Villa Rosa, Tita Aida’s floral shop. If you google her, you’d find a post of two about Martha Stewart visiting the Lazatin ancestral home in Pampanga for lunch. The flowers you’d see are Tita Aida’s floral arrangements, and that house built in 1925 was where we met up with her to look at rings and bouquet pegs. Tita Aida made a matching boutonniere for Anton and sent ensaymadas and pigs in a blanket for us to munch on during prep. We lucked out on meeting such a lovely person by accident.
                              </p>
                              <p>
                                In a nutshell, after booking Lakeshore and Jason in January, nothing further happened with the wedding planning. Shai got a job as a GMA reporter in March while Anton started working freelance as a web developer. It wasn’t until July, on a random weekend while running errands, that we would chance upon a wedding fair in the mall and book our next supplier. (Just one. It was for the cake.) We admired a garden display on our way out, and a kindly lady there chatted us up and gave us floral tea. We ended up having a great time in that booth. If not for that, we probably wouldn’t have been able to have this wedding the way we did.
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
                                We couldn’t push through with the December 2019 wedding and had to push it back, again. June 29, 2020 this time. But by January, the Taal Volcano was throwing tantrums and by February, the COVID pandemic was starting. The situation looked less and less temporary when the entire country was placed on lockdown in March and the cases kept increasing.
                              </p>
                              <p>
                                Instead of us, it was Shai’s sister Miku who got married in June. It was a simple ceremony in Brisbane, on university grounds, in front of a handful of friends and witnessed by the rest of us via Zoom. We had already scheduled to meet with the Lakeshore team and the parish priest the day after that, and their wedding helped us with our decision to push through with our church wedding.
                              </p>
                              <p>
                                June 29 was impossible due to the three-Sunday rule of marriage banns in the Catholic Church. What was still possible was July 11 — another date that was meaningful to us during our courtship. We booked the church and set out to work on the marriage banns and other parish requirements, including finding an online Pre-Cana seminar we could attend. Anton was able to find one where we had to watch the talks online, write down our reflections, and email them to get a certificate.
                              </p>
                              <p>
                                Emboldened (or perhaps, rendered nonchalant by everything that’s happened so far), we also decided to contact the suppliers we’ve already booked, expecting nothing. Lakeshore was wide open for July 11. Jason readily said yes. Dey, too. Anton called Tita Aida for help with the bouquet and with looking for rings. Shai contacted Tita Adora for the dress, Russell Villafuerte for the masks. We arranged for medical certificates for all our guests: the priest allowed only our parents and siblings along with two sets of sponsors.
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
                            <div className={classes.description}>
                              <p>
                                Time was usually against us, but for this wedding, time seemed on our side. We called everyone on such short notice, but they were all aboe to deliver. Jason had another wedding to shoot on July 11 and almost had to beg off shooting ours. Thankfully, our suppliers and guests were patient and accommodating—we moved things around until we were able to find a common time where everyone can make it.
                              </p>
                              <p>
                                Ultimately, we had our wedding the way we truly wanted: bare-bones and intimate. Our parents were there. Their siblings and our siblings were our sponsors. Everyone else we wanted to invite had sent us their well wishes and gifts online.
                              </p>
                              <p>
                                And just like our New York wedding, this one wasn’t really planned, and turned out wonderfully.
                              </p>
                            </div>
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
