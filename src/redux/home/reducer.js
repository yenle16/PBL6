import HomeAction from './action'
const initState = {
    data: []
    //add more
}
export const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case HomeAction.SAMPLE_ACTION:
            return {
                ...state
            }
        default:
            return state;
    }
}
export default HomeReducer;