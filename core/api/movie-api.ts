import axios from 'axios';

export const movieAPI = axios.create({
    baseURL: process.env.EXPO_PUBLIC_TMDB_DB_URL,
    params:{
        language: 'es-ES',
        api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    }
})