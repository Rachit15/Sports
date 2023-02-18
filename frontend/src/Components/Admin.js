import React from 'react';
import './Admin.css'
const Admin = () => {
    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Tournamnet Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Cricket</td>
                            <td><a href="#" class="btn">Update</a></td>
                            <td><a href="#" class="btn">Delete</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Admin
