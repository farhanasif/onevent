export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createdAt: new Date()
        }).then((doc) => {
            firestore.collection('notifications').add({
                content: 'Added a new project',
                user: profile.firstName + ' ' + profile.lastName,
                authorId: uid,
                createdAt: new Date()
            }).then(() => {
                dispatch({
                    type: 'CREATE_PROJECT', project
                })
            }).catch((err) => {
                dispatch({
                    type: 'CREATE_PROJECT_ERROR', err
                })
            })
            
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR', err
            })
        })
        
    }
}