import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox, Typography, Box, Link } from '@material-ui/core';
import { Face, Fingerprint, Person, Lock } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    },
    link: {
        color: 'white'
    }
}));

function Login(props) {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();

    let history = useHistory();

    const [employeeid, setemployeeid] = useState();
    const [password, setpassword] = useState();
    // const [empdbId, setempdbId] = useState(0);

    useEffect(() => {
        if (!props.Employees) {
            props.getMyEmployeeByLogin(employeeid, password);
        }
    })


    const handleChangeid = (employeeid) => {
        setemployeeid(employeeid)
    }

    const handleChangepw = (password) => {
        setpassword(password)
    }

    const handleLogin = (e) => {
        if (props.Employees) {
            history.push(`/home`)
        }
    }

    return (
        <Paper className={classes.padding}>
            <div className={classes.margin}>
                <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
                    <Grid container alignItems="center" justify="space-between" >
                        <Grid item>
                            <Typography >Sign In</Typography>
                        </Grid>
                        <Grid item>
                            <Link href="#" onClick={preventDefault} className={classes.link}>
                                <Typography >Forgot password</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Person />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Username"
                            type="text"
                            value={employeeid}
                            onChange={(e) => { handleChangeid(e.target.value) }}
                            fullWidth autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Lock />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="password" label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => { handleChangepw(e.target.value) }}
                            fullWidth required />
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button variant="outlined" color="primary"
                        style={{ textTransform: "none" }}
                        onClick={(e) => { handleLogin(e) }}
                    >Login</Button>
                </Grid>
            </div>
        </Paper >

    );
}



export default Login;;