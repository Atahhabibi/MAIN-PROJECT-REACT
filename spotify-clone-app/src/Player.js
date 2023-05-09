import Body from "./Body";
import "./player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
