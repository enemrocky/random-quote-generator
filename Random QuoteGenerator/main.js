const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "True friends stab you in the front.",
    author: "Oscar Wilde",
  },
  {
    quote: "Women are made to be Loved, not understood.",
    author: "Oscar Wilde",
    profession: "Irish poet",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King",
    profession: "American minister",
    topics: ["People", "Life"],
  },
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King",
    profession: "American minister",
    topics: ["Wisdom"],
  },
  {
    quote: "The time is always right to do what is right.",
    author: "Martin Luther King",
    profession: "American minister",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Life's most persistent and urgent question is, 'What are you doing for others?",
    author: "Martin Luther King",
    profession: "American minister",
    topics: ["Inspirational", "Life", "People"],
  },
  {
    quote:
      "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
    author: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Inspirational", "Life"],
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "If we did all the things we are capable of, we would literally astound ourselves.",
    author: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
    profession: "Theoretical physicist",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    profession: "Irish playwright",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote: "If you're going through hell, keep going.",
    author: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["People", "Life"],
  },
  {
    quote: "Peace begins with a smile.",
    author: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Love", "Advice"],
  },
  {
    quote: "If you can't feed a hundred people, then feed just one.",
    author: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Advice", "People"],
  },
  {
    quote:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "People"],
  },
  {
    quote:
      "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
    author: "L.M. Montgomery",
    profession: "Canadian author",
    topics: ["Inspirational"],
  },
  {
    quote: "Tomorrow is always fresh, with no mistakes in it.",
    author: "L.M. Montgomery",
    profession: "Canadian author",
    topics: ["Inspirational"],
  },
  {
    quote:
      "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
    author: "L.M. Montgomery",
    profession: "Canadian author",
    topics: ["Inspirational", "Advice", "Life"],
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const generatorBtn = document.querySelector(".btn");

generatorBtn.addEventListener("click", function() {
  const quoteNumber = Math.floor(Math.random() * quotes.length);
  quote.innerText = `"${quotes[quoteNumber].quote}"`;
  author.innerText = quotes[quoteNumber].author;
});
