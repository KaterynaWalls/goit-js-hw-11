
const API_KEY = '46111886-e1974f40af7d3aa808257f9c9';

export const fetchImages = (query) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                throw new Error('No images found');
            }
            return data.hits;
        })
        .catch(error => {
            console.error(error);
            throw error; 
        });
};


