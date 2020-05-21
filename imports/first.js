let articles = {}

articles.latest = [
    {
        name:'About JavaScript',
        price:879
    },
    {
        name:'About React',
        price:979
    }
]

articles.find = (table) => { return `Select * form ${table}`}

//module.exports = articles;
export default articles;