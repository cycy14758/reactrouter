import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, } from 'react-router-dom';

import { Rating } from 'react-simple-star-rating';


function Cards({el}) {

  return (
    <div>
    <Card  className='card' style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={el.posterUrl} style={{ height: '200px' }} />
      <Card.Body  className='card-body'>
        <Card.Title className="card-title ">{el.title}</Card.Title>
        <Card.Text className='card-text '>
       {el.description}
        </Card.Text>
      </Card.Body>
    <Link  to={`/details/${el.id}`}   > <button>details</button></Link>
      <Rating iconsCount={5} readonly={true} initialValue={el.rating}/>
    </Card>
  
    </div>
  )
}

export default Cards