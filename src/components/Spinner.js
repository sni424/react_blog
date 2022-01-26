import React from "react";

function Spinner() {
    return (
        <>
            <div className="text-center">
                <div className="spinner-border" role="status">
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </>
    );
};

export default Spinner;