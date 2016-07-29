export function saveUser(params) {
    const action ={
        type : 'SAVE_USER',
        usersGrid : params.usersGrid,
        userId: params.userId,
    };
    return action;

}

export function deleteUser(params) {
    const action = {
        type : 'DELETE_USER',
        usersGrid : params.usersGrid,
        userId: params.userId,
    };
    return action;
}

export function searchUser(params) {
    const action ={
        type : 'SEARCH_USER',
        usersGrid : params.usersGrid,
        usersFilt: params.usersFilt
    };
    return action;
}
