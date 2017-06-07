// The friends list for each person has been modified using the function in
// './client-utils/removeFriendsIdGreaterThanSelfId.js' file because each 
// person was sent using POST request in ascending order, 
// from the 0th to the last index of the array.
//
// Note: Person in 0th index has friends' IDs that do not exist in the DB yet,
// which will result in throwing an error from the server when sent as a POST request first.
// The end result of the DB will show a more accurate Friends' List for each person.

module.exports = [
  {
    id: 100,
    name: 'Joe Williams',
    age: 44,
    job: 'Marketing',
    friends: []
  },
  {
    id: 101,
    name: 'Tom Matthews',
    age: 39,
    job: 'Mechanical Engineer',
    friends: []
  },
  {
    id: 102,
    name: 'Joe Matthews',
    age: 26,
    job: 'Mechanical Engineer',
    friends: []
  },
  {
    id: 103,
    name: 'Patti Robertson',
    age: 22,
    job: 'QA',
    friends: []
  },
  {
    id: 104,
    name: 'Jane Williams',
    age: 39,
    job: 'QA',
    friends: []
  },
  {
    id: 105,
    name: 'Patti Jones',
    age: 38,
    job: 'Marketing',
    friends: []
  },
  {
    id: 106,
    name: 'Lisa Phillips',
    age: 48,
    job: 'Designer',
    friends: []
  },
  {
    id: 107,
    name: 'Sarah Smith',
    age: 21,
    job: 'Accountant',
    friends: [100]
  },
  {
    id: 108,
    name: 'Jane Robertson',
    age: 48,
    job: 'Marketing',
    friends: []
  },
  {
    id: 109,
    name: 'John Johnson',
    age: 30,
    job: 'Mechanical Engineer',
    friends: [104, 102]
  },
  {
    id: 110,
    name: 'Jane Peterson',
    age: 26,
    job: 'QA',
    friends: [104]
  },
  {
    id: 111,
    name: 'Peter Jones',
    age: 41,
    job: 'QA',
    friends: [109]
  },
  {
    id: 112,
    name: 'Lisa Robertson',
    age: 37,
    job: 'Designer',
    friends: [102]
  },
  {
    id: 113,
    name: 'John Williams',
    age: 27,
    job: 'Marketing',
    friends: [103]
  },
  {
    id: 114,
    name: 'Jane Doe',
    age: 49,
    job: 'QA',
    friends: [113, 109]
  },
  {
    id: 115,
    name: 'Margaret Smith',
    age: 21,
    job: 'Marketing',
    friends: [104]
  },
  {
    id: 116,
    name: 'Margaret Jones',
    age: 40,
    job: 'QA',
    friends: [110]
  },
  {
    id: 117,
    name: 'Joe Doe',
    age: 28,
    job: 'Designer',
    friends: [110]
  },
  {
    id: 118,
    name: 'John Johnson',
    age: 41,
    job: 'Software Engineer',
    friends: [106]
  },
  {
    id: 119,
    name: 'Lisa Smith',
    age: 43,
    job: 'Designer',
    friends: [113, 105]
  },
  {
    id: 120,
    name: 'Lisa Smith',
    age: 21,
    job: 'Mechanical Engineer',
    friends: [108, 101]
  },
  {
    id: 121,
    name: 'Patti Robertson',
    age: 37,
    job: 'Accountant',
    friends: [103, 116, 117]
  },
  {
    id: 122,
    name: 'Tom Phillips',
    age: 50,
    job: 'Accountant',
    friends: [101, 103, 104, 110]
  },
  {
    id: 123,
    name: 'Sarah Robertson',
    age: 45,
    job: 'Software Engineer',
    friends: [104, 114]
  },
  {
    id: 124,
    name: 'Peter Williams',
    age: 46,
    job: 'Mechanical Engineer',
    friends: []
  },
  {
    id: 125,
    name: 'Jane Brown',
    age: 36,
    job: 'Mechanical Engineer',
    friends: [109, 120, 116, 115]
  },
  {
    id: 126,
    name: 'Margaret Peterson',
    age: 45,
    job: 'QA',
    friends: [105]
  },
  {
    id: 127,
    name: 'John Johnson',
    age: 39,
    job: 'Accountant',
    friends: [102]
  },
  {
    id: 128,
    name: 'Jane Williams',
    age: 31,
    job: 'Accountant',
    friends: []
  },
  {
    id: 129,
    name: 'Tom Doe',
    age: 35,
    job: 'Accountant',
    friends: [125, 105, 112]
  },
  {
    id: 130,
    name: 'Joe Doe',
    age: 24,
    job: 'Mechanical Engineer',
    friends: [125]
  },
  {
    id: 131,
    name: 'Joe Williams',
    age: 30,
    job: 'Mechanical Engineer',
    friends: [112, 122, 130, 113, 114]
  },
  {
    id: 132,
    name: 'Margaret Jones',
    age: 49,
    job: 'Marketing',
    friends: [112, 124, 101, 119]
  },
  {
    id: 133,
    name: 'Patti Robertson',
    age: 49,
    job: 'Designer',
    friends: [109, 113]
  },
  {
    id: 134,
    name: 'Lisa Brown',
    age: 49,
    job: 'Mechanical Engineer',
    friends: [124, 115, 104, 108, 103, 106, 116, 123]
  },
  {
    id: 135,
    name: 'Margaret Doe',
    age: 44,
    job: 'Accountant',
    friends: [121, 128, 106, 100, 113]
  },
  {
    id: 136,
    name: 'Tom Williams',
    age: 49,
    job: 'Accountant',
    friends: [103, 109, 127, 133]
  },
  {
    id: 137,
    name: 'Sarah Robertson',
    age: 43,
    job: 'Accountant',
    friends: [133, 118, 101, 114, 117, 127, 135]
  },
  {
    id: 138,
    name: 'Tom Brown',
    age: 36,
    job: 'Marketing',
    friends: [122, 123, 111, 101, 104, 114, 121]
  },
  {
    id: 139,
    name: 'Jane Jones',
    age: 36,
    job: 'Marketing',
    friends: [113, 115]
  },
  {
    id: 140,
    name: 'Sarah Robertson',
    age: 24,
    job: 'Marketing',
    friends: [102, 115]
  },
  {
    id: 141,
    name: 'Lisa Doe',
    age: 42,
    job: 'Designer',
    friends: [135, 109, 100, 101, 120]
  },
  {
    id: 142,
    name: 'Jane Robertson',
    age: 33,
    job: 'Software Engineer',
    friends: [137, 103, 120, 132, 118]
  },
  {
    id: 143,
    name: 'Sarah Johnson',
    age: 44,
    job: 'QA',
    friends: [104, 141, 128, 105, 106]
  },
  {
    id: 144,
    name: 'John Peterson',
    age: 29,
    job: 'Marketing',
    friends: [100, 104, 113, 121, 123, 141]
  },
  {
    id: 145,
    name: 'Jane Brown',
    age: 33,
    job: 'QA',
    friends: [141, 143, 138, 104, 124, 131, 137]
  },
  {
    id: 146,
    name: 'John Jones',
    age: 34,
    job: 'Mechanical Engineer',
    friends: [114, 118, 119, 131]
  },
  {
    id: 147,
    name: 'Sarah Williams',
    age: 29,
    job: 'Accountant',
    friends: [142, 145]
  },
  {
    id: 148,
    name: 'Patti Williams',
    age: 41,
    job: 'Mechanical Engineer',
    friends: [116, 103, 109, 130, 147, 120, 132, 140]
  },
  {
    id: 149,
    name: 'John Phillips',
    age: 30,
    job: 'Software Engineer',
    friends: [100, 106, 101, 123, 130]
  }
]