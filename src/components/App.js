//this component handles the app template used ın every page
import React,{PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <Header/>
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children : PropTypes.object.isRequired //case sensitive, object o sunu büyük yazınc çalışmıyor
};
export default App;
