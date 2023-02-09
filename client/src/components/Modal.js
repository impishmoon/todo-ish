import { useState } from 'react';

const Modal = (props) => {
  const editMode = props.mode === 'edit' ? true : false
  console.log(props)
  const [data, setData] = useState({
    user_email: editMode? props.task.user_email:null,
    title: editMode? props.task.title:null,
    progress: editMode? props.task.progress:null,
    date: editMode ? "" : new Date().getTime() //unix timestamp
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]: value
    }))
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {props.mode} your task</h3>
          <button onClick={() => props.setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder=" Your task goes here"
            name='title'
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor='range'>Drag to select your current progress</label>
          <input
            required
            type='range'
            id='range'
            min='0'
            max='100'
            name='progress'
            value={data.progress}
            onChange={handleChange}
          />
          <input className={props.mode} type='submit' />
        </form>
      </div>
    </div>
    
  )
}

export default Modal
