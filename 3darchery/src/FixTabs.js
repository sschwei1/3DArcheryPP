import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {} from "react-bootstrapt"
import React, {useState} from "react";

const ControlledTabs = () => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="home" title="Home">
            </Tab>
            <Tab eventKey="profile" title="Profile">
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            </Tab>
        </Tabs>
    );
}

export default ControlledTabs;