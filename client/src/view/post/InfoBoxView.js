import React from "react";

import "./InfoBoxView.css";

function InfoBoxView(numMembers) {
    return (
        <div className="info-box">
            <div className="info-box-main">
                <div className="info-box-title">Mathematics and Statistics</div>
                <div className="info-box-content">
                    Mathematics and Statistics Theory and Application. We share and discuss content that mathematicians and statisticians find interesting. People from all walks of life are welcome, including hobbyists, professionals, scholars and outsiders.
                </div>
                <div className="info-box-stats">
                    <div className="info-box-num-members"><strong>{numMembers}</strong><br/>Members</div>
                </div>
                <div className="info-box-rules">
                    <div className="info-box-rules-title">Rules and Etiquettes</div>
                    <div className="info-box-rules-body"></div>
                </div>
                <div className="info-box-moderators">
                    <div className="info-box-moderators-title">Moderators</div>
                    <div className="info-box-modeators-body"></div>
                </div>
            </div>
        </div>
    );
}

export default InfoBoxView;