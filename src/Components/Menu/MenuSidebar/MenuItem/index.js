import styled from "styled-components";

const li = ({data}) =>{
    const {name, slug} = data
    return (
        <li key={slug}>
            <a href={slug}>
                {name}
            </a>
        </li>
    )
}

const MenuItem = styled(li)`
  
`
export default MenuItem