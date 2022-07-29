import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

it('should add 1 to 1 and return 2', () => {
    let result = 1 + 1

    expect(result).toBe(2)
})

it('should multply 5 by 3 and return 15', ()=> {
    let result = 5*3
    expect(result).toBe(15)
})

it('Should have a container div', () => {
    const {container} = render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    )

    expect(container.getElementsByClassName('container').length)
        .toBeGreaterThan(0)

    


})


export {}