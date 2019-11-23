import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header.jsx';
import TopNews from './components/TopNews.jsx';
import Stories from './components/stories.jsx';
import Footer from './components/footer.jsx';
import '../public/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getDataForHomePage = this.getDataForHomePage.bind(this);
  }

  componentDidMount() {
    this.getDataForHomePage();
  }

  getDataForHomePage() {
    var that = this;
    $.ajax({
      url: '/home',
      method: 'GET',
      success: function(data) {
        that.setState({ data: data });
        console.log(that.state.data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  render() {
    return this.state.data.length === 0 ? null : (
      <div>
        <Header />
        <TopNews data={this.state.data} />
        <Stories data={this.state.data} />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
