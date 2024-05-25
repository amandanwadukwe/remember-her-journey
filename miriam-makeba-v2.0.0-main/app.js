$(document).ready(function() {
    const currentDate = new Date();

// Get individual components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format the current date and time
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    // Display initial posts on page load
    fetchPosts();
  
    // Handle form submission (add new post)
    $('#blogForm').submit(function(event) {
      event.preventDefault();
  
      const title = $('#post-title').val();
      const content = $('#content').val();

      // Add the new post to the server
      addPost({ "title":title, "post":content });


      // Clear the form
      $('#post-title').val('');
      $('#content').val('');
    });
  
    // Function to fetch and display posts
    function fetchPosts() {
      $.get('https://amandanwadukwe.a2hosted.com/miriam-makeba-api/', function(posts) {
        displayPosts(posts);
      });
    }
  
    // Function to add a new post
    function addPost(post) {
        $.ajax({
            url: 'https://amandanwadukwe.a2hosted.com/miriam-makeba-api/',
            type: 'POST',
            contentType: 'application/json', // Set the content type to JSON
            data: JSON.stringify(post),
            success: function(newPost) {
              fetchPosts(); // Refresh the displayed posts after adding a new one
            },
            error: function(error) {
              console.error('Error adding post:', error);
            }
          });
    //   $.post('http://localhost:3000/api/posts', post, function(newPost) {

    //     fetchPosts(); // Refresh the displayed posts after adding a new one
    //   });
    }
  
    // Function to display posts
    function displayPosts(posts) {
      $('#blogPosts').empty(); // Clear existing posts
  
      posts.forEach(post => {
        const postHtml = `
          <div class="post">
            <p><strong>${post.title}</strong></br>
            ${post.post}</br/>
            <span class="timestamp">${post.timestamp}</span></p>
          </div>
        `;
        $('#blogPosts').append(postHtml);
      });
    }
  });
  
