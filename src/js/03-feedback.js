import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name=email]');
const message = document.querySelector('textarea[name=message]');
const localStorageData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (localStorageData) { 
    email.value = localStorageData.email;
    message.value = localStorageData.message;
}

form.addEventListener('input', throttle(saveFeedbackData, 500));
form.addEventListener("submit", handleSubmit);

function saveFeedbackData() { 
    let feedbackObj = createObject(email.value, message.value);
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackObj));
}
function createObject(email, message) { 
    const user = {
        email: email,
        message: message,
    }
    return user;
}

function handleSubmit(event) { 
    event.preventDefault();
    console.log(createObject(email.value, message.value));
    email.value = '';
    message.value = '';
    localStorage.clear();
}


