import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    root: {
        width: '15%',
        marginLeft: '80px',
        overflowX: 'auto',
    },
    table: {
        minWidth: '650',
    },

});

function createData(LeaveType, LeaveBalance) {
    return { LeaveType, LeaveBalance };
}

const rows = [
    createData('Paid Leave', '5'),
    createData('Work from Home (Monthly)', '0')
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <fieldset className={classes.root} style={{ border: "2px solid", height: '306px' }}>
            <legend style={{ width: "70%", marginLeft: 24, fontSize: "1rem" }}>My Leave Balance</legend>
            <Paper >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Leave Type</StyledTableCell>
                            <StyledTableCell align="right">Leave Balance (Days)</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <StyledTableRow key={row.LeaveType}>
                                <StyledTableCell component="th" scope="row">
                                    {row.LeaveType}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.LeaveBalance}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </fieldset>
    );
}