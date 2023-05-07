import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { spotifylogo } from "./utils";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";


const Sidebar = () => {
  const [{playlists},dispatch]=useDataLayerValue();

  return (
    <div className="sidebar">
      <img src={spotifylogo} alt="logo" className="sidebar__logo"/>
      <SidebarOption title="Home" Icon={HomeIcon}/>
      <SidebarOption title="Search" Icon={SearchIcon}/>
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {
        playlists?.items?.map((item,index)=>{
          return <SidebarOption title={item.name} key={index}/>
        })
      }
  
    </div>
  );
};
export default Sidebar;
