import Image from "next/image";
import styles from './style.module.css';

export default function _()
{

    return (
        <div className="block container">
            <div style={{textAlign:'center', padding:'30px'}}>
                    <Image src="/icons/2.png" height={0} width={0} sizes="100vw" alt="" className={styles.image}/>
                    <h1 className={styles.header}>Kontakt</h1>
                    <p><strong>Distance – Ausstieg Rechts</strong></p>
                    <p>Postfach 55 16</p>
                    <p>26045 Oldenburg</p>
                    <hr />
                    <p>info@distance-ausstieg-rechts.de</p>
                    <p>0157/37219524</p>
                    <hr />
                    <p>www.facebook.com/Distance.Ausstieg.Rechts</p>
                    <p>www.instagram.com/distance.ausstieg/</p>
                    <h2 className={styles.header}>Du hast Fragen? Dann schreib uns und mach den ersten Schritt!</h2>
                </div>

        </div>
        )
}