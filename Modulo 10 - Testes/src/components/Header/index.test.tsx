import { Header } from './index'
import { render, screen } from '@testing-library/react'

//Preciso importar essa biblioteca, pois tenho no meu header o elemento "link", que é um elemento de reac-router-dom
import { MemoryRouter } from 'react-router-dom' 


it('should have a "Cadastrar" button', () => {
    render(
        <MemoryRouter> //Se eu não importar o memoryRouter, não precisa importar esse elemento
            <Header></Header>
        </MemoryRouter>
    )

    let button = screen.getByText('Cadastrar')
    expect(button).toBeInTheDocument()
})

export {}