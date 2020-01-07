const initialState = {
    token: '',
    user: [],
    isAuth: !!localStorage.getItem("token"),
    isLoading: false,
    isSuccess: false,
    error: "",
};

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
};

export default authReducer;
