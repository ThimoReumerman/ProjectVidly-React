import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", stock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().required().min(0).max(100).label("Stock"),
    rate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("stock", "Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;

// import React from "react";

// const MovieForm = ({ match, history }) => {
//   return <div>
//     <h1>Movie Form {match.params.id}</h1>
//     <btn className="btn btn-primary" onClick={() => history.push('/movies')}>Save</btn>
//   </div>;
// };

// export default MovieForm;
