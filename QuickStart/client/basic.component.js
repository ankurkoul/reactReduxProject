import React from 'react';

import Header from './header.component';//default
import { BodyComponent } from './body.component';//selective

export default class BasicComponent extends React.Component {
    render() {

        return (
            <div>
                <Header />
                <BodyComponent />
            </div>);
    }
}