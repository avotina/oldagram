const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4567
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containers = document.getElementById("containers")
    
function renderPosts() {
    let postsHtml = ""
    for (let post of posts) {
        postsHtml += `     
            <div class="post">
                <header>
                    <img src="images/logo.png" id="logo">
                    <img src="images/user-avatar.png" id="user">
                </header>
                <main>
                    <section>
                        <div class="author-info">
                            <img src=${post.avatar} id="avatar">
                            <div>
                                <p class="author-name" id="name">${post.name}</p>
                                <p class="author-location">${post.location}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src=${post.post} class="post-image">
                        <div>
                            <img src="images/icon-heart.png" class="icons" id="likes-btn">
                            <img src="images/icon-comment.png" class="icons">
                            <img src="images/icon-dm.png" class="icons">
                        </div>
                        <h3 class="likes" id="likes">${post.likes} likes</h3>
                        <div class="author-comment">
                            <h3 class="username" id="username">${post.username}</h3>
                            <p class="comment">${post.comment}</p>
                        <div>
                    </section>
                </main>
            </div>` 
        } 
        containers.innerHTML = postsHtml
    }
    
renderPosts()

document.getElementById("likes-btn").addEventListener("click", function() {
        //   console.log("liked")
        let likes = document.getElementById("likes").innerHTML = 
        console.log(likes)
    })
