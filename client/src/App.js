import Auth from "./components/Auth";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';


const App = () => {
  const [cookies, ,] = useCookies(null);
  const [tasks, setTasks] = useState(null);
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;

  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos/${userEmail}`)
      const json = await res.json()
      setTasks(json)
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (authToken) {
      getData()
    }
  },[])
  // console.log(tasks)


  //Sort by date
  const sortedTasks = tasks?.sort((a, b) => a.date - b.date);


  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken &&
        <>
          <ListHeader getData={getData} listName={'🏝 Holiday Todo List'} />
          <p className="user-email">Welcome Back {userEmail}</p>
          {sortedTasks?.map((task) => <ListItem key={task.id} getData={getData} task={task} />)}
        </>}

    </div>
  );
}

export default App;
