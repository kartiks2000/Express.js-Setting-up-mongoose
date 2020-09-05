

const adding = (req,res,next)=>{
    res.redirect('/products');
}

module.exports = {
    'adding':adding,
};