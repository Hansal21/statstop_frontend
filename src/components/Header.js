import React, { useEffect } from 'react'
import './css/Header.css'
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom';
const Header = ({ user, setUser }) => {
    const navigate = useNavigate();
    const logout = () => {
        window.localStorage.removeItem('sessionUser')
        navigate('/');
        setUser(null);
    }
    // useEffect(() => {
    //     const sessionUser = window.localStorage.getItem('sessionUser')
    //     if (sessionUser)
    //         setUser(JSON.parse(sessionUser))
    //     else {
    //         setUser(null)
    //         navigate('/');
    //     }

    // }, []);
    return (
        <div className='headerPage'>

                <img className='headerTextLeft' src={logo} alt="logo" width={30} height={30} />                {
                (user !== null) &&
                <button className='headerTextRight' onClick={logout}>
                    Logout
                </button>
            }
            {
                (user === null) && (window.location.pathname!=="/login") &&
                <button className='headerTextRight' onClick={()=> navigate('login')}>
                    Login
                </button>
            }
            {
                (user === null) && (window.location.pathname==="/login") &&
                <button className='headerTextRight' onClick={()=> navigate('/')}>
                    Back to State
                </button>
            }

            <div className='headerTitle'>StatStop</div>
        </div>
    )
}

export default Header