const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5ddKVAaCzuMGLcyM6B8yDRPf7YizxDkE",
  authDomain: "capstone-afa3a.firebaseapp.com",
  projectId: "capstone-afa3a",
  storageBucket: "capstone-afa3a.appspot.com",
  messagingSenderId: "484723945623",
  appId: "1:484723945623:web:e52c6491c0ddeadf69b9d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {/*props.status && (<div id='createStatus'>{props.status}</div>)*/}
      </div>
    </div>      
  );    
}
