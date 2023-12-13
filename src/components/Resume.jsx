import React from "react";

export default function Resume() {
  const styles = {
    section: {
      backgroundColor: "#002f5e",
      color: "white",
      padding: "2rem",
      fontFamily: "Roboto, sans-serif",
      minHeight: "64vh",
    },
    heading: {
      color: "#7D5E89",
    },
    link: {
      color: "#FFA500",
    },
  };

  return (
    <section style={styles.section}>
      <div>
        <p>
          Download my{" "}
          <a
            href="https://www.linkedin.com/in/toua-thao-3b7399167/"
            style={styles.link}
          >
            resume
          </a>
        </p>
        <h3 style={styles.heading}>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Responsive Design</li>
          <li>VueJS</li>
          <li>AngularJS</li>
        </ul>
        <h3 style={styles.heading}>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>NodeJS</li>
          <li>C#</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>REST API</li>
          <li>GraphQL</li>
          <li>Python</li>
        </ul>
      </div>
    </section>
  );
}
