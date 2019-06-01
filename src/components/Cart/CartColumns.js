import React from "react";
export default function  CartColumns() {
	return (
	  <div className="cartColumns container-fluid text-center d-none d-lg-block">
		    <div className="row">
			    <div className="col-10 mx-auto col-lg-2">
			      <p className="text-upper-case">products</p>
			    </div>
			    <div className="col-10 mx-auto col-lg-2">
			      <p className="text-upper-case">Name of product</p>
			    </div>
			    <div className="col-10 mx-auto col-lg-2">
			      <p className="text-upper-case">price</p>
			    </div>
			    <div className="col-10 mx-auto col-lg-2">
			      <p className="text-upper-case">quantity</p>
			    </div>
			    <div className="col-10 mx-auto col-lg-2">
			      <p className="text-upper-case">remove</p>
			    </div>
			    <div className="col-10 mx-auto col-lg-2">
			      <p className="text-upper-case">Total</p>
			    </div>
		   </div>
	   </div>
    );
  }
