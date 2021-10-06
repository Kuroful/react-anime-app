export default (anime = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...anime, action.payload];
        
        default:
            return anime;
    }
}