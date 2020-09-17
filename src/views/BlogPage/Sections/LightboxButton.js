import React from 'react'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'
import image from 'assets/img/wedding/newyork/ny-1.jpg'
import image2 from 'assets/img/wedding/newyork/ny-2.jpg'
import image3 from 'assets/img/wedding/newyork/ny-3.jpg'
import image4 from 'assets/img/wedding/newyork/ny-4.jpg'
import image5 from 'assets/img/wedding/newyork/ny-5.jpg'
import image6 from 'assets/img/wedding/newyork/ny-6.jpg'
import image7 from 'assets/img/wedding/newyork/ny-7.jpg'
import image8 from 'assets/img/wedding/newyork/ny-8.jpg'
import image9 from 'assets/img/wedding/newyork/ny-9.jpg'
import image10 from 'assets/img/wedding/newyork/ny-10.jpg'
import image11 from 'assets/img/wedding/newyork/ny-11.jpg'
import image12 from 'assets/img/wedding/newyork/ny-12.jpg'
import image13 from 'assets/img/wedding/newyork/ny-13.jpg'
import image14 from 'assets/img/wedding/newyork/ny-14.jpg'
import image15 from 'assets/img/wedding/newyork/ny-15.jpg'
import image16 from 'assets/img/wedding/newyork/ny-16.jpg'
import image17 from 'assets/img/wedding/newyork/ny-17.jpg'
import image18 from 'assets/img/wedding/newyork/ny-18.jpg'
import image19 from 'assets/img/wedding/newyork/ny-19.jpg'
import image20 from 'assets/img/wedding/newyork/ny-20.jpg'
import image21 from 'assets/img/wedding/newyork/ny-21.jpg'
import image22 from 'assets/img/wedding/newyork/ny-22.jpg'
import image23 from 'assets/img/wedding/newyork/ny-23.jpg'
import image24 from 'assets/img/wedding/newyork/ny-24.jpg'
import image25 from 'assets/img/wedding/newyork/ny-25.jpg'
import image26 from 'assets/img/wedding/newyork/ny-26.jpg'
import image27 from 'assets/img/wedding/newyork/ny-27.jpg'
import image28 from 'assets/img/wedding/newyork/ny-28.jpg'
import image29 from 'assets/img/wedding/newyork/ny-29.jpg'
import image30 from 'assets/img/wedding/newyork/ny-30.jpg'

const images = [
  {
    src: image,
    caption: 'New York City Hall'
  },
  {
    src: image2,
    caption: 'New York City Hall'
  },
  {
    src: image3,
    caption: 'New York City Hall'
  },
  {
    src: image4,
    caption: 'New York City Hall'
  },
  {
    src: image,
    caption: 'New York City Hall'
  },
]

const LightboxButton = props => {
  const { openLightbox } = useLightbox()

  return (
    <button
      onClick={() => openLightbox(props.imageToOpen)}
    >
      View Photos
    </button>
  )
}

export default LightboxButton
