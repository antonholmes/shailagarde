import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import { title } from "assets/jss/material-kit-react.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image from 'assets/img/wedding/preps/Preps-16.jpg'
import image2 from 'assets/img/wedding/preps/Preps-18.jpg'
import image3 from 'assets/img/wedding/preps/Preps-123.jpg'
import image4 from 'assets/img/wedding/preps/Preps-1167.jpg'
import image5 from 'assets/img/wedding/preps/Preps-1202.jpg'
import image6 from 'assets/img/wedding/preps/Preps-02339.jpg'
import image7 from 'assets/img/wedding/preps/Preps-02356.jpg'
import image8 from 'assets/img/wedding/preps/Preps-7573.jpg'
import image9 from 'assets/img/wedding/preps/Preps-11379.jpg'
import image10 from 'assets/img/wedding/preps/Preps-12070.jpg'
import image11 from 'assets/img/wedding/preps/Preps-102327.jpg'
import image12 from 'assets/img/wedding/preps/Preps-103102.jpg'
import image13 from 'assets/img/wedding/preps/Preps-103130.jpg'
import image14 from 'assets/img/wedding/preps/Preps-175045.jpg'
import image15 from 'assets/img/wedding/preps/Preps-1063313.jpg'
import image16 from 'assets/img/wedding/preps/Preps-1170021.jpg'
import image17 from 'assets/img/wedding/preps/Preps-1202855
import { SRLWrapper } from "simple-react-lightbox";

export default function LightboxPrep() {
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
        <img src={image18} alt='Before the reception' width='80rem' height='120rem' />
        <img src={image19} alt='Our witnesses/photographers' width='80rem' height='120rem' />
        <img src={image20} alt='Homebound' width='80rem' height='120rem' />
      </SRLWrapper>
    </div>
  )
}
