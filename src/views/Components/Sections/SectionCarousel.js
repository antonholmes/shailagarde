import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/wedding/lakeshore.jpg";
import image2 from "assets/img/wedding/lakeshore2.jpg";
import image3 from "assets/img/wedding/ceremony.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Latest Post</h2>
        <GridContainer>
          <GridItem xs={16} sm={16} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <Link to="/holmes" replace
                      color="transparent"
                      className={classes.title}
                    >
                      <h4>
                        Read more
                    </h4>
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <Link to="/holmes"
                      color="transparent"
                    >
                      <h4>
                        Read more
                    </h4>
                    </Link>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <Link to="/holmes"
                      color="transparent"
                    >
                      <h4>
                        Read more
                    </h4>
                    </Link>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
