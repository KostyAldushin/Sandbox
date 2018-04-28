import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Post from "./component/Post.js"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// // let post_header = React.createClass({
// //     render : function () {
//
//     }
// })
//
// ReactDOM.render(
//     <Post className="post"
//           header="Учим реакт"
//           likes="500">
//            TDadsadsadsadasdada
//         <img src="cats.jpg"/>
//     </Post>,
//     document.getElementById('root'));

//
// ReactDOM.render(
//     <Post className="post"
//           header="Учим реакт"
//           likes="500">
//         TDadsadsadsadasdada
//         <img src="./cat.jpg"/>
//     </Post>,
//     document.getElementById('root'));
