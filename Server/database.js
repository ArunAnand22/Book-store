const mongoose=require('mongoose')

const User=mongoose.model('User',{
    name:{
        type:String
        
    },
    email:{
        type:String
        
    },
    password:{
        type:String
        
    }
})

//Books
const Book=mongoose.model('Book',{
    book:{
        type:String
    },
    category:{
        type:String
    },
    available:{
        type:Boolean
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    author:{
        type:String
    },
    year:{
        type:String
    }    
})
//Favorite
const Favorite=mongoose.model('Favorite',({
    //schema creation
    email:{
        type:String
    },
    book:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    available:{
        type:String
    },
    author:{
        type:String
    }
}))

//export
module.exports={
    User,
    Book,
    Favorite
}