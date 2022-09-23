import React from "react";
import styles from './Table.module.css';

const Table = ({data}) => {
    return (
        <div className={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Action</th>
                        <th>ActionCreateadAt</th>
                    </tr>
                    {data.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.action}</td>
                            <td>{item.action_createad_at}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;