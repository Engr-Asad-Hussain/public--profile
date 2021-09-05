import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Education from './../components/education';
import Projects from './../components/projects';
import About from './../components/about';
import Skills from './../components/skills';

import './rightCard.css';


function RightCard() {
    let [data, setData] = useState(0);
    return (
        <div className="sub-container-2 bg-color border">
            <Router>
                <div className="nav-bar bg-color">
                    <Link 
                        className={data === 0 ? "blue ul-o" : "black"}
                        to="/"
                        onClick={() => { setData(0) }}
                    >About
                    </Link>
                    <div>
                        <Link
                            className={data === 1 ? "blue ul-o" : "black"}
                            to="/education"
                            onClick={() => { setData(1) }}
                        >Education</Link>
                        <Link 
                            className={data === 2 ? "blue ul-o" : "black"}
                            to="/projects"
                            onClick={() => { setData(2) }}
                        >Projects
                        </Link>
                        <Link 
                            className={data === 3 ? "blue ul-o" : "black"}
                            to="/skills"
                            onClick={() => { setData(3) }}
                        >Skills
                        </Link>
                    </div>
                </div>
                <>
                    <Switch>
                        <Route exact path="/">
                            <About />
                        </Route>
                        <Route path="/education">
                            <Education />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/skills">
                            <Skills />
                        </Route>
                    </Switch>
                </>
            </Router>
        </div>
    );
}

export default RightCard;
