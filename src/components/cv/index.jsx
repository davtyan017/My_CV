import "./styles.css";
import img from "/images/joh.jpg";

export default function CV() {
  return (
    <div className="container">
      <header className="myname">
        <div className="portrait">
          <img src={img} alt="" />
          image
        </div>
        <div className="name">
          <div>
            <h1>Hayk Davtyan</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="Contact">
            <p>Contact</p>
            <ul>
              <li>
                <p>Phone: +37433987366</p>
              </li>
              <li>
                <p>Address: Sharur Street 28/2</p>
              </li>
              <li>
                <p>Email: davtyann.hayk@gmail.com</p>
              </li>
              <li>
                <p>
                  GitHub:{" "}
                  <a href="https://github.com/davtyan017">
                    https://github.com/davtyan017
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </header>
      <section className="cv-sections">
        <section className="cv-summary">
          <p>Professional Summary</p>
          <span>
            "Dedicated and detail-oriented Frontend Developer with 3+ years of
            experience in building responsive web applications using React,
            JavaScript, and modern CSS frameworks. Passionate about creating
            seamless user experiences and constantly learning new technologies
            to solve complex problems."
          </span>
        </section>
        <section className="cv-education">
          <p>Education</p>
          <ul>
            <li>
              BA in Electrical Energetics(EE) <hr /> 2017-2021 <hr /> National
              Polytechnic University of Armenia
            </li>
            <br />
            <li>
              Certificate of Participation <hr /> 80-hours training on OOP with
              C# & .Net <hr /> Microsoft Information Center Armenia
            </li>
            <br />
            <li>
              <hr />
            </li>
          </ul>
        </section>
        <section className="cv-skills">
          <p>Skills</p>

          <ul>
            <u>Programming Languages</u>
            <li>JavaScript, HTML, CSS</li>
            <u>Frameworks & Libraries</u>
            <li>React/Redux</li>
            <u>Tools & Platforms</u>
            <li>Git/GitHub,npm, Figma, etc.</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
