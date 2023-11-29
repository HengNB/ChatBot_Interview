
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

document.addEventListener("DOMContentLoaded", function() {
  function sendWelcomeMessage() {
    const currentTime = new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    let welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('chatbot-message', 'chatbot');
    welcomeMessage.innerHTML = `<p class="chatbot-text" sentUser="${"Jamie"}" sentTime="${currentTime}">Hello ! Nice to meet you.</p>`;
    conversation.appendChild(welcomeMessage);
    welcomeMessage.scrollIntoView({behavior: "smooth"});
  }


  sendWelcomeMessage();
  

});


inputForm.addEventListener('submit', function(event) {

    event.preventDefault();


    const input = inputField.value;


    inputField.value = '';
    const currentTime = new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentUser="${"You"}" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    const response = generateResponse(input);

    message = document.createElement('div');
    message.classList.add('chatbot-message','chatbot');

    message.innerHTML = `<p class="chatbot-text" sentUser="${"Jamie"}" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({behavior: "smooth"});
});


function generateResponse(input) {

  const lowercaseInput = input.toLowerCase();

  
  if (lowercaseInput.includes("jamie") && lowercaseInput.trim() === "jamie") {
    return "Can I help you?";
  }
   else if (lowercaseInput.endsWith("?")) {
    if (input === input.toUpperCase()){
      return "Please give me some time to resolve the issue.";
    }
    else{
       return "Yes";
    }
  } else if (input === input.toUpperCase()) {
      return "Please remain calm.";
  } else {
    return "Sorry, I don’t understand";
  }

}
  