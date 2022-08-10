// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useParams } from 'react-router-dom';

const Invoice = () => {
    const { id } = useParams();
    const [pro, setPro] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        const url = `https://shielded-beyond-98967.herokuapp.com/order/${id}`;
        fetch(url)
          .then((r) => r.json())
          .then((data) => setPro(data));
      }, []);

// console.log(pro);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    return (
        <div className='border solid-black m-4 p-4 '>
            <h1>Atif super mart </h1>
            <h4>Invoice number {pro._id}</h4>
            <h4>moobile number {pro.Number}</h4>
            <h4>order quntity: {pro.OrderQty}</h4>
            <h4>order Productname: {pro.Productname}</h4>
            <h4>order city: {pro.city}</h4>
            <h4>order daddress: {pro.daddress}</h4>
            <h4>order email: {pro.email}</h4>
            <h4>order houseno: {pro.houseno}</h4>
            <h4>order paid: {pro.paid? <span className='text-red'>paid</span>:<span>pending</span>}</h4>
            <h4>order payprice: {pro.payprice}</h4>
            <h4>order pmodel: {pro.pmodel}</h4>
            <h4>order state: {pro.state}</h4>
            <h4>order status: {pro.status}</h4>
            <h4>order transactionId: {pro.transactionId}</h4>
            <h4>order unitprice: {pro.unitprice}</h4>
            <h4>order username: {pro.username}</h4>
            <h4>order zipcode: {pro.zipcode}</h4>
            
            
            {
                // Number: "1785222154"
                // OrderQty: "250"
                // Productname: "Arduino UNO Mini Limited Edition"
                // city: "rajshahi"
                // daddress: "newbilshimla\ntarokhadia"
                // email: "shohidmax@gmail.com"
                // houseno: "125/398"
                // paid: true
                // payprice: 80000
                // pmodel: "ABX00062"
                // state: "Rajshahi"
                // status: "shipped"
                // transactionId: "pi_3L4MBcJL6kiX0L601NkALJFW"
                // unitprice: "320"
                // username: "pre mbo"
                // zipcode: "6000"
                // _id: "6291ee95ae1de6589aeb0eaf"
            }

            <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>


            
        </div>
    );
};

export default Invoice;
// Invoice();