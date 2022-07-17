const Tacni_odgovori = ["A","B","A","A"];
const form = document.querySelector(".quiz-form");
const Rezultat = document.querySelector(".result");
const Procenat = document.querySelector('span');

form.addEventListener("submit", e =>{
    e.preventDefault();
    let score = 0;

    const Dobijeni_odgovori = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    Dobijeni_odgovori.forEach((vrijednost, index) =>{
        if (vrijednost === Tacni_odgovori[index]){
            score++;
        }
    });
    let vrijednost = 0;
    let procenat = score/Tacni_odgovori.length*100;
        console.log(procenat);
        scrollTo(0,0);
    const timer = setInterval(() => {
        Procenat.textContent = `${vrijednost}%`;
        if (vrijednost === procenat){
            clearInterval(timer);
        }
        vrijednost++;
        }, 15
    )

        Rezultat.classList.remove("d-none");
})