export const getPostsData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => console.error(err));
};

export const getPhotos = () => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const photos = data.slice(0, 5);
            return photos;
        });
};
