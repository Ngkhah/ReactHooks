import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ThemContexts } from '../contextsHook/ThemContexts'
import "./Hooks.css"
import { Button } from "antd";
import "antd/dist/antd.css";
import { AuthContext } from '../contextsHook/AuthContext';
import { TOGGOLE_AUTH } from '../reducers/types';


const Navbar = () => {
const {theme} = useContext(ThemContexts)
const {isLightTheme, Light, Dark} = theme
const style = isLightTheme? Light : Dark
const {isAuthenticated, dispatch} = useContext(AuthContext)

  return (
    <div className="navbar" style={style}>
        <h1 style={style}>My Hooks App</h1>
        <div>
        <nav>
        <Link to="" className='LinkTo' style={style}>
          Home
        </Link>{" "}
        |{" "}
        <Link to="" className='LinkTo' style={style}>
          About
        </Link>{" "}
        |{" "}
        {isAuthenticated ? " You are logged in" : " "}
        <Button onClick={()=>{
          dispatch({
            type: TOGGOLE_AUTH
          })
        }} type="text" className='ButtonTo' style={style}>{isAuthenticated?"Logout":"Login"}</Button>
      </nav>
        </div>
    </div>
  )
}

export default Navbar