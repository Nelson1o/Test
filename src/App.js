import React, { useState } from 'react';
import './App.css';
import state from './store/store';
import Table from './components/Table';

const App = () => {
    const [searchValue, setSearchValue] = useState('');

    const keys = ['username', 'action', 'action_createad_at']

    const filterTable = (data) => {
        return data.filter((item) => {
            return keys.some((key) => {
                return item[key].toLowerCase().includes(searchValue);
            })
        })
    }

    return (
        <div className='container_app'>
            <div>
                <span>Поиск:</span>
                <input type="text" placeholder="Search..." onChange={e => { setSearchValue(e.target.value) }} />
            </div>
            <Table data={filterTable(state)} />
        </div>
    )
}

export default App;