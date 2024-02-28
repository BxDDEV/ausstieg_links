import Link from 'next/link'
import styles from './footer.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Footer()
{
    const {data:session} = useSession();
    return (
        <footer >
            <div className={styles.footer1}>
                <div className={styles.footer + ' container'}>
                    <div className={styles.footerWidth}>
                        <p><strong>KONTAKT</strong></p>
                        <br/>
                        <p style={{margin:'5px 0'}}>AfD Fraktion im Thüringer Landtag</p>
                        <p>Jürgen-Fuchs-Str. 1</p>
                        <p>99096 Erfurt</p>

                        <table>
                            <tbody>
                            <tr>
                                <td><i className="fa-solid fa-envelope"></i></td>
                                <td><a href="mailto:info@afd-thl.de">info@afd-thl.de</a></td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-phone"></i></td>
                                <td>0361 377 2469</td>
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
                        <Link href="datenschutz">{'>'} Datenschutz</Link>
                        <hr />
                        <br />
                        <br />
                        <Link href="/">Cookie-Einstellungen</Link>
                    </div>
                    <div className={styles.footerWidth}>
                        <p><strong>ADMIN</strong></p>
                        <br />
                        {!session && (
                            <Link href="" onClick={() => signIn()}>Login</Link>
                        )}
                        {session && (
                            <Link href="" onClick={() => signOut()}>Logout</Link>
                        )}
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