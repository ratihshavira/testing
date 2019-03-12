

// export const getNewsId = () => {
//   const URL =  `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
//   return fetch(URL)
//     .then((res) => {
//       if(res.json()){
//         const newsId = res.json()
//         return fetch('https://hacker-news.firebaseio.com/v0/item/' + newsId )
//       }
//     })
// }


export const getNewsId = () => {
  const URL =  `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
  return fetch(URL)
    .then((res) => res.json())
}
export const getNewsDetail = (newsId) => {
  // let newsId = 19367850
  const URL = `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`
  return fetch(URL)
    .then((res) => res.json())
}

// var url = 'https://api.spacexdata.com/v2/launches/latest';

// var result = fetch(url, {
//     method: 'get',
//   }).then(function(response) {
//     return response.json(); // pass the data as promise to next then block
//   }).then(function(data) {
//     var rocketId = data.rocket.rocket_id;

//     console.log(rocketId, '\n');
  
//     return fetch('https://api.spacexdata.com/v2/rockets/' + rocketId); // make a 2nd request and return a promise
//   })
//   .then(function(response) {
//     return response.json();
//   })
//   .catch(function(error) {
//     console.log('Request failed', error)
//   })

// // I'm using the result variable to show that you can continue to extend the chain from the returned promise
// result.then(function(r) {
//   console.log(r); // 2nd request result
// });
