import items from './../exp.json';
import './skills.css';

function Skills() {
    return (
        <div className="skills-container">
            {Object.entries(items).map((ele, ind) => {
                if (ind >= 3) {
                    return (
                        <div className="flip-card" key={ind}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front d-blue bg">
                                    <p>{ele[0].replace(/-/g, " ")}</p>
                                </div>
                                <div className="flip-card-back black">
                                    <p>{ele[1]}</p>
                                </div>
                            </div>
                        </div>
                    );
                }
                else {
                    return true;
                }
            })}
        </div>
    );
}

export default Skills;
