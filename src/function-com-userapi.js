// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//     const [loading, setLoading] = useState(false);
//     const [users, setUsers] = useState([])
//     const getUsers = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 axios.get('http://localhost:9001/api/users')
//                     .then(res => {
//                         resolve(res)
//                     })
//                     .catch(err => {
//                         reject(err);
//                         console.log(err);
//                     })
//             }, 3000)
//         })
//     }
//     useEffect(() => {
//         setLoading(true);
//         getUsers()
//             .then(res => {
//                 setUsers(res.data)
//             })
//             .catch(err => {
//                 throw err
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     })
//     if (loading) {
//         return (
//             <p>...Loading</p>
//         )
//     }
//     return (
//         <div>
//             <h1>Users</h1>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}> {user.name} </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }