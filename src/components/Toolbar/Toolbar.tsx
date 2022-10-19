import ColorInput from "../ColorInput/ColorInput";
import SearchInput from "../SearchInput/SearchInput";
import SettingsActions from "../SettingsActions/SettingsActions";
import SizeInput from "../SizeInput/SizeInput";
import StyleInput from "../StyleInput/StyleInput";
import "./Toolbar.css";

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
