"use client"
import React, { useState } from 'react';
import Todo from './Todo';
import styles from "../page.module.css";

const Form = () => {
    const [todo, setTodo] = useState({
        name: '',
        brand: '',
        quantity: '',
        price: ''
    });
    const [todos, setTodos] = useState([]);

    const handleChange = e => {
        const { name, value } = e.target;
        setTodo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = e => {
        e.preventDefault();
        const { name, brand, quantity, price } = todo;
        if (!name || !brand || !quantity || !price) {
            alert('Por favor, complete todos los campos');
            return;
        }
        setTodos(prevTodos => [...prevTodos, { ...todo }]);
        setTodo({
            name: '',
            brand: '',
            quantity: '',
            price: ''
        });
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <form onSubmit={handleClick}>
                <label>Nombre del Producto:</label><br />
                <input
                    className={styles.form_input}
                    type="text"
                    name='name'
                    value={todo.name}
                    onChange={handleChange}
                /><br />
                <label>Marca:</label><br />
                <input
                    className={styles.form_input}
                    type="text"
                    name='brand'
                    value={todo.brand}
                    onChange={handleChange}
                /><br />
                <label>Cantidad:</label><br />
                <input
                    className={styles.form_input}
                    type="text"
                    name='quantity'
                    value={todo.quantity}
                    onChange={handleChange}
                /><br />
                <label>Precio:</label><br />
                <input
                    className={styles.form_input}
                    type="text"
                    name='price'
                    value={todo.price}
                    onChange={handleChange}
                /><br />
                <button className={styles.form_button} type="submit">Agregar</button>
            </form>

            <div>
                {todos.map((item, index) => (
                    <Todo
                        key={index}
                        index={index}
                        name={item.name}
                        brand={item.brand}
                        quantity={item.quantity}
                        price={item.price}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </>
    );
};

export default Form;
