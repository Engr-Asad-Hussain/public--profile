import logo_user from './../logo/user_profile.png';
import logo_facebook from './../logo/facebook.svg';
import logo_github from './../logo/github.png';
import logo_linkedIn from './../logo/linkedIn.png';
import logo_location from './../logo/location.png';
import logo_email from './../logo/email.png';
import logo_call from './../logo/call.png';

import './leftCard.css';

function LeftCard() {
    return (
        <>
            <div className="sub-container-1 bg-color border">
                <img className="user-logo" src={logo_user} alt="user_profile" />
                <div className="user-profile bg-color">
                    <h1 className="blue">Asad Hussain</h1>
                    <p>Electronics Engineer</p>
                    <p>PEC No: ELECTRO/7836</p>
                </div>
                <div className="links-group bg-color">
                    <a href="https://www.linkedin.com/in/asad-hussain1998" target="_blank" rel="noreferrer"><img src={logo_linkedIn} alt="linkedIn" /></a>
                    <a href="https://github.com/Engr-Asad-Hussain" target="_blank" rel="noreferrer"><img src={logo_github} alt="github" /></a>
                    <a href="https://www.facebook.com/asadhussain1998/" target="_blank" rel="noreferrer"><img src={logo_facebook} alt="facebook" /></a>
                </div>
                <div className="details bg">
                    <div className="location">
                        <img src={logo_location} alt="location" />
                        <p>Karachi, Pakistan</p>
                    </div>
                    <div className="location anchor">
                        <img src={logo_email} alt="email" />
                        <a href="mailto:asad.h1998@yahoo.com">asad.h1998@yahoo.com</a>
                    </div>
                    <div className="location">
                        <img src={logo_call} alt="call" />
                        <p>+92 311 2425100</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftCard;
