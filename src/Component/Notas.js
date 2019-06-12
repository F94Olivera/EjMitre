import React, { Component } from 'react';

const url = 'https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2';

class Notas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ hits: data })
      )
      .catch(() => console.log('Error!'));
  };

  render() {
    const { hits } = this.state;
    return (
      <div className="container">
        <div className="row">
          {hits.map(hit =>
            <div className="col-12 col-sm col-md">
              <a href={hit.url}>
                <h6>{hit.title}</h6>
                <img src={hit.image}></img>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Notas;