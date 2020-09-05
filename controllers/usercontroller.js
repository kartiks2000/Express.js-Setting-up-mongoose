

const home = (req,res,next)=>{
    res.render('home');
}

const add = (req,res,next)=>{
    res.render('add');
}

const products = (req,res,next)=>{
    res.render('products');
}

module.exports = {
    'add':add,
    'products':products,
    'home':home,
};