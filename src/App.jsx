import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ImageTrack from "./components/ImgTrack.jsx";

const Footer = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "1rem",
      backgroundColor: "#002f5e",
      color: "white",
    },
    link: {
      color: "#7D5E89",
      marginRight: "10px",
    },
  };

  return (
    <footer style={styles.container}>
      <p>© {new Date().getFullYear()} Toua Thao</p>
      <p>
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/toua-thao-3b7399167/"
          style={styles.link}
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://github.com/TouaThao" style={styles.link}>
          GitHub
        </a>
      </p>
      <p>Email: TouaThao09@gmail.com</p>
    </footer>
  );
};

const mainStyle = {
  flex: "1",
};

const appStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

function App() {
  const location = useLocation();

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger((prev) => !prev);
  }, [location]);
  const isDefaultPage = location.pathname === "/";
  return (
    <div style={appStyle}>
      {!isDefaultPage && (
        <Header>
          <ImageTrack />
        </Header>
      )}
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
