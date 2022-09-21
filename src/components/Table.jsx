import React from "react";
import { refreshTable } from "../App";

import styles from './Table.module.css';

const Table = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                Поиск: <input type="text" placeholder="Search..." value={props.searchValue} onChange={e => { props.setSearchValue(e.target.value) }} />
                <button onClick={() => props.onSearchSend(props.searchValue)}>Search</button>
                <button onClick={refreshTable}>Refresh</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th> <th>Action</th> <th>ActionCreateadAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.node.tableElementUsername}</td> <td>{props.node.tableElementAction}</td> <td>{props.node.tableElementActionCreated}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;