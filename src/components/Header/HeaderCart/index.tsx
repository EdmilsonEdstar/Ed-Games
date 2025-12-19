import { MoonIcon, ShoppingCartIcon, SunIcon } from "lucide-react";
import style from "./style.module.css"
import {useEffect, useState } from "react";

export function HeaderCart(){

        const[theme, setTheme] = useState(() => { return localStorage.getItem('theme') || 'dark'});

        const setThemeBody = () =>{
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }

        useEffect(() =>{
            document.getElementById('theme')?.setAttribute('data-theme',theme);
            localStorage.setItem('theme',theme);}
            ,[theme])

    return(
        <>
        <div className={style.element}>
            <a href="#" onClick={setThemeBody} className={style.icon}>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </a>
            <a href="#" className={style.icon}><ShoppingCartIcon /><sup>0</sup></a>
        </div>
        </>    
    )
}