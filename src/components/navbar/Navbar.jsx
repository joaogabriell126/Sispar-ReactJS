import styles from "./Navbar.module.scss"
import Perfil from "../../assets/Header/image.png"
import HomeButton from "../../assets/Header/Botão - Home.png"
import ReembolsosButton from "../../assets/Header/Botão - Reembolso.png"
import PesquisaButton from "../../assets/Header/Botão - Pesquisa.png"
import HistoricoButton from "../../assets/Header/Botão - Histórico.png"
import ExitButton from "../../assets/Header/Botão - Sair.png"
import Close from "../../assets/Header/imagem-fechar-header.png";

import { useNavigate } from "react-router-dom";

function Navbar() {
        
    const navigate = useNavigate()

    return (       
        <>
            <nav className={styles.navbarContainer}>
                <button>
                    <img src={Close} alt="" />
                </button>

                <section className={styles.sectionButtonsNavbar}>
                    <img src={Perfil} alt="" />
                    <div className={styles.boxButton}>
                        <button onClick={() => { navigate("/reembolsos")}}>
                            <img src={HomeButton} alt="" />
                        </button>

                        <button>
                            <img src={ReembolsosButton} alt="" />
                        </button>

                        <button>
                            <img src={PesquisaButton} alt="" />
                        </button>

                        <button>
                            <img src={HistoricoButton} alt="" />
                        </button>
                    </div>
                </section>
                <button className={styles.exitButtonNavbar} onClick={() => { navigate("/")}}>
                    <img src={ExitButton} alt="" />
                </button>
            </nav>
        </>
    )
}

export default Navbar