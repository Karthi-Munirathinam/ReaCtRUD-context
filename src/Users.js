import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Users(props) {
    const { userData, setUserData } = useContext(UserContext);

    let handledelete = (index) => {
        let confirm = window.confirm("Are you sure to delete the user?");
        if (confirm) {
            userData.splice(index, 1);
            setUserData([...userData])
        }
    }

    return (
        <div>
            <h3 className="page-title mb-4">Users</h3>


            <div className="card">
                <div className="row">
                    <div className="col-12 ">
                        <table className="table table-info table-hover mb-0">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Age</th>
                                    <th className="text-center">ImageUrl</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((obj, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{obj.name}</td>
                                            <td>{obj.age}</td>
                                            <td>{obj.imgurl}</td>
                                            <td><div className="btn-containers mt-2"><Link to={`/edit-user/${index}`} className=" btn btn-sm btn-primary">Edit</Link><button onClick={() => handledelete(index)} className=" btn btn-sm btn-danger">Delete</button></div></td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                            <tfoot>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Age</th>
                                    <th className="text-center">ImageUrl</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Users
