import React from 'react'; //импортируем реакт


export default class Header extends React.Component {

  static path = '/';

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
       <div className="navbar-header">
       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
       <span className="sr-only">Toggle navigation</span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       </button>
       <a className="navbar-brand" href="#">Название сайта</a>
       </div>
       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       <ul className="nav navbar-nav">
       <li className="active"><a href="#">Пункт 1</a></li>
       <li><a href="#">Пункт 2</a></li>
       <li><a href="#">Пункт 3</a></li>
       <li><a href="#">Пункт 4</a></li>
       <li><a href="#">Пункт 5</a></li>
       </ul>
       </div>
        </div>
      </nav>
    );
  }
}
