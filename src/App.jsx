import Container from "./components/Container/Container"
import List from "./components/List/List"
import Filters from "./components/Filters/Filters"

import {useState} from 'react';

const App = () => {

  const [filters, setFilters] = useState({
    role: '',
    level: '',
    languages: [],
    tools: []
  });

  return (
    <Container>
      <Filters filters={filters} setFilters={setFilters}/>
      <List filters={filters} setFilters={setFilters} />
    </Container>
  )
}

export default App
