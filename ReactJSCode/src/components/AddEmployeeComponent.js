import { React, useState} from 'react'

import img1 from '../assets/profileimages/img1.png'
import img2 from '../assets/profileimages/img2.png'
import img3 from '../assets/profileimages/img3.png'
import img4 from '../assets/profileimages/img4.png'

const EmployeeHomeComponent = () => {

    const [name, setName] = useState('')
    const [salary, setSalary] = useState(300000)
    const [gender, setGender] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    //const [startDate, setStartDate] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [note, setNote] = useState('')
    var startDate;
    var department=[];

    const saveOrUpdateEmp = (e) => {
        e.preventDefault();
            console.log(name);
            var selectedDate = new Date(year,month-1,day,0,0,0,0);
            startDate=day+"/"+month+"/"+year;
            alert(name+"\n"+salary+"\n"+gender+"\n"+startDate+"\n"+profilePic+"\n"+note+"\n"+department);
            console.log(department);
        //     var todaysDate = new Date();
        //     //todaysDate.setHours(0,0,0,0);
        //    // alert(todaysDate);
        //     if(selectedDate === todaysDate.setHours(0,0,0,0)) {
        //         alert('Dates are Same');
        //     } else if(selectedDate>todaysDate) {
        //         alert('Date is Future Date');
        //     } else {
        //         alert('Date is Past Date');
        //     }
    }

    const getDeptValues =(e) => {
        const target = e.target;
        var value = target.value;
        alert(value);
        if(target.checked) {
            department.push(value);
            alert(department);
        }else {
            department.splice(department.indexOf(value),1);
        //    alert(department);
        }
    }

  return (
      <header>
      <div>
            <div class="form-content">
            <form class="form" >
                <div class="form-head">Employee Payroll Form</div>
                <div class="row-content">
                    <label class="label text" for="name">Name</label>
                    <input class="input" type="text" id="name" name="name" placeholder="Your name.."
                    value={name}
                    onChange={(e)=> setName(e.target.value)} required />
                    <error-output class="text-error" for="text"></error-output>
                </div>

                <div class="row-content">
                    <label class="label text" for="profile">Profile Image</label>
                    <div class="profile-radio-content" onChange={(e) => setProfilePic(e.target.value)}>
                        <label>
                            <input type="radio" id="profile" name="profile" value='../assets/profileimages/img1.png' required />
                            
                            <img src={img1} alt="img1" />
                        </label>

                        <label>
                            <input type="radio" id="profile" name="profile" value='../assets/profileimages/img2.png' required />
                            <img src={img2} alt="img2" />
                        </label>
                        <label>
                            <input type="radio" id="profile" name="profile" value='../assets/profileimages/img3.png' required />
                            <img src={img3} alt="img3" />
                        </label>

                        <label>
                            <input type="radio" id="profile" name="profile" value='../assets/profileimages/img4.png' required />
                            <img src={img4} alt="img4" />
                        </label>
                    </div>
                </div>

                <div class="row-content">
                    <label class="label text" for="gender">Gender</label>
                    <div onChange={(e) => setGender(e.target.value)}>
                        <input type="radio" id="gender" name="gender" value="Male" />
                        <label class="text" for="gender">Male</label>
                        <input type="radio" id="gender" name="gender" value="Female" />
                        <label class="text" for="gender">Female</label>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="deparment">Department</label>
                    <div onChange={(e) => getDeptValues(e)}>
                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="HR" />
                        <label class="text" for="hr">HR</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Sales" />
                        <label class="text" for="sales">Sales</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Finance" />
                        <label class="text" for="finance">Finance</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Engineer" />
                        <label class="text" for="engineer">Engineer</label>

                        <input class="checkbox" type="checkbox" id="dept" name="dept" value="Others" />
                        <label class="text" for="others">Others</label>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="salary">Choose your Salary : </label>
                    <input class="input" type="range" name="salary" id="salary" min="300000"
                        max="500000" step="100" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    <output class="salary-output-text" for="salary" >{salary}</output>
                </div>

                <div class="row-content">
                    <label class="label text" for="startDate">Start Date</label>
                    <div>
                        <select id="day" name="Day" onChange={(e) => setDay(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>

                        <select id="month" name="Month" onChange={(e) => setMonth(e.target.value)}>
                            <option value="01">January</option>
                            <option value="02">Febuary</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>

                        <select id="year" name="Year" onChange={(e) => setYear(e.target.value)}>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                </div>

                <div class="row-content">
                    <label class="label text" for="notes">Notes</label>
                    <textarea id="notes" class="input" name="Notes"
                        placeholder="" style={{height: "100px"}} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                </div>
                <div class="buttonParent">
                    <a href="./home.html" class="resetButton button cancelButton">Cancel</a>
                    <div class="submit-reset">
                        <button className='btn btn-success'  onClick={(e) => saveOrUpdateEmp(e)}>Submit</button>
                        <button type="reset" class="resetButton button">Reset</button>
                    </div>
                </div>

            </form>
        </div>
    </div>

    </header>
  )
}

export default EmployeeHomeComponent