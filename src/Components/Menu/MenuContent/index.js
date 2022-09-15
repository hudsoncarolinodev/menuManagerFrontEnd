
import styles from './style.module.css'
import Title from './../../GeneralComponents/Title'
import MenuListItens from './MenuListItens'
import MenuItem from './MenuItens'
import React, {useEffect, useState } from 'react';

const MenuContent = ()=>{

    const [itensMenuContent, setItensMenuContent] = useState([])

    useEffect(() => {
       setItensMenuContent([
            {
                id:1,
                name:"Sanduíches Tradicionais",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
                slug:"/1",
                preco:18.90
            },
            {
                id:2,
                name:"Sanduíches Especiais",
                slug:"/2",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:2,
                name:"Almoço",
                slug:"/3",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:3,
                name:"Bebidas",
                slug:"/4",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:4,
                name:"Kids",
                slug:"/5",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:5,
                name:"Sanduíches Especiais",
                slug:"/5",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:1,
                name:"Sanduíches Tradicionais",
                slug:"/1",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:2,
                name:"Sanduíches Especiais",
                slug:"/2",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:2,
                name:"Almoço",
                slug:"/3",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:3,
                name:"Bebidas",
                slug:"/4",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:4,
                name:"Kids",
                slug:"/5",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },
            {
                id:5,
                name:"Sanduíches Especiais",
                slug:"/5",
                preco:18.90,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
            },

        ])
    }, []);

    return (
        <section className={styles.MenuContent}>
            <Title>Almoço</Title>
            <MenuListItens>
            {
            itensMenuContent.map(({id,slug,name,description,preco})=>{
                return(
                    <MenuItem key={id} data={{
                        name,
                        slug,
                        description,
                        preco
                    }}/>   
                )
            })
           }
            </MenuListItens>
        </section>
    )
}

export default MenuContent
