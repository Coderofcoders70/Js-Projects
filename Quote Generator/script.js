const quote = document.querySelector('.quote');
const person = document.querySelector('#person');
const quoteBtn = document.querySelector('.newQuote');

const quotes = [
    {
        quote: `"Ask not what your country can do for you; ask what you can do for your country."`,
        person: `John Kennedy`
    },
    {
        quote: `"Eighty percent of success is showing up."`,
        person: `Woody Allen`
    },
    {
        quote: `"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."`,
        person: `Martin Luther King`
    },
    {
        quote: `"That’s one small step for a man, a giant leap for mankind."`,
        person: `Neil Armstrong`
    },
    {
        quote: `"Tis better to have loved and lost than never to have loved at all."`,
        person: `Alfred Lord Tennyson`
    },
    {
        quote: `"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference."`,
        person: `Robert Frost`
    },
    {
        quote: `"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time."`,
        person: `Abraham Lincoln`
    },
    {
        quote: `"You must be the change you wish to see in the world."`,
        person: `Mahatma Gandhi`
    },
    {
        quote: `"To err is human; to forgive, divine."`,
        person: `Alexander Pope`
    },
    {
        quote: `"The only thing we have to fear is fear itself."`,
        person: `Franklin D. Roosevelt`
    },
];

quoteBtn.addEventListener("click", function() {

    let randomQuote = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[randomQuote].quote;
    person.innerHTML = quotes[randomQuote].person;
})