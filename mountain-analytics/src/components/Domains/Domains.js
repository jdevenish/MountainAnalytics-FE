import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { TrackerContext } from '../../App'
import SideNav from "../SideNav/SideNav";
import './Domains.css'

function Domains() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [modal, setModal] = useState(false);

    const sharedStates = useContext(TrackerContext);

    const toggle = () => {
        setModal(!modal);
    };

    const handleURLChange = e => {
        setUrl(e.target.value)
    };

    const handleNameChange = e => {
        setName(e.target.value)
    };

    const handleSave = () => {
        toggle();
        console.log("Creating new domain.. ", name)
    };

    return (
        <div>
            <div className="landing-container">
                <div className="landing-left_padding">
                    <SideNav/>
                </div>
                <div className="landing-content_container">
                    <br/>
                    <h1>Domains</h1>
                    <div className="dashboard-site_table_container">
                        <div className="singleSite-container">
                            <div className="singleSite-info">
                                <div className="singleSite-name_status">
                                    <h1>Investmate</h1>
                                    <p>Active</p>
                                </div>
                                <div className="singleSite-url">
                                    <a href="http://https://investmate.netlify.app/">https://investmate.netlify.app/</a>
                                </div>
                                <div className="singleSite-created_on">
                                    <h3>Created On</h3>
                                    <p>05/04/2020</p>
                                </div>
                            </div>
                            <div className="singleSite-divider">
                            </div>
                            <div className="singleSite-details">
                                <Link to="/details/1">
                                    <div className="singleSite-details_button">Details</div>
                                    <i className="singleSite-details_icon material-icons">more_horiz</i>
                                </Link>
                            </div>
                        </div>
                        <div className="singleSite-container">
                            <div className="singleSite-info">
                                <div className="singleSite-name_status">
                                    <h1>Investmate</h1>
                                    <p>Active</p>
                                </div>
                                <div className="singleSite-url">
                                    <a href="http://https://investmate.netlify.app/">https://investmate.netlify.app/</a>
                                </div>
                                <div className="singleSite-created_on">
                                    <h3>Created On</h3>
                                    <p>05/04/2020</p>
                                </div>
                            </div>
                            <div className="singleSite-divider">

                            </div>
                            <div className="singleSite-details">
                                <Link to="/details/1">
                                    <div className="singleSite-details_button">Details</div>
                                    <i className="singleSite-details_icon material-icons">more_horiz</i>
                                </Link>
                            </div>
                        </div>
                        <div className="singleSite-container">
                            <div className="singleSite-info">
                                <div className="singleSite-name_status">
                                    <h1>Investmate</h1>
                                    <p>Active</p>
                                </div>
                                <div className="singleSite-url">
                                    <a href="http://https://investmate.netlify.app/">https://investmate.netlify.app/</a>
                                </div>
                                <div className="singleSite-created_on">
                                    <h3>Created On</h3>
                                    <p>05/04/2020</p>
                                </div>
                            </div>
                            <div className="singleSite-divider">

                            </div>
                            <div className="singleSite-details">
                                <Link to="/details/1">
                                    <div className="singleSite-details_button">Details</div>
                                    <i className="singleSite-details_icon material-icons">more_horiz</i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <i className="add_site material-icons" onClick={toggle}>add_circle</i>
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Add new domain</ModalHeader>
                        <ModalBody>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Name</InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Enter website name.."
                                    value={name}
                                    onChange={handleNameChange}/>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>URL</InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Enter the url.."
                                    value={url}
                                    onChange={handleURLChange}/>
                            </InputGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="save-btn" onClick={handleSave}>Save</Button>{' '}
                            <Button className="cancel-btn" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Domains;
