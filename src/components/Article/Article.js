import "Article.css"

export default function Article({ id, author, title, imageUrl, date }) {

    return (
        <div className="article" id={id}>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{date}</p>
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