import styled from "styled-components";

const li = ({data}) =>{
    const {name, slug, description, preco} = data

    return (
        <li key={slug}>
            <h2>{name}</h2>
            <p>{description}</p>
            <strong>R$ {preco}</strong>
            <button>Ver prato</button>
        </li>
    )
}

const MenuItem = styled(li)`



`

export default MenuItem