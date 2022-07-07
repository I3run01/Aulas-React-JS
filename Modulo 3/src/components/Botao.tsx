type Props = {
    text: string
    clickFn: (txt: string) => void
}

export const Botao = ({text, clickFn}:Props) => {

    const handleClick = () => {
        clickFn(' Frase 2')
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}