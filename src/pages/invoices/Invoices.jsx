import Header from "../../components/header/Header"
import "./invoices.css"
import React from 'react'


const Invoices = () => {
  return (
    <div className="invoices">
        <Header title="INVOICES" btntitle="New"/>
        <div className="invoiceswrapper">invoice</div>
    </div>
  )
}

export default Invoices