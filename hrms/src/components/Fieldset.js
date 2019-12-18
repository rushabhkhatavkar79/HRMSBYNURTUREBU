import React from 'react';




export default function FieldSetExample() {
    return (
        <div className="fieldset" style={{ bottom: 378 }}>

            <fieldset style={{ border: "2px solid", height: '306px' }}>
                <legend style={{ width: "70%", marginLeft: 24, fontSize: "1rem" }}>Upcoming Events</legend>
                <fieldset style={{ border: "2px solid", height: '253px', margin: '12px' }}>
                    <legend style={{ width: "70%", marginLeft: 24, fontSize: "1rem" }}>
                        Upcoming Public Holiday's
                </legend>

                    <p>25-12-2019  Christmas</p>
                </fieldset>

            </fieldset>
        </div>

    );

}
