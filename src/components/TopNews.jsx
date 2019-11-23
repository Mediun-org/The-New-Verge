import React from 'react';

class TopNews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='top-news-wrapper'>
        <div className='container'>
          <div className='top-news'>
            <div className='line-1'>
              <div className='article-line-1' id='article-1-line-1'>
                <div id='article-1-line-1-img'>
                  <img src={this.props.data[0].imgUrl} />
                </div>
                <div className='content' id='article-1-line-1-content'>
                  <span className='title' id='big-title'>
                    <h2 className='big-title-heading'>
                      <a
                        href={`https://peaceful-bayou-89377.herokuapp.com/?id=${this.props.data[0].id}`}
                        target='_blankl'
                        id={this.props.data[0].id}
                      >
                        {this.props.data[0].title}
                      </a>
                    </h2>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>BY</span>
                    <span className='author'>
                      {this.props.data[0].authorName}
                    </span>
                  </span>
                </div>
              </div>
              <div className='article-line-1' id='article-2-line-1'>
                <div id='article-2-line-1-img'>
                  <img src={this.props.data[1].imgUrl} />
                </div>
                <div className='content'>
                  <span className='title'>
                    <a
                      href={`https://peaceful-bayou-89377.herokuapp.com/?id=${this.props.data[1].id}`}
                      target='_blankl'
                      id={this.props.data[1].id}
                    >
                      {this.props.data[1].title}
                    </a>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>
                      {this.props.data[1].authorName}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className='line-2'>
              <div className='article-line-2' id='article-1-line-2'>
                <div id='article-1-line-2-img'>
                  <img src={this.props.data[2].imgUrl} />
                </div>
                <div className='content' id='article-1-line-2-content'>
                  <span className='title'>
                    <a
                      href={`https://peaceful-bayou-89377.herokuapp.com/?id=${this.props.data[2].id}`}
                      target='_blankl'
                      id={this.props.data[2].id}
                    >
                      {this.props.data[2].title}
                    </a>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>
                      {this.props.data[2].authorName}
                    </span>
                  </span>
                </div>
              </div>
              <div className='article-line-2' id='article-2-line-2'>
                <div id='article-2-line-2-img'>
                  <img src={this.props.data[3].imgUrl} />
                </div>
                <div className='content' id='article-2-line-2-content'>
                  <span className='title' id='big-title'>
                    <h2 className='big-title-heading'>
                      <a
                        href={`https://peaceful-bayou-89377.herokuapp.com/?id=${this.props.data[3].id}`}
                        target='_blankl'
                        id={this.props.data[3].id}
                      >
                        {this.props.data[3].title}
                      </a>
                    </h2>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>
                      {this.props.data[3].authorName}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className='line-3'>
              {this.props.data.splice(4, 3).map((item, key) => (
                <div className='article-line-3' key={key}>
                  <div className='line-3-img'>
                    <img src={item.imgUrl} />
                  </div>
                  <div className='content' className='line-3-content'>
                    <span className='title'>
                      <a
                        href={`https://peaceful-bayou-89377.herokuapp.com/?id=${item.id}`}
                        target='_blankl'
                        id={item.id}
                      >
                        {item.title}
                      </a>
                    </span>
                    <span className='authorInfo'>
                      <span className='by'>By</span>
                      <span className='author'> {item.authorName}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopNews;
