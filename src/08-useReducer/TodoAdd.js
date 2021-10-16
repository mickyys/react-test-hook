import React from 'react'
import { useForm } from '../hook/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.length > 0) {
          const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
          };
          handleAddTodo(newTodo);
          reset();
        }
      };

    return (
        <>
          <h1>Agregar TodoApp</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
              onChange={handleInputChange}
              value={description}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form> 
        </>
    )
}
