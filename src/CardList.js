import React from 'react'

import Cards from './Cards';

function cardlist({info}) {
  console.log(info);
  return (
    <div className='IMG'  > 
    
    {info.map((el) => <Cards el={el}/>)}
    </div>
  )
}

export default cardlist