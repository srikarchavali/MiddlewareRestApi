const Movie = require("../movies/movieModel");

// build function to add a new entry to our db
// the function takes the request from the client(insomnia) 
// and sends a response from the server(our app)

exports.addMovie = async (req, res)=>{
    try {
        // Delete auto generated mongo index to allow movies with same name to be created
        // Movie.collection.dropIndex('username_1');
        // Movie.collection.dropIndex('title_1');
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
};

// build function to list all of our db entries
// use the req when building more complicated get requests.
exports.listMovies= async(req, res)=>{
    try {
        const movies = await Movie.find({});
        res.status(200).send({movies});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

// Find a movie document from collection
exports.findOne = async (req, res) => {
    try {
        const result = await Movie.findOne({title: req.body.title});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

// Delete a movie document from collection
exports.deleteOne = async (req, res) => {
    try {
        const result = await Movie.deleteOne({title: req.body.title});
        res.status(200).send({message: `Movie deleted successfully!`});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}

// Delete all movies
exports.deleteMany = async (req, res) => {
    try {
        const result = await Movie.deleteMany({});
        res.status(200).send({message: `${result.deletedCount} movies deleted successfully!`});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

//Update movie rating using details
exports.updateOne = async (req, res) => {
    try {
        const result = await Movie.findOneAndUpdate(req.body.title, {$set:{rating: req.body.rating}}, {new: true});
        res.status(200).send({Movie: result});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}
