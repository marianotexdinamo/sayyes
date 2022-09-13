import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Item from './Item';

export default function ItemList(card) {

    const vestidos = [
        {
            "nombre" : "Vainillla",
            "descripcion" : "Usado",
            "precio": 50000
        }, 
        {
            "nombre" : "Campo",
            "descripcion" : "Nuevo",
            "precio": 100000
        }, 
        {
            "nombre" : "Clásico",
            "descripcion" : "Nuevo",
            "precio": 150000
        }, 
    ]

    useEffect(() => {
      console.log("primero")
        items.then(res => {
            console.log(res)
        }, err => {
            console.log(err)
        }).catch(err => {
            console.log(err)
        })
      return () => {
        console.log("Segundo")
      }
    }, [])
    
    

    const items = new Promise( (resolve, reject) => {
        
        setTimeout(() => {
            const vestidos = [
                {
                    "nombre" : "Vainillla",
                    "descripcion" : "Usado",
                    "precio": 50000
                }, 
                {
                    "nombre" : "Campo",
                    "descripcion" : "Nuevo",
                    "precio": 100000
                }, 
                {
                    "nombre" : "Clásico",
                    "descripcion" : "Nuevo",
                    "precio": 150000
                }, 
            ]
        }, 3000);
        return vestidos;
    })
    

  return (
    <Container className="mt-5">
        {vestidos.map(item => {
            return <Item key={item.nombre} name={item.nombre} description={item.descripcion} price={item.precio}></Item>
        })}
    </Container>
  )
}
