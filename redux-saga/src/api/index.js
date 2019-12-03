const key =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = 'https://api.unsplash.com/photos/';

const fetchImages = async page => {
    const response = await fetch(`${URL}${key}&per_page=3&page=${page}`);
    const data = await response.json();
    console.log('Inside fetch image');
    console.log(response.status);
    console.log(data);
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages };
