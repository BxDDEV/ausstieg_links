import Image from "next/image";
import styles from './style.module.css';
import InformationBlock from "@/components/information/informationBlock";
import Link from "next/link";
import Head from "next/head";

export default function _() {

    return (
        <>
        <Head>
      <title>ExitLinks - Online Beratung</title>
    </Head>
        <div className="block container">
            <InformationBlock imageRight={true} image='icons/4.png' width="200px">
                <h1 className={styles.header}>Neu: Anonyme Online-Beratung</h1>
                <br />
                <p className={styles.header}>Per <Link href="/">Kontaktformular</Link></p>
            </InformationBlock>

            <InformationBlock imageRight={false} image='' width="0px">
            <p>
                    Die Online-Beratung ist über einen speziell gesicherten Server zu erreichen. Nach der Registrierung mit selbst gewähltem Benutzernamen und Passwort können Sie sich einloggen und uns schreiben.
                </p>
                <p>
                    Information: Die verschlüsselte Online-Beratung funktioniert nach einem sogenannten Postkastensystem, das nicht mit einer regulären E-Mail-Kommunikation vergleichbar ist. Zur Wahrung Deiner Anonymität können wir Deine E-Mail-Adressen nicht einsehen, selbst wenn Du diese angibst.
                </p>
            </InformationBlock>
            <InformationBlock imageRight={true}>
            <p>
                    <strong>Hinweis zum Datenschutz: Nur die Berater von ExitLinks haben Einsicht in Ihre Kommunikation.</strong>
            </p>
            </InformationBlock>
            
        </div>
        </>
    )
}