// import ( createStore, applyMiddleware, compose ) from 'redux'; //импортируем несколько методов из Редакса. createStore - позволит создать стор.applyMiddleware - позволит подлючить доп.инструменты для работы со стором. Compose - метод, кот.позволит из наших рут редьюсеров создать наш стор.
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { DevTools } from './utils/index';



function _applyMiddleware() { //будет добавлять нашему store определенные инструменты
  const middlewear = [

  ];

  return applyMiddleware(...middlewear);
}

export default function configureStore(initialState) { //initialState отвечает за начальное состояние приложения
  const store = compose(
    _applyMiddleware(),
    DevTools.instrument()
  )(createStore)(rootReducer, initialState); //в этот объект положим результат выполнения функции compose

  return store;

}
