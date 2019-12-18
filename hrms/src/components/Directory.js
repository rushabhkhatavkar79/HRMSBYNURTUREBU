import React, { useEffect } from 'react';
import TabBar from './TabBar';
import Header from './Header';

function Directory(props) {
    var directory;
    useEffect(() => {
        if (!props.Directory) {
            props.getDirectory();
            // console.log("in if");
        }

        else {
            console.log(props.Directory);


        }
    })
    // console.log("out if");

    if (props.Directory) {
        directory = props.Directory.map(di => (
            <p>
                {/* key={di._id} */}
                {/* _id={di._id} */}
                employeeid={di.employeeid}
            </p>
        ));
    }

    return (
        <div>
            <div>
                {directory}
            </div>
        </div>
    )
}

export default Directory;