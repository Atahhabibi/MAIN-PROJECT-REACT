import { Avatar } from '@mui/material';
import './Header.css'
import SearchIcon  from '@mui/icons-material/Search';
import { useDataLayerValue } from './DataLayer';

const Header = ({spotify}) => {

    const [{user,token},dispatch]=useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artist,Songs or " />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
  
}

export default Header