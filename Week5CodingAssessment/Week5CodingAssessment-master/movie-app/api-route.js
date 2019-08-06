let router = require('express').Router();
let MoviesController = require('./movieController');

router.get('/',(req,res)=>{
    res.json({
        status:'API is working',
        message:'Movie apps rest API'
    })
})

router.route('/movies').get(MoviesController.listAll).post(MoviesController.create);

router.route('/movies/:id').get(MoviesController.getById).put(MoviesController.update).delete(MoviesController.delete);
module.exports = router;