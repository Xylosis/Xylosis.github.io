import React from "react";

const Resume = () => {


    return(
        <div>
                <div style={{ height: '100vh' }}>
                    <iframe
                        src="/Andrew_Resume-42.pdf"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title="PDF Viewer"
                    ></iframe>
                </div>
        </div>
    );
};

export default Resume;