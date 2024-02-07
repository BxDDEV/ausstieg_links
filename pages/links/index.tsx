import LinkBlock from "@/components/links/link";

import styles from './style.module.css'
import InformationBlock from "@/components/information/informationBlock";

export default function _() {

    return (
        <div className="block container">
            <div className={styles.header}>
                <h1 className={styles.h1}>Links</h1>
            </div>
            <InformationBlock imageRight={false} image="zivar_logo_schwarz_1000pix_rgb.jpg" width="300px" height="auto">
                <p>„ZIVAR ist der Zusammenschluss der zivilgesellschaftlichen Ausstiegsberatungsstellen in Niedersachsen.“</p>
                <a href="www.zivar.de" className={styles.link}>www.zivar.de</a>
            </InformationBlock>
            <InformationBlock imageRight={true} image="zivar_logo_schwarz_1000pix_rgb.jpg" width="300px" height="auto">
                <p>„ZIVAR ist der Zusammenschluss der zivilgesellschaftlichen Ausstiegsberatungsstellen in Niedersachsen.“</p>
                <a href="www.zivar.de" className={styles.link}>www.zivar.de</a>
            </InformationBlock>
            <InformationBlock imageRight={false} image="zivar_logo_schwarz_1000pix_rgb.jpg" width="300px" height="auto">
                <p>„ZIVAR ist der Zusammenschluss der zivilgesellschaftlichen Ausstiegsberatungsstellen in Niedersachsen.“</p>
                <a href="www.zivar.de" className={styles.link}>www.zivar.de</a>
            </InformationBlock>
            <InformationBlock imageRight={true} image="zivar_logo_schwarz_1000pix_rgb.jpg" width="300px" height="auto">
                <p>„ZIVAR ist der Zusammenschluss der zivilgesellschaftlichen Ausstiegsberatungsstellen in Niedersachsen.“</p>
                <a href="www.zivar.de" className={styles.link}>www.zivar.de</a>
            </InformationBlock>
        </div>
    )
}