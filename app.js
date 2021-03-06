const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const addJokeText = await getDadJokes();
    const newLI = document.createElement('li');
    newLI.append(addJokeText);
    jokes.append(newLI);
}


const getDadJokes = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "Couldn't load jokes!"
    }

}

button.addEventListener('click', addNewJoke)