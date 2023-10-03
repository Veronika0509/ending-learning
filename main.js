const btnStart = document.getElementById('btn-start')
const word = document.getElementById('word')
const derBtn = document.getElementById('der')
const dieBtn = document.getElementById('die')
const dasBtn = document.getElementById('das')
const successMessage = document.getElementById('success')
const failMessage = document.getElementById('fail')

const derWordsArray = [
    ['Motor (-or)'],
    ['Direktor (-or)'],
    ['Honig (-ig)'],
    ['Essig (-ig)'],
    ['Teppich (-ich)'],
    ['Bereich (-ich)'],
    ['Frühling (-ing)'],
    ['Zwilling (-ing)'],
    ['Kapitalismus (-ismus)'],
    ['Sozialismus (-ismus)'],
    ['Kapitalist (-ist)'],
    ['Optimist (-ist)'],
    ['Informatiker (-iker)'],
    ['Techniker (-iker)'],
    ['Diamant (-ant)'],
    ['Elektrikant (-ant)'],
    ['Trend (-end)'],
    ['Abend (-end)'],
    ['Doktorand (-and)'],
    ['Demostrand (-and)'],
    ['Ingenieur (-eur)'],
    ['Frisör (-ör)'],
    ['Menschen (Люди)'],
    ['Wochentag (День недели)'],
    ['Monat (Месяц)'],
    ['Tageszeit (Времена дня)'],
    ['Jahreszeit (Сезоны)'],
    ['Himmelsrichtung (Север, юг, запад, восток)'],
    ['Wetter (Погода)'],
    ['Automarken (Марки автомобилей)'],
    ['Alkohol (Алкоголь)'],
    ['Währungen (Валюта)'],
]
const dieWordsArray = [
    ['Heizung (-ung)'],
    ['Rechnung (-ung)'],
    ['Freiheit (-heit)'],
    ['Einigkeit (-keit)'],
    ['Freundschaft (-schaft)'],
    ['Gesellschaft (-schaft)'],
    ['Station (-ion)'],
    ['Religion (-ion)'],
    ['Musik (-ik)'],
    ['Politik (-ik)'],
    ['Qualität (-tät)'],
    ['Universität (-tät)'],
    ['Natur (-ur)'],
    ['Kultur (-ur)'],
    ['Distanz (-anz)'],
    ['Differenz (-enz)'],
    ['Existenz (-enz)'],
    ['Garage (-age)'],
    ['Etage (-age)'],
    ['Marmelade (-ade)'],
    ['Bäckerei (-ei)'],
    ['Metzgerei (-ei)'],
    ['Bücherei (-ei)'],
    ['Lampe (-e)'],
    ['Straße (-e)'],
    ['Motorrad (BMW, Suzuki, Honda)'],
    ['Zahlen (Числа)'],
    ['Bäume und Pflanzen (Деревья и Растения)'],
    ['Obstsorten (Виды фруктов)'],
]
const dasWordsArray = [
    ['Männlein (-lein)'],
    ['Häuslein (-lein)'],
    ['Mäuschen (-chen)'],
    ['Häschen (-chen)'],
    ['Dokument (-ment)'],
    ['Experiment (-ment)'],
    ['Zentrum (-um)'],
    ['Datum (-um)'],
    ['Drama (-ma)'],
    ['Thema (-ma)'],
    ['Licht (-icht)'],
    ['Gesicht (-icht)'],
    ['Eigentum (-tum)'],
    ['Wachstum (-tum)'],
    ['Farben (Цвета)'],
    ['Buchstaben (Буквы)'],
    ['Viele Stoffe (Много Веществ)'],
    ['Verben aus dem Englischen (Слова из английского)'],
    ['Aus Verb oder Abjektiv (Слова из глагола и наречия)'],
]

function getRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

let randomNum
btnStart.addEventListener('click', function () {
    randomNum = getRandomNumber(3)
    console.log(randomNum)
    if (randomNum === 0) {
        word.textContent = derWordsArray[getRandomNumber(derWordsArray.length)]
    } else if (randomNum === 1) {
        word.textContent = dieWordsArray[getRandomNumber(dieWordsArray.length)]
    } else {
        word.textContent = dasWordsArray[getRandomNumber(dasWordsArray.length)]
    }
    toInactive()
    btnStart.textContent = 'Продолжить!'
})

derBtn.addEventListener('click', function () {
    toInactive()
    if (randomNum === 0) {
        successMessage.classList.add('active')
    } else {
        failMessage.classList.add('active')
    }
})
dieBtn.addEventListener('click', function () {
    toInactive()
    if (randomNum === 1) {
        successMessage.classList.add('active')
    } else {
        failMessage.classList.add('active')
    }
})
dasBtn.addEventListener('click', function () {
    toInactive()
    if (randomNum === 2) {
        successMessage.classList.add('active')
    } else {
        failMessage.classList.add('active')
    }
})

function toInactive() {
    successMessage.classList.remove('active')
    failMessage.classList.remove('active')
}