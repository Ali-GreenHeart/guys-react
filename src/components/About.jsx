import styles from "./about.module.css"

export const About = () => {
    return <div>
        <button>click me</button>
        <p className={styles.txt}>1+2</p>
    </div>
}

const a = 12
export default a;

export const HiUser = 23;

/*
default: 1 fayldan ancaq 1 default export ola biler, import edende {}-lere ehtiyac yoxdur! curly brace {}
istenilen addda import edile biler!

named: 1-den cox ola biler, import edende {}-ler yazilmalidir. Ancaq ve ancaq oz adi ile import oluna biler!

*/
