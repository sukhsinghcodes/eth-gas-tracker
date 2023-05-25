import { render, screen } from './test/utils'
import { App } from './App'

describe('App', async () => {
  it('should render the App', () => {
    render(
      <App />,
    )
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
