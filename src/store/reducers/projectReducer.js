const initState = {
    projects: [
        { id: '1', title: 'In lacinia nisl id vulputate dictum', content: 'In lacinia nisl id vulputate dictum. Mauris tortor sapien, semper non sodales eu, tincidunt eu leo. Donec semper massa ac dui aliquam, aliquam sollicitudin ligula tristique. Vivamus lobortis pulvinar lectus id convallis. Fusce nec sapien commodo, posuere orci ac, fermentum ante. Aliquam pellentesque, enim congue tristique lobortis, odio massa euismod enim, eu suscipit augue nisi non purus.'},
        { id: '2', title: 'Nam efficitur sit amet dolor vel faucibus', content: 'In lacinia nisl id vulputate dictum. Mauris tortor sapien, semper non sodales eu, tincidunt eu leo. Donec semper massa ac dui aliquam, aliquam sollicitudin ligula tristique. Vivamus lobortis pulvinar lectus id convallis. Fusce nec sapien commodo, posuere orci ac, fermentum ante. Aliquam pellentesque, enim congue tristique lobortis, odio massa euismod enim, eu suscipit augue nisi non purus.'},
        { id: '3', title: 'Mauris tortor sapien, semper non sodales eu', content: 'In lacinia nisl id vulputate dictum. Mauris tortor sapien, semper non sodales eu, tincidunt eu leo. Donec semper massa ac dui aliquam, aliquam sollicitudin ligula tristique. Vivamus lobortis pulvinar lectus id convallis. Fusce nec sapien commodo, posuere orci ac, fermentum ante. Aliquam pellentesque, enim congue tristique lobortis, odio massa euismod enim, eu suscipit augue nisi non purus.'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state;
}

export default projectReducer;