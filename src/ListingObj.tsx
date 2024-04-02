import React from 'react'

interface Locations {
    id: number,
    url: string,
    title: string,
    description: string,
    about: string
  
  }

  export const popdests: Locations[] = [{
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
}
   
  ];

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
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1557335200-a65f7f032602?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdGlufGVufDB8fDB8fHww',
        title: 'Austin',
        description: 'Under $150/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D',
        title: 'Las Vegas',
        description: 'Under $80/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fHww',
        title: 'Barcelona',
        description: 'Under $300/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'   
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWl8ZW58MHx8MHx8fDA%3D',
        title: 'Dubai',
        description: 'Under $180/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHx8fDA%3D',
        title: 'Instanbul',
        description: 'Under $150/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    },
    {
        id: 9,
        url: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWl8ZW58MHx8MHx8fDA%3D',
        title: 'Miami',
        description: 'Under $80/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    },
    {
        id: 10,
        url: 'https://images.unsplash.com/photo-1547190994-0dfe4ab1bdae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuJTIwZnJhbmNpc2NvfGVufDB8fDB8fHww',
        title: 'San Francisco',
        description: 'Under $300/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'   
    },
    {
        id: 11,
        url: 'https://images.unsplash.com/photo-1532085755448-a67fd3b518b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VvdWx8ZW58MHx8MHx8fDA%3D',
        title: 'Seoul',
        description: 'Under $180/night',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae voluptatibus voluptatum voluptates expedita quaerat, ratione, dolore est officiis, voluptate illum ad corporis ipsam aut natus ut maiores quia tenetur.'
    }]
  return dests
}

export default ListingObj
