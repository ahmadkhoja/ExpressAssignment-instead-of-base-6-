const port = 3000

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.write(`
        Welcome Back to Express Batata... 
    `)
    res.send()
})

app.get('/test',(req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain' });
    res.write(`ok`)
    res.send()
})
app.get('/time',(req,res)=>{
    let date = new Date();
    let h = date.getHours();
    let s = date.getSeconds();
    res.writeHead(200, {
        'Content-Type': 'text/plain' });
    res.write(`
        ${h}:${s}    
    `)
    res.send()
})

app.get('/hello/:id?',(req,res)=>{

    let url = req.url
    let input = url.split('/')
    input[0] = '/'
    id = input[2]
    res.writeHead(200, {
        'Content-Type': 'text/plain' });
    res.write(`
        Hello ${id}
    `)
    res.send()
})


app.get('/search?:s',(req,res)=>{
        let url = req.url
        let input = url.split('/search')
        s = input[1]
        console.log(input,s)
        
        if(s != ''){
            res.writeHead(200, {
                'Content-Type': 'text/plain' });
            res.write(`
                ok ${s}
         `)
            res.send()
        }else{
            res.writeHead(500, {
                'Content-Type': 'text/plain' });
            res.write(`
            you have to provide a search
        `)
            res.send()
        }
    })
    const movies = [
        { title: 'Jaws', year: 1975, rating: 8 },
        { title: 'Avatar', year: 2009, rating: 7.8 },
        { title: 'Brazil', year: 1985, rating: 8 },
        { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
    ]
    let readMovie = function(){
        let theMovie = ``
        for(let i =0; i < movies.length; i++){
            let movie = movies[i]
                let title = movie.title
                let year = movie.year
                let rating = movie.rating
                console.log(title,year,rating)
                theMovie += `
                <h2>Read Movie `+ (i+1) +`</h2>
                <p> title : `+ title +`</p>
                <p> year : `+ year +`</p>
                <p> rating :`+ rating +`</p>
                `
            }
            return theMovie;
        }
    // const keys = Object.keys(movie)
            // console.log(keys,':::')

    

    app.get('/movies/read',(req,res)=>{
        res.writeHead(200, {
            'Content-Type': 'text/html' });
        let a = readMovie()
        console.log(a)
        res.write(`
        <html>
        <head></head>
        <meta charset="UTF-8">
        <body>
        <div>
        <h1>Movies</h1>`)
        res.write(a)
        res.write(
            `</div>
        </body>
        </html>`)
        // res.setHeader(name, value)
        res.send()
    })

    let readMovieByDate = function(){
        let theMovie = ``
        movies.sort((a,b) => a.year.toString().localeCompare(b.year))
        for(let i =0; i < movies.length; i++){
            let movie = movies[i]
                let title = movie.title
                let year = movie.year
                let rating = movie.rating
                console.log(title,year,rating)
                theMovie += `
                <h2>Read Movie`+ (i+1) +` By Date</h2>
                <p> title : `+ title +`</p>
                <p> year : `+ year +`</p>
                <p> rating :`+ rating +`</p>
                `
            }
            return theMovie;
        }
    app.get('/movies/read/by-date',(req,res)=>{
        res.writeHead(200, {
            'Content-Type': 'text/html' });
        let a = readMovieByDate()
        console.log(a)
        res.write(`
        <html>
        <head></head>
        <meta charset="UTF-8">
        <body>
        <div>
        <h1>Movies</h1>`)
        res.write(a)
        res.write(
            `</div>
        </body>
        </html>`)
        // res.setHeader(name, value)
        res.send()
    })

    let readMovieByRating = function(){
        let theMovie = ``
        movies.sort((a,b) => a.rating.toString().localeCompare(b.rating)).reverse()
        for(let i =0; i < movies.length; i++){
            let movie = movies[i]
                let title = movie.title
                let year = movie.year
                let rating = movie.rating
                console.log(title,year,rating)
                theMovie += `
                <h2>Read Movie`+ (i+1) +` By Top Rating</h2>
                <p> title : `+ title +`</p>
                <p> year : `+ year +`</p>
                <p> rating :`+ rating +`</p>
                `
            }
            return theMovie;
        }
    
    
    app.get('/movies/read/by-rating',(req,res)=>{
        res.writeHead(200, {
            'Content-Type': 'text/html' });
        let a = readMovieByRating()
        console.log(a)
        res.write(`
        <html>
        <head></head>
        <meta charset="UTF-8">
        <body>
        <div>
        <h1>Movies</h1>`)
        res.write(a)
        res.write(
            `</div>
        </body>
        </html>`)
        // res.setHeader(name, value)
        res.send()
    })
    

    let readMovieByTitle = function(){
        let theMovie = ``
        movies.sort((a,b) => a.title.toString().localeCompare(b.title))
        for(let i =0; i < movies.length; i++){
            let movie = movies[i]
                let title = movie.title
                let year = movie.year
                let rating = movie.rating
                console.log(title,year,rating)
                theMovie += `
                <h2>Read Movie`+ (i+1) +` By Title</h2>
                <p> title : `+ title +`</p>
                <p> year : `+ year +`</p>
                <p> rating :`+ rating +`</p>
                `
            }
            return theMovie;
        }
    
    
    app.get('/movies/read/by-title',(req,res)=>{
        res.writeHead(200, {
            'Content-Type': 'text/html' });
        let a = readMovieByTitle()
        console.log(a)
        res.write(`
        <html>
        <head></head>
        <meta charset="UTF-8">
        <body>
        <div>
        <h1>Movies</h1>`)
        res.write(a)
        res.write(
            `</div>
        </body>
        </html>`)
        // res.setHeader(name, value)
        res.send()
    })
    
    let readMovieById = function(input,id){
        if(input[1] == 'movies' && input[2] == 'read' &&  input[3] == 'id'&& input[4] == id){
            for(let i = 0; i <= movies.length-1; i++){
                let movie = movies[i]
                let title = movie.title
                let year = movie.year
                let rating = movie.rating
                if(i == id){
                    console.log(title,year,rating)
                    let theMovie = `
                    <h2>Read Movie `+ id +`</h2>
                    <p> title : `+ title +`</p>
                    <p> year : `+ year +`</p>
                    <p> rating :`+ rating +`</p>
                    `
                    return theMovie
                }
            }
            return `Page not found 404`
        }
    }
        
        app.get('/movies/read/id/:id',(req,res)=>{
                let url = req.url
                let input = url.split('/')
                input[0] = '/'
                id = input[4]
                let a = readMovieById(input,id)
                if(a != 'Page not found 404'){
                    res.writeHead(200, {
                        'Content-Type': 'text/html' });
                        res.write(`<meta charset="UTF-8">`)
                    res.write(a)
                    res.send()
                }
                else{
                    res.writeHead(404, {
                        'Content-Type': 'text/html' });
                        res.write(`
                        <p>the movie `+ id +` does not exist</p>
                        `)
                        res.send()
                }
        })

    app.get('/movies/create',(req,res)=>{
        res.write(`
            Create Movie 
        `)
        res.send()
    })

    app.get('/movies/update',(req,res)=>{
        res.write(`
            Update Movie
        `)
        res.send()
    })

    app.get('/movies/delete',(req,res)=>{
        res.write(`
            Delete Movie
        `)
        res.send()
    })



app.listen(port,(err)=>{
    if(err){
        console.log('cannot connect to the server')
    }else{
        console.log(`listining to port ${port}`)
    }
})





