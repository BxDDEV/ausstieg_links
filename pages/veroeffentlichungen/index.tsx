import InformationBlock from '@/components/information/informationBlock';

import styles from './style.module.css';

export default function _() {

    return (
        <div className="block container">
            <InformationBlock imageRight={true} image="icons/2.png" width="200px" height="auto">
                <h1>Veröffentlichungen</h1>
            </InformationBlock>

            <div className={styles.pdfBlock} style={{backgroundColor:'var(--background)'}}>
                <h1 style={{color:'black'}}>This is a Test Header for Veröffentlichungen</h1>
                <iframe className={styles.pdf}
                    src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'>
                </iframe>
                <p style={{color:'black'}}>
                Unsere Mitarbeiterinnen Kati Behrens und Lena Janssen haben unter Mitwirkung von Dr. Christian Pfeil, 
                sich mit dem Beitrag „Herausforderungen und Besonderheiten in der ‚Ausstiegs‘ – Beratung im Kontext von Verschwörungsnarrativen aus
                einer fachlich-praktischen Perspektive“ an dieser Veröffentlichung beteiligt. Den Volltext erhalten sie <a href="https:/google.de" target='_blank' style={{textDecoration:'none', color:'red', fontWeight:'bolder'}}>hier</a>.
                </p>
            </div>



            <div className={styles.pdfBlock} style={{backgroundColor:'var(--primary)'}}>
                <h1 style={{color:'white'}}>This is a Test Header for Veröffentlichungen</h1>
                <iframe className={styles.pdf}
                    src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'>
                </iframe>
                <p style={{color:'white'}}>
                Unsere Mitarbeiterinnen Kati Behrens und Lena Janssen haben unter Mitwirkung von Dr. Christian Pfeil, 
                sich mit dem Beitrag „Herausforderungen und Besonderheiten in der ‚Ausstiegs‘ – Beratung im Kontext von Verschwörungsnarrativen aus
                einer fachlich-praktischen Perspektive“ an dieser Veröffentlichung beteiligt. Den Volltext erhalten sie <a href="https:/google.de" target='_blank' style={{textDecoration:'none', color:'red', fontWeight:'bolder'}}>hier</a>.
                </p>
            </div>

            <div className={styles.pdfBlock} style={{backgroundColor:'var(--background)'}}>
                <h1 style={{color:'black'}}>This is a Test Header for Veröffentlichungen</h1>
                <iframe className={styles.pdf}
                    src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'>
                </iframe>
                <p style={{color:'black'}}>
                Unsere Mitarbeiterinnen Kati Behrens und Lena Janssen haben unter Mitwirkung von Dr. Christian Pfeil, 
                sich mit dem Beitrag „Herausforderungen und Besonderheiten in der ‚Ausstiegs‘ – Beratung im Kontext von Verschwörungsnarrativen aus
                einer fachlich-praktischen Perspektive“ an dieser Veröffentlichung beteiligt. Den Volltext erhalten sie <a href="https:/google.de" target='_blank' style={{textDecoration:'none', color:'red', fontWeight:'bolder'}}>hier</a>.
                </p>
            </div>

            
        </div>
    )
}