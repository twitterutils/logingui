import React from 'react';
import SingleApiStatus from './SingleApiStatus.jsx';

class StatusContainer extends React.Component {
    render(){
        return (
            <div>
                <SingleApiStatus apiUrl="login/api/v1/status" apiName="Login Api V1" />
                <SingleApiStatus apiUrl="graph/api/v1/status" apiName="Graph Api V1" />
                <SingleApiStatus apiUrl="notifications/api/v1/status" apiName="Notifications Api V1" />
                <SingleApiStatus apiUrl="feed/api/v1/status" apiName="Feed Api V1" />
                <SingleApiStatus apiUrl="usernames/api/v1/status" apiName="Usernames Api V1" />
                <SingleApiStatus apiUrl="public/api/v1/status" apiName="Public Api V1" />
            </div>
        );
    }
}

export default StatusContainer;