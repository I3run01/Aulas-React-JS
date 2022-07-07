type Props = {
    title: string
}

export const Header = ({title}: Props) => {
    return (
      <header>
        <hr />
        <h1>{title}</h1>
  
        
      </header>
  
    )
}

