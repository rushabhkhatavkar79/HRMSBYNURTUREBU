import React, { Component, useEffect, useState } from 'react';
import {
    Typography, TextField, Radio, RadioGroup,
    FormControl, FormControlLabel, FormLabel, Divider, Button
}
    from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import moment from 'moment';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        "margin-left": 330,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        "margin-top": 20,
        // "MuiGrid-spacing-xs-8": {
        //     "MuiGrid-item":
        //     {
        //         padding: "16px",
        //     }

        // }
    },
    hd: {
        "text-align": "center",
        "margin": "16px",
    },
    bp: {
        "height": "870px",
        "width": "970px",
        "background-color": "#dcdcdc",
        "margin-top": "40px",
        "margin-left": "-100px"
    },
    container: {
        "margin": "auto",
    },
    button: {
        "margin-left": "35px"
    }

}));

const radioStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

function StyledRadio(props) {
    const classes = radioStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            disabled
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}


const PersonalInfo = (props) => {
    const classes = useStyles();
    const [dob, setdob] = useState();
    const [fname, setfname] = useState();
    const [mname, setmname] = useState();
    const [lname, setlname] = useState();
    const [gender, setgender] = useState("Male");

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    console.log(props);

    useEffect(() => {
        if (!props.PersonalInfo) {
            props.getAllPersonalInfos(props.Employees._id);
        }
        else if (props.PersonalInfo) {
            var obj = props.PersonalInfo;

            setdob(obj.dob);

            var nameobj = obj.fullname.split(" ")
            setfname(nameobj[0]);
            setmname(nameobj[1]);
            setlname(nameobj[2]);

            setgender(obj.gender);
            console.log(gender)
        }
    })

    return (

        <div className={classes.root}>
            <Paper className={classes.bp}>
                <Grid container spacing={3} alignItems="flex-end" className={classes.container}>
                    <Grid item xs={2} className={classes.hd} >
                        <Typography >Fullname: </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <TextField disabled id="fname" label="First name" className={classes.tf}
                                type="text"
                                value={fname}
                                autoFocus required
                                InputLabelProps={{
                                    shrink: true,
                                }} />

                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}>

                            <TextField disabled id="mname" label="Middle name" className={classes.tf}
                                type="text"
                                value={mname}
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </Paper>
                    </Grid>


                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <TextField disabled id="lrname" label="Last name" className={classes.tf}
                                type="text"
                                value={lname}
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </Paper>

                    </Grid>

                    <Grid item xs={6}>
                        <Button variant="contained" color="primary" className={classes.button} >
                            Edit
                        </Button>
                    </Grid>

                </Grid>
                <Divider />
                <Grid container spacing={3} alignItems="flex-end" className={classes.container}>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <TextField disabled
                                id="empid"
                                label="EmployeeId"
                                type="text"
                                value={props.Employees.employeeid}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required />
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" className={classes.button} >
                            Edit
                        </Button>
                    </Grid>

                </Grid>
                <Divider />
                <Grid container spacing={3} alignItems="flex-end" className={classes.container}>
                    <Grid item xs={2} className={classes.hd}>
                        <Typography >Gender: </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <RadioGroup row value={gender} aria-label="gender" name="customized-radios" >
                            <FormControlLabel disabled value="Female" control={<StyledRadio />} label="Female" />
                            <FormControlLabel disabled value="Male" control={<StyledRadio />} label="Male" />
                            <FormControlLabel disabled value="Other" control={<StyledRadio />} label="Other" />
                        </RadioGroup>
                    </Grid>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <KeyboardDatePicker
                                    disabled
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="dob"
                                    label="Date of birth"
                                    value={dob}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Paper>
                        </Grid>
                    </MuiPickersUtilsProvider>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" className={classes.button} >
                            Edit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>

    );
}

export default PersonalInfo;