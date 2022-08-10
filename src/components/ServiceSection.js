import React from 'react'

export default function ServiceSection() {

const [hide, setHide] = React.useState('hide');

const hideStyle = {
  display: 'none',
};

  return (
    <div className="section">
    <div className="main-container">
      <div className="medium-padding">
        <div className="service-section">
          <div
            data-w-id="6fec1731-be54-d4c2-4e05-f395bb33712a"
            className="service-section-text"
          >
            <div className="about-title">
              <div className="sub-title">SERVICES</div>
            </div>
            <h2 className="style-title">What I Do</h2>
            <div className="about-sub-heading">
              <p className="big">
                I have the perfect mix of digital marketing services that
                will help your organization reach its goals.<br />
              </p>
            </div>
            <div className="about-paragraph">
              <p className={`regular`}>
                I can help you with any and all aspects of marketing. I have
                worked dozens of websites &amp; logos. And generated
                thousands of leads through ads and SEO.<br />With my
                experience in the field, your ideas will be brought into
                reality!<br />
              </p>
            </div>
          </div>
          <div
            data-w-id="6fec1731-be54-d4c2-4e05-f395bb337139"
            className="service-list"
          >
            <a
              href="#"
              data-ix="show-answer"
              data-w-id="6fec1731-be54-d4c2-4e05-f395bb33713a"
              className="service w-inline-block"
            >
              <div className="question">
                <div className="plus">+</div>
                <h4 className="question-text sub-title normal">
                  Custom Website
                </h4>
              </div>
              <div data-ix="hide-on-load" className="answer">
              <p className="answer-text regular" style={hideStyle}>
                  To stay competitive in the online marketplace, responsive
                  websites are essential for your business. A website&#x27;s
                  responsiveness means that it automatically adjusts to
                  different screen sizes and formats which is important
                  because people use a number of devices when browsing on
                  the internet including tablets, smart phones, laptops or
                  desktops.
                </p>
              </div>
            </a>
            <a
              href="#"
              data-ix="show-answer"
              data-w-id="6fec1731-be54-d4c2-4e05-f395bb337143"
              className="service w-inline-block"
            >
              <div className="question">
                <div className="plus">+</div>
                <h4 className="question-text sub-title normal">
                  Webflow Websites
                </h4>
              </div>
              <div data-ix="hide-on-load" className="answer">
                <p className="answer-text regular" style={hideStyle}>
                  Webflow websites offer an easy and intuitive way to build
                  a website without having any coding knowledge whatsoever,
                  which is especially useful for hobbyist web designers who
                  want something good looking but don&#x27;t know how to
                  code themselves.<br />
                </p>
              </div>
            </a>
            <a
              href="#"
              data-ix="show-answer"
              data-w-id="117e2e39-fbb0-f7af-0ca2-7c02ec8fe0f3"
              className="service w-inline-block"
            >
              <div className="question">
                <div className="plus">+</div>
                <h4 className="question-text sub-title normal">
                  GoHighLevel Websites
                </h4>
              </div>
              <div data-ix="hide-on-load" className="answer">
                <p className="answer-text regular" style={hideStyle}>
                  Landing pages are a necessity in today&#x27;s digital age.
                  I&#x27;ve studied and tested what makes them convert, so
                  that you can have better luck with your campaigns!<br />See
                  my GoHighLevel Websites.<br />
                </p>
              </div>
            </a>
            <a
              href="#"
              data-ix="show-answer"
              data-w-id="f99f639c-2732-504a-56af-be572e484759"
              className="service w-inline-block"
            >
              <div className="question">
                <div className="plus">+</div>
                <h4 className="question-text sub-title normal">
                  Lead Generation Campaigns
                </h4>
              </div>
              <div data-ix="hide-on-load" className="answer">
                <p className="answer-text regular" style={hideStyle}>
                  Digital marketing campaigns to drive traffic to your
                  business can be a powerful tool. The right campaign,
                  executed by the right experts, can help you get more sales
                  leads and clients for your business.<br /><br />The right
                  lead generation campaign will engage customers on every
                  level of their decision-making process through content
                  that provides value with prospects they need in order make
                  important decisions about what product or service best
                  meets their needs.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
