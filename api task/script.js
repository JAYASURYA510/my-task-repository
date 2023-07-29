document.addEventListener('DOMContentLoaded', function() {
  const jokeElement = document.getElementById('joke');
  const getJokeBtn = document.getElementById('getJokeBtn');

  function getJoke() {
    getJokeBtn.classList.add('clicked'); // Add 'clicked' class to trigger the animation

    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        jokeElement.textContent = data.value;
        getJokeBtn.classList.remove('clicked'); // Remove 'clicked' class after the animation is finished
      })
      .catch(error => {
        jokeElement.textContent = 'Error occurred while fetching the joke.';
        console.error(error);
        getJokeBtn.classList.remove('clicked'); // Remove 'clicked' class after the animation is finished
      });
  }

  getJokeBtn.addEventListener('click', getJoke);
});