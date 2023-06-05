import React from 'react'
import Footer from '../Footer'
import List from './List'

const Content = () => {
  return (
    <>
    <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<List/>
	</section>

    <Footer />
    </>
  )
}

export default Content