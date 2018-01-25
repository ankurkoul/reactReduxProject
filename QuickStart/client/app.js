// Code Here

import React from 'react';
import ReactDOM from 'react-dom';
import BasicComponent from './basic.component';
import { CourseComponent } from './course.component';
import { ListOfCourse } from './listOfCoursesAsArray.component.js';
import { ShoppingCart } from './shoppingCart.component';
import { CustomButton } from './customButton.component';
import { ButtonList } from './buttonList.component';
import { PostsComponent } from './postsAgain.component';
//  basicElement= React.createElement(basic)
//ReactDOM.render(<BasicComponent />, document.getElementById("content"));
//var dataOfPrice = 1200;
//ReactDOM.render(listOFComponent, document.getElementById("content"));
//  ReactDOM.render(<CourseComponent name="ReactJS" price={dataOfPrice} /> , document.getElementById("content")ListOfCourse
//ReactDOM.render(<ListOfCourse />, document.getElementById("content"));
//ReactDOM.render(<ShoppingCart />, document.getElementById("content"));
//ReactDOM.render(<CustomButton initalCount={10} />, document.getElementById("content"));
//ReactDOM.render(<ButtonList />, document.getElementById("content"));
ReactDOM.render(<ListOfCourse />, document.getElementById("content"));