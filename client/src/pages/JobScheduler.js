import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import {
  Switch,
  FormControl,
  TextField,
  FormControlLabel,
  Chip,
} from "@material-ui/core/";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        findmeslot
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    padding: "5% 10%",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  slotContent: {
    textAlign: "center",
  },
}));

export default function JobScheduler() {
  //   let history = useHistory();
  let [message, setMessage] = useState("");

  const classes = useStyles();

  const [alert, setAlert] = useState(false);
  const [freeze, setFreeze] = useState(false);

  const [adminPassword, setAdminPassword] = useState("");

  useEffect(() => {}, []);

  const handleChangeAlert = (event) => {
    setFreeze(true);
    if (!alert) {
      switchOnJob();
    } else {
      switchOffJob();
    }
    setTimeout(() => {
      setFreeze(false);
    }, 1000 * 10);
  };

  const switchOnJob = async () => {
    try {
      let res = await fetch("/api/cronJob/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminPassword}`,
        },
        body: "",
      });
      let resp = await res.json();
      if (!res.ok) {
        setMessage(resp.message);
        return;
      }
      setMessage("");
      setAlert(true);
    } catch (oError) {
      setMessage(oError.message);
    }
  };

  const switchOffJob = async () => {
    try {
      let res = await fetch("/api/cronJob/stop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminPassword}`,
        },
        body: "",
      });
      let resp = await res.json();
      if (!res.ok) {
        setMessage(resp.message);
        return;
      }
      setMessage("");
      setAlert(false);
    } catch (oError) {
      setMessage(oError.message);
    }
  };

  const handleChangeAdminPassword = (event) => {
    let pwd = event.target.value;
    setAdminPassword(pwd);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Find Me Slot
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Job Scheduler
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              You can switch on/off alert job here.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={alert}
                        onChange={handleChangeAlert}
                        name="alert"
                        color="primary"
                        disabled={freeze}
                      />
                    }
                    label="Alert Job"
                  />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* {message && <Chip label={message} />} */}
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <FormControl variant="outlined" className="formControl">
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="admin password"
                      label="Admin Password"
                      type="password"
                      id="adminPassword"
                      autoComplete="current-password"
                      value={adminPassword}
                      onChange={handleChangeAdminPassword}
                    />
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={12} md={12} className={classes.slotContent}>
              {message && <Chip label={message} color="secondary" />}
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Save India
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Lets get vaccinated!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
