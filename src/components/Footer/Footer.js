/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow me on Instagram"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://instagram.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-instagram'} />
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-facebook"
                title="Follow me on Facebook"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://facebook.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-facebook'} />
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-twitter"
                title="Follow me on Twitter"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://twitter.com/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-twitter'} />
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-linkedin"
                title="Add me on LinkedIn"
                placement={window.innerWidth > 959 ? 'top' : 'left'}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://linkedin.com/in/shailagarde"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + ' fab fa-linkedin'} />
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , {" "}
          <Favorite className={classes.icon} /> Shai Lagarde
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
