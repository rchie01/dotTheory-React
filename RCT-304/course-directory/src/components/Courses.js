import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink style={({isActive}) => isActive ? {backgroundColor: "tomato"} : undefined} to='html'>HTML</NavLink></li>
        <li><NavLink style={({isActive}) => isActive ? {backgroundColor: "dodgerblue"} : undefined} to='css'>CSS</NavLink></li>
        <li><NavLink style={({isActive}) => isActive ? {backgroundColor: "mediumseagreen"} : undefined} to='javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    <Outlet />
  </div>
);

export default Courses;
