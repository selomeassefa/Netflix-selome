import React from "react";
import netflixLogo from "../../assets/images/netFlixlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './header.css'
function Header() {
	return (
		<header className="OuterWraper">
			<div className="LeftSide">
				<ul>
					<li>
						<img src={netflixLogo} alt="" width={100} />
					</li>
					<li>Home</li>
					<li>TVShow</li>
					<li>Movies</li>
					<li>Latest</li>
					<li>Mylists</li>
					<li>Browse by Languages</li>
				</ul>
			</div>
			<div className="rightSide">
				<ul>
					<li>
						<SearchIcon />
					</li>
					<li>
						<NotificationsIcon />
					</li>
					<li>
						<AccountBoxIcon />
					</li>
					<li>
						<ArrowDropDownIcon />
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
