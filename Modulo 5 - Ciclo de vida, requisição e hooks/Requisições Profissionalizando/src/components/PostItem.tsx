import { Post } from '../types/Posts'

type Props = {
    data: Post
}

export const PostItem = ({data}: Props) => {
    return (
        <div>
        <h4>{data.title}</h4>
        #{data.id} - Usuário: {data.userID}
        <small>#{data.id} - Usuário: {data.userID}</small>
        <p>{data.body}</p>
        </div>
    )
}