import { CommentForm } from '../CommentForm'
import styles from './styles.module.scss'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60" alt="User" />
                    <div className={styles.authorInfo}>
                        <strong>Bruce D. D.</strong>
                        <span>Dog Developer</span>
                    </div>
                </div>

                <time title="14 de maio às 11:30" dateTime="2023-05-14">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

                <p>👉 <a href=''>jane.design/doctorcare</a> </p>

                <p>
                    <a href=''>#novoprojeto </a>
                    <a href=''>#nlw </a>
                    <a href=''>#rocketseat </a>
                </p>
            </div>

            <CommentForm />
        </article>
    )
}