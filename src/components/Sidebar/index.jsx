import { PencilLine } from 'phosphor-react';
import styles from './styles.module.scss';

export function Sidebar() {
    const coverImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
    const profileImage = "https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50";

    return (
        <aside className={styles.sidebar}>
            <img src={coverImage} alt="Cover image" />

            <div className={styles.profile}>
                <img src={profileImage} alt="Profile image" />
                <strong>Lua Praxedes</strong>
                <span>Desenvolvedora</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}