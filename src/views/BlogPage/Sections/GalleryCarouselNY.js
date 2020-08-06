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

import DataNewYork from './DataNewYork'

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
// import { SRLWrapper } from "simple-react-lightbox";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    // height: '125rem',
    // maxHeight: '125rem'
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>View slideshow (20 photos)</h3>
        </div>
        <GridContainer>
          <GridItem className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings} >
                {DataNewYork.map(tile => (
                  <div>
                    <img src={tile.img} alt={tile.title} className='slick-image' />
                  </div>
                ))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
