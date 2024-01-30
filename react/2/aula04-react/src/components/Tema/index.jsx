import { useEffect, useState } from "react";


export default function Tema(props) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "claro")

    function themeChange() {
        setTheme(theme === "claro"? "escuro": "claro")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className={`bg-${theme == "claro" ? "white" : "black"} w-[100vw] h-[100vh]`}>
            <button className={`text-${theme == "escuro" ? "white" : "black"}`}
             onClick={themeChange}>change lightmode</button>
        </div>
    )
}