import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Stories from './components/stories.jsx';
import Footer from './components/footer.jsx';
import '../public/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>

      {/* <List items={this.state.items}/> */}
      
      <Stories/>
      <Footer/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));