import { useNavigate } from "react-router-dom";
import logoImagem from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss"

function Login() {

    const navigate = useNavigate()

    const irParaReembolso = () => {
        navigate("/reembolsos")
    };

    return (
        <>
            <main className={styles.mainContainer}>
                <section className={styles.backgroundLogin}></section>

                <section className={styles.mainLogin}>
                    <div className={styles.mainContent}>
                        <div className={styles.formHeader}>
                            <img src={logoImagem} alt="Imagem da logotipo da empresa Wilson, Sons"/>
                            <h1 className={styles.mainTitle}>Boas vindas ao
                                Novo Portal SISPAR</h1>
                            <p className={styles.subTitle}>Sistema de Emissão de Boletos e Parcelamento</p>
                        </div>
                        <form className={styles.forms}>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                            <input type="password" name="password" id="password" placeholder="Senha" required />
                            <a href="#">Esqueci minha senha</a>
                            <div className={styles.formButtons}>
                                <button onClick={irParaReembolso} className={styles.loginIn}>Entrar</button>
                                <button className={styles.signUp}>Criar conta</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login;