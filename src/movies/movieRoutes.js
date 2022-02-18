const {Router} = require('express');
const {addMovie, listMovies, findOne, deleteOne, deleteMany, updateOne} = require('../movies/movieController');

const movieRouter = Router();

movieRouter.post('/movies', addMovie);
movieRouter.get('/movies', listMovies);
movieRouter.get('/search', findOne);
movieRouter.delete('/delete', deleteOne);
movieRouter.delete('/deleteall', deleteMany);
movieRouter.patch('/update', updateOne);

module.exports = movieRouter;