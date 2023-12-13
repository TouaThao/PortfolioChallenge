export default function About() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#002f5e",
      color: "white",
      fontFamily: "Roboto, sans-serif",
      minHeight: "64vh",
    },
    heading: {
      color: "#7D5E89",
      fontFamily: "Roboto, sans-serif",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Page</h1>
      <p>
        As a Full-Stack Software Engineer with 5 years of experience, my career
        is marked by a deep technical understanding of JavaScript, ReactJS, and
        C#. I am passionate about solving complex challenges and delivering
        products that serve user needs. My journey in tech has seen me excel as
        a Software Instructor, Front-End Engineer, and Software Engineer, where
        I have made significant impacts in enhancing application performance,
        teaching future developers, and developing innovative solutions. At Edx,
        I volunteered as a mentor, at Leadr, I improved application performance
        by 15%, and at MonkeyJumpLabs, I enhanced customer experience for over
        10,000 users. My educational background from Metropolitan State
        University and Prime Digital Academy has solidified my technical
        prowess. In my personal projects, I focus on server-side rendering,
        automation with Python, and building responsive web APIs. Volunteering
        at tech events like MinneBar and MinneDemo reflects my commitment to the
        tech community.
      </p>
    </div>
  );
}
