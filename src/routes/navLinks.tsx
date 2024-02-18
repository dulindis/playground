// navLinks for admin
import AddBoxIcon from "@mui/icons-material/AddBox";
import BallotIcon from "@mui/icons-material/Ballot";
import BarChartIcon from "@mui/icons-material/BarChart";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import HomeIcon from "@mui/icons-material/Home";
// import LogoutIcon from "@mui/icons-material/Logout";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import SettingsIcon from "@mui/icons-material/Settings";

// navLinks for admin user

export const navLinksAdmin = [
  { path: "/", name: "Home", icon: <HomeIcon /> },
  { path: "planner", name: "Planner", icon: <EditCalendarIcon /> },
  { path: "new-entry", name: "New Entry", icon: <AddBoxIcon /> },
  { path: "statistics", name: "Statistics", icon: <BarChartIcon /> },
  { path: "log", name: "Changes Log", icon: <BallotIcon /> },
  { path: "control-panel", name: "Control Panel", icon: <ControlCameraIcon /> },
  { path: "settings", name: "Settings", icon: <SettingsIcon /> },
  // { path: "logout", name: "logout", icon: <LogoutIcon /> },
];

// navLinks for regular user

export const navLinksRegular = [
  { path: "/", name: "Home", icon: <HomeIcon /> },
  { path: "planner", name: "Planner", icon: <EditCalendarIcon /> },
  { path: "new-entry", name: "New Entry", icon: <AddBoxIcon /> },
  {
    path: "notifications",
    name: "Notifications",
    icon: <MarkUnreadChatAltIcon />,
  },
  { path: "settings", name: "Settings", icon: <SettingsIcon /> },
  // { path: "logout", name: "logout", icon: <LogoutIcon /> },
];
