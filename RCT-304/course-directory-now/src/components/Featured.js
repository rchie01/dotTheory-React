import React from 'react';
import { useParams } from 'react-router-dom'; 

const Featured = () => {
  let { topic, name } = useParams()

  return (
    <div className="main-content">
    {console.log(name)}
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;
