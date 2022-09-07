
import styles from './style.module.css'
import MenuListItens from './MenuListItens'
import MenuItem from './MenuItem'
import Title from './../../GeneralComponents/Title'
import React, {useEffect, useState } from 'react';

const MenuSidebar = ()=>{

    const [itens, setItens] = useState([])

    useEffect(() => {
       setItens([
            {
                id:1,
                name:"Sanduíches Tradicionais",
                slug:"/1",
            },
            {
                id:2,
                name:"Sanduíches Especiais",
                slug:"/2"
            },
            {
                id:2,
                name:"Almoço",
                slug:"/3"
            },
            {
                id:3,
                name:"Bebidas",
                slug:"/4"
            },
            {
                id:4,
                name:"Kids",
                slug:"/5"
            },
            {
                id:5,
                name:"Sanduíches Especiais",
                slug:"/5"
            },
            {
                id:1,
                name:"Sanduíches Tradicionais",
                slug:"/1",
            },
            {
                id:2,
                name:"Sanduíches Especiais",
                slug:"/2"
            },
            {
                id:2,
                name:"Almoço",
                slug:"/3"
            },
            {
                id:3,
                name:"Bebidas",
                slug:"/4"
            },
            {
                id:4,
                name:"Kids",
                slug:"/5"
            },
            {
                id:5,
                name:"Sanduíches Especiais",
                slug:"/5"
            },

        ])
    }, []);
    
    return (
        <section className={styles.MenuSidebar}>
            <Title>Cardápio</Title>
            <MenuListItens>
           {
            itens.map(({name,slug,id})=>{
                return(
                    <MenuItem key={id} data={{
                        name,
                        slug,
                    }}/>   
                )
            })
           }
            </MenuListItens>
        </section>
    )
}

export default MenuSidebar
