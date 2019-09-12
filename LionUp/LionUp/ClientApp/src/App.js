import React from 'react';
import LoginRegister from './components/Account/Login';
import Dashboard from './components/Account/Dashboard';
import NavMenu from './components/Account/NavMenu';
import styles from "react";
import { makeStyles } from '@material-ui/core/styles';


export class App extends React.Component {
    render() {
        return (
            <view>
                <div>
                    <LoginRegister/>
               </div>
               
                </view>
        );
    }
}

export default App;
