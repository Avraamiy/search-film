import React from 'react'
import SearchBar from "./components/SearchBar"
import Grid from "./components/Grid"
import Pagination from "./components/Pagination"
import {Content} from "./styled"


function App() {
    return (
        <Content>
            <SearchBar/>
            <Grid/>
            <Pagination/>
        </Content>
    )
}

export default App

