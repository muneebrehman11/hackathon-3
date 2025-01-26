// import React from 'react'
// import WishlistButton from './WishlistButton'

// describe('<WishlistButton />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<WishlistButton />)
//   })
// })



// deep seek 
import React from 'react';
import WishlistButton from './WishlistButton';

describe('<WishlistButton />', () => {
  it('renders', () => {
    // Mock product data
    const product = {
      _id: '123',
      title: 'Sample Product',
      price: 100,
      imageUrl: 'https://example.com/image.jpg',
    };

    // Mount the component with the required product prop
    cy.mount(<WishlistButton product={product} />);
  });
});