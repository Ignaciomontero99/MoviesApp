import {movieAPI} from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-response';

export const nowPlayingAction = async () => {
    // Lógica para obtener las películas que se están reproduciendo actualmente
    try {
        const {data} = await movieAPI.get<MovieDBMoviesResponse>('/now_playing');
        console.log(JSON.stringify(data, null, 2));
    }catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies';
    }
}