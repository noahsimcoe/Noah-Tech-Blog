const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-description').value.trim();

    if (title && description) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const delButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      console.log(response);

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };

//   const deletePostHandler = async (event) => {
//     event.preventDefault();
//     const postId = document.querySelector('input[name="post-id"]').value;
//     await fetch(`/api/post/${postId}`, {
//         method: 'DELETE'
//     })
//     .then(function() {
//         document.location.replace('/dashboard');
//     })
//     .catch(err => console.log(err))
// }

  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
