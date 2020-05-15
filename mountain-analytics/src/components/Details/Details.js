import React, {useContext, Fragment, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {VictoryPie, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel} from 'victory'
import {TrackerContext} from '../../App'
import SideNav from "../SideNav/SideNav";
import {getDomainData} from "../../services/api-helper-data"
import "./Details.css"
import {deleteDomain} from "../../services/api-helper-domain";

function Details() {
    const sharedStates = useContext(TrackerContext);
    const history = useHistory();
    const [metrics, setMetrics] = useState({});
    let loaded = metrics.hasOwnProperty("loadTimes");
    let hasData = false;
    let browserTotal = 0;
    let deviceTotal = 0;
    let loadTimePlotData = [{x:0, y:0}];

    if(loaded){
        browserTotal = metrics.browser.chrome +
                       metrics.browser.firefox +
                       metrics.browser.safari +
                       metrics.browser.ie +
                       metrics.browser.other;

        deviceTotal = metrics.deviceType.mobile +
                      metrics.deviceType.tablet +
                      metrics.deviceType.desktop;

        loadTimePlotData = metrics.loadTimes.data.time.map((time, index) => {
            return { x: index, y: time}
        });

        if(browserTotal > 0) hasData = true;
    }


    const selectedDomain = sharedStates.domains.find(domain => {
        return domain._id === sharedStates.selectedDomain;
    });

    useEffect(() => {
        getDomainData(sharedStates.token, selectedDomain._id).then(resp => {
            if(resp.status === 200){
                setMetrics(resp.metrics);

            }
        }).catch(err => {
            console.error(err)
        })
    }, []);

    const handleDelete = (domain) => {
        const body = {
            _id:domain._id,
            orgId:domain.orgId
        }
        deleteDomain(sharedStates.token, body).then(resp => {
            if (resp.status === 200) {
                sharedStates.setDomains(resp.domains);

            }
        }).catch(err => {
            console.error(err)
        });
        history.push("/domains")
    };

    // Copy the URL to user's clipboard
    const handleCopy = e => {
        console.log("Details: ", e.relatedTarget)
        let element = document.getElementById("userScript");
        element.select();
        document.execCommand("copy");
        e.target.focus();
        console.log("Copying item ", element);
    };

    const Script = (
        <Fragment>
            <div className="script">
                <div className="script__directions">
                    <h2>Script for {selectedDomain.name}</h2>
                    <p>Add this script to the bottom of the <span> &lt;body&gt; </span> tag of your website, then check back to see your data come alive!</p>
                </div>
                <div className="script__scriptContainer">
                    <textarea
                           readOnly
                           rows="2"
                           cols="95"
                           id="userScript"
                           value={`<script id="MountainAnalytics" src="https://cdn.jsdelivr.net/gh/jdevenish/MountainAnalytics-BE/cdn_script/analytics.js" async type="text/javascript" siteId="${selectedDomain._id}"></script>`}
                    />
                </div>
                <button
                    className="script__btn"
                    onClick={handleCopy}>Copy Script</button>
            </div>
        </Fragment>
    );

    const deviceType = ( loaded && hasData ? (
            <Fragment>
                <div className="browser">
                    <h1>Device Type Breakdown</h1>
                    <div className="browser__content">
                        <VictoryPie
                            data={[
                                {x: "Mobile", y: metrics.deviceType.mobile},
                                {x: "Tablet", y: metrics.deviceType.tablet},
                                {x: "Desktop", y: metrics.deviceType.desktop}
                            ]}
                            innerRadius={100}
                            style={{labels: {
                                    fontSize: 0
                                }}}
                            colorScale={[
                                "#45F957",
                                "#FF4E98",
                                "#FB9C44"
                            ]}
                        />
                        <div className="browser__labelContainer">
                            <ul className="browser__labels">
                                <li><div className="browser__circleIcon chrome-border"/>Mobile<span className="chrome-color">{((metrics.deviceType.mobile / deviceTotal)*100).toFixed(2)}%</span></li>
                                <li><div className="browser__circleIcon firefox-border"/>Tablet<span className="firefox-color">{((metrics.deviceType.tablet / deviceTotal)*100).toFixed(2)}%</span></li>
                                <li><div className="browser__circleIcon safari-border"/>Desktop<span className="safari-color">{((metrics.deviceType.desktop / deviceTotal)*100).toFixed(2)}%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        ) : ""
    );

    const browser = ( hasData ? (
            <Fragment>
                <div className="browser">
                    <h1>Browser Breakdown</h1>
                    <div className="browser__content">
                        <VictoryPie
                            data={[
                                {x: "Chrome", y: metrics.browser.chrome},
                                {x: "Firefox", y: metrics.browser.firefox},
                                {x: "Safari", y: metrics.browser.safari},
                                {x: "IE", y: metrics.browser.ie},
                                {x: "Other", y: metrics.browser.other}
                            ]}
                            innerRadius={100}
                            style={{labels: {
                                    fontSize: 0
                                }}}
                            colorScale={[
                                "#45F957",
                                "#FF4E98",
                                "#FB9C44",
                                "#44AEFB",
                                "#DEFF5C"
                            ]}
                        />
                        <div className="browser__labelContainer">
                            <ul className="browser__labels">
                                <li><div className="browser__circleIcon chrome-border"/>Chrome<span className="chrome-color">{((metrics.browser.chrome / browserTotal)*100).toFixed(2)}%</span></li>
                                <li><div className="browser__circleIcon firefox-border"/>Firefox<span className="firefox-color">{((metrics.browser.firefox / browserTotal)*100).toFixed(2)}%</span></li>
                                <li><div className="browser__circleIcon safari-border"/>Safari<span className="safari-color">{((metrics.browser.safari / browserTotal)*100).toFixed(2)}%</span></li>
                                <li><div className="browser__circleIcon ie-border"/>IE<span className="ie-color">{((metrics.browser.ie / browserTotal)*100).toFixed(2)}%</span></li>
                                <li><div className="browser__circleIcon other-border"/>Other<span className="other-color">{(metrics.browser.other / browserTotal).toFixed(2)*100}%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        ) : ""

    );

    const loadTimes = ( hasData ? (
            <Fragment>
                <div className="loadTimes">
                    <h1>Load Times (ms)</h1>
                    <div>
                       <svg viewBox="0 0 475 275">
                           <g >
                               <VictoryLabel
                                   x={125} y={25}
                                   text={`High: ${metrics.loadTimes.high}ms`}
                                   style={{
                                       fontFamily: "'Roboto'",
                                       fill: "white",
                                       fontSize: 10
                                   }}
                               />

                               <VictoryLabel
                                   x={200} y={25}
                                   text={`Low: ${metrics.loadTimes.low}ms`}
                                   style={{
                                       fontFamily: "'Roboto'",
                                       fill: "white",
                                       fontSize: 10
                                   }}
                               />

                               <VictoryLabel
                                   x={265} y={25}
                                   text={`Average: ${metrics.loadTimes.avg.toFixed(2)}ms`}
                                   style={{
                                       fontFamily: "'Roboto'",
                                       fill: "white",
                                       fontSize: 10
                                   }}
                               />

                               <VictoryAxis
                                    standalone={false}
                                    style={
                                        {
                                            axis: { stroke: "#44AEFB" , strokeWidth:3 },
                                            ticks: { strokeWidth: 0 },
                                            tickLabels: {
                                                fontSize: 0
                                            }
                                        }
                                    }
                                    />
                               <VictoryAxis dependentAxis
                                            domain={[100, (metrics.loadTimes.high+200)]}
                                            orientation="left"
                                            standalone={false}
                                            style={{
                                                axis: { stroke: "#44AEFB", strokeWidth:3 },
                                                ticks: { strokeWidth: 0 },
                                                tickLabels: {
                                                    fill: "#FFFFFF",
                                                    fontFamily: "inherit",
                                                    fontSize: 8
                                                }
                                            }}
                               />
                               <VictoryLine
                                   style={{
                                       data: {stroke: "#D2335c", stokeWidth: 3.5}
                                   }}
                                   minDomain={{y:25}}
                                   maxDomain={{y:(metrics.loadTimes.high + 150)}}
                                   standalone={false}
                                   interpolation="natural"
                                   data={loadTimePlotData}
                               />
                            </g>
                       </svg>
                    </div>
                </div>
            </Fragment>
        ) : ""

    );

    return (
        <div>
            <div className={hasData ? "main--details" : "main"}>
                <div className="main__side-menu">
                    <SideNav/>
                </div>
                <div className="main__content">
                    {Script}
                    <div className="details__pieContainer">
                        {browser}
                        {deviceType}
                    </div>
                    {loadTimes}
                    <button
                        className="details__deletebtn"
                        onClick={() => handleDelete(selectedDomain)}>Delete Domain</button>
                </div>
            </div>
        </div>
    );
}

export default Details;

