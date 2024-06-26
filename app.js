const jokes = [
    {
        "type": "general",
        "setup": "What do you call a bear with no teeth?",
        "punchline": "A gummy bear!",
        "id": 193
    },
    {
        "type": "general",
        "setup": "Why can't your nose be 12 inches long?",
        "punchline": "Because then it'd be a foot!",
        "id": 313
    },
    {
        "type": "programming",
        "setup": "A SQL query walks into a bar, walks up to two tables and asks...",
        "punchline": "'Can I join you?'",
        "id": 24
    },
    {
        "type": "programming",
        "setup": "Why did the programmer quit his job?",
        "punchline": "Because he didn't get arrays.",
        "id": 18
    },
    {
        "type": "general",
        "setup": "What do you call a dictionary on drugs?",
        "punchline": "High definition.",
        "id": 202
    },
    {
        "type": "general",
        "setup": "Why are pirates called pirates?",
        "punchline": "Because they arrr!",
        "id": 309
    },
    {
        "type": "general",
        "setup": "What is the least spoken language in the world?",
        "punchline": "Sign Language",
        "id": 252
    },
    {
        "type": "general",
        "setup": "What does a pirate pay for his corn?",
        "punchline": "A buccaneer!",
        "id": 239
    },
    {
        "type": "general",
        "setup": "How does a scientist freshen their breath?",
        "punchline": "With experi-mints!",
        "id": 136
    },
    {
        "type": "general",
        "setup": "How are false teeth like stars?",
        "punchline": "They come out at night!",
        "id": 113
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const jokeSetup = document.getElementById('joke-setup');
    const jokePunchline = document.getElementById('joke-punchline');
    const nextJokeButton = document.getElementById('next-joke-button');
    const previousJokeButton = document.getElementById('previous-joke-button');
    
    let currentJokeIndex = -1;

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const displayJoke = (index) => {
        const joke = jokes[index];
        jokeSetup.textContent = joke.setup;
        jokePunchline.textContent = joke.punchline;
        // document.getElementById('joke-container').style.backgroundColor = getRandomColor();
    };

    nextJokeButton.addEventListener('click', () => {
        if (currentJokeIndex < jokes.length - 1) {
            currentJokeIndex++;
        } else {
            currentJokeIndex = 0;
        }
        displayJoke(currentJokeIndex);
    });

    previousJokeButton.addEventListener('click', () => {
        if (currentJokeIndex > 0) {
            currentJokeIndex--;
        } else {
            currentJokeIndex = jokes.length - 1;
        }
        displayJoke(currentJokeIndex);
    });
});
