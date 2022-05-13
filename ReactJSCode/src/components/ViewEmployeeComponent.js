import React from 'react'
import { Link } from "react-router-dom";

import delete1  from '../assets/icons/delete.svg';
import create1  from '../assets/icons/create.svg';
import img1 from '../assets/profileimages/img1.png'

export const ViewEmployeeComponent = () => {
  return (
    <div>
        <div class="main-Content">
            <div class="header-content2">
                <div class="emp-detail-text">
                    Employee Details
                    <div class="emp-count">0</div>
                </div>
                <Link to="/" className="btn btn-danger" > ADD EMPLOYEE </Link>
                </div>
                <div>
                <table id="display" class="table">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td><img class="profile" alt="" src={img1} />
                    </td>
                    <td>Narayan Mahadevan</td>
                    <td>Male</td>
                    <td>
                        <div class='dept-lebel'>HR</div>
                        <div class='dept-lebel'>Finance</div>
                    </td>
                    <td>3000000</td>
                    <td>1 Nov 2020</td>

                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src={delete1} />
                        <img id="1" alt="edit" onclick="update(this)" src={create1} />
                    </td>
                </tr>
                </table>

            </div>
        </div>
    </div>
  )
}
export default ViewEmployeeComponent