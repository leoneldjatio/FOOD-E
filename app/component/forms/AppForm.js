import React from 'react';
import {Formik} from "formik";

function AppForm({initialValues,validationSchema,onSubmit,children,enableReinitialize}) {
    return (
        <Formik
        enableReinitialize={enableReinitialize}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
     {()=>(<>{children}</>)}

        </Formik>
    );
}

export default AppForm;