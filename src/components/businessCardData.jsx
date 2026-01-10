import React from "react";
import strategic_Icon from '../assets/icons/strategic_Icon.png';
import financial_Icon from '../assets/icons/financial_Icon.png';
import compliance_Icon from '../assets/icons/compliance_Icon.png';
import exit_strategic_Icon from '../assets/icons/exit_strategic_Icon.png';

const BusinessCardData = [
    {
        imgsrc: strategic_Icon,
        cardtitle: "Strategic Planning",
        cardtext: "Finalize the best form of the legal entity structure considering various factors.",
        btnname: "Read More",
        visit: '/about'
    },
    {
        imgsrc: financial_Icon,
        cardtitle: "Financial Advice",
        cardtext: "We are formulating financial processes and controls in conjunction with the client.",
        btnname: "Read More",
        visit: '/about'
    },
    {
        imgsrc: compliance_Icon,
        cardtitle: "The Compliance",
        cardtext: "All the policies, rules and controls to which an organization must conform.",
        btnname: "Read More",
        visit: '/about'
    },
    {
        imgsrc: exit_strategic_Icon,
        cardtitle: "Exit Strategy",
        cardtext: "In cases where the client is contemplating exiting the business his/her stake.",
        btnname: "Read More",
        visit: '/about'
    }
];


export default BusinessCardData;