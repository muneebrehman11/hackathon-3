import React from 'react'
import CartIcon from './cartIcon'

describe('<CartIcon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartIcon />)
  })
})