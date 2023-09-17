import React from "react";
import App from "../App";

const Footer = () => {

    return(
        <>
        <div className="footer">
            
            <ul>
                <li className="first">Solution</li>
                <li>Marketing</li>
                <li>Analytics</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
            <ul>
                <li className="first">Support</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API Status</li>
            </ul>
            <ul>
                <li className="first">Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
            </ul>
            <ul>
                <li className="first">Legal</li>
                <li>Claim</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Conditions</li>
                
            </ul>
        </div>
        <div className="footer1">© 2023 My Company, Inc. All rights reserved.</div>
        </>
    )
}

export default Footer