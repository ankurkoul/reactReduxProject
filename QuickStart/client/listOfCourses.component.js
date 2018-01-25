
import React from 'react';
import { CourseComponent } from './course.component';
export class ListOfCourse extends React.Component {
    constructor() {
        super();
        var dataOfPrice = 100;
        this.data1 = { name: "ReactJS", price: dataOfPrice };
        this.data2 = { name: "Angular", price: dataOfPrice * 2 }
    }
    render() {
        return (
            //   <CourseComponent name="ReactJS" price={dataOfPrice} />
            <div>
                <CourseComponent details={this.data1} />
                <CourseComponent details={this.data2} />
            </div>
        );
    }
}