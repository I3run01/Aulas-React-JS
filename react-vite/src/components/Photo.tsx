import { ReactNode} from 'react'

type Props = {
    legend: string
    children: ReactNode

}

export const Photo = ({children, legend}: Props) => {
    return (
       <>
           <p>{legend}</p>
           {children}
       </> 
    )
}