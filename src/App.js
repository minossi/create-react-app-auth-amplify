import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Ampligram } from './ui-components';
import { MarketingFooter } from "./ui-components";

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <AmplifySignOut />
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <p>
        //     Edit <code>src/App.js</code> and save to reload.
        //   </p>
        //   <a
        //     className="App-link"
        //     href="https://reactjs.org"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Learn React
        //   </a>
        // </header>
//       </div>
//     );
//   }
// }

// export default withAuthenticator(App);



// import { Amplify } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      {/* <AmplifySignOut /> */}
      <header className="App-header">
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        <Ampligram />
        <MarketingFooter />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default withAuthenticator(App);







