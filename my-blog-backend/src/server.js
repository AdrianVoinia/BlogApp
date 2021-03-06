import express from 'express'
import bodyParser from 'body-parser';

const articlesInfo = {
    'learn-react' : {
        upvotes : 0,
        comments : [],
    },
    'learn-node' : {
        upvotes : 0,
        comments : [],
    },
    'my-thoughts-on-resumes' : {
        upvotes : 0,
        comments : [],
    }
}

const app = express();
app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes++;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})

app.post('/api/articles/:name/add-comment', (req, res) => {
    const {userName, text} = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({userName, text});

    res.status(200).send(articlesInfo[articleName])
})

app.listen(8000, () => console.log('Listening on port 8000'))