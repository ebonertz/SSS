import React from 'react';

export default class NavBar extends React.Component {

  constructor() {
    super();

    this.state = {
      description: []
    };
  }

  render() {
    return (
      <div> Any
        <div className="menu">
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/picture">Picture</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}
