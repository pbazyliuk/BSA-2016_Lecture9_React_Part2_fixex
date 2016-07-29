
const mainState = {
    usersGrid : [],
    userId : 0,
    usersFilt : []
};


export default function patentDetailsReducer(state = mainState, action) {
    //var state = mainState || state;
    switch (action.type) {
        case 'SAVE_USER': {
            const {usersGrid, userId} = action;
            return Object.assign({}, state, {
                usersGrid,
                userId
            })
        }
        case 'DELETE_USER': {
            const { usersGrid, userId } = action;
            return Object.assign({}, state, {
                usersGrid,
                userId
            })
        }
        case 'SEARCH_USER': {
            const { usersGrid ,usersFilt} = action;
            return Object.assign({}, state, {
                usersGrid,
                usersFilt
            })
        }
        default: {
            return state;
        }
    }
}

