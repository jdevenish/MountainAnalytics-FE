import React, {useContext, useState} from 'react';
import {TrackerContext} from '../../App'
import CreateAccount from "../Auth/CreateAccount";
import SideNav from "../SideNav/SideNav";
import './Landing.css'
import backgroundVid from "../../media/Black_-_13495_bugbes.mp4"
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

function Landing() {
    const [showCreateAccount, setShowCreateAccount] = useState(false)
    const sharedStates = useContext(TrackerContext);

    const handleSelectCreateAccount = () =>{
        setShowCreateAccount(true)
    };

    let registerContent = "";
    if(!sharedStates.loggedIn){
        if(showCreateAccount){
            registerContent = <CreateAccount/>
        } else{
            registerContent = <button onClick={handleSelectCreateAccount}>Create Account</button>;
        }
    }

    return (
        <div>
            <div className="main">
                <div className="main__side-menu">
                    {sharedStates.loggedIn ? <SideNav/> : ""}
                </div>
                <div className="main__content">
                    <div className="testing">
                        <div className="landing-video_container">
                            <video id="background-video" loop autoPlay>
                                <source src={backgroundVid} type="video/mp4" />
                            </video>
                        </div>
                        <div className="landing-welcome_text">
                            <h1>Mountain Analytics</h1>
                            <p>Make sense of your data so you can make better decisions..</p>
                            {registerContent}
                        </div>
                    </div>
                    <div className="landing-info_cards_container">
                        <Card className="landing-info_card">
                            <CardImg top width="100%" src="https://res.cloudinary.com/doaftkgbv/image/upload/v1589039878/completeInfo_gtvjqb.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Complete Info.</CardTitle>
                                <CardText>Understand your site and users to better understand how it's accessed and used.</CardText>
                            </CardBody>
                        </Card>
                        <Card className="landing-info_card">
                            <CardImg top width="100%" src="https://res.cloudinary.com/doaftkgbv/image/upload/v1589039878/Insights_bu3lwd.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Insights</CardTitle>
                                <CardText>Our unique insights allow you to  begin tailoring your designs to better fit the users.</CardText>
                            </CardBody>
                        </Card>
                        <Card className="landing-info_card">
                            <CardImg top width="100%" src="https://res.cloudinary.com/doaftkgbv/image/upload/v1589039878/Resutls_x4cmlg.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Results</CardTitle>
                                <CardText>Using the information and insights collected, begin to see measurable results as you focus on your target audience. </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Landing;
