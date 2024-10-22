document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const imageInput = document.getElementById('imageInput');
    const postList = document.getElementById('postList');

    if (postInput.value.trim() !== '') {
        const post = document.createElement('div');
        post.className = 'post';

        const text = document.createElement('p');
        text.textContent = postInput.value;
        post.appendChild(text);

        if (imageInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                post.appendChild(img);
            }
            reader.readAsDataURL(imageInput.files[0]);
        }

        postList.prepend(post); // Add new post at the top
        postInput.value = ''; // Clear input
        imageInput.value = ''; // Clear file input
    } else {
        alert('Please enter a post.');
    }
});
