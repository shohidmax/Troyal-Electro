import React from "react";
import { Link } from "react-router-dom";

const Toolses = ({
  name,
  img,
  minorder,
  model,
  Stock_Qty,
  RPU,
  long_discription,
  clicked,
  _id
}) => {
  return (
    <div className="col-md-4">
      <div class="card m-2 p-2 w-100" >
        <img class="card-img-top image-fluid" src={img} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{long_discription}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Model : {model}</li>
          <li class="list-group-item">Price : {RPU}</li>
          <li class="list-group-item">Minimum Order : {minorder} pcs</li>
        </ul>
        <div class="card-body">
          
          <Link to={`/Purches/${_id}`}><button className="btn btn-primary w-50">purches</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Toolses;
