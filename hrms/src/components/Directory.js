import React, { useEffect } from 'react';
import Header from './Header';
import { borderBottom } from '@material-ui/system';

function Directory(props) {
    var directory;
    useEffect(() => {
        if (!props.Directory) {
            props.getDirectory();
        } else {
            console.log(props.Directory);
        }
    })

    if (props.Directory) {
        directory = props.Directory.map(di => (
            <div style={{ borderBottom: "1px solid black" }}>

                <strong>
                    {di.employeeid},
                    {di && di.personalinfo ? di.personalinfo.fullname : null}
                </strong><br />
                <strong>Email: </strong>{di && di.contactinfo ? di.contactinfo.workemail : null},
                <strong>Mobile: </strong>{di && di.contactinfo ? di.contactinfo.mobile : null}<br />
                <strong>Project: </strong>{di && di.projectinfo ? di.projectinfo.projectdescription : null}
                <br />
            </div>
        ));
    }

    return (
        <div>
            <Header />
            <div style={{ display: "flex", borderBottom: "1px solid black" }}>Photo<div style={{ paddingLeft: 100 }}>Details</div></div>
            <div style={{ paddingLeft: 142 }}>
                {directory}
            </div>
            <br />
        </div>

    )
}

export default Directory;