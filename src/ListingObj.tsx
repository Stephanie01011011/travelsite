import React from 'react'

interface Locations {
    id: number,
    url: string,
    title: string,
    description: string,
    about: string
  
  }

function ListingObj() {
    const dests: Locations[] = [{
        id: 0,
        url: 'https://images.unsplash.com/photo-1584558701762-387e5d31e441?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bermuda',
        description: 'Under $150/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    },
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1495171081156-cc1209ddf6a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFndW5hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D',
        title: 'Laguna Beach',
        description: 'Under $80/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JlZWNlfGVufDB8fDB8fHww',
        title: 'Greece',
        description: 'Under $300/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'   
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFyaXN8ZW58MHx8MHx8fDA%3D',
        title: 'Paris',
        description: 'Under $180/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    }]
  return dests
}

export default ListingObj
