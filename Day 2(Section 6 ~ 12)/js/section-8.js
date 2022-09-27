//promises
const fetchDataPromise = new Promise((resolve, reject) => {
  reject("reject");
})

fetchDataPromise
  .then(() => {
  console.log("Inside then..");
  })

  .catch(() => {
    console.log("Inside catch..")
  })

//promise chaining  
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 3 * 1000);
  });
}

generateNumber(10)
  .then((result) => {
    console.log(result);
    return generateNumber(result * 2);
  })

  .then((result) => {
    console.log(result);
    return generateNumber(result * 3);
  })
  .then((result) => console.log(result));

  //Promise.all()

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject('Failed');
    }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});


Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(console.log);
 
  
//Promise.race()
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});


Promise.race([p4, p5])
    .then(value => console.log(`Resolved: ${value}`))
  .catch(reason => console.log(`Rejected: ${reason}`)); 
 
//error handling in promises
  let authorized = false;

  function getUserById(id) {
      return new Promise((resolve, reject) => {
          if (!authorized) {
              reject('Unauthorized access to the user data');
          }
  
          resolve({
              id: id,
              username: 'admin'
          });
      });
  }
  
  try {
      getUserById(10)
          .then(user => console.log(user.username))
          .catch(err => console.log(`Caught by .catch ${err}`));
  } catch (error) {
      console.log(`Caught by try/catch ${error}`);
  }