import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, 
  Row, 
  Col,
  Form,
  Button,
} from 'react-bootstrap'
import {AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import './Apply-Leave.css';
import TextField from '@material-ui/core/TextField';
import Header from "./Header"

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })); 
   
function MyLeave(props) {
    const classes = useStyles();
    useEffect(()=>{
      if(!props.Leaves){
        console.log("herr");
      }
    })
    console.log(props);
    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    return(
        <div className="leavePage">
          <Header/>
          <br/><br/>
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
                        <Form.Control as="select">
                          <option>--Select--</option>
                          <option>Paid Leave</option>
                          <option>Out of Office</option>
                          <option>2019 Optional (19Apr/5Jun/12Aug/25Oct/29Oct)</option>
                        </Form.Control>
                      </Form.Group>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextLeaveBalance">
                      <Form.Label column sm="2">
                        Leave Balance
                      </Form.Label>
                      <Col sm="10">
                        <span>0.00</span>
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
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
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
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formComment">
                    <Form.Label column sm="2">
                      Comment
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control as="textarea" rows="3" />
                    </Col>
                  </Form.Group>

                  <Button type="submit">Apply</Button>

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