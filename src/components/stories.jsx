import React from 'react';

class Stories extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='news'>
        <div className='container'>
          {this.props.data.splice(7, 20).map((item, key) => (
            <div className='newsAll' key={key}>
              <div className='newsImg1'>
                <img className='newsImg' src={item.imgUrl} />
              </div>
              <div className='newspart'>
                <h2 className='newsTitle'>
                  <a className='newsTitle1' href='#' id={item.id}>
                    {item.title}
                  </a>
                </h2>
                <div className='newsLine'>
                  By
                  <span className='newsA'> {item.authorName} </span>
                  <span className='newsB'> {item.createdAt}</span>
                  <span className='newsC'>
                    {' '}
                    {item.comments.length} comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Stories;
