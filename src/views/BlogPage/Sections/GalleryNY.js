import React from "react";
// @material-ui/core components
import ImageGallery from 'react-image-gallery'
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import image from "assets/img/wedding/newyork.jpg"
import image2 from "assets/img/wedding/newyork2.jpg"
import image3 from "assets/img/wedding/newyork3.jpg"
import image4 from "assets/img/wedding/newyork4.jpg"
import image5 from "assets/img/wedding/newyork5.jpg"

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js"

const useStyles = makeStyles(styles);

export default function GalleryNY() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h4>See all images from New York</h4>
          </div>
          <GridContainer>
            <GridItem xs={4} sm={4} md={2}>
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <img
                src={image2}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={4} sm={4} md={2}>
              <img
                src={image3}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={4} sm={4} md={2}>
              <img
                src={image4}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={4} sm={4} md={2}>
              <img
                src={image5}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <GridItem xs={4} sm={4} md={2}>
                <img
                  src={image2}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <img
                  src={image5}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <GridItem xs={4} sm={4} md={2}>
                  <img
                    src={image4}
                    alt="..."
                    className={classes.imgRounded + " " + classes.imgFluid}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={2}>
                  <img
                    src={image}
                    alt="..."
                    className={classes.imgRounded + " " + classes.imgFluid}
                  />
                  <img
                    src={image2}
                    alt="..."
                    className={classes.imgRounded + " " + classes.imgFluid}
                  />
                </GridItem>
              </GridItem>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div >
  );
}
