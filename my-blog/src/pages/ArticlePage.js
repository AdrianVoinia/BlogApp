import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import articlesList from "./article-content";
import NotFoundPage from "./NotFoundPage";


const ArticlePage = () => {
    const { name } = useParams();
    const article = articlesList.find(article =>  article.name === name);
    const otherArticles = articlesList.filter(article => article.name !== name);

    if(!article) {
        return (
            <NotFoundPage/>
        )
    }

    return (
        <>
            <h1>{article.name}</h1>
            {article.content.map((paragraph, key) => (<p key={key}>
                {paragraph}
            </p>))}
            <h3>Other articles: </h3>
            <ArticlesList articles={otherArticles} />
        </>
    )
};

export default ArticlePage;