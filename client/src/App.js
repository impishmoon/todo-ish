import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import { useEffect, useState } from 'react'


const App = () => {
  const userEmail = 'brodidstuff@org.com'
  const [tasks, setTasks] = useState(null)

  const getData = async () => {

    try {
      const res = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await res.json()
      setTasks(json)
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])
  console.log(tasks)


  //Sort by date
  const sortedTasks = tasks?.sort((a, b) => a.date -b.date);


  return (
    <div className="app">
      <ListHeader listName={'🏝 Holiday Todo List'} />
      {sortedTasks?.map((task) => <ListItem key={tasks.id} task={task}/>)}
    </div>
  );
}

export default App;
