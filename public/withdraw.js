function Withdraw(props){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const [withdraw, setWithdraw] = React.useState(''); 

  return (
    <Card
    bgcolor="warning"
		txtcolor="white"
		header="Withdraw"
		status={status}
		body={
		  show ? (
      
        <><img
          src="withdraw.png"
          className="card-img-top"
          alt="Responsive image"
          width="22%" /><>
            <WithdrawForm user={props.user} setShow={setShow} setStatus={setStatus} setWithdraw={setWithdraw} /> :

          </></> ):
      <>  <WithdrawMsg setShow={setShow} setStatus={setStatus}/>
        
        </> }
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
 // const [email, setEmail]   = React.useState('');
 const [amount, setWithdraw] = React.useState('');
  

  function handle(){
    fetch(`/account/update/${props.user.email}/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.amount));
            props.setShow(false);
            props.setWithdraw(data.amount);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }


  return(<>

    User <br/>
    <p>{props.user.name}</p>

   Withdrawal Amount:<br/>
    <input type="number" 
      className="form-control" 
      placeholder="$0.00" 
      value={amount} 
      onChange={e => setWithdraw(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-outline-light"
      onClick={handle}>
      Withdraw
    </button>

  </>);
}
