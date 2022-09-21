import React, { useState } from 'react';
import './App.css';
import store from './store/store';
import Table from './components/Table';
import TableUser from "./components/TableElement/TableUser";
import TableAction from "./components/TableElement/TableAction";
import TableActionCreated from "./components/TableElement/TableActionCreated";
import { rerenderTree } from './render';

const App = (props) => {

  let tableData = props.store.state;
  if(tableData === undefined){
    tableData = props.store;
  }

  const nodeRender = (data) => {
    let tableElementUsername = data.map((item) => {
      return <TableUser username={item.username} />
    })
    let tableElementAction = data.map((item) => {
      return <TableAction action={item.action} />
    })
    let tableElementActionCreated = data.map((item) => {
      return <TableActionCreated actionCreated={item.action_createad_at} />
    })

    return {
      tableElementUsername, tableElementAction, tableElementActionCreated
    }
  }

  let node = nodeRender(tableData);

  const [searchValue, setSearchValue] = useState('');

  let onSearchSend = (text) => {    
    let result = tableData.filter(el => {
      if(el['username'].includes(text) || el['action'].includes(text) || el['action_createad_at'].includes(text)){
        return el;
      }
    })
    rerenderTree(result);
  }

  return (
    <div>
      <Table node={node} searchValue={searchValue} onSearchSend={onSearchSend} setSearchValue={setSearchValue} />
    </div>
  )
}

export const refreshTable = () => {
  rerenderTree(store);
}

export default App;