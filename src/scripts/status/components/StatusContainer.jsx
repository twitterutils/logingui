import React from 'react';
import SingleApiStatus from './SingleApiStatus.jsx';

class StatusContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            endpoints: [
                {url: "/secure/login/api/v1/status", name: "Login Api V1"},
                {url: "/secure/graph/api/v1/status", name: "Graph Api V1"},
                {url: "/secure/schedule/api/v1/status", name: "Schedule Api V1"},
                {url: "/secure/notifications/api/v1/status", name: "Notifications Api V1"},
                {url: "/secure/feed/api/v1/status", name: "Feed Api V1"},
                {url: "/secure/usernames/api/v1/status", name: "Usernames Api V1"},
                {url: "/public/api/v1/status", name: "Public Api V1"}
            ]
        }
    }

    render(){
        var statusesElements = this.state.endpoints.map((e) => {
            return (
                <SingleApiStatus apiUrl={e.url} apiName={e.name} key={e.name}/>
            )
        })

        return (
            <div>
                {statusesElements}
            </div>
        );
    }
}

export default StatusContainer;