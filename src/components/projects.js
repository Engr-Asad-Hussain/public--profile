import './projects.css';

function Projects() {
    return (
        <div className="projects">
            <div className="srl">
                <h2>Smart Robo Lawnmower</h2>
                <p>(Final Year Project)</p>
                <ul>
                    <li>Smart robot for agricultural field that cuts the grass powered by solar system.</li>
                    <li>Equipped the robot with Hi-Tech Motors and robust structure to operate in harsh environment.</li>
                    <li>Connection builds via IoT and rf transceiver over 100m long distance for the movement/controlling purpose.</li>
                    <li>Keeping all the expenses in check managed to build the robot under the set budget.</li>
                </ul>
            </div>
            <div className="plc">
            <h2>Temperature Control System via PLC & HMI</h2>
                <ul>
                    <li>Implemented the temperature controlled system using delta PLC.</li>
                    <li>Associated PID controllers for 3 phase motor, VFD etc.</li>
                    <li>Build HMI of the project to interact with the users.</li>
                </ul>
            </div>
            <div className="has">
            <h2>Smart Home Automation System</h2>
                <ul>
                    <li>Controlled electronic appliances through IoT via mobile application.</li>
                    <li>Structured the circuit on Veroboard and interface it with Raspberry Pi. </li>
                    <li>System includes variants such as triggers the notification, generate emails etc.</li>
                </ul>
            </div>
            <div className="abc">
            <h2>Smart Home Automation System</h2>
                <ul>
                    <li>Controlled electronic appliances through IoT via mobile application.</li>
                    <li>Structured the circuit on Veroboard and interface it with Raspberry Pi. </li>
                    <li>System includes variants such as triggers the notification, generate emails etc.</li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
