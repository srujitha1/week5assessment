let  Movie = require('./moviesModel')

exports.create = function(req,res){
    console.log('Came inside save method of movies')
    let movie = new Movie();
    console.log(req.body);
    movie.id = req.body.id;
    movie.name = req.body.name;
    movie.desc = req.body.desc;
    movie.genre = req.body.genre;
    movie.stars = req.body.stars;
    //Movie.save()
    movie.save(function(){
        res.json({
            status:'SUCCESS',
            message:'Saved movie successfully',
            data:movie
        })
    })
}

exports.listAll = function(req,res){
    Movie.find(function(err,movies){
        if(err)
            res.send(err)
        res.json({
            message:'movies retrived successfully',
            data:movies
        })
    })
}

exports.getById = function(req,res){
    Movie.findById(req.params.id,function(err,m){
        console.log(m);
        if(err)
            res.send(err);
        res.json({
            message:'success',
            data:m
        });
    });
    
};

exports.update = function(req,res){
    Movie.findById(req.params.id,function(err,movie){
        if(err){
            res.send(err)
        }
        else{
            movie.name = req.body.name?req.body.name:movie.name;
            movie.desc = req.body.desc?req.body.desc:movie.desc;
            movie.genre = req.body.genre?req.body.genre:movie.genre;
            movie.stars = req.body.stars?req.body.stars:movie.stars;
            movie.save(function(){
                res.json({
                    status:'SUCCESS',
                    message:'Saved movie successfully',
                    data:movie
                })
            })
        }
    })
}

exports.delete = function(req,res){
    Movie.remove({"_id":req.params.id},function(err,movie){
        if(err)
            res.send(err);
        res.json({
            message:'Deleted successfully',
            data:movie
        })
    })
}