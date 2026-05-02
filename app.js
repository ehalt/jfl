

const loadJokes = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
    .then((res) => res.json())
    .then((jokes) => displayJokes(jokes))
    .catch(err => {
        console.log(err);
        parent.innerHTML = "<p>something went wrong 🥲 </p>"
    })
}

const displayJokes = (jokes) => {
        console.log(jokes);
        const parent = document.getElementById("parent");
        parent.innerHTML = "";
    // jokes.forEach((joke) => {

    //         const div = document.createElement("div");
    //         div.innerHTML = `

    //         `;
    //         parent.appendChild(div);
    // });

    const div = document.createElement("div");
    div.innerHTML = `
        <h2 class="font-semibold text-xl md:text-4xl mb-4 text-gray-800">${jokes.setup}</h2>
        <h3 class="font-semibold text-2xl md:text-5xl text-amber-600 italic ">${jokes.punchline}</h3>
    `;
    parent.appendChild(div);
}

const btn = document.getElementById("btn");
btn.addEventListener('click', loadJokes);