const postInput = document.getElementById("text");
const feed = document.getElementById("feed");

function addPost() {
    const text = postInput.value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h3>👤 User</h3>
        <p>${text}</p>

        <div class="actions">
            <button class="like-btn">
                👍 Like <span>0</span>
            </button>

            <button class="delete-btn">
                🗑 Delete
            </button>
        </div>
    `;

    feed.prepend(post);

    postInput.value = "";

    const likeBtn = post.querySelector(".like-btn");
    const deleteBtn = post.querySelector(".delete-btn");

    likeBtn.addEventListener("click", function () {
        const count = likeBtn.querySelector("span");
        count.textContent = Number(count.textContent) + 1;
    });

    deleteBtn.addEventListener("click", function () {
        post.remove();
    });
}