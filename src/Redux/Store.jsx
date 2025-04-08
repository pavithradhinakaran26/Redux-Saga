// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import authReducer from "./AuthSlice";  

// import rootSaga from "./RootSaga";


// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga); // ✅ Run Saga

// export default store;




import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./UserSlice";
import { UserSaga } from "./UserSaga";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(UserSaga);

export default store;
