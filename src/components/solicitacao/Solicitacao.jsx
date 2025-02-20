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
                            <label htmlFor=""> Tipo de Despesa</label>

                            <select name="" id="">
                                <option value="">Selecionar </option>
                                <option value=""> Alimentação</option>
                                <option value="">Combustível</option>
                            </select>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Solicitacao