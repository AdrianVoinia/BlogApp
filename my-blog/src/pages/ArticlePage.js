import { useParams } from "react-router-dom";
import articlesList from "./article-content";


const ArticlePage = () => {
    const { name } = useParams();
    const article = articlesList.find(article =>  article.name === name);

    if(!article) {
        return (
            <h1>This articol does not exist.</h1>
        )
    }

    return (
        <>
            <h1>{article.name}</h1>
            {article.content.map((paragraph, key) => (<p key={key}>
                {paragraph}
            </p>))}
        </>
    )
};

export default ArticlePage;