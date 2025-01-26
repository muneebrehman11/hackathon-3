import React from 'react'
import WishlistButton from './WishlistButton'

describe('<WishlistButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WishlistButton />)
  })
})