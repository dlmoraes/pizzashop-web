import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text on order status', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    wrapper.debug()
  })
})
