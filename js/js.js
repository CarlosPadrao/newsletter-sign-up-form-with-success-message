const btn = document.querySelector('#btn');
const form = document.querySelector('form');
const span = document.querySelector('span');

btn.addEventListener('click', () => {
    input = document.querySelector('input').value;

    if (!input) {
        console.log('ERROR')
        form.classList.add('invalid-email');
        span.style.display = "block";
    } else {
        isValidEmail(input);
    }

    function isValidEmail(input) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            console.log(emailRegex.test(input));
            if (emailRegex.test(input) == false ) {
                form.classList.add('invalid-email');
                span.style.display = "block";
            } else {
                form.classList.remove('invalid-email');
                span.style.display = "none";
            }
    }
});