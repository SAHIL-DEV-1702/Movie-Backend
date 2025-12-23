const Movie = require("../models/movie.models");

exports.getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

exports.searchMovies = async (req, res) => {
    const { q } = req.query;
    const movies = await Movie.find({
        $or: [
            { title: { $regex: q, $options: "i" } },
            { description: { $regex: q, $options: "i" } }
        ]
    });
    res.json(movies);
};

exports.addMovie = async (req, res) => {

    if (!req.body.title || !req.body.rating) {
        return res.status(400).json({ error: "Title and Rating are required." });
    }
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
};

exports.updateMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(movie);
};

exports.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
};
