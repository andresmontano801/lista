import React from 'react';
import styles from "../page.module.css"

const Todo = ({ name, brand, quantity, price, index, deleteTodo }) => {
    return (
        <>
            <div className={styles.list}>
                <h3 className='Titulo3'>Nombre: {name}</h3>
                <h3>Marca: {brand}</h3>
                <h3>Cantidad: {quantity}</h3>
                <h3>Precio: {price}</h3>
                <button className={styles.btn_delete} onClick={() => deleteTodo(index)}>X</button>
            </div>
        </>
    )
}
export default Todo;