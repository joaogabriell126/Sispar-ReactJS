import Home from "../../assets/Dashboard/home.png"
import Seta from "../../assets/Dashboard/Vector.png"
import styles from "./Solicitacao.module.scss"
import Motivo from "../../assets/Dashboard/motive.png"
import Lixeira from "../../assets/Dashboard/frame.png"
import Navbar from "../navbar/Navbar.jsx"

import { useNavigate } from "react-router-dom";

function Solicitacao() {

    const navigate = useNavigate()

    return (
        <div className={styles.solicitacaoLayout}>
            <Navbar />
            <div className={styles.solicitacaoContainer}>
                <header className={styles.headerSolicitacao}>
                    <img className={styles.homeImage} src={Home} onClick={() => { navigate("/")}}/>
                    <img src={Seta} />
                    <p onClick={() => { navigate("/reembolsos")}}>Reembolsos</p>
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
                                <label htmlFor="empresa">Empresa</label>
                                <input type="text" name="empresa" id="empresa" />
                            </div>

                            <div className={styles.inputPrestacao}>
                                <label htmlFor="prestacao">N de Prest. Contas</label>
                                <input type="number" name="prestacao" id="prestacao" />
                            </div>

                            <div className={styles.inputMotivo}>
                                <label htmlFor="motivos">Descrição / Motivo de Reembolso</label>
                                <textarea name="motivos" id="motivos"></textarea>
                            </div>
                        </div>
                        <div className={styles.verticalBar}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="data">Data</label>
                                <input type="date" name="data" id="data" />
                            </div>

                            <div className={styles.tipoDeDespesas}>
                                <label htmlFor="tipoDeDespesas">Tipo de Despesa</label>
                                <select name="tipoDeDespesas" id="tipoDeDespesas">
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

                            <div className={styles.ordem}>
                                <label htmlFor="">Ord. Int.</label>
                                <input type="text" name="" id="" />
                            </div>

                            <div className={styles.divisoes}>
                                <label htmlFor="">Div.</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.pep}>
                                <label htmlFor="">PEP</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.moedas}>
                                <label htmlFor="">Moeda</label>
                                <select name="" id="">
                                    <option value="" disabled selected>Selecionar</option>
                                    <option value="">BRL</option>
                                    <option value="">ARS</option>
                                    <option value="">USD</option>
                                </select>
                            </div>

                            <div className={styles.distancia}>
                                <label htmlFor="">Dist / Km</label>
                                <input type="text" name="" id="" />
                            </div>

                            <div className={styles.valorKm}>
                                <label htmlFor="">Val. / Km</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.faturado}>
                                <label htmlFor="">Faturado</label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.despesas}>
                                <label htmlFor="">Despesas </label>
                                <input type="number" name="" id="" />
                            </div>

                            <div className={styles.formButtonSolicitacao}>
                                <button className={styles.saveButton}> + Salvar</button>

                                <button className={styles.delButton}> Del</button>
                            </div>
                        </div>
                    </form>

                    <section className={styles.tabela}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Colaborador(a)</th>
                                    <th>Empresa</th>
                                    <th>Nº Prest.</th>
                                    <th>Data</th>
                                    <th>Motivo</th>
                                    <th>Tipo de despesa</th>
                                    <th>Ctr. Custo</th>
                                    <th>Ord. Int.</th>
                                    <th>Div.</th>
                                    <th>PEP</th>
                                    <th>Moeda</th>
                                    <th>Dist. Km</th>
                                    <th>Val. Km</th>
                                    <th>Val. Faturado</th>
                                    <th>Despesa</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                    <td>Cleitinho Caramelo</td>
                                    <td>Mototáxi</td>
                                    <td>24</td>
                                    <td>21/02/2025</td>
                                    <td><img src={Motivo} alt="" /></td>
                                    <td>Alimentação</td>
                                    <td>200.00</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>nada</td>
                                    <td>BRL</td>
                                    <td>20km</td>
                                    <td>0.50</td>
                                    <td>600.00</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr>
                                    <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                    <td>Vanessa Port...</td>
                                    <td>WS002</td>
                                    <td>987789</td>
                                    <td>01/01/2025</td>
                                    <td><img src={Motivo} alt="" /></td>
                                    <td>Desp. de viagem a...</td>
                                    <td>110011002 - FIN C...</td>
                                    <td>0002</td>
                                    <td>005</td>
                                    <td>001</td>
                                    <td>ARS</td>
                                    <td>286Km</td>
                                    <td>0.37</td>
                                    <td>106.93</td>
                                    <td>0.00</td>
                                </tr>
                                <tr>
                                    <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                                    <td>Washington Kl...</td>
                                    <td>WS003</td>
                                    <td>546791</td>
                                    <td>03/01/2025</td>
                                    <td><img src={Motivo} alt="" /></td>
                                    <td>Eventos de apresen...</td>
                                    <td>110010002 - FIN...</td>
                                    <td>0001</td>
                                    <td>005</td>
                                    <td>001</td>
                                    <td>USD</td>
                                    <td>197Km</td>
                                    <td>0.75</td>
                                    <td>109.75</td>
                                    <td>29.87</td>
                                </tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </section>
                    <section className={styles.totalSolicitacao}>
                        <div className={styles.calculoTotal}>
                            <label htmlFor="faturaFinal">Total Faturado</label>
                            <input type="number" name="faturaFinal" id="faturaFinal" placeholder="00,00"/>
                        </div>
                        <div className={styles.calculoTotal}>
                            <label htmlFor="despesaFinal">Total de Despesas</label>
                            <input type="number" name="despesaFinal" id="despesaFinal" placeholder="00,00"/>
                        </div>

                        <div className={styles.buttonTotalSolicitacao}>
                            <button type="submit" className={styles.submitAnalise}>Enviar Análise</button>
                            <button type="reset" className={styles.cancelSolicitacao}>Cancelar Solicitação</button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Solicitacao