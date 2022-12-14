import { posts } from "/data.js"

document.addEventListener("click", function(e) {
    if (e.target.dataset.likes) {
        handleLikes(e.target.dataset.likes)
    }
})
  
function handleLikes(likesId) {
    const targetLikeObj = posts.filter(function(like) {
        return like.uuid === likesId
    })[0]

    if (targetLikeObj.isLiked) {
        targetLikeObj.likes--
    } else {
        targetLikeObj.likes++
    }
    targetLikeObj.isLiked = !targetLikeObj.isLiked
    renderPosts()
}

function renderPosts() {
    let postsHtml = ""
    posts.forEach(function(post) {
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
                            <img src="images/icon-heart.png" class="icons" id="likes-btn" data-likes="${post.uuid}">
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
    })
    document.getElementById("containers").innerHTML = postsHtml
}
    
renderPosts()