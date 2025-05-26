import about_profile from '../../assets/about_profile.png'
import './About.css'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About<span>Me</span></h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about_profile} alt="profile" width="400" height="400" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a passionate and self-motivated web developer eager to build modern and responsive websites. As a fresher, I’ve been actively learning and developing projects using HTML, CSS, JavaScript, and React to sharpen my frontend development skills.</p>
                        <p>I'm looking forward to joining a collaborative team where I can contribute, learn from experienced developers, and grow professionally in the tech industry.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML&CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JAVA</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>C&C++</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>REACT JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JAVASCRIPT</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MYSQL & MONGODB</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className='education-heading'><h2>Education Details</h2></div>
            <table className="education-table">
                <thead>
                    <tr>
                        <th>Qualification</th>
                        <th>Institution</th>
                        <th>Board/University</th>
                        <th>Year</th>
                        <th>Percentage/CGPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10th</td>
                        <td>SMT ANNAPURNA VIDYA NIKETAN</td>
                        <td>State Board</td>
                        <td>2020</td>
                        <td>72%</td>
                    </tr>
                    <tr>
                        <td>12th/Intermediate</td>
                        <td>SASI JUNIOR COLLEGE</td>
                        <td>State Board</td>
                        <td>2022</td>
                        <td>86%</td>
                    </tr>
                    <tr>
                        <td>B.Tech in CSE</td>
                        <td>SRI VASAVI ENGINEERING COLLEGE</td>
                        <td>Jawaharlal Nehru University</td>
                        <td>2022–2026</td>
                        <td>8.4 CGPA</td>
                    </tr>
                </tbody>
            </table>
            <div className="about-achivements">
                <div className="about-achievement">
                    <p>Recieved Microsoft Global Certified Certificate:Azure AI Fundamentals</p>
                </div>
                <hr></hr>
                <div className="about-achievement">
                    <p>Achieved MongoDB Associate Developer Certification (Java) from MongoDB University</p>
                </div>
                <hr></hr>
                <div className="about-achievement">
                    <p>Achieved a certificate from cybersecurity virtual internship</p>
                </div>
                <hr></hr>
                <div className="about-achievement">
                    <p>Recieved a certificate from generative AI virtual internship program completion skillible</p>
                </div>
            </div>
        </div>
    )
}

export default About