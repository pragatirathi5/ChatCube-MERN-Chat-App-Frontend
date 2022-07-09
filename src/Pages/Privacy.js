import React from 'react';
import Navig from '../Components/Navig';
import "./Privacy.css";

const Privacy = () => {
  return (
    <div>
    <Navig />
    <br />
    <h1>Privacy Policy</h1>
    <br />
    {/* Dummy Privacy Policy Data */}
    <p className='para'>
        This privacy policy ("policy") will help you understand how [name] ("us", "we", "our") uses and protects the data you provide to us when you visit and use [website] ("website", "service").
We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
What User Data we collect when you visit the website?  We may collect the following data:
<br />
<br />
•	Your IP address.
<br />
•	Your contact information and email address.
<br />
•	Other information such as interests and preferences.
<br />
•	Data profile regarding your online behavior on our website.
<br />
<br />
Why We Collect Your Data ?
<br />
We are collecting your data for several reasons:
<br />
<br />
•	To better understand your needs.
<br />
•	To improve our services and products.
<br />
•	To send you promotional emails containing the information we think you will find interesting.
<br />
•	To contact you to fill out surveys and participate in other types of market research.
<br />
•	To customize our website according to your online behavior and personal preferences.
<br />
<br />
Safeguarding and Securing the Data:
<br />
<br />
[name] is committed to securing your data and keeping it confidential. [name] has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
<br />
<br />
Our Cookie Policy:
<br />
<br />
Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit).
The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.
<br />
<br />
Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.

    </p>
    <br />
    <br />
    <footer className='footerclass'>
        <p>Privacy Policy, 2022</p>
    </footer>
    </div>
  )
}

export default Privacy;