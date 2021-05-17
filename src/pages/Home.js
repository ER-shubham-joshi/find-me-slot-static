import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import {
  InputLabel,
  Switch,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  FormControlLabel,
  Chip,
} from "@material-ui/core/";
import "./Home.css";

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

export default function Home() {
  let history = useHistory();
  let [message, setMessage] = useState("");

  if (
    window.localStorage.getItem("isAuthenticated")
      ? window.localStorage.getItem("isAuthenticated") === "false"
      : true
  ) {
    history.push("/login");
  }

  const classes = useStyles();

  const [alert, setAlert] = useState(false);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [stateId, setState] = useState("");
  const [districtId, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [freeze, setFreeze] = useState(false);

  useEffect(() => {
    fetchStates();
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      let res = await fetch("/api/getDataForUI/subscriptionInfo");
      let resp = await res.json();
      if (!res.ok) {
        setMessage(resp.message);
        return;
      }
      setMessage("");
      let { email, stateId, districtId, pincode, age, subscribed } = resp.data;
      setEmail(email);
      if (stateId) {
        fetchDistricts(stateId);
      }
      setDistrict(districtId || "");
      setState(stateId || "");
      setPincode(pincode || "");
      setAge(age || "");
      setAlert(subscribed);
    } catch (oError) {
      setMessage(oError.message);
    }
  };

  const fetchStates = async () => {
    try {
      let res = await fetch("/api/getDataForUI/states");
      let resp = await res.json();
      if (!res.ok) {
        setMessage(resp.message);
        history.push("/login");
        return;
      }
      setMessage("");
      setStates(resp.data.states);
    } catch (oError) {
      setMessage(oError.message);
    }
  };

  const handleChangeAlert = (event) => {
    setFreeze(true);
    if (!alert) {
      subscribe();
    } else {
      unsubscribe();
    }
    setTimeout(() => {
      setFreeze(false);
    }, 1000 * 10);
  };

  const subscribe = async () => {
    try {
      let data = {
        email,
        districtId,
        stateId,
        pincode: pincode ? parseInt(pincode) : undefined,
        age: age ? parseInt(age) : undefined,
      };
      let res = await fetch(`/api/user/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

  const unsubscribe = async () => {
    try {
      let data = {
        email,
      };
      let res = await fetch(`/api/user/unsubscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

  const handleChangeState = (event) => {
    let stateId = event.target.value;
    setState(stateId);
    fetchDistricts(stateId);
  };

  const fetchDistricts = async (stateId) => {
    try {
      let res = await fetch(`/api/getDataForUI/district?stateId=${stateId}`);
      let resp = await res.json();
      if (!res.ok) {
        setMessage(resp.message);
        return;
      }
      setMessage("");
      setDistricts(resp.data.districts);
    } catch (oError) {
      setMessage(oError.message);
    }
  };

  const handleChangeDistrict = (event) => {
    let districtId = event.target.value;
    setDistrict(districtId);
  };

  const handleChangePincode = (event) => {
    let pincode = event.target.value;
    setPincode(pincode);
  };

  const handleChangeAge = (event) => {
    let age = event.target.value;
    setAge(age);
  };

  const fetchSessions = async () => {
    try {
      let res = await fetch(
        `/api/session?districtId=${districtId}&age=${age}&pincode=${pincode}`
      );
      let resp = await res.json();
      if (!res.ok) {
        setMessage(resp.message);
        setSessions([]);
        return;
      }
      setMessage("");
      setSessions(resp.data);
    } catch (oError) {
      setMessage(oError.message);
    }
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
          <Chip label={email} color="primary" />
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
              Find next available vaccine slot
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              To get alerts at your email, switch on the alert.
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
                    label="Alert"
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
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Vaccine slot
                  </Typography>
                  <FormControl variant="outlined" className="formControl">
                    <InputLabel id="state-label">State</InputLabel>
                    <Select
                      labelId="state-label"
                      id="state-select"
                      value={stateId}
                      onChange={handleChangeState}
                      label="State"
                    >
                      {states &&
                        states.map((state) => (
                          <MenuItem key={state.state_id} value={state.state_id}>
                            {state.state_name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className="formControl">
                    <InputLabel id="district-label">District</InputLabel>
                    <Select
                      labelId="district-label"
                      id="district-select"
                      value={districtId}
                      onChange={handleChangeDistrict}
                      label="District"
                    >
                      {districts &&
                        districts.map((district) => (
                          <MenuItem
                            key={district.district_id}
                            value={district.district_id}
                          >
                            {district.district_name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" className="formControl">
                    <TextField
                      id="pincode"
                      label="Pincode"
                      variant="outlined"
                      value={pincode}
                      onChange={handleChangePincode}
                    />
                  </FormControl>
                  <FormControl variant="outlined" className="formControl">
                    <TextField
                      id="age"
                      label="Age"
                      variant="outlined"
                      value={age}
                      onChange={handleChangeAge}
                    />
                  </FormControl>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={fetchSessions}>
                    Find Slots
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={12} md={12} className={classes.slotContent}>
              {message && <Chip label={message} color="secondary" />}
              {sessions.length > 0 && (
                <TableContainer component={Paper}>
                  <Table className="table" aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Center Name</TableCell>
                        <TableCell align="right">Center Address</TableCell>
                        <TableCell align="right">Pincode</TableCell>
                        <TableCell align="right">Vaccine Name</TableCell>
                        <TableCell align="right">Available Vaccines</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sessions &&
                        sessions.map((row) => (
                          <TableRow key={row.session_id}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">{row.pincode}</TableCell>
                            <TableCell align="right">{row.vaccine}</TableCell>
                            <TableCell align="right">
                              {row.available_capacity}
                            </TableCell>
                            <TableCell align="right">
                              {row.min_age_limit}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
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
