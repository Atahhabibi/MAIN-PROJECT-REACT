import "./Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { albumLogo } from "./utils";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
          <img src={albumLogo} alt="alubum logo" className="footer_albumLogo" />
          <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>User</p>
          </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs >
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Footer;
