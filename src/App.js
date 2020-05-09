import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import EditUserForm from './forms/EditUserForm'

/**
 * Goals:
 *
 * > Add Delete and Edit Button to each user item
 * > Send functions from 'App' in order to perform full CRUD
 *
 * Step 1: Implement Delete
 * Step 2: Implement Edit (EditUserForm is provided as a template. A good approach to this is to have user Edit buttons send a notification to App when they are clicked, so App can conditionally render either the Add or Edit form.)
 *
 */

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	// Setting state
	const [users, setUsers] = useState(usersData)
    const [activeState, setActiveState] = useState(0);

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = user => setUsers([
        ...users.slice(0, users.indexOf(user)),
        ...users.slice(users.indexOf(user) + 1)
	])
	
	const handleStateChange = (user) => {
        setActiveState(user);
	}

	const editUser = (userToEdit) => {
		users[users.indexOf(users.find(user => user.id === userToEdit.id))] = userToEdit;
	}
	

	const renderContent = () => {
		if (activeState === 0) 
			return (
				<>
					<h2>Add user</h2>
					<AddUserForm addUser={addUser} />
				</>
			);
		return (
			<>
				<h2>Edit user</h2>
				<EditUserForm userToEdit={ activeState } onEditUser={ handleStateChange } editUser={ editUser } />
			</>
		);
    };

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			{ renderContent() }
			<div className="flex-row">
				<div className="flex-large">
					
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} onRemoveUser={ deleteUser } onEditUser={ handleStateChange }/>
				</div>
			</div>
		</div>
	)
}

export default App
