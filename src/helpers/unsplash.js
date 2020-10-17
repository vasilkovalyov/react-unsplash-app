import axios from 'axios';

const url = 'https://api.unsplash.com/photos/';
const apiKey = '1Vd3uFiWa7U0PzNxwg17UmTEBCygJE6knnSTKAiL4wM';

export async function getUnsplashPhotosData(page = 1, countPhotos = 100) {
    const response = await axios.get(url, {
        params: {
            client_id: apiKey,
            page: page,
            per_page: countPhotos
        }
    })
    return response;
}

export async function getUnsplashProfileById(id) {
    const response = await axios.get(url+id, {
        params: {
            client_id: apiKey,
        }
    })
    return response.data;
}