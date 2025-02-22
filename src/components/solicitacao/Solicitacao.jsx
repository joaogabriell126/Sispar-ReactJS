import Home from "../../assets/Dashboard/home.png"
import Seta from "../../assets/Dashboard/Vector.png"
import styles from "./Solicitacao.module.scss"

import Navbar from "../navbar/Navbar.jsx"

function Solicitacao() {
    return (
        <div className={styles.solicitacaoLayout}>
            <Navbar />
            <div className={styles.solicitacaoContainer}>
                <header className={styles.headerSolicitacao}>
                    <img src={Home} />
                    <img src={Seta} />
                    <p>Reembolsos</p>
                    <img src={Seta} />
                    <p>Solicitação</p>
                </header>
                <main className={styles.mainSolicitacao}>
                    <form className={styles.formSoliciatacao}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome Completo</label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className={styles.inputPrestacao}>
                                <label htmlFor="">N de Prest. Contas</label>
                                <input type="number" name="name" id="name" />
                            </div>

                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo de Reembolso</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>
                        <div className={styles.verticalBar}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="">Data</label>
                                <input type="date" name="" id="" />
                            </div>

                            <div className={styles.despesas}>
                                <label htmlFor="despesas">Tipo de Despesa</label>
                                <select name="despesas" id="despesas">
                                    <option value="" disabled selected>Selecionar </option>
                                    <option value="">Alimentação</option>
                                    <option value="">Combustível</option>
                                    <option value="">Condução</option>
                                    <option value="">Estacionamento</option>
                                    <option value="">Viagem admin.</option>
                                    <option value="">Viagem operacional</option>
                                    <option value="">Eventos de representação</option>
                                </select>
                            </div>

                            <div className={styles.centroDeCustos}>
                                <label htmlFor="centroCustos">Centro de Custos</label>
                                <select name="centroCusto" id="centroCusto">
                                    <option value="" disabled selected>Selecionar </option>
                                    <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                    <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>


                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Solicitacao