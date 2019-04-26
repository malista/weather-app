import React from "react";

import AsideMenu from '../AsideMenu/AsideMenu';
import MainLayout from '../MainLayout/MainLayout';

class AppLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppLayout;