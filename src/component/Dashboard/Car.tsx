import React from 'react';

// Car component
function Car(props:any) {
  return (
    <div>
      <li>I am a {props.brand} and {props.price}</li>
    </div>
  );
}

// Garage component
function Garage() {
  const cars = [
    { id: 1, brand: 'Ford', price : '500' },
    { id: 2, brand: 'BMW', price : '500' },
    { id: 3, brand: 'Audi',price : '500' },
    {id: 4, brand:'Tesla', price : '500'}
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map(car => (
          <Car key={car.id} brand={car.brand}  price={car.price} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
