import React, { useState } from 'react';
import "./TabsAccount.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import change from "./../../assets/images/change.svg";
import plus from "./../../assets/images/plus.svg";
import TicketsFlights from '../../Components/TicketsFlights/TicketsFlights';
import CryptoJS from 'crypto-js';
import PaymentMethods from '../PaymentMethods/PaymentMethods'
export default function TabsAccount() {
    const [dataAccount, setDataAccount] = useState([
        {
            id: 1,
            accountSpan: "Name",
            accountParg: "John Doe",
            showButton: false,
            isEditing: false,
            inputType: "text"
        },
        {
            id: 2,
            accountSpan: "Email",
            accountParg: "john.doe@gmail.com",
            showButton: true,
            isEditing: false,
            inputType: "email"
        },
        {
            id: 3,
            accountSpan: "Password",
            accountParg: CryptoJS.AES.encrypt("mySecretPassword", 'secret key 123').toString(),
            showButton: false,
            isEditing: false,
            inputType: "password"
        },
        {
            id: 4,
            accountSpan: "Phone number",
            accountParg: "+1 000-000-0000",
            showButton: false,
            isEditing: false,
            inputType: "tel"
        },
        {
            id: 5,
            accountSpan: "Address",
            accountParg: "St 32 main downtown, Los Angeles, California, USA",
            showButton: false,
            isEditing: false,
            inputType: "text"
        },
        {
            id: 6,
            accountSpan: "Date of birth",
            accountParg: "01-01-1992",
            showButton: false,
            isEditing: false,
            inputType: "date"
        },
    ]);

    const [editedValues, setEditedValues] = useState({});
    const [decryptedPasswords, setDecryptedPasswords] = useState({});

    const handleEditClick = (id) => {
        const accountItem = dataAccount.find(item => item.id === id);
        if (accountItem.inputType === 'password' && !accountItem.isEditing) {
            const decrypted = CryptoJS.AES.decrypt(accountItem.accountParg, 'secret key 123').toString(CryptoJS.enc.Utf8);
            setEditedValues({
                ...editedValues,
                [id]: decrypted
            });
            setDecryptedPasswords({
                ...decryptedPasswords,
                [id]: decrypted
            });
        } else if (accountItem.inputType !== 'password' && !editedValues[id]) {
            setEditedValues({
                ...editedValues,
                [id]: accountItem.accountParg,
            });
        }
        setDataAccount(dataAccount.map(item =>
            item.id === id ? { ...item, isEditing: !item.isEditing } : item
        ));
    };

    const handleInputChange = (id, value) => {
        setEditedValues({
            ...editedValues,
            [id]: value,
        });
    };

    const handleSaveClick = (id) => {
        const updatedData = dataAccount.map(item => {
            if (item.id === id) {
                const encryptedValue = item.inputType === 'password' ? CryptoJS.AES.encrypt(editedValues[id], 'secret key 123').toString() : editedValues[id];
                return { ...item, accountParg: encryptedValue, isEditing: false };
            }
            return item;
        });
        setDataAccount(updatedData);
        setEditedValues({});
        setDecryptedPasswords({});
    };

    return (
        <div className='MS-TabContainer'>
            <Tabs
                defaultActiveKey="Account"
                id="uncontrolled-tab-example"
                className="mb-3 MS-tabs MS-TabAccount"
            >
                <Tab eventKey="Account" title={<span className="MS-span MS-border2">Account</span>} className="Ms-tabhome">
<h6 className='MS-HeaderAccount'>Account</h6>
                    <div className='MS-infoAcount' data-aos="zoom-in">
                        {dataAccount.map((accountCard) => (
                            <div className='MS-accountCard' key={accountCard.id}>
                                <div className='MS-infoDescription'>
                                    <span>{accountCard.accountSpan}</span>
                                    {accountCard.isEditing ? (
                                        <input
                                            type={accountCard.inputType}
                                            value={editedValues[accountCard.id]}
                                            onChange={(e) => handleInputChange(accountCard.id, e.target.value)}
                                            className='MS-input-filed'
                                            required={accountCard.inputType !== 'text'}
                                        />
                                    ) : (
                                        <p>{accountCard.inputType === 'password' ? '*********' : accountCard.accountParg}</p>
                                    )}
                                </div>
                                <div>
                                    {accountCard.showButton && <button className='MS-accountbtn  MS-accountbtn1'><img src={plus} alt="plus" />Add another email</button>}
                                    <button
                                        className='MS-accountbtn'
                                        onClick={() => accountCard.isEditing ? handleSaveClick(accountCard.id) : handleEditClick(accountCard.id)}
                                    >
                                        <img src={change} alt="change" />{accountCard.isEditing ? 'Save' : 'Change'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Tab>
                <Tab eventKey="History" title={<span className="MS-span MS-border2">History</span>}>
                    <TicketsFlights />
                </Tab>
                <Tab eventKey="Payment methods" title={<span className="MS-span">Payment methods</span>}>
                    <PaymentMethods />
                </Tab>
            </Tabs>
        </div>
    );
}