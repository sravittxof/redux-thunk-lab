// write and export your action creator function here
export const fetchCates = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CATS"});
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
        .then((response) => {
            return response.json();
        })
        .then((responseJSON) => {
            // instead of logging here, call dispatch and send the cat JSON data to your store
            console.log(responseJSON.images);
            dispatch({type: "ADD_CATS", cats: responseJSON.images})
        });
    }
}