import React from "react";

class Cards extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <section>
        {data.map((card, i) => {
          return (
            <div
              className="card"
              id="card"
              style={this.props.cardStyle}
              key={i}
            >
              <img src={card.imageUrl} alt={card.title} />
              <div className="footer">
                <span className="title">{card.title}</span>
                <span className="subtitle">{card.subTitle}</span>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
export default Cards;
