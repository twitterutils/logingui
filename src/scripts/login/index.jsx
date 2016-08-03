import React from 'react';
import {render} from 'react-dom';
import LoginButton from './components/LoginButton.jsx'
import LoginResult from './components/LoginResult.jsx'

render(
    <LoginButton />,
    document.getElementById("loginContainer")
);
render(
    <LoginResult />,
    document.getElementById("loginResultContainer")
);