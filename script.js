// Matrix rain effect
const matrix = document.getElementById('matrix');
const chars = "01010101010101010101010101010101010101010101010101";

function createMatrixRain() {
    const span = document.createElement('span');
    span.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = (Math.random() * 5 + 5) + 's';
    span.style.fontSize = (Math.random() * 10 + 10) + 'px';
    matrix.appendChild(span);
    
    setTimeout(() => {
        span.remove();
    }, 15000);
}

for (let i = 0; i < 50; i++) {
    setTimeout(createMatrixRain, i * 200);
}
setInterval(createMatrixRain, 150);

const passwordInput = document.getElementById('password');
const confirmBtn = document.getElementById('confirm');
const message = document.getElementById('message');

const correctPassword = "Cicada3301";

const cvFile = "https://www.dropbox.com/scl/fi/xcu5kep8filqm10z0z5lh/Abidi_Mohamed_Dhia_Al_Islem_CV_Professionnel.pdf?rlkey=xf6ew5bnouosg1z8k5u36n15y&st=oujrktk6&dl=1";

confirmBtn.addEventListener('click', validatePassword);
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        validatePassword();
    }
});

function validatePassword() {
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === correctPassword) {
        message.textContent = "ACCESS GRANTED. DOWNLOADING FILE...";
        message.style.color = "#00ff00";
        
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'https://www.dropbox.com/scl/fi/xcu5kep8filqm10z0z5lh/Abidi_Mohamed_Dhia_Al_Islem_CV_Professionnel.pdf?rlkey=xf6ew5bnouosg1z8k5u36n15y&st=oujrktk6&dl=1';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        passwordInput.value = "";
        
        setTimeout(() => {
            message.textContent = "";
        }, 3000);
    } else {
        message.textContent = "ACCESS DENIED. YOU ARE NOT ELIGIBLE TO ACCESS.";
        message.style.color = "#ff4444";
        
        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
        
        setTimeout(() => {
            message.textContent = "";
        }, 3000);
    }

}



