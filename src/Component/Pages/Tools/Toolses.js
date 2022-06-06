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


//   var myDiv = $('#trim');
// var myDivlength = myDiv.text().length;

// if(myDivlength>10){
//     myDiv.text(myDiv.text().substring(0,10));
//     myDiv.append(" ..." + '+');
// }



  return (
    <div className="col-md-4">
      <div className=" shadow-lg card m-2 p-2 w-100" >
        <img className="card-img-top image-fluid" style={{width: '100%', height: '300px'}} src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title " style={{height: '50px'}}>{name}</h5>
          <p>{`${long_discription.substring(200, long_discription)}... more`}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Model : {model}</li>
          <li className="list-group-item">Price : {RPU}</li>
          <li className="list-group-item">Minimum Order : {minorder} pcs</li>
        </ul>
        <div className="card-body">
          
          <Link to={`/Purches/${_id}`}><button className="btn btn-primary w-50">purches</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Toolses;
