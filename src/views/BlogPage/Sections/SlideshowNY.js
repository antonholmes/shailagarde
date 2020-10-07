import React from "react";
// @material-ui/core components
import ImageGallery from 'react-image-gallery'
// @material-ui/icons

import image from "assets/img/wedding/newyork/ny-1.jpg"
import image2 from "assets/img/wedding/newyork/ny-2.jpg"
import image3 from "assets/img/wedding/newyork/ny-3.jpg"
import image4 from "assets/img/wedding/newyork/ny-4.jpg"
import image5 from "assets/img/wedding/newyork/ny-5.jpg"

// core components
const images = [
  {
    original: { image }
  },
  {
    original: { image2 }
  },
  {
    original: { image3 }
  },
  {
    original: { image4 }
  },
  {
    original: { image5 }
  },
]
class SlideshowNY extends React.Component {
  render() {
    return <ImageGallery items={images} />
  }
}

export default SlideshowNY
