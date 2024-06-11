const authorise = (req, res, next) => {
    const {user} = req.query
    if(user === 'vivek'){
        req.user = {name:'vivek',id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorise