const dataBase=require('./database')

//User side
//register new user
const registerUser=(name,email,password)=>{
    return dataBase.User.findOne({email:email}).then(
        data=>{
            if(data){
                return{
                    status:false,
                    statusCode:401,
                    message:"User already exists"
                }
            }else{
                const newUser=new dataBase.User({
                    name,
                    email,
                    password
                })
                newUser.save();
                return{
                    status:true,
                    statusCode:200,
                    message:"User added successfully"
                }
            }
        }
    )
}
const loginUser=(email,password)=>{
    return dataBase.User.findOne({email,password},{_id:0,password:0}).then(
        (data)=>{
            if(data){
                return{
                    status:true,
                    statusCode:200,
                    data:data
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"User credentials not found"
                }
            }
        }
    )
}
//get all books
const getAllBooks=()=>{
    return dataBase.Book.find().then(
        (data)=>{
            if(data){
                return{
                    status:true,
                    statusCode:200,
                    data:data
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Not found"
                }
            }
        }
    )
}
//---------------------------------------------------------------

//admin side
//get all users
const getallUser=()=>{
    return dataBase.User.find().then(
        data=>{
            if(data){
                return{
                    status:true,
                    statusCode:200,
                    data:data
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"User not found"
                }
            }
        }
    )
}
//delete user
const deleteUser=(id)=>{
    return dataBase.User.findByIdAndDelete({_id:id}).then(
        (data)=>{
            if(data){
                return{
                    status:true,
                    statusCode:200,
                    message:"User deleted"
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"User not found"
                }
            }
        }
    )
}
//admin add book
const addNewBook=(book,category,available,price,image,author,year)=>{
    return dataBase.Book.findOne({book}).then(
        (data)=>{
            if(data){
                return{
                    status:false,
                    statusCode:401,
                    message:"Book already exists"
                }
            }else{
                const newBook=new dataBase.Book({
                    book,
                    category,
                    available,
                    price,
                    image,
                    author,
                    year
                })
                newBook.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"Book added successfully"
                }
            }
        }
    )
}
//admin delete book
const deleteBook=(id)=>{
    return dataBase.Book.findByIdAndDelete({_id:id}).then(
        (data)=>{
            if(data){
                return{
                    status:true,
                    statusCode:200,
                    message:"Book deleted successfully"
                }
            }else{
                return{
                    status:false,
                    statusCode:400,
                    message:"Item not found"
                }
            }
        }
    )
}
//update book details
const updateBook=(id,book,category,available,price,image,author,year)=>{
    return dataBase.Book.findByIdAndUpdate({_id:id}).then(
        (result)=>{
            if(result){
                result.book=book,
                result.category=category,
                result.available=available,
                result.price=price,
                result.image=image,
                result.author=author,
                result.year=year
                result.save();
                return{
                    status:true,
                    statusCode:200,
                    message:"Book updated successfully"
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Updation error"
                }
            }
        }
    )
}

//export 
module.exports={
    registerUser,
    loginUser,
    getallUser,
    deleteUser,
    getAllBooks,
    addNewBook,
    deleteBook,
    updateBook
}