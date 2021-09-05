import './education.css';

function Education() {

    return (
        <div className="edc-main">
            <div className="education-container">
                <div>
                    <p className="edc-header">Academic Qualifications</p>
                    <h4>NED University of Engineering and Tech.</h4>
                    <p className="edc">Bachelors in Electronics (Batch 2016-17)</p>
                    <p>Fresh Graduate: 2020</p>
                    <p>CGPA: 3.82</p>
                </div>
                <div>
                    <h4>D.J Sindh Govt. Science College</h4>
                    <p className="edc">Pre-Engineering</p>
                    <p>Grade: A-1 (82.3%)</p>
                </div>
                <div>
                    <h4>Happy Home Secondary School</h4>
                    <p className="edc">Computer Science</p>
                    <p>Grade: A-1 (86.8%)</p>
                </div>
            </div>
            <div className="ach-container">
                <p className="edc-header">Achievements</p>
                <ul>
                    <li>Maintain 4 th merit throughout Bachelors Program.</li>
                    <li>Attended 34 th IEEEP All Pakistan Student Seminar.</li>
                    <li>Runners up in line following robot and robo maze solver organized by SPEC.</li>
                </ul>
            </div>
        </div>
    );
}

export default Education;
