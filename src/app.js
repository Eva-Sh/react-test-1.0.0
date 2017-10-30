import React from 'react'; //импортируем реакт
import { DevTools } from './utils/index';

export default class App extends React.Component { //экспортируем по умолчанию класс App, который будет наследоваться от компонента Реакт

  static path = '/'; //в path будем хранить роут нашего компонента или страницы

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        { process.env.NODE_ENV !== 'production' ? <DevTools/> : null } 
      </div>
    );
  }

}
