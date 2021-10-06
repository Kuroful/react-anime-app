import mongoose from 'mongoose';

const animeSchema = mongoose.Schema({
    title: String,
    image_url: String,
    mal_id: Number,
    url: String,
    start_date: String,

});


var AnimeListItem = mongoose.model('AnimeListItem', animeSchema);

export default AnimeListItem;