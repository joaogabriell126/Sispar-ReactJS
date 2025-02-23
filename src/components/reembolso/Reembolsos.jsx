import Home from "../../assets/Dashboard/home.png"
import Seta from "../../assets/Dashboard/Vector.png"
import styles from "./Reembolsos.module.scss"

import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png"
import Analises from "../../assets/Dashboard/Análises.png"
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png"

import NumbAnalises from "../../assets/Dashboard/N-Análises.png"
import NumbAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumbRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumbSolicitados from "../../assets/Dashboard/N-solicitados.png"

import Cloud from "../../assets/Dashboard/Sistema-atualizado.png"
import { useNavigate } from "react-router-dom";

import Navbar from "../navbar/Navbar.jsx"

function Reembolsos() {

    const navigate = useNavigate()

    const irParaSolicitacao = () => {
        navigate("/solicitacao")
    };

    return (
        <div className={styles.reembolsosLayout}>
            <Navbar />
            <div className={styles.reembolsosContainer}>
                <header className={styles.headerReembolso}>
                    <img className={styles.homeImage} onClick={() => {
        navigate("/")}} src={Home} alt="" />
                    <img src={Seta} alt="" />
                    <p>Reembolsos</p>
                </header>
                <main className={styles.mainReembolso}>
                    <div className={styles.reembolsoTitle}>
                        <h1>Sistema de Reembolsos</h1>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    </div>
                    <section className={styles.containerCards}>
                        <article onClick={irParaSolicitacao} className={styles.inputCard}>
                            <img src={Solicitar} alt="" />
                            <p>Solicitar Reembolso</p>
                        </article>
                        <article className={styles.inputCard}>
                            <img src={Analises} alt="" />
                            <p>Verificar análises</p>
                        </article>
                        <article className={styles.inputCard}>
                            <img src={Historico} alt="" />
                            <p>Histórico</p>
                        </article>
                    </section>
                    <section className={styles.containerStatus}>
                        <article className={styles.statusCard}>
                            <div className={styles.imgBackground}>
                                <img src={NumbSolicitados} alt="" />
                            </div>
                            <h4>182</h4>
                            <p>Solicitados</p>
                        </article>
                        <article className={styles.statusCard}>
                            <div className={styles.imgBackground}>
                                <img src={NumbAnalises} alt="" />
                            </div>
                            <h4>74</h4>
                            <p>Em análises</p>
                        </article>
                        <article className={styles.statusCard}>
                            <div className={styles.imgBackground}>
                                <img src={NumbAprovados} alt="" />
                            </div>
                            <h4>195</h4>
                            <p>Aprovados</p>
                        </article>
                        <article className={styles.statusCard}>
                            <div className={styles.imgBackground}>
                                <img src={NumbRejeitados} alt="" />
                            </div>
                            <h4>41</h4>
                            <p>Rejeitados</p>
                        </article>
                    </section>
                    <div className={styles.atualization}>
                        <img src={Cloud} alt="" />
                        <p>Sistema atualizado</p>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Reembolsos