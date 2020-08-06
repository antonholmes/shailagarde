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
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionHPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h2 className={classes.title}>About Me</h2>
          <GridContainer>
            <GridItem xs={16} sm={16} md={12}>
              <CustomTabs
                plainTabs
                headerColor='primary'
                tabs={[
                  {
                    tabName: "Journalism",
                    tabIcon: PermCameraMic,
                    tabContent: (
                      <span>
                        <p className={classes.textCenter}>
                          Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabName: "Lifestyle",
                    tabIcon: Loyalty,
                    tabContent: (
                      <span>
                        <p className={classes.textCenter}>
                          Shai Lagarde is a writer, multimedia journalist, creative consultant, stylist, and speaker trained in mental health counseling.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabName: "Mental Health",
                    tabIcon: Face,
                    tabContent: (
                      <span>
                        <p className={classes.textCenter}>
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
