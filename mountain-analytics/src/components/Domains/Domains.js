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
            <div className="main">
                <div className="main__side-menu">
                    <SideNav/>
                </div>
                <div className="main__content">
                    <br/>
                    <h1>Domains</h1>
                    <div className="domain__listContainer">
                        <div className="singleDomain">
                            <div className="singleDomain__content">
                                <div className="singleDomain__nameAndStatus">
                                    <h1>Investmate</h1>
                                    <p>Active</p>
                                </div>
                                <div className="singleDomain__siteURL">
                                    <a href="http://https://investmate.netlify.app/">https://investmate.netlify.app/</a>
                                </div>
                                <div className="singleDomain__createdOn">
                                    <h3>Created On</h3>
                                    <p>05/04/2020</p>
                                </div>
                            </div>
                            <div className="singleDomain__divider">
                            </div>
                            <div className="singleDomain__detailsContainer">
                                <Link to="/details/1">
                                    <div className="singleDomain__detailsBtn">Details</div>
                                    <i className="singleDomain__detailsIcon material-icons">more_horiz</i>
                                </Link>
                            </div>
                        </div>
                        <div className="singleDomain">
                            <div className="singleDomain__content">
                                <div className="singleDomain__nameAndStatus">
                                    <h1>Investmate</h1>
                                    <p>Active</p>
                                </div>
                                <div className="singleDomain__siteURL">
                                    <a href="http://https://investmate.netlify.app/">https://investmate.netlify.app/</a>
                                </div>
                                <div className="singleDomain__createdOn">
                                    <h3>Created On</h3>
                                    <p>05/04/2020</p>
                                </div>
                            </div>
                            <div className="singleDomain__divider">
                            </div>
                            <div className="singleDomain__detailsContainer">
                                <Link to="/details/1">
                                    <div className="singleDomain__detailsBtn">Details</div>
                                    <i className="singleDomain__detailsIcon material-icons">more_horiz</i>
                                </Link>
                            </div>
                        </div>
                        <div className="singleDomain">
                            <div className="singleDomain__content">
                                <div className="singleDomain__nameAndStatus">
                                    <h1>Investmate</h1>
                                    <p>Active</p>
                                </div>
                                <div className="singleDomain__siteURL">
                                    <a href="http://https://investmate.netlify.app/">https://investmate.netlify.app/</a>
                                </div>
                                <div className="singleDomain__createdOn">
                                    <h3>Created On</h3>
                                    <p>05/04/2020</p>
                                </div>
                            </div>
                            <div className="singleDomain__divider">
                            </div>
                            <div className="singleDomain__detailsContainer">
                                <Link to="/details/1">
                                    <div className="singleDomain__detailsBtn">Details</div>
                                    <i className="singleDomain__detailsIcon material-icons">more_horiz</i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <i className="domain__addDomain material-icons" onClick={toggle}>add_circle</i>
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
