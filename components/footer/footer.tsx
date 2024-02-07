import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer()
{
    return (
        <footer >
            <div className={styles.footer1}>
                <div className={styles.footer + ' container'}>
                    <div className={styles.footerWidth}>
                        <p><strong>KONTAKT</strong></p>
                        <br/>
                        <p style={{margin:'5px 0'}}>AfD Thüringen</p>
                        <p>Alte Chaussee 87 / Haus 12</p>
                        <p>99097 Erfurt-Waltersleben</p>

                        <table>
                            <tbody>

                            <tr>
                                <td><i className="fa-solid fa-envelope"></i></td>
                                <td><a href="mailto:geschaeftsstelle@afd-thueringen.de">geschaeftsstelle@afd-thueringen.de</a></td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-phone"></i></td>
                                <td>0361 / 341 968 65 und 68</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-fax"></i></td>
                                <td>0361 / 341 968 67</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-globe"></i></td>
                                <td><a href="afd-thueringen.de">afd-thueringen.de</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.footerWidth}>
                        <p><strong>SERVICE</strong></p>
                        <br />
                        <Link href="impressum">{'>'} Impressum</Link>
                        <hr />
                        <Link href="/">{'>'} Datenschutz</Link>
                        <hr />
                        <br />
                        <br />
                        <Link href="/">Cookie-Einstellungen</Link>
                    </div>
                    <div className={styles.footerWidth}>
                        <p><strong>ADMIN</strong></p>
                        <br />
                        <Link href="/">Login</Link>
                    </div>
                </div>
            </div>
            <div className={styles.footer2}>
                <div className='container'>
                <ul className={styles.footerLists}>
                        <li><a href="https://twitter.com/Exit_Links" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}