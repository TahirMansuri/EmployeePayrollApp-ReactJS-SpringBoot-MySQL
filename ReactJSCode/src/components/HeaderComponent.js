import React from 'react'
import logo from '../assets/images/logo.png'
const HeaderCompnent = () => {
  return (
    <div>
        <div class="header-content">
            <img src={logo} alt="" />
            <div>
                <span class="emp-text">EMPLOYEE</span><br />
                <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
        </div>
    </div>
  )
}

export default HeaderCompnent