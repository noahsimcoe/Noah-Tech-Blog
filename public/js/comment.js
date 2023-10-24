const commentFormHandler = async (event) => {
    event.preventDefault();

    const description = document.querySelector("#comment-description").value.trim();

    if (description) {
        const response = await fetch (`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log(`Success. Comment created: ${response}`);

        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);

