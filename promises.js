const postsPromises = [
  { title: 'post one', body: 'this is post one from Promises' },
  { title: 'post two', body: 'this is post two from Promises' },
]

let divider = `<div style="margin:40px 0px;">---The Promises Fellas---</div>`

function getPostsPromises() {
  setTimeout(() => {
    let outputPromises = ''
    postsPromises.forEach((indpost, index) => {
      outputPromises += `<li style="color:blue;">${indpost.body}</li>`
    })
    document.body.innerHTML += divider + outputPromises
  }, 0)
}

function createPostPromises(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      postsPromises.push(post)
      const error = false
      if (!error) {
        resolve()
      } else {
        reject('Error: baj van.')
      }
    }, 0)
  })
}

createPostPromises({
  title: 'post three',
  body: 'post three from Promises.js yeah',
}).then(getPostsPromises)
//   .catch((ALMA) => console.log(ALMA))

let promise1 = Promise.resolve('First promise')
let promise2 = 1024
let promise3 = new Promise((resolve, reject) =>
  resolve('this is the end of promise3')
)
let promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
  res.json()
)

Promise.all([promise1, promise2, promise3, promise4]).then(
  //   (values) => (document.body.innerHTML += divider + `<li>${values}</li>`)
  (values) => console.log(values)
)
