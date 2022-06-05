
const person1 = {
    score: 0,
    button: document.querySelector('#addScoreP1'),
    display: document.querySelector('#p1Score')
}
const person2 = {
    score: 0,
    button: document.querySelector('#addScoreP2'),
    display: document.querySelector('#p2Score')
}

const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');
let isGameOver = false;
let winningScore = parseInt(playTo.value);
person1.button.disabled = false;
person2.button.disabled = false;

playTo.addEventListener('change', () => {
    resetAll();
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;


        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

person1.button.addEventListener('click', () => {
    updateScores(person1, person2);
})
person2.button.addEventListener('click', () => {
    updateScores(person2, person1);
})


reset.addEventListener('click', resetAll)

function resetAll() {
    winningScore = parseInt(playTo.value);;
    isGameOver = false;
    for (let person of [person1, person2]) {


        person.display.textContent = 0;
        person.score = 0;
        person.display.classList.remove('has-text-success', 'has-text-danger');
        person.button.disabled = false;
    }

}

