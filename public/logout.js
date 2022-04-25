function LogOut(props){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
  
    return (
      <Card
        bgcolor="secondary"
        header="Log Out"
        status={status}
        body={show ? 
          <LogOutForm setUser={props.setUser} setShow={setShow} setStatus={setStatus}/> :
          <LogOutMsg setShow={setShow} setStatus={setStatus}/>}
      />
    ) 
  }
  
  function LogOutMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>
          Authenticate again
      </button>
    </>);
  }
  
  function LogOutForm(props){
   // const [email, setEmail]       = React.useState('');
   // const [password, setPassword] = React.useState('');
  
    function handle(){
      firebase.auth().signOut();
      fetch(`/account/logOut`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus('');
              props.setShow(false);
              //props.setUser(data);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus(text)
              console.log('err:', text);
          }
      });
    }
  
  
    return (<>
  
     {/*} Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>*/}
      <button type="submit" className="btn btn-light" onClick={handle}>Login Out</button>
    </>);
  }