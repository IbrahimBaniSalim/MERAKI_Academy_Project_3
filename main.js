const express=require("express")
const app=express();
const port =5000;

const articles = [
    {
    id: 1,
    title: 'How I learn coding?',
    description:
    'Lorem, Quam, mollitia.',
    author: 'Jouza',
    },
    {
    id: 2,
    title: 'Coding Best Practices',
    description:
    'Lorem, ipsum dolor sit, Quam, mollitia.',
    author: 'Besslan',
    },
    {
    id: 3,
    title: 'Debugging',
    description:
    'Lorem, Quam, mollitia.',
    author: 'Jouza',
    },
    ];
 const getAllArticles=()=>{
app.get("/articles",(req,res)=>{
    res.status(200)
    res.json(articles)
    console.log("test");
})
    }
    getAllArticles()

    const getArticlesByAuthor=()=>{
        app.get("/articles/search_1",(req,res)=>{
            res.status(200)

            const author=req.query.author
            const ArticlesAuthor=articles.filter((articles)=>articles.author===author)
        res.json(ArticlesAuthor)
        })
        
    }
    getArticlesByAuthor()

const createNewArticle=()=>{}












app.listen(port,()=>{
    console.log("server running on port 5000")
})