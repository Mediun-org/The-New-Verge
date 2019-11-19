import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import TopNews from './components/TopNews.jsx';
import Stories from './components/stories.jsx';
import Footer from './components/footer.jsx';
import '../public/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: []
    };
  }

  render() {
    return (
      <div>
        <Header />
        <TopNews />
        <Stories />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
