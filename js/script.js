// // const url = 'https://icanhazdadjoke.com/api'

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://icanhazdadjoke.com/', {
//   headers: {
//     'Accept': 'application/json'
//   }
// })
//     // const dadJoke = document.querySelector('#dad-joke')
//     // document.querySelector('#form').addEventListener('submit', e => {
//     //     const newJoke = document.querySelector('#telljoke')
//     //     const url = 'https://icanhazdadjoke.com/api'
//     //     fetch(url)
//     //     .then(responseData => responseData.json())
//     //     .then(jsonData => {
//     //         jsonData.results.forEach(result => {
//     //             const joke = result
//     //             const j = dadJoke
//     //             dadJoke.innerText = joke
//     //         })
//     //     })
//     //     .catch(err => {
//     //         console.warn('help', err)
//     //         console.log('hello')
//     //     })
//     // })
// })

const jokeUrl = 'https://icanhazdadjoke.com'

const options = {
    headers: {
        Accept: 'application/json'
    }
}

fetch(jokeUrl, options)
    .then(response => response.json())
    // .then(console.log)
    .catch(console.warn)

document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.querySelector('#joke-container')
    const jokeButton = document.querySelector('#joke-button')

    jokeButton.addEventListener('click', () => {
        // fetch a joke from the joke api
        fetch(jokeUrl, options)
            // un-jsonify the data
            .then(response => response.json())
            .then(jokeData => {
                // console.log(jokeData.joke)
                // clear out the joke container
                while(jokeContainer.firstChild) {
                    jokeContainer.removeChild(jokeContainer.firstChild)
                }
                // create a p tag
                const p = document.createElement('p')
                // set the text of the p tag to be the joke
                p.innerText = jokeData.joke
                // append the p tag to the joke container
                jokeContainer.append(p)
                // make a fetch request and return it from this .then
                const imageUrl = `https://icanhazdadjoke.com/j/${jokeData.id}.png`
                const image = new Image()
                image.src = imageUrl
                image.alt = jokeData.joke
                jokeContainer.append(image)
            })
            // catch our errors
            .catch(err => console.warn('help', err))
    })
})