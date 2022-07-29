import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarList } from './index';

it('should have a list of cars', () => {
    const {container} = render(
        <MemoryRouter>
            <CarList/>
        </MemoryRouter>
    )

    const lisEl = container.getElementsByClassName('list')
    expect(lisEl.length).toBeGreaterThan(0)
})

it('should have 5 cars in the list', () => {
    const {container} = render(
        <MemoryRouter>
            <CarList/>
        </MemoryRouter>
    )

    const carList = container.getElementsByClassName('carItem')
    expect(carList.length).toBe(5)
    

})





export {};