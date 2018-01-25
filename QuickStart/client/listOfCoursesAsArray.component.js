
import React from 'react';
import { CourseComponent } from './course.component';
export class ListOfCourse extends React.Component {
    constructor() {
        super();
        var dataOfPrice = 1000;
        this.dataList = [{ name: "ReactJS", price: dataOfPrice }, { name: "Angular", price: dataOfPrice * 2 }]
    }
    render() {


        //1.creation

        var list = this.dataList.map((e, i) => <CourseComponent details={e} index={i + 1} />);


        //2.rendering
        return (
            //   <CourseComponent name="ReactJS" price={dataOfPrice} />
            <div>
                <CourseComponent />
                {list}
            </div>
        );
    }
}