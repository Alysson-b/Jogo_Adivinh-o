import logo from "../../assets/Logo.png"
import restart from"../../assets/restart.png"

import styles from "./style.module.css"

type Props = {
    current: number
    max: number
    onRestart: () => void
}

export function Header( {current, max, onRestart }: Props){
    return (
        <>
            <div className={styles.container}>
                <img src={logo} alt="logo" />

                <header>
                    <span>
                        <strong>{current}</strong> de {max} tentativas
                    </span>

                    <button type="button" onClick={onRestart}>
                        <img src={restart} alt="icone de reiniciar" />
                    </button>
                </header>
            </div>
        
        </>

    )
                
    
}