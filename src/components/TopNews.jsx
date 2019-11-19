import React from 'react';
import '../../public/style.css';

class TopNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: []
    };
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       // items: data
    //     });
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render() {
    return (
      <div className='top-news-wrapper'>
        <div className='container'>
          <div className='top-news'>
            <div className='line-1'>
              <div className='article-line-1' id='article-1-line-1'>
                <div id='article-1-line-1-img'>
                  <img src='https://cdn.vox-cdn.com/thumbor/vQ0Agrmnz4j5YhSfit8_YEDzozM=/0x0:2040x1360/1075x1075/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65723292/akrales_191113_3779_0317.0.jpg' />
                </div>
                <div className='content' id='article-1-line-1-content'>
                  <span className='title' id='big-title'>
                    <h2 className='big-title-heading'>
                      <a href='#'>
                        GOOGLE STADIA REVIEW: THE BEST OF CLOUD GAMING IS STILL
                        JUST A BETA
                      </a>
                    </h2>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>BY</span>
                    <span className='author'>SEAN HOLLISTER</span>
                  </span>
                </div>
              </div>
              <div className='article-line-1' id='article-2-line-1'>
                <div id='article-2-line-1-img'>
                  <img src='https://cdn.vox-cdn.com/thumbor/BKDLOigtCbCdOZEyeuaQKk9iRrg=/0x0:800x555/920x613/filters:focal(468x161:596x289):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65726542/ps3-dualshock-teaser-rm.0.jpg' />
                </div>
                <div className='content'>
                  <span className='title'>
                    <a href='#'>
                      Here’s what the PlayStation 5’s controller might look like
                    </a>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>author</span>
                  </span>
                </div>
              </div>
            </div>

            <div className='line-2'>
              <div className='article-line-2' id='article-1-line-2'>
                <div id='article-1-line-2-img'>
                  <img src='https://cdn.vox-cdn.com/thumbor/BKDLOigtCbCdOZEyeuaQKk9iRrg=/0x0:800x555/920x613/filters:focal(468x161:596x289):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65726542/ps3-dualshock-teaser-rm.0.jpg' />
                </div>
                <div className='content' id='article-1-line-2-content'>
                  <span className='title'>
                    <a href='#'>
                      Here’s what the PlayStation 5’s controller might look like
                    </a>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>author</span>
                  </span>
                </div>
              </div>
              <div className='article-line-2' id='article-2-line-2'>
                <div id='article-2-line-2-img'>
                  <img src='https://cdn.vox-cdn.com/thumbor/DG8hWFntXHy48ImNw5NHCYo2EU8=/0x0:1055x793/920x613/filters:focal(444x313:612x481):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65726645/Screen_Shot_2019_11_18_at_4.29.43_PM.0.png' />
                </div>
                <div className='content' id='article-2-line-2-content'>
                  <span className='title' id='big-title'>
                    <h2 className='big-title-heading'>
                      <a href='#'>
                        GOOGLE STADIA REVIEW: THE BEST OF CLOUD GAMING IS STILL
                        JUST A BEta
                      </a>
                    </h2>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>author</span>
                  </span>
                </div>
              </div>
            </div>

            <div className='line-3'>
              <div className='article-line-3'>
                <div className='line-3-img'>
                  <img src='https://cdn.vox-cdn.com/thumbor/ppqF6MWG6T5Nv9eTHa0sGsqDyd8=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65726368/acastro_180604_1777_apple_wwdc_0002.0.jpg' />
                </div>
                <div className='content' className='line-3-content'>
                  <span className='title'>
                    <a href='#'>
                      Here’s what the PlayStation 5’s controller might look like
                    </a>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>author</span>
                  </span>
                </div>
              </div>
              <div className='article-line-3'>
                <div className='line-3-img'>
                  <img src='https://web.archive.org/save/_embed/https://cdn.vox-cdn.com/thumbor/vTXW6sKY_61s2Q3JgnLgHKNoOGM=/0x0:2040x1361/2070x1164/filters:focal(854x451:1180x777):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65698631/VRG_3665_001.0.jpg' />
                </div>
                <div className='content' className='line-3-content'>
                  <span className='title'>
                    <a href='#'>
                      Here’s what the PlayStation 5’s controller might look like
                    </a>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>author</span>
                  </span>
                </div>
              </div>
              <div className='article-line-3'>
                <div className='line-3-img'>
                  <img src='https://cdn.vox-cdn.com/thumbor/SsggM3pMJMIlbWB1DAZI3cHYm_s=/0x0:2040x1360/920x613/filters:focal(924x509:1250x835):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65724568/akrales_190429_3371_0074.0.jpg' />
                </div>
                <div className='content' className='line-3-content'>
                  <span className='title'>
                    <a href='#'>
                      Here’s what the PlayStation 5’s controller might look like
                    </a>
                  </span>
                  <span className='authorInfo'>
                    <span className='by'>By</span>
                    <span className='author'>author</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopNews;
