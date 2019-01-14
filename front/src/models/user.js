export default {
    namespace: 'user',
    state: {

    },
    effects: {

    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    }
}