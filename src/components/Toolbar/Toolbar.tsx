import "./Toolbar.css";
import StyleInput from "../StyleInput/StyleInput";
import SearchInput from "../SearchInput/SearchInput";
import SizeInput from "../SizeInput/SizeInput";
import ColorInput from "../ColorInput/ColorInput";
import SettingsActions from "../SettingsActions/SettingsActions";

const Toolbar = () => {
  return (
    <nav className="toolbar" id="toolbar">
      <div className="toolbar-contents">
        <StyleInput />
        <SearchInput />
        <SizeInput />
        <ColorInput />
        <SettingsActions />
      </div>
    </nav>
  );
};

export default Toolbar;
