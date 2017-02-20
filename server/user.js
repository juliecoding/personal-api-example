const user = {
  name: 'Joe Blank',
  location: 'Provo, UT',
  occupations: ['Mentor', 'sheriffs office', 'IT'],
  hobbies: [
    {
      name: 'racquetball',
      type: 'sport'
    },
    {
      name: 'board games',
      type: 'games'
    },
    {
      name: 'pickleball',
      type: 'sport'
    }
  ],
  family: [
    {
      name: 'Eliza ',
      relation: 'wife',
      gender: 'F'
    },
    {
      name: 'Hazel',
      relation: 'Daughter',
      gender: 'F'
    },{
      name: 'Dallin',
      relation: 'Brother',
      gender: 'M'
    }
  ],
  restaurants: [
    {
      name: 'In N Out',
      type: 'Burgers and Fries',
      rating: 9
    },
    {
      name: 'cafe rio',
      type: 'mexican food',
      rating: 9
    },
    {
      name: 'JCWs',
      type: 'Burgers and Fries',
      rating: 7
    }
  ]
}

module.exports = user;
