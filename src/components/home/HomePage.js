import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>pluralsight administration</h1>
        <p>react, redux and react router in es6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">learn more</Link>
        //link tag react router'dan gelir
      </div>
    );
  }
}
export default HomePage;
