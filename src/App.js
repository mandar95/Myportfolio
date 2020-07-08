import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "boxicons/css/boxicons.min.css";



import Navbar from './component/navbar.component';
import ContentBody from './component/contentbody.component';
import Footer from './component/footer.component';

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <div className="container" style={{ 'marginTop': '65px' }}> */}
        <ContentBody />
      {/* </div> */}
      <Footer />
    </div>
  );
}



export default App;
