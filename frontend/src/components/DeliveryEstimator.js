import React from 'react';

class DeliveryEstimator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      deliveryDate: null,
    };
  }

  componentDidMount() {
    this.calculateDeliveryDate();
  }

  calculateDeliveryDate() {
    const { currentDate } = this.state;
    const workingDaysToAdd = 8;
    let count = 0;
    let deliveryDate = new Date(currentDate);

    while (count < workingDaysToAdd) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) {
        count++;
      }
    }

    this.setState({ deliveryDate });
  }

  render() {
    const { deliveryDate } = this.state;

    return (
      <div>
        <div>Estimated Delivery Date:</div>
        <div className='date'>
        {deliveryDate ? (
          <p>{deliveryDate.toDateString()}</p>
        ) : (
          <p>Calculating...</p>
        )}
        </div>
      </div>
    );
  }
}

export default DeliveryEstimator;
