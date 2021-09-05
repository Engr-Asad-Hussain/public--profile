import exp from './../exp.json';

import './nrlCard.css';

function ExperienceCard({ data }) {
    return (
        <>
            <div className="nrl">
                <h2>{Object.entries(exp)[data][1].name}</h2>
                <p>Designation: {Object.entries(exp)[data][1].desg}</p>
                <p>Period: {Object.entries(exp)[data][1].period}</p>
                <p 
                    style={{ 
                        textDecoration: "underline", 
                        textUnderlineOffset: "2px" 
                    }}
                >Responsibilities:</p>
                <ul>
                    <li>{Object.entries(exp)[data][1].res.a}</li>
                    <li>{Object.entries(exp)[data][1].res.b}</li>
                    <li>{Object.entries(exp)[data][1].res.c}</li>
                </ul>
                <p 
                    style={{ 
                        textDecoration: "underline", 
                        textUnderlineOffset: "2px" 
                    }}
                >Accomplishments:</p>
                <ul>
                    <li>{Object.entries(exp)[data][1].acc.a}</li>
                    <li>{Object.entries(exp)[data][1].acc.b}</li>
                    <li>{Object.entries(exp)[data][1].acc.c}</li>
                </ul>
            </div>
        </>
    );
}

export default ExperienceCard;
