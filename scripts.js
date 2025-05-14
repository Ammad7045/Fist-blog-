
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'card my-3';
      postDiv.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
          <p class="card-text">${post.content}</p>
        </div>
      `;
      container.appendChild(postDiv);
    });
  })
  .catch(error => {
    document.getElementById('posts-container').innerHTML = '<p class="text-danger">Failed to load posts.</p>';
    console.error('Error loading posts:', error);
  });
