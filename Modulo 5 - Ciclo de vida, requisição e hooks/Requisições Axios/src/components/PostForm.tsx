import { useState, ChangeEvent } from "react"

type Props = {
    onAdd: (title: string, body: string) => void
}

export const PostForm = ({onAdd}: Props) => {

    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setAddBodyText] = useState('')

    const handleAddTitileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }
    
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }
    
    const handleAddClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText)
        } else {
            alert('Preencha os campos')
        }
    }

    return (
        <fieldset>
          <legend> Adicionar um novo Post</legend>
          <input
            onChange={handleAddTitileChange}
            value={addTitleText}
            type="text" 
            placeholder="Digite um título" /> <br />
          <textarea
            onChange={handleAddBodyChange}
            value={addBodyText}
          ></textarea> <br />
          <button onClick={handleAddClick}>Adicionar</button>
        </fieldset>
    )
}