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

    res.writeHead(200, {
        'Content-Type': 'text/plain' });
        let result = req.params
    res.write(`
        Hello `+ result.id +`
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
                // console.log(title,year,rating)
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
        // console.log(a)
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
                // console.log(title,year,rating)
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
                    // console.log(title,year,rating)
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
        // const movies = [
        //     { title: 'Jaws', year: 1975, rating: 8 },
        //     { title: 'Avatar', year: 2009, rating: 7.8 },
        //     { title: 'Brazil', year: 1985, rating: 8 },
        //     { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
        // ]

        // 
        
        app.get('/movies/add',(req,res)=>{
            let result = req.query
            // console.log(result)
            // console.log(movies)
            // res.write(`` + `---- Title: ` +  result.title + `---- Year: ` + result.year + `---- Rating: ` + result.rating)
            
            //method 1
            // if(result.rating == ''){
            //     result.rating = 4;  
            // }
            //method 2 logic
            result.rating = result.rating || 4 
            //method 3 ternary operations
            // result.rating = result.rating ? result.rating : 4
            
            if(result.title == '' || result.year == '' || result.year.length !=4 || isNaN(result.year) ==true ){
                // { message:'you cannot create a movie without providing a title and a year'}
                res.writeHead(403, {'Content-Type': 'text/html' });
                res.write(`<p>you cannot create a movie without providing a title and a year</p>`)
                res.send() 
            }else{
                res.writeHead(200, {
                    'Content-Type': 'text/html' });
                movies.push(result)
                res.write(`<meta charset="UTF-8">`)
                let a = readMovie()
                res.write(a)
                res.send() 
            }
            
            
        })
         
 
    app.get('/movies/update/:id',(req,res)=>{
        let urlId = req.params.id 
        let id = parseInt(urlId)
        if(id > movies.length || id <=0){
            res.writeHead(404, {
                'Content-Type': 'text/html' });
                res.write(`<p>Page not found error 404</p>`)
                return res.send();
        }
        res.writeHead(200, {
            'Content-Type': 'text/html' });  
        
        let result = req.query
        let oldTitle = movies[id-1].title
        let oldRating = movies[id-1].rating
        let oldYear = movies[id-1].year
        console.log('old title: ',oldTitle,'oldRating: ',oldRating,'oldYear: ',oldYear)
        
        result.title = result.title || oldTitle
        result.rating = result.rating || oldRating
        result.year = result.year || oldYear
        let updateMovie = movies.splice(id-1,1,result)
        // console.log(result,id)
        let a = readMovie() 
        res.write(`<meta charset="UTF-8">`)
        res.write(`` + a)
        res.send()   
         
    })

    app.get('/movies/delete/:id?',(req,res)=>{
        let result = req.params
        console.log("result id: "+result.id, movies.length,"---------------------- ")
        if((result.id > movies.length) || result.id == 0){ 
            res.writeHead(404, {
                'Content-Type': 'text/html' });    
            res.write(`<p>the movie ${result.id} does not exist</p>`)
            res.send()
            return; 
        }  
        res.writeHead(200, {    
            'Content-Type': 'text/html' }); 
            movies.splice(result.id-1,1)   
            let a = readMovie() 
            res.write(`<meta charset="UTF-8">`)
            res.write(a)   
            res.send() 
    })



app.listen(port,(err)=>{
    if(err){
        console.log('cannot connect to the server')
    }else{
        console.log(`listining to port ${port}`)
    }
})





