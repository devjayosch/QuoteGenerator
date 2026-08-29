const quotes = [
     `“A person's life is not over until the moment they give up.”`,
     `"Discipline beats motivation when motivation disappears."`,
     `"Small progress is still progress."`,
     `"Success is built when nobody is watching."`,
     `"No risk, no story."`
];

const button = document.getElementById("generateQuote");
const quoteText = document.getElementById("quoteText");

function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `Your quote: ${randomQuote}`;
}

randomQuote()

button.addEventListener("click", () => {
    randomQuote()
})