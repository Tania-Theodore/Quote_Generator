import React, { useState } from 'react';
import './App.css';

const quotesByCategory = {
  Random: [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The purpose of our lives is to be happy.- Dalai Lama",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
  ],
  "Love Quotes": [
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "Love is not about possession, it's all about appreciation. - Unknown",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "Love is like the wind, you can't see it but you can feel it. - Nicholas Sparks",
    "Love is an endless mystery, for it has nothing else to explain it. - Rabindranath Tagore",
    "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. - Helen Keller",
    "To love and be loved is to feel the sun from both sides.- David Viscott",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The heart wants what it wants. There's no logic to these things. You meet someone and you fall in love and that's that. - Woody Allen",
    "Love is when the other person's happiness is more important than your own. - H. Jackson Brown Jr.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
  ],
  "Life Quotes": [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Life is too important to be taken seriously. - Oscar Wilde",
    "Life is short, and it's up to you to make it sweet.- Sarah Louise Delany",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations.- Oliver Goldsmith",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.- Ralph Waldo Emerson",
  ],
  "Inspirational Quotes":[
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "In the middle of difficulty lies opportunity.- Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams.- Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "The only easy day was yesterday. - US Navy SEALs",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  ],
  "Humor Quotes":[
    "A day without laughter is a day wasted.- Charlie Chaplin",
    "I'm writing a book. I've got the page numbers done. - Steven Wright",
    "Behind every great man, there is a woman rolling her eyes. - Jim Carrey",
    "I used to be indecisive. Now I'm not sure. - Unknown",
    "A clear conscience is usually the sign of a bad memory. - Steven Wright",
    "I'm not lazy, I'm on energy-saving mode. - Unknown",
    "I'm writing a letter to my future self. I've made it halfway through the letter. - Unknown",
    "I'm not arguing, I'm just explaining why I'm right. - Unknown",
    "I told my wife she should embrace her mistakes. She gave me a hug.- Unknown",
    "I asked God for a bike, but I know God doesn't work that way. So, I stole a bike and asked for forgiveness. - Emo Philips",
  ],
  "Philosophy Quotes":[
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does. - Jean-Paul Sartre",
    "He who is brave is free. - Seneca",
    "The unexamined life is not worth living. - Socrates",
    "Existence precedes essence. - Jean-Paul Sartre",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "To live is to suffer, to survive is to find some meaning in the suffering. - Friedrich Nietzsche",
    "Man is the measure of all things. - Protagoras",
    "The more you know, the more you realize you don't know. - Aristotle",
    "Philosophy is a battle against the bewitchment of our intelligence by means of language. - Ludwig Wittgenstein",
  ],
  "Truth Quotes":[
    "The truth is rarely pure and never simple. - Oscar Wilde",
    "The truth will set you free, but first, it will piss you off. - Gloria Steinem",
    "Three things cannot be long hidden: the sun, the moon, and the truth. - Buddha",
    "The truth is more important than the facts. - Frank Lloyd Wright",
    "The truth is like a lion; you don't have to defend it. Let it loose; it will defend itself. - Augustine of Hippo",
    "Rather than love, than money, than fame, give me truth. - Henry David Thoreau",
    "Half a truth is often a great lie. - Benjamin Franklin",
    "The great enemy of the truth is very often not the lie, deliberate, contrived, and dishonest, but the myth, persistent, persuasive, and unrealistic. - John F. Kennedy",
    "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't. - Mark Twain",
    "The truth is incontrovertible. Malice may attack it, ignorance may deride it, but in the end, there it is.- Winston S. Churchill",
  ],
  "Wisdom Quotes":[
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.- Lao Tzu",
    "The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare",
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",
    "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest. - Confucius",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "The art of being wise is knowing what to overlook. - William James",
    "To attain knowledge, add things every day. To attain wisdom, remove things every day.- Lao Tzu",
  ],
  "Poetry Quotes":[
    "Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility. - William Wordsworth",
    "A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness. - Robert Frost",
    "Poetry is not a turning loose of emotion, but an escape from emotion; it is not the expression of personality, but an escape from personality.- T.S. Eliot",
    "A poet is, before anything else, a person who is passionately in love with language. - W.H. Auden",
    "Poetry is the rhythmical creation of beauty in words. - Edgar Allan Poe",
    "Poetry is when an emotion has found its thought and the thought has found words. - Robert Frost",
    "Poetry is the revelation of a feeling that the poet believes to be interior and personal that the reader recognizes as his own. - Salvatore Quasimodo",
    "A poet's work is to name the unnameable, to point at frauds, to take sides, start arguments, shape the world, and stop it going to sleep. - Salman Rushdie",
    "Poetry is the journal of a sea animal living on land, wanting to fly in the air. - Carl Sandburg",
    "A good poem is a contribution to reality. The world is never the same once a good poem has been added to it. - Dylan Thomas",
  ],
  "Death Quotes":[
    "Death is nature's way of telling you to slow down. - Dick Sharples",
    "To the well-organized mind, death is but the next great adventure. - J.K. Rowling",
    "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live. - Norman Cousins",
    "Death is not the end, but the beginning of a new life. - Bangambiki Habyarimana",
    "Death is so terribly final, while life is full of possibilities. - George R.R. Martin",
    "The boundaries which divide Life from Death are at best shadowy and vague. Who shall say where the one ends, and where the other begins?- Edgar Allan Poe",
    "When you are born, you cry, and the world rejoices. When you die, you rejoice, and the world cries. - Tibetan Proverb",
    "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.- Mark Twain",
    "Our dead are never dead to us until we have forgotten them. - George Eliot",
    "It is not death that a man should fear, but he should fear never beginning to live.- Marcus Aurelius",
  ],
  "Happiness Quotes":[
    "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
    "Happiness is not something ready made. It comes from your own actions.- Dalai Lama",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "The only joy in the world is to begin.- Cesare Pavese",
    "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi",
    "The best way to cheer yourself is to try to cheer someone else up. - Mark Twain",
    "The happiest people don't have the best of everything, they just make the best of everything. - Unknown",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Happiness is a warm puppy. - Charles M. Schulz",
    "Count your age by friends, not years. Count your life by smiles, not tears. - John Lennon",
  ],
  "Hope Quotes":[
    "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.- Emily Dickinson",
    "Hope is the only thing stronger than fear.- Suzanne Collins",
    "While there's life, there's hope. - Marcus Tullius Cicero",
    "Hope is being able to see that there is light despite all of the darkness.- Desmond Tutu",
    "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.- Thich Nhat Hanh",
    "Hope is a waking dream.- Aristotle",
    "Hope is being able to see that there is a light despite all the darkness.- Unknown",
    "Hope is not pretending that troubles don't exist. It is the hope that they won't last forever. That hurts will be healed and difficulties overcome. - Unknown",
    "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us. - Samuel Smiles",
    "Hope is a force of nature. Don't let anyone tell you different.- Jim Butcher",
  ],
  "Faith Quotes":[
    "Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "Faith is to believe what you do not see; the reward of this faith is to see what you believe.- Saint Augustine",
    "Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication. Remember all things are possible for those who believe. - Gail Devers",
    "Faith is the strength by which a shattered world shall emerge into the light. - Helen Keller",
    "Faith is the bird that feels the light when the dawn is still dark. - Rabindranath Tagore",
    "Faith is not the belief that God will do what you want. It is the belief that God will do what is right.- Max Lucado",
    "Faith is the art of holding on to things in spite of your changing moods and circumstances. - C.S. Lewis",
    "Faith is the strength of life. If a man lives, he believes in something. - Fyodor Dostoyevsky",
    "Faith is an oasis in the heart which will never be reached by the caravan of thinking. - Khalil Gibran",
    "Faith is the substance of things hoped for, the evidence of things not seen. - Hebrews 11:1 (Bible)",
  ],
};

function App() {
  const categories = Object.keys(quotesByCategory);
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  const [selectedQuotes, setSelectedQuotes] = useState([]);

  const getRandomQuotes = (category, count) => {
    const categoryQuotes = quotesByCategory[category] || [];
    const shuffledQuotes = categoryQuotes.sort(() => 0.5 - Math.random());
    const selectedQuotes = shuffledQuotes.slice(0, count);
    return selectedQuotes;
  };

  const handleGenerateQuotes = () => {
    const selectedCategory = document.getElementById('opt').value;
    const selectedNumber = document.getElementById('numDrop').value;
    const generatedQuotes = getRandomQuotes(selectedCategory, selectedNumber);
    setSelectedQuotes(generatedQuotes);
  };

  return (
    <>
      <div id="main">
        <div>
          <h2 id="title">RANDOM QUOTE GENERATOR</h2>
        </div>
        <div>
          <h3 id="categ">Category of Quote</h3>
          <select id="opt">
          <option>Random</option>
        <option>Love Quotes</option>
        <option>Life Quotes</option>
        <option>Inspirational Quotes </option>
        <option>Humor Quotes </option>
        <option>Philosophy Quotes</option>
        <option>Truth Quotes</option>
        <option>Wisdom Quotes</option>
        <option>Poetry Quotes</option>
        <option>Death Quotes</option>
        <option>Happiness Quotes</option>
        <option>Hope Quotes</option>
        <option>Faith Quotes</option>
          </select>
          <h3 id="num">Number of Quotes</h3>
          <select id="numDrop" name="numbers">
          {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}

          </select>
        </div>

        <div>
          <button id="gen" onClick={handleGenerateQuotes}>
            Generate
          </button>
        </div>
        <div>
          <h3 id="selec">
          {selectedQuotes.map((quote, index) => (
            <p key={index} className="quote">
              {quote}
            </p>
          ))}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
