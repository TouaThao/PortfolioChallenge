export default function HomePage() {
  const styles = {
    container: {
      textAlign: "center",
      padding: "2rem",
      backgroundColor: "#002f5e",
      color: "white",
      fontFamily: "Roboto, sans-serif",
      minHeight: "64vh",
    },
    heading: {
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, I'm Toua Thao</h1>
      <p>Innovator and Full-Stack Engineer</p>
      <p style={styles.heading}>
        Crafting Futuristic Web Solutions with a Passion for Excellence
      </p>
      <main>
        <p>
          Passionate about building seamless digital experiences, I specialize
          in innovative web applications and robust backend solutions. My
          journey in tech focuses on creating impact and solving real-world
          problems. Explore my portfolio to learn more about my projects and
          skills, and discover what drives my passion for technology. Let's
          connect and collaborate on future innovations!
        </p>
      </main>
    </div>
  );
}
