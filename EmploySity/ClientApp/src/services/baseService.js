export const getMethod = (api, args) => {
    if (args) {
        api = `${api}/${args}`;
    }
    
    return fetch(api)
        .then(resp => resp.json())
        .then(result => Promise.resolve(result));
}