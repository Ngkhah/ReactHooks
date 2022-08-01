import React, {useContext} from "react";
import { Switch } from "antd";
import "antd/dist/antd.css";
import { ThemContexts } from "../contextsHook/ThemContexts";

const ThemeSwitch = () => {
  const {SwitchTheme}=useContext(ThemContexts)

  return (
    <div style={{paddingBottom:"20px"}}>
      <Switch defaultChecked onChange={SwitchTheme} />
    </div>
  );
};

export default ThemeSwitch;
