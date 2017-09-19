import React from 'react';

/*screenX and clientX give x coordinates, but different coordinates. */
class CoordinatesButton extends React.Component {

  render() {
    return (
      <button onClick={ (event) => {
          this.props.onReceiveCoordinates([parseInt(event.clientX), parseInt(event.clientY)])
        }}></button>
    )
  }
}

export default CoordinatesButton;
