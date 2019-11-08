import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import data from "./data.json";

const headings = ['When', 'Who', 'Description'];


ReactDOM.render(
    <App data={data} title="Titulo de la App" headings={headings} />,
    document.getElementById('app')
);