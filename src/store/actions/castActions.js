export const createCast = (casts) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        console.log(casts);
        dispatch({
            type: 'CREATE_CAST', casts
        })
        //make async call to database
        // const firestore = getFirestore();

        // const batch = firestore.batch();
        
        
        // firestore.collection('projects').add({
        //     ...cast
        // }).then(() => {
        //     dispatch({
        //         type: 'CREATE_CAST', cast
        //     })
            
        // }).catch((err) => {
        //     dispatch({
        //         type: 'CREATE_CAST_ERROR', err
        //     })
        // })
        
    }
}