function Deposit(props){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [deposit, setDeposit] = React.useState('');
  const [balance, setBalance] = React.useState("");

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        (
          <><img
            src="deposit.png"
            className="card-img-top"
            alt="Responsive image"
            width="22%" /><>
              <DepositForm user={props.user} setShow={setShow} setStatus={setStatus} setDeposit={setDeposit} /> :
            </></> ):
       <> <DepositMsg setShow={setShow} setStatus={setStatus}/>
    </> }
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [deposit, setDeposit] = React.useState('');

  function makeDeposit(){
    fetch(`/account/update/${props.user.email}/${deposit}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }

  return(<>

<br/>
User
    <p>{props.user.name}</p>
      
   Deposit Amount:<br/>
    <input type="number" 
      className="form-control" 
      placeholder="$0.00" 
      value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-outline-light"
      onClick={makeDeposit}>Deposit</button>
      <br/>
      

  </>);
}