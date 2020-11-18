import React from "react";
import { connect } from "react-redux";

import { setIframeUrl, setIframeLoading } from "../../actions/iframeUrl";

class Cards extends React.Component {
  render() {
    const { data, setIframeUrl, setIframeLoading } = this.props;

    return (
      <>
        <section>
          {data.map(card => {
            return (
              <div
                className="card"
                id="card"
                style={this.props.cardStyle}
                key={card.imageUrl}
                tabIndex="0"
                role="button"
                aria-pressed="false"
                onClick={() => {
                  setIframeLoading(true);
                  setIframeUrl(card.attachmentLinkUrl);
                }}
              >
                <img src={card.imageUrl} alt={card.title} />
                <div className="footer">
                  <span className="title">{card.title}</span>
                  <span className="subtitle">{card.subTitle}</span>
                  <button>Buy Now</button>
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIframeUrl: url => dispatch(setIframeUrl(url)),
    setIframeLoading: bool => dispatch(setIframeLoading(bool))
  };
};

export default connect(null, mapDispatchToProps)(Cards);
