const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post two', body: 'this is post two' },
]

const post4 = { title: 'post four', body: 'this is post four' }

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((indpost, index) => {
      output += `<li>${indpost.title}</li>`
    })
    document.body.innerHTML += output
  }, 0)
}

function createPost(post, callbackF) {
  setTimeout(() => {
    posts.push(post)
    callbackF()
  }, 0)
}

createPost(post4, getPosts)
