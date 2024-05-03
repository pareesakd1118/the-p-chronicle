import "./Article.css"

export default function Article({ id, author, title, source, imageUrl, date }) {

    return (
        <div className="article" id={id}>
            <img id="a-img" src={imageUrl} alt={title} />
            <p id="a-source">{source}</p>
            <h3 id="a-title">{title}</h3>
            <div id="a-divider" className="divider"></div>
            <div id="a-authdate-div">
                <p>{date}</p>
                <p id="a-auth">{author}</p>
            </div>
        </div>
    )
}

// "source": {
//     "id": null,
//     "name": "[Removed]"
// },
// "author": null,
// "title": "[Removed]",
// "description": "[Removed]",
// "url": "https://removed.com",
// "urlToImage": null,
// "publishedAt": "1970-01-01T00:00:00Z",
// "content": "[Removed]"