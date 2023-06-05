import React from 'react'
import NewTodo from './NewTodo'

const Header = () => {
  return (
    <header className="header">
		<h1>todos</h1>
			<NewTodo />
	</header>
  )
}

export default Header