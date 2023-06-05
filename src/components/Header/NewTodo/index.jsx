import React from 'react'
import {Formik, Form, Field} from 'formik'
import validationSchema from './validation'
import {useTodo} from '../../../contexts/TodoContext'
import {v4 as uuidv4} from 'uuid'

function NewTodo(){
  const {setTodos, addTodo} = useTodo();
  return (
    <Formik
      initialValues={{text: ''}}
      onSubmit={(values, bag) => {
        console.log(values);
        // setTodos(prev => [...prev, {id: uuidv4(), text: values.text, completed: false}]);
        addTodo(values.text);
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field 
          className="new-todo" 
          placeholder="What needs to be done?" 
          id="text"
          name="text"
          autoFocus />
      </Form>
    </Formik>
  )
}

export default NewTodo