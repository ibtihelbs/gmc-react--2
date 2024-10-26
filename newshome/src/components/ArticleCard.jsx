import { Component } from "react";

export class ArticleCard extends Component {
  render() {
    const { image, title, id, subtitle } = this.props.data;
    return (
      <div className="single-card">
        <img src={image} alt={title} />
        <div>
          <h3> {id} </h3>
          <h2> {title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
