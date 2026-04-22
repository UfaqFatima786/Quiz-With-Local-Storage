function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {

        var quizWindow = window.open("quiz.html", "_blank", "width=600,height=600");
    } else {
        // alert("Invalid email or password. Please try again.");
        Swal.fire({
            title: 'Error!',
            text: 'Invalid email or password. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}

function goSignup() {
    window.location.href = "signup.html";
}
function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    Swal.fire({
        title: 'Signup Hogaya Hurray!',
        text: 'Signup k lie shukriya 😊',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = "index.html";
    });
}

var quizQuestion = [
    {
        question: "Which mountain is the highest peak in Pakistan?",
        options: [" Nanga Parbat", " K2", " Rakaposhi", " Tirich Mir"],
        answer: 1,
    },
    {
        question: "Which city is known as the 'City of Lights' in Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
        answer: 0,
    },
    {
        question: "Which river is the longest in Pakistan?",
        options: ["Indus", "Jhelum", "Chenab", "Sutlej"],
        answer: 0,
    },
    {
        question: "Which is the national sport of Pakistan?",
        options: ["Cricket", "Hockey", "Football", "Squash"],
        answer: 1,
    },
    {
        question: "Which is the largest desert in Pakistan?",
        options: ["Thar Desert", "Cholistan Desert", "Kharan Desert", "Rann of Kutch"],
        answer: 0,
    },
    {
        question: "Which is the national animal of Pakistan?",
        options: ["Markhor", "Snow Leopard", "Chinkara", "Indus Dolphin"],
        answer: 0,
    },
    {
        question: "Which is the national flower of Pakistan?",
        options: ["Rose", "Jasmine", "Sunflower", "Lily"],
        answer: 1,
    },
    {
        question: "Which is the national bird of Pakistan?",
        options: ["Chukar Partridge", "Peacock", "Sparrow", "Eagle"],
        answer: 0,
    },
    {
        question: "Which is the national fruit of Pakistan?",
        options: ["Mango", "Apple", "Banana", "Orange"],
        answer: 0,
    },
    {
        question: "Which is the national tree of Pakistan?",
        options: ["Deodar", "Pine", "Banyan", "Neem"],
        answer: 0,
    }
];
var index = 0;
var score = 0;


var quizContainer = document.getElementById("quizContainer");

if (quizContainer) {

    function render() {

var option = document.getElementsByName("option");       
 for (var i = 0; i < option.length; i++) {
            if (option[i].checked) {
                if (Number(option[i].value) === quizQuestion[index - 1].answer) {
                    score++;
                }
            }
        }
        if (!quizQuestion[index]) {

var percentage = Math.round((score / quizQuestion.length) * 100);            

            var resultWindow = window.open("", "_blank", "width=800,height=600 margin-left=100" );

            resultWindow.document.write(`
           
    <h2>🎉 Mubarak ho bht bht dear !</h2>
    <p class="score">Score: ${score} / ${quizQuestion.length}</p>
    <p class="percentage">Percentage Dekhlo Apni Mehnt ki: ${percentage}%</p>
</div>

        `);

            setTimeout(() => {
                resultWindow.close();
                window.close();
            }, 5000);

            return;
        }

        var q = quizQuestion[index];

        var html = `<h2 class="quizQuestion">${q.question}</h2>`;

        q.options.forEach((opt, i) => {
            html += `
            <label>
            <input type="radio" name="option" value="${i}">
            ${opt}
            </label><br>
        `;
        });

        html += `<br>
    <button onclick="render()" id="nextbtn">Next</button>`;

        quizContainer.innerHTML = html;

        index++;

        if (index === quizQuestion.length) {
            setTimeout(() => {
                document.getElementById("nextbtn").innerText = "Submit";
            }, 0);
        }
    }

    render();

}