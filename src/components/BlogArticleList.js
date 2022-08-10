import React from 'react'

export default function BlogArticleList() {
  return (
    <div className="section blog-articles hide">
    <div className="main-container">
      <div className="inpage-scroll blog">
        <div className="content-top articles">
          <div className="split-content article-left">
            <h2
              // data-w-id="0b7c6ed3-4213-f93b-0a03-422871b9d138"
              // style="
              //   -webkit-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   opacity: 0;
              // "
              className="title-2 articles-right"
            >
              More Content
            </h2>
          </div>
          <div className="split-content article-right button-right _1">
            <div className="project-button right">
              <a
                // data-w-id="2f4576f4-803e-5db0-5413-7fe6bddb8e73"
                // style="
                //   -webkit-transform: translate3d(0, 0, 0)
                //     scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0)
                //     skew(0, 0);
                //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
                //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   opacity: 0;
                // "
                href="#"
                className="project-btn home-sm w-inline-block"
              >
                <div className="project-btn-inside">
                  <div className="button-text white">View More Articles</div>
                  <img
                    src="./webflowFiles/images/5e783247e7efaf4135a2d97a_right-long-arrow-red.svg"
                    loading="lazy"
                    alt=""
                    className="btn-arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="article-grid w-dyn-items">
            <div
              // data-w-id="0b7c6ed3-4213-f93b-0a03-422871b9d13f"
              // style="
              //   -webkit-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   -moz-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   -ms-transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 1)
              //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              //   opacity: 0;
              // "
              role="listitem"
              className="w-dyn-item"
            >
              <a href="#" className="article-wrapper w-inline-block">
                <div className="image-wrapper-2 post-section">
                  <div className="bloh-title-ab">
                    <h3 className="title-2 h4 post-section"></h3>
                    <div className="accent-line"></div>
                  </div>
                </div>
                <div className="post-section-content">
                  <div className="inside-button-container">
                    <div className="button-text continue-reading">
                      Continue reading
                    </div>
                    <img
                      src="./webflowFiles/images/down-arrow.svg"
                      loading="lazy"
                      alt=""
                      className="image cr-arrow"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="w-dyn-empty">
            <div>No items found.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
