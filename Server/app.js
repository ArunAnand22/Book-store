const express=require('express')
const mongoose=require('mongoose')
const dataService=require('./dataService')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())
//Middleware

mongoose.connect("mongodb://127.0.0.1:27017/Bookstore").then(()=>{
    console.log("Connected to mongodb")
}).catch((error)=>{
    console.log(error)
})

//register user
app.post('/user/register',(req,res)=>{
    dataService.registerUser(
        req.body.name,
        req.body.email,
        req.body.password).then(
    (result)=>{
        res.status(result.statusCode).json(result)
    }
    )
})
//login user
app.post('/user/login',(req,res)=>{
    dataService.loginUser(
        req.body.email,
        req.body.password).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//get all books
app.get('/user/allbooks',(req,res)=>{
    dataService.getAllBooks().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//get indivial book by id
app.get('/user-book/:id',(req,res)=>{
    dataService.getIndividualBook(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//add to favorite
app.post('/user/favorite-book',(req,res)=>{
    dataService.addFavorite(
        req.body.email,
        req.body.book,
        req.body.category,
        req.body.available,
        req.body.price,
        req.body.image,
        req.body.author,
        req.body.year).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//get item from favorite
app.post('/user/favorites-books',(req,res)=>{
    dataService.getFavorite(req.body.email).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//remove item from favorite
app.delete('/user/fav-delete/:id',(req,res)=>{
    dataService.removeFav(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//add to cart
app.post('/user/cart-section',(req,res)=>{
    
})
//-------------Admin Side-------------------
//get all users
app.get('/admin/usercount',(req,res)=>{
    dataService.getallUser().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//delete user by admin
app.delete('/admin/delete/:id',(req,res)=>{
    dataService.deleteUser(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//Book section
//delete book
app.delete('/admin/book/delete/:id',(req,res)=>{
    dataService.deleteBook(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//add new book to db
app.post('/admin/add-book',(req,res)=>{
    dataService.addNewBook(
        req.body.book,
        req.body.category,
        req.body.available,
        req.body.price,
        req.body.image,
        req.body.author,
        req.body.year).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//update existing book
app.post('/admin/update-book/:id',(req,res)=>{
    dataService.updateBook(req.params.id,req.body.book,req.body.category,req.body.available,req.body.price,req.body.image,req.body.author,req.body.year).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.listen(5000,()=>{
    console.log("Listening to port 5000");
})