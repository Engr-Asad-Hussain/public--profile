import { useState } from 'react';
import ExperienceCard from './experienceCard';
import './about.css';


function About() {
    let [data, setData] = useState(0);

    return (
        <div className="ta-l">
            <p>
                Enthusiastic, organized, and goal oriented individual who is
                eager to learn and develop new skills. I’m highly committed
                and responsible in efficiently utilizing resources in completing
                assigned task. Having adaptive disposition, I feel comfortable
                working independently or collaboratively as a part of team.
                Moreover, I possess strong interpersonal and leadership skills
                built through effective communication and respecting others.
            </p>
            <div className="exp-tag">
                <p>Experience</p>
                <div className="work-exp">
                    <div className="work-tag f-cont">
                        <p
                            className={data === 0 ? "d-blue" : "black"}
                            onClick={() => {
                                setData(0);
                            }}>National Refinery Limited</p>
                        <p
                            className={data === 1 ? "d-blue" : "black"}
                            onClick={() => {
                                setData(1);
                            }}>Pakistan Aeronautical Complex Kamra, Attock</p>
                        <p
                            className={data === 2 ? "d-blue" : "black"}
                            onClick={() => {
                                setData(2)
                            }}>Pakistan Council of Scientific & Industrial Research</p>
                    </div>
                    <div className="work-details bg">
                        <ExperienceCard data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
