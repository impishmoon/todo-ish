import ListHeader from "./components/ListHeader";
import { useEffect } from 'react'
// import ListItem from "./components/ListItem";

const App = () => {

  const getData = async () => {
    const userEmail = 'okaybro@org.com'

    try {
      const res = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await res.json()
      console.log(json)
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() =>
    getData(), []
  )

  return (
    <div className="app">
      <ListHeader listName={'🏝 Holiday Todo List'} />
    </div>
  );
}

export default App;
