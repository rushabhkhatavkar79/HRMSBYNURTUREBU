import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import './Apply-Leave.css';
import TextField from '@material-ui/core/TextField';
import Header from "./Header";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function MyLeave(props) {
  const classes = useStyles();
  let history = useHistory();
  const eid = props.Employees._id;
  const [leaveType, setleaveType] = useState();
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [comments, setcomments] = useState();

  useEffect(() => {
    if (!props.Leaves) {
      props.getMyLeaveById(eid);
    }
  }, []);

  let Leaves = undefined;
  let leaveBalance = undefined;
  if (props.Leaves) {
    Leaves = props.Leaves;
    leaveBalance = Leaves[0].leaveBalance;
  }
  console.log(Leaves);
  console.log(leaveBalance);

  const handleChangelt = (lt) => {
    setleaveType(lt);
    console.log(lt)
  }

  const handleChangefd = (fd) => {
    setfromDate(fd);
    console.log(fd)
  }

  const handleChangetd = (td) => {
    settoDate(td);
    console.log(td)
  }

  const handleChangec = (c) => {
    setcomments(c);
    console.log(c)
  }

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleApply = (e) => {
    props.createMyLeave(eid, leaveType, fromDate, toDate, comments);
    history.push(`/home`)
    console.log("leave applied");
  }

  return (
    <div className="leavePage">
      <Header />
      <br /><br />
      <Container>
        <Row>
          <Col>
            <div className="leavePage-content">
              <div className="leavePage-title">
                Apply Leave
                </div>
              <div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} controlId="formPlaintextType">
                    <Form.Label column sm="2">
                      Leave Type *
                      </Form.Label>
                    <Col sm="10">
                      <Form.Group as={Col} controlId="formGridState">
                        {/* <Form.Label>State</Form.Label> */}
                        <Form.Control as="select" value={leaveType}
                          onChange={(e) => { handleChangelt(e.target.value) }}>
                          <option>--Select--</option>
                          <option value="Paid Leave">Paid Leave</option>
                          <option value="Out of Office">Out of Office</option>
                          <option value="Optional">2019 Optional (19Apr/5Jun/12Aug/25Oct/29Oct)</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextLeaveBalance">
                    <Form.Label column sm="2">
                      Leave Balance
                      </Form.Label>
                    <Col sm="10">
                      <span>{leaveBalance}</span>
                    </Col>
                  </Form.Group>


                  <Form.Group as={Row} controlId="formFromDate">
                    <Form.Label column sm="2">
                      From Date *
                    </Form.Label>
                    <Col sm="10">
                      <TextField
                        id="fromDate"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={fromDate}
                        onChange={(e) => { handleChangefd(e.target.value) }}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formToDate">
                    <Form.Label column sm="2">
                      To Date *
                    </Form.Label>
                    <Col sm="10">
                      <TextField
                        id="toDate"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={toDate}
                        onChange={(e) => { handleChangetd(e.target.value) }}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formComment">
                    <Form.Label column sm="2">
                      Comment
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control as="textarea" rows="3" value={comments}
                        onChange={(e) => { handleChangec(e.target.value) }} />
                    </Col>
                  </Form.Group>

                  <Button type="submit" onClick={(e) => { handleApply(e) }}>Apply</Button>

                </Form>

              </div>
            </div>
          </Col>
        </Row>
        {/* 
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                My Leave List
                </Typography>
                
            </Toolbar>
            </AppBar> */}
      </Container>
    </div>
  );
}
export default MyLeave;