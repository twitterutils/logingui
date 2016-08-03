import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
            <AwesomeComponent />
            <p> Hello React being!</p>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
