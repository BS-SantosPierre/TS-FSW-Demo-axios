import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import useQuery from './hooks/useQuery';
import useToggle from './hooks/useToggle';

function App() {
	const [search, setSearch] = useState('');
	const { data, isLoading } = useQuery('https://api.agify.io/', { name: 'michael', country_id: 'BE' })
	const [toggle, setToggle] = useToggle();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const {data, isLoading} = useQuery('https://api.agify.io/', { name: search, country_id: 'BE' })
		// setLoading(true);
		// try {
		// 	const {data} = await axios.get('https://api.agify.io/',
		// 	{
		// 		params: { name: search, country_id: 'BE' }
		// 	});
		// 	// setUser(data);
		// } catch (error) {
		// 	// setErrors(error)
		// }finally {
		// 	// setLoading(false);
		// }
	}

  return (
    <div className="App">
      <div className="card">
        <button>
					{isLoading ? '...Loading': JSON.stringify(data)}
        </button>
				<form onSubmit={handleSubmit}>
					<input type="text" onChange={(e) => {setSearch(e.target.value)}}/>
					<button>Search</button>
				</form>

				<button onClick={() => {setToggle(!toggle)}}>Switch</button>
				{
					toggle && <p>Je suis la</p>
				}
      </div>
    </div>
  )
}

export default App
