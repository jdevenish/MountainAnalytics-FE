import React, {useContext, Fragment, useState, useEffect} from 'react';
import {TrackerContext} from '../../App'
import SideNav from "../SideNav/SideNav";
import {getDomainData} from "../../services/api-helper-data"
import './Dashboard.css'
import {VictoryPie, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel} from 'victory'


function Dashboard() {
    const sharedStates = useContext(TrackerContext);
    let hasData = false;
    if(sharedStates.domainDataArr.length > 0) hasData = true;
    let data = []
    let max = 0;
    let min = 10000;
    let nameId = [];
    let names = [];

    if(hasData){
        data = sharedStates.domainDataArr.map(domain => {
            if(domain.loadTimes.high > max) max = domain.loadTimes.high;
            if(domain.loadTimes.low < min) min = domain.loadTimes.low;
            nameId.push(domain.domainId);
            return domain.loadTimes.data.time.map((time,index) => {
                return { x: index, y: time}
            })
        })
    }

    const colors = ["#FB9C44", "#FF4E98", "#44AEFB", "#DEFF5C", "#45f957"];
    const graphs = data.map((currData, index) => {
        if(index < 5){
            return(
                <>
                    <VictoryLabel
                        x={350} y={5+(index*10)}
                        text={`${sharedStates.domains[index].name}`}
                        style={{
                            fontFamily: "'Roboto'",
                            fill: colors[index],
                            fontSize: 8
                        }}
                    />

                    <VictoryLine
                        key={index}
                        style={{
                            data: {stroke: colors[index], stokeWidth: 3.5}
                        }}
                        minDomain={{y:25}}
                        maxDomain={{y:(max + 50)}}
                        standalone={false}
                        interpolation="natural"
                        data={currData}
                    />
                </>
            )
        }
    });



    console.log(min, max)

    const loadTimes = ( hasData ? (
            <Fragment>
                <div className="loadTimes">
                    <h1>Load Times (ms)</h1>
                    <div>
                        <svg viewBox="0 0 475 275">
                            <g >



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
                                             domain={[min-100, max+100]}
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

                                {graphs}
                            </g>
                        </svg>
                    </div>
                </div>
            </Fragment>
        ) : ""
    );


    return (
        <div>
            <div className="main">
                <div className="main__side-menu">
                    <SideNav/>
                </div>
                <div className="main__content">
                    <h1>Dashboard</h1>
                    {loadTimes}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
