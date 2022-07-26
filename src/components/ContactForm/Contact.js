import React from "react";
import { useState } from 'react';
import Button from "../Button/Button";
import './Contact.css'

function ContactForm() {
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState([]);
    const selCountry = ["Argentina", "Uruguay", "Brazil", "Chile", "Bolivia", "Paraguay", "Peru", "Other"];
    const checkList = ["Deposits", "Payments", "Coins", "Transfers", "Bug report", "Other"];
    const isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You submited:
                            ${inputs.firstname} ${inputs.lastname}
                            ${inputs.email}
                            ${inputs.phone}
                            Country: ${inputs.country}
                            ${checked}
                            ${inputs.message}
                            `)
      }
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        };

    return (
        <div className="formcontainer">
        <form onSubmit={handleSubmit}>
            <label>First name:
                <input
                type="text"
                name="firstname"
                value={inputs.firstname || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Last name: 
                <input
                type="text" 
                name="lastname"
                value={inputs.lastname || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Email: 
                <input
                type="email" 
                name="email"
                value={inputs.email || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Telephone: 
                <input
                type="text" 
                name="phone"
                value={inputs.phone || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Country: 
                <select
                    name="country" 
                    value={inputs.country || "Other"}
                    onChange={handleChange}
                    >
                        {selCountry.map((item, index) => {
                            return <option name={item} value={inputs.item}>{item}</option>
                        })}
                </select>
            </label>
            <div className="checkList">
                <div className="title">Subject:</div>
                    <div className="list-container">
                        {checkList.map((item, index) => (
                            <div key={index}>
                                <input value={item} type="checkbox" onChange={handleCheck} />
                                <span className={isChecked(item)}> {item}</span>
                            </div>
                        ))}
                </div>
            </div>
            <label>
                Message:
                <textarea 
                    name="message"
                    value={inputs.message || ""}
                    onChange={handleChange} />
            </label>
            <Button className="btn-xl">Submit</Button>
        </form>
        </div>
      )
}

export default ContactForm;