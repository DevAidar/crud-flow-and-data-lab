import React, { useState, useEffect } from 'react'

const EditUserForm = ({ userToEdit, onEditUser, editUser }) => {
    const [user, setUser] = useState(userToEdit)

    useEffect(
        () => {
            setUser(userToEdit)
        },
        [userToEdit, onEditUser, editUser]
    )


    const handleInputChange = event => {
        const { name, value } = event.target
        
        console.log(user);

		setUser({ ...user, [name]: value })
	}
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    return (
        <form
            onSubmit={event => {
                event.preventDefault();

                onEditUser(0);
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={ user.name } onChange={ handleInputChange }/>
            <label>Username</label>
            <input type="text" name="username" value={ user.username }  onChange={ handleInputChange }/>
            <button onClick={ () => editUser(user) }>Update user</button>
            <button className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm
