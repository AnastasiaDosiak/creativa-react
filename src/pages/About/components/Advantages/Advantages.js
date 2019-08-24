import React from 'react'
import './Advantages.scss'

class Advantages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDescriptionVisible: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isDescriptionVisible: !prevState.isDescriptionVisible
        }));
    }

    render() {
        return (
            <ul className="about-scroll">
                <li className="about-scroll-heading">
                 <div className="btn-placeholder">
                    <button className="about-button" onClick={this.handleClick}>
                        {this.state.isDescriptionVisible ? '-' : '+'}
                    </button>
                    <span className="about-button-after">
                        {this.props.title}
                    </span>
                  </div>
                    {this.state.isDescriptionVisible && <p className="about-button-text">
                       {this.props.description}
              </p>}
                </li>
            </ul>
      
        );
    }
}

export default Advantages