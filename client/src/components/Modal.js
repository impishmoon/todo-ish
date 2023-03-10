import { useState } from 'react';
import { useCookies } from 'react-cookie';

const Modal = (props) => {
  const editMode = props.mode === 'edit' ? true : false
  const [cookies, ,] = useCookies(null);
  const [data, setData] = useState({
    user_email: editMode ? props.task.user_email : cookies.Email,
    title: editMode ? props.task.title : '',
    progress: editMode ? props.task.progress : 50,
    date: editMode ? props.task.date : new Date().getTime() //unix timestamp
  })
  // console.log(data)

  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.status === 200) {
        // console.log('Posted')
        props.setShowModal(false)
        props.getData()
      }
    } catch (err) {
      console.error(err)
    }
  }

  const editData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos/${props.task.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.status === 200) {
        props.setShowModal(false)
        props.getData();
      }
    } catch (error) {
      console.error(error)
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]: value
    }))
  }

  return (
    <div className="overlay" onClick={() => props.setShowModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
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
            className='modal-range'
            required
            type='range'
            id='range'
            min='0'
            max='100'
            name='progress'
            value={data.progress}
            onChange={handleChange}
          />
          <input className={props.mode} type='submit' value='SUBMIT' onClick={editMode ? editData : postData} />
        </form>
      </div>
    </div>

  )
}

export default Modal
