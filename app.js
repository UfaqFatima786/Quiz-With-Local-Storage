function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {

        var quizWindow = window.open("quiz.html", "_blank", "width=600,height=600");
    } else {
        alert("Invalid Login");
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
    // alert("Signup Successful! Thanks for signing up 😊");
    Swal.fire({
        title: 'Signup Successful!',
        text: 'Thanks for signing up 😊',
        icon: 'success',
        confirmButtonText: 'OK'
    });
    window.location.href = "index.html";
}

var quizQuestion = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
        answer: 2,
    },
    {
        question: "Which language is used for web styling?",
        options: ["HTML", "CSS", "Python", "C++"],
        answer: 1,
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "IBM"],
        answer: 1,
    },
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

            var percentage = (score / quizQuestion.length) * 100;

            var resultWindow = window.open("", "_blank", "width=600,height=600");

            resultWindow.document.write(`
           
    <h2>🎉 Quiz Finished!</h2>
    <p class="score">Score: ${score} / ${quizQuestion.length}</p>
    <p class="percentage">Percentage: ${percentage}%</p>
</div>

        `);

            setTimeout(() => {
                resultWindow.close();
                window.close();
            }, 5000);

            return;
        }

        var q = quizQuestion[index];

        var html = `<h2>${q.question}</h2>`;

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