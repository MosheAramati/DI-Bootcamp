const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

app.get('/api/emojis', (req, res) => {
    const randomEmoji = getRandomEmoji();
    const options = emojis.map(e => e.name).sort(() => Math.random() - 0.5).slice(0, 3);
    options.push(randomEmoji.name);
    options.sort(() => Math.random() - 0.5);
    res.json({ emoji: randomEmoji.emoji, options });
});

app.post('/api/guess', (req, res) => {
    const { emoji, guess } = req.body;
    const correctAnswer = emojis.find(e => e.emoji === emoji).name;
    const isCorrect = guess === correctAnswer;
    res.json({ correct: isCorrect });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});