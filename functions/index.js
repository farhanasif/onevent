const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate((doc) => {
    const project = doc.data();
    return admin.firestore().collection('notifications').add({
        content: 'added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(doc => {
        //console.log('notification added', doc)
        return doc;
    })
})