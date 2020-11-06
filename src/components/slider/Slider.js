import React from "react";
import Cards from "../cards/Cards";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: "translateX(0px)"
      },
      width: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: boxWidth });
  }

  // func: click the slider buttons
  handleClick(type) {
    // get the card's margin-right
    let margin = window.getComputedStyle(document.getElementById("card"))
      .marginRight;
    margin = JSON.parse(margin.replace(/px/i, ""));

    const cardWidth = this.state.width; // the card's width
    const cardMargin = margin; // the card's margin
    const cardNumber = this.props.data.length; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    // slide cards
    if (type === "next" && currentCard < cardNumber - 1) {
      currentCard++;
      position -= cardWidth + cardMargin;
    } else if (type === "prev" && currentCard > 0) {
      currentCard--;
      position += cardWidth + cardMargin;
    }

    this.setCard(currentCard, position, cardNumber);
  }

  setCard(currentCard, position, cardNumber) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}px)`
      }
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          <button
            className="slider-btn btn-l"
            onClick={() => this.handleClick("prev")}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            className="slider-btn btn-r"
            onClick={() => this.handleClick("next")}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
        <Cards data={data} cardStyle={this.state.cardStyle} />
      </div>
    );
  }
}

export default Slider;
