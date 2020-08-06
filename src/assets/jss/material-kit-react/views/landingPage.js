import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    fontSize: '2.5rem',
    fontWeight: '700',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "auto 0"
  },
  main: {
    background: "#F5F5F5",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0), 0 6px 30px 5px rgba(0, 0, 0, 0), 0 8px 10px -5px rgba(0, 0, 0, 0)"
  }
};

export default landingPageStyle;
