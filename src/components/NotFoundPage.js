import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h1> 404 page </h1>
    <Link className="button m-l-0" to="/">
      Go home
    </Link>
  </div>
);

export default NotFoundPage;
