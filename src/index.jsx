import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header.jsx';
import TopNews from './components/TopNews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          // items: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TopNews />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
