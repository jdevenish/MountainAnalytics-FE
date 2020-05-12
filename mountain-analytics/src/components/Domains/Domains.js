import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import {TrackerContext} from '../../App'
import SideNav from "../SideNav/SideNav";
import './Domains.css'
import {addDomain, getDomains} from "../../services/api-helper-domain";


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

    const handleSave = async (e) => {
        e.preventDefault();
        toggle();
        console.log("Creating new domain.. ", name);
        if(url.length > 3){
            const payload = {
                name: name,
                url: url,
                orgId: sharedStates.orgId
            };
            addDomain(sharedStates.token, payload).then(resp => {
                if(resp.status === 200){
                    sharedStates.setDomains(resp.domains)
                }
            }).catch(err => {
                console.error(err)
            })
        }
    };

    const handleDomainSelect = (domainId) => {
        sharedStates.setSelectedDomain(domainId);
    };

    const domainsList = sharedStates.domains.map((domain, index) => {
        return (
            <div className="singleDomain" key={index}>
                <div className="singleDomain__content">
                    <div className="singleDomain__nameAndStatus">
                        <h1>{domain.name}</h1>
                        <p>{domain.status}</p>
                    </div>
                    <div className="singleDomain__siteURL">
                        <a href={domain.url}>{domain.url}</a>
                    </div>
                    <div className="singleDomain__createdOn">
                        <h3>Created On</h3>
                        <p>{domain.createdOn}</p>
                    </div>
                </div>
                <div className="singleDomain__divider">
                </div>
                <div className="singleDomain__detailsContainer">
                    <Link
                        to={`/details/${domain._id}`}
                        onClick={() => handleDomainSelect(domain._id)}>
                        <div className="singleDomain__detailsBtn">Details</div>
                        <i className="singleDomain__detailsIcon material-icons">more_horiz</i>
                    </Link>
                </div>
            </div>
        )
    });

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
                        {domainsList}
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
