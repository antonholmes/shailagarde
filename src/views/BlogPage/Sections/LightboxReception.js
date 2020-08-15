import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import { title } from "assets/jss/material-kit-react.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image from 'assets/img/wedding/reception/Reception-02540.jpg'
import image2 from 'assets/img/wedding/reception/Reception-8907.jpg'
import image3 from 'assets/img/wedding/reception/Reception-8911.jpg'
import image4 from 'assets/img/wedding/reception/Reception-8915.jpg'
import image5 from 'assets/img/wedding/reception/Reception-8918.jpg'
import image6 from 'assets/img/wedding/reception/Reception-8927.jpg'
import image7 from 'assets/img/wedding/reception/Reception-8928.jpg'
import image8 from 'assets/img/wedding/reception/Reception-8971.jpg'
import image9 from 'assets/img/wedding/reception/Reception-8979.jpg'
import image10 from 'assets/img/wedding/reception/Reception-8985.jpg'
import image11 from 'assets/img/wedding/reception/Reception-8993.jpg'
import image12 from 'assets/img/wedding/reception/Reception-9037.jpg'
import image13 from 'assets/img/wedding/reception/Reception-9041.jpg'
import image14 from 'assets/img/wedding/reception/Reception-16553.jpg'
import image15 from 'assets/img/wedding/reception/Reception-140537.jpg'
import image16 from 'assets/img/wedding/reception/Reception-141713.jpg'
import image17 from 'assets/img/wedding/reception/Reception-142103.jpg'
import image18 from 'assets/img/wedding/reception/Reception-142803.jpg'
import image19 from 'assets/img/wedding/reception/Reception-143919.jpg'
import image20 from 'assets/img/wedding/reception/Reception-161828.jpg'
import { SRLWrapper } from "simple-react-lightbox";

export default function LightboxReception() {
  return (
    <div>
      <SRLWrapper>
        <div className={title}>
          <h3>View slideshow (20 photos)</h3>
        </div>
        <img src={image} alt='New York City Hall' width='80rem' height='120rem' />
        <img src={image2} alt='Makeup while waiting in line' width='80rem' height='120rem' />
        <img src={image3} alt='New York City Hall' width='80rem' height='120rem' />
        <img src={image4} alt='Marriage Hall' width='80rem' height='120rem' />
        <img src={image5} alt='With the marriage certificate' width='80rem' height='120rem' />
        <img src={image6} alt='Anti-Migraine Team' width='80rem' height='120rem' />
        <img src={image7} alt='A few minutes away from City Hall' width='80rem' height='120rem' />
        <img src={image8} alt='New York' width='80rem' height='120rem' />
        <img src={image9} alt='About-to-be-married-couples' width='80rem' height='120rem' />
        <img src={image10} alt='With Mark and Beanne, our angels' width='80rem' height='120rem' />
        <img src={image11} alt='You may now kiss the bride' width='80rem' height='120rem' />
        <img src={image12} alt='Proud couple' width='80rem' height='120rem' />
        <img src={image13} alt='$5 flowers' width='80rem' height='120rem' />
        <img src={image14} alt='New York Bride' width='80rem' height='120rem' />
        <img src={image15} alt='Photobooth' width='80rem' height='120rem' />
        <img src={image16} alt='Brooklyn Kiss' width='80rem' height='120rem' />
        <img src={image17} alt='Brooklyn Bridge' width='80rem' height='120rem' />
        <img src={image18} alt='Brooklyn Bridge' width='80rem' height='120rem' />
        <img src={image19} alt='Brooklyn Bridge' width='80rem' height='120rem' />
        <img src={image20} alt='Brooklyn Bridge' width='80rem' height='120rem' />
      </SRLWrapper>
    </div>
  )
}
