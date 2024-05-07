let primaryNavLinks = document.querySelectorAll(".primary-nav ul li a");
let primaryNav = document.getElementById("primary-nav");
let hamburger = document.getElementById("hamburger");
const helpButton = document.getElementById('help-button');
    const helpModal = document.getElementById('help-modal');

hamburger.addEventListener("click", () => {
    primaryNav.classList.toggle("hide");
})

primaryNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        primaryNav.classList.add("hide");
    })
})



    helpButton.addEventListener('click', function() {
        if (helpModal.style.display === 'block') {
            helpModal.style.display = 'none';
        } else {
            helpModal.style.display = 'block';
            const helpDivPosition = helpButton.getBoundingClientRect();
            helpModal.style.top = (helpDivPosition.top - helpModal.offsetHeight) + 'px';
            helpModal.style.left = helpDivPosition.left + 'px';
        }
    });


    const chatBtn = document.getElementById('chatBtn');
    const modal = document.getElementById('chatModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const userInput = document.getElementById('userInput');
    const chatOutput = document.getElementById('chatOutput');
    const sendBtn = document.getElementById('sendBtn');
    
    const questions = [
        "Hello! How can we assist you today?",
        "What is your name?",
        "What is your email address?",
        "What is your phone number?",
        "What is the subject of your issue?",
        "Please describe your issue in detail.",
        "Have you tried any troubleshooting steps?",
        "Could you please provide any additional information?",
        "Is there anything else you would like to add?",
        "Thank you for providing the information. We'll get back to you shortly.",
        "Is there any other problem you need assistance with?",
        "Thank you for reaching out. A member of our team will be with you as soon as possible."
    ];
    
    let currentQuestionIndex = 0;
    
    function askQuestion() {
      if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        showMessage(question);
        currentQuestionIndex++;
      } else {
        showMessage("Thank you for reaching out. A member of our team will be with you shortly.");
        sendTranscript();
        sendConfirmationEmail();
      }
    }
    
    function showMessage(message) {
      const loadingIcon = '<span class="loading"></span>';
      chatOutput.innerHTML += `<div>${loadingIcon} ${message}</div>`;
      chatOutput.scrollTop = chatOutput.scrollHeight;
    }
    
    function sendTranscript(transcript) {
      // Send transcript to support email
      // Implementation not included in this example
      const xhr = new XMLHttpRequest();
        xhr.open('POST', 'send_transcript.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
            } else {
              console.error('Error sending transcript:', xhr.statusText);
            }
          }
        };
        xhr.send('transcript=' + encodeURIComponent(transcript));
    }
    
    function sendConfirmationEmail() {
      // Send confirmation email to the client
      // Implementation not included in this example
      
    }
    
    chatBtn.onclick = function() {
      modal.style.display = 'block';
      askQuestion();
    }
    
    closeBtn.onclick = function() {
      modal.style.display = 'none';
      currentQuestionIndex = 0;
      chatOutput.innerHTML = '';
      userInput.value = '';
    }
    
    sendBtn.onclick = function() {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
        showMessage(userMessage);
        userInput.value = '';
        setTimeout(askQuestion, 1000); // Simulate bot typing delay
      }
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        currentQuestionIndex = 0;
        chatOutput.innerHTML = '';
        userInput.value = '';
      }
    }
    

    // function sendTranscript(transcript) {
        
    //   }
      