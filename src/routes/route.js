
const express = require("express")
const { createCart, updateCart,getCart ,deleteCart} = require("../controller/cartController")
const { createProduct,getProduct, getProductByID, updateProduct, deleteProduct } = require("../controller/productController")
const { createUser, loginUser,getUser,updateUser } = require("../controller/userController")
const { createOrder,updateOrder} = require("../controller/orderController")
const route = express.Router()
// const { registerUser,loginUser } = require("../Controller/userController")
// const { createBook,getBooks,getBookById,updateBookById,deleteBookById } = require("../Controller/bookController.js")
const { verifyToken,verifyTokenAndAuthorization} = require("../Middleware/auth.js")
// const { createReview,reviewUpdate,reviewDelete } = require("../Controller/reviewController")




route.post("/register", createUser)
route.post("/login", loginUser)
route.get("/user/:userId/profile", verifyToken, getUser)
route.put("/user/:userId/profile", verifyTokenAndAuthorization, updateUser)

route.post("/products",createProduct)
route.get("/products",getProduct)
route.get("/products/:productId",getProductByID)
route.put("/products/:productId",updateProduct)
route.delete("/products/:productId",deleteProduct)

route.post("/users/:userId/cart",verifyTokenAndAuthorization,createCart )
route.put("/users/:userId/cart",verifyTokenAndAuthorization,updateCart )
route.get("/users/:userId/cart",verifyTokenAndAuthorization,getCart )
route.delete("/users/:userId/cart",verifyTokenAndAuthorization,deleteCart )

route.post("/users/:userId/orders",createOrder)
route.put("/users/:userId/orders",updateOrder)










route.all("/*",(req,res)=>{
    console.log("Plz enter valid route");
    res.status(400).send({msg:"invalid route"})
})



module.exports = route
