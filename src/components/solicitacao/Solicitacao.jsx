import Home from "../../assets/Dashboard/home.png"
import Seta from "../../assets/Dashboard/Vector.png"
import styles from "./Solicitacao.module.scss"

function Solicitacao() {
    return (
        <>
            <header className={styles.headerSolicitacao}>
                <img src={Home} alt="" />
                <img src={Seta} alt="" />
                <p>Reembolsos</p>
                <img src={Seta} alt="" />
                <p>Solicitação</p>
            </header>
            <main className={styles.mainSolicitacao}>
                <h1>oi</h1>
            </main>
        </>
    )
}

export default Solicitacao