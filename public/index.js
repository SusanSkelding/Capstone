function Spa() {
  const [user, setUser] = React.useState({});
  return (
    <HashRouter> 
      <div>
        <NavBar setUser={setUser} user={user}/>        
        {/*<UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>*/}
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" >
              <Login setUser={setUser}/>
            </Route>
            <Route path="/deposit/" >
              <Deposit user={user}/>
            </Route>
            <Route path="/withdraw/" >
              <Withdraw user={user}/>
            </Route>
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" >
              <Balance user={user}/>
            </Route>
            <Route path="/alldata/" component={AllData} />
          </div>
       {/* </UserContext.Provider>*/}
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
