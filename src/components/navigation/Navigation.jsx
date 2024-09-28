import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <div>
            <nav className={`${styles.navigation} container`}>
                <img src="./images/logo.png" alt="" />
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
