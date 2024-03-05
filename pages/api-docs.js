import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import apiSpec from 'pages/openapi/linearfox-openapi.yml';

const ApiDocs = () => {
    return (
        <div>
            <SwaggerUI spec={apiSpec} />
        </div>
    );
};

export default ApiDocs;