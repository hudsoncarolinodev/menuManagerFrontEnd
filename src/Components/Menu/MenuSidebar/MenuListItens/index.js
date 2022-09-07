import styled from "styled-components";

const MenuListItens = styled.ul`
    height: 100%;
    overflow: auto;
    padding: 20px 20px 10vh;
   li{
        background-color: #ff9800;
        border-radius: 2px;
        height: 80px;
        width: 100%;
        margin-bottom: 15px;
        min-height: 9vh;
        max-height: 10vh;
        a{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 1.2rem;
            font-weight: bold;
            text-transform: uppercase;
            padding: 0 10px;
        }
   }
   li:hover{
        webkit-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.75);
        box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.75);
        transform: scale(1.02);
   }
`
export default MenuListItens