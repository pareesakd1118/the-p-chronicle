function getSFData() {
    return fetch("https://newsapi.org/v2/everything?q=francisco&apiKey=d8c243afaa84429180da2f031da4f107")
    .then(res => res.json())
}

export default getSFData