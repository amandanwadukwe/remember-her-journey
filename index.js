let primaryNavLinks = document.querySelectorAll(".primary-nav ul li a");
let primaryNav = document.getElementById("primary-nav");
let hamburger = document.getElementById("hamburger");
const helpButton = document.getElementById('help-button');
    const helpModal = document.getElementById('help-modal');
    // const backButton = document.getElementById('back-button')



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
        setTimeout(modal.style.display = 'none',3000);
        let message = Array.from(document.getElementById('chatOutput').children).map(chat => chat.innerText).reduce((a,b)=> a+'</br>'+b);
       
        sendTranscript(message);
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
        xhr.open('POST', 'http://localhost:3000/send_transcript', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              console.log('Transcript sent successfully');
            } else {
              console.error('Error sending transcript:', xhr.statusText);
            }
          }
        };
        xhr.send(JSON.stringify({ transcript: transcript }));

        location.reload();
      
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
      if (event.target != helpModal && event.target != helpButton) {
        helpModal.style.display = 'none';
      }

      if (event.target == modal) {
        modal.style.display = 'none';
        currentQuestionIndex = 0;
        chatOutput.innerHTML = '';
        userInput.value = '';
      }
    }


    document.getElementById('search').addEventListener('input', function() {
      const searchText = this.value.toLowerCase();
      const heroes = document.querySelectorAll('.hero');
      heroes.forEach(hero => {
          const heroName = hero.querySelector('h2').innerText.toLowerCase();
          const heroDetails = hero.querySelector('.hero-details').innerText.toLowerCase();
          if (heroName.includes(searchText) || heroDetails.includes(searchText)) {
              hero.style.display = 'block';
          } else {
              hero.style.display = 'none';
          }
      });
  });
  

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            document.querySelectorAll('.faq-answer').forEach(answer => answer.style.display = 'none');
            document.querySelectorAll('.faq-icon').forEach(icon => icon.textContent = '+');
            
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});

console.log("test", document.querySelectorAll('.faq-question'))

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.faq-icon');
      
      if (answer.style.display === 'block') {
          answer.style.display = 'none';
          icon.textContent = '+';
      } else {
          document.querySelectorAll('.faq-answer').forEach(answer => answer.style.display = 'none');
          document.querySelectorAll('.faq-icon').forEach(icon => icon.textContent = '+');
          
          answer.style.display = 'block';
          icon.textContent = '-';
      }
  });
});


