/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// import Button from "views/JournalismPage/Sections/node_modules/components/CustomButtons/Button.js.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HomeLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={10}
          duration={200}
          delay={1000}
          isDynamic={true}
          className={classes.navLink}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        // ignoreCancelEvents={false}
        >
          About
          </Link>
        <Link activeClass="active"
          to="journalism"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={10}
          duration={200}
          delay={1000}
          isDynamic={true}
          className={classes.navLink}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        // ignoreCancelEvents={false}
        >
          Journalism
          </Link>
        <Link activeClass="active"
          to="lifestyle"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={10}
          duration={200}
          delay={1000}
          isDynamic={true}
          className={classes.navLink}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        // ignoreCancelEvents={false}
        >
          Lifestyle
          </Link>
        <Link activeClass="active"
          to="mental-health"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={10}
          duration={200}
          delay={1000}
          isDynamic={true}
          className={classes.navLink}
        // onSetActive={this.handleSetActive}
        // onSetInactive={this.handleSetInactive}
        // ignoreCancelEvents={false}
        >
          Mental Health
          </Link>
        {/* <Link
          to="/#about"
          color="transparent"
          className={classes.navLink}
        >
          About
        </Link>
        <Link
          to="/journalism"
          color="transparent"
          className={classes.navLink}
        >
          Journalism
        </Link>
        <Link
          to="/lifestyle"
          color="transparent"
          className={classes.navLink}
        >
          Lifestyle
        </Link>
        <Link
          to="/mental-health"
          color="transparent"
          className={classes.navLink}
        >
          Mental Health
        </Link> */}
      </ListItem>
    </List>
  );
}
