import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import { title } from "assets/jss/material-kit-react.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image from 'assets/img/wedding/reception/Reception-1.jpg'
import image2 from 'assets/img/wedding/reception/Reception-2.jpg'
import image3 from 'assets/img/wedding/reception/Reception-3.jpg'
import image4 from 'assets/img/wedding/reception/Reception-4.jpg'
import image5 from 'assets/img/wedding/reception/Reception-5.jpg'
import image6 from 'assets/img/wedding/reception/Reception-6.jpg'
import image7 from 'assets/img/wedding/reception/Reception-7.jpg'
import image8 from 'assets/img/wedding/reception/Reception-8.jpg'
import image9 from 'assets/img/wedding/reception/Reception-9.jpg'
import image10 from 'assets/img/wedding/reception/Reception-10.jpg'
import image11 from 'assets/img/wedding/reception/Reception-11.jpg'
import image12 from 'assets/img/wedding/reception/Reception-12.jpg'
import image13 from 'assets/img/wedding/reception/Reception-13.jpg'
import image14 from 'assets/img/wedding/reception/Reception-14.jpg'
import image15 from 'assets/img/wedding/reception/Reception-15.jpg'
import image16 from 'assets/img/wedding/reception/Reception-16.jpg'
import image17 from 'assets/img/wedding/reception/Reception-17.jpg'
import image18 from 'assets/img/wedding/reception/Reception-18.jpg'
import image19 from 'assets/img/wedding/reception/Reception-19.jpg'
import image20 from 'assets/img/wedding/reception/Reception-20.jpg'
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
