import { combineReducers } from 'redux'; // combineReducers - метод позволяет объединять много методов в один
import { routerReducer } from 'react-router-redux';

export default combineReducers({ // здесь перечисляются корневые редьюсеры
  routing: routerReducer
});
