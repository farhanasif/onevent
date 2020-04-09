export const createCast = (casts) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {

        const firestore = getFirestore();

        casts.map(cast => {
            console.log(cast.first_name);
            firestore.collection('casts').add({
                cast
            }).then((doc) => {
                console.log(doc)
                
            }).catch((err) => {
                console.log(err)
            })
        })

        dispatch({
            type: 'CREATE_CAST'
        })

    }
}