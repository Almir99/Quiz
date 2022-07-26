const Correct_answers = ["A","B","A","A"];
const form = document.querySelector(".quiz-form");
const Result = document.querySelector(".result");
const Percentage = document.querySelector('span');

form.addEventListener("submit", e =>{
    e.preventDefault();
    let score = 0;

    const Answers_received = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    Answers_received.forEach((value, index) =>{
        if (value === Correct_answers[index]){
            score++;
        }
    });
    let value = 0;
    let percentage = score/Correct_answers.length*100;
    console.log(percentage);
    scrollTo(0,0);
    const timer = setInterval(() => {
            Percentage.textContent = `${value}%`;
            if (value === percentage){
                clearInterval(timer);
            }
            value++;
        }, 15
    )

    Result.classList.remove("d-none");
})