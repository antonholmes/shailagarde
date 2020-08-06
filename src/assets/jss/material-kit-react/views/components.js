import { container, title } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#F5F5F5",
    textAlign: "left"
  },
  title: {
    ...title,
    fontSize: "2.5rem",
    fontWeight: "700",
    fontFamily: `"Playfair Display", "Garamond", serif`,
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    fontWeight: '300',
    fontFamily: `"Playfair Display", "Garamond", serif`,
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#F5F5F5",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0), 0 6px 30px 5px rgba(0, 0, 0, 0), 0 8px 10px -5px rgba(0, 0, 0, 0)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
