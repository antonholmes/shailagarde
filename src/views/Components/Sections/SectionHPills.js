import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Loyalty from "@material-ui/icons/Loyalty";
import PermCameraMic from "@material-ui/icons/PermCameraMic";
import Face from "@material-ui/icons/Face";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <h2 className={classes.title}>About Me</h2>
          <GridContainer>
            <GridItem xs={16} sm={16} md={12} className={classes.navWrapper}>
              <NavPills
                color='rose'
                tabs={[
                  {
                    tabButton: "Journalism",
                    tabIcon: PermCameraMic,
                    tabContent: (
                      <span>
                        <p>
                          Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Lifestyle",
                    tabIcon: Loyalty,
                    tabContent: (
                      <span>
                        <p>
                          Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Mental Health",
                    tabIcon: Face,
                    tabContent: (
                      <span>
                        <p>
                          Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
