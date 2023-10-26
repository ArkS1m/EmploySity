export const getMethod = (api) => {
    return fetch(api)
        .then(resp => resp.json())
        .then(result => Promise.resolve(result));
}