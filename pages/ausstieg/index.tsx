import Image from "next/image";

import styles from './style.module.css';
import InformationBlock from "@/components/information/informationBlock";

export default function _() {

    return (
        <div className="block container">
            <div className={styles.mainBlock}>
                <h1>Du kennst jemanden, der oder die Hilfe beim Verlassen der rechten Szene brauchen könnte?</h1>
                <p>Wenn Du jemanden kennst, die oder der…</p>
                <ul>
                    <li>… rechtes Gedankengut hat, aber vielleicht davon abrücken möchte,</li>
                    <li>… in der rechten Szene Probleme hat,</li>
                    <li>… sich weiterentwickeln möchte,</li>
                    <li>… aussteigen möchte</li>
                </ul>
                <p>und Du wissen möchtest, wie ein Kontakt zu uns hergestellt oder vermittelt werden kann, kannst Du Dich an uns wenden.</p>
                <hr />
                <p>
                    Oftmals werden Mädchen oder Frauen, die sich in der extremen Rechten bewegen,
                    übersehen. Sie können aber, genau wie Jungen und Männer,
                    sehr gefestigt in ihren ideologischen Ansichten und ihrer Szenezugehörigkeit sein,
                    bringen das aber unter Umständen anders zum Ausdruck.
                    Das Team von Distance – Ausstieg Rechts berät ebenso Mädchen und Frauen und ist in der Lage dabei auf mögliche Besonderheiten,
                    die weibliche Szenenzugehörigkeit mit sich bringen kann, professionell einzugehen.
                </p>
            </div>

            <InformationBlock imageRight={false} image="icons/dark_4.png" width="200px">
                <h3 className={styles.header}>
                    Ausstiegsbegleitung durch Distance
                </h3>
                <p>
                    Das Angebot der Beratung und Begleitung richtet sich an Menschen,
                    die mit extrem rechten Szenen sympathisieren oder sich als ein Teil dieser
                    verstehen und sich nun aus unterschiedlichsten Beweggründen distanzieren
                    oder sich über eine Distanzierung informieren möchten.
                </p>
                <p>
                    Ebenso richtet sich das Angebot von Distance an Multiplikator:innen aller Disziplinen,
                    die beruflich oder ehrenamtlich mit rechtsorientierten/
                    rechtsextremen Menschen zusammenarbeiten und bei diesen einen Wunsch/Impuls zur Veränderung der eigenen Lebenssituation,
                    eventuell sogar zum Szeneausstieg wahrnehmen und in diesem Kontext Beratung und Hilfe benötigen.
                </p>
                <p>
                    Indikatoren können beispielsweise sein:
                </p>
                <ul>
                    <li>anderer Umgang mit Freunden und Freundinnen bzw. Kameraden und Kameradinnen,</li>
                    <li>früher geäußerte Feindbilder werden unwichtig,</li>
                    <li>neue Gesprächsthemen, andere Fragen,</li>
                    <li>Äußerung von Zweifeln und Zwickmühlen.</li>
                </ul>
            </InformationBlock>



            <InformationBlock imageRight={true} image="icons/1.png" width="200px">
                <h3 className={styles.header}>Verständnis von Ausstieg</h3>
                <p>Distance – Ausstieg Rechts orientiert sich in seiner Arbeit an den Qualitätsstandards der Bundesarbeitsgemeinschaft
                    Ausstieg zum Einstieg und vertritt auch die dort verfasste Definition von Ausstieg:
                </p>
                <p>
                    „Ein gelungener Ausstieg ist das Ergebnis eines professionell begleiteten Prozesses.
                    Ein solcher Prozess beinhaltet die kritische Auseinandersetzung mit der Vergangenheit und der menschenverachtenden Einstellung,
                    eine gelungene Distanzierung, die Hinwendung zu einer Lebensweise,
                    die mit den Grund-werten von Demokratie und Pluralität vereinbar ist, und den Verzicht auf Gewalt.
                    Es ist ein flexibler, freiwilliger, zeitlich begrenzter, ergebnisoffener Prozess.“
                </p>
            </InformationBlock>

            <InformationBlock imageRight={false} image="icons/dark_1.png" width="200px">
            <h3 className={styles.header}>Ziele</h3>
                <p>
                    Ziel des Ausstiegsangebots ist es, Selbstvertrauen, Eigenständigkeit und Selbstwirksamkeit zu fördern. Dies sind Grundvoraussetzungen, damit sich Aussteiger:innen nachhaltig von rechten Einstellungen und Zusammenhängen lösen können. Dabei ist für das Team von Distance – Ausstieg Rechts von zentraler Bedeutung, sowohl die Chance auf Veränderung eines jeden Menschen anzuerkennen als auch die Möglichkeit einzuräumen, Entscheidungen zu revidieren und neue Handlungsmöglichkeiten und Gestaltungsräume zu etablieren.
                </p>
            </InformationBlock>

            <InformationBlock imageRight={true} image="icons/1.png" width="200px">
            <h3 className={styles.header}>Arbeitsweise</h3>
                <p>Ziel des Ausstiegsangebots ist es, Selbstvertrauen, Eigenständigkeit und Selbstwirksamkeit zu fördern. Dies sind Grundvoraussetzungen, damit sich Aussteiger:innen nachhaltig von rechten Einstellungen und Zusammenhängen lösen können. Dabei ist für das Team von Distance – Ausstieg Rechts von zentraler Bedeutung, sowohl die Chance auf Veränderung eines jeden Menschen anzuerkennen als auch die Möglichkeit einzuräumen, Entscheidungen zu revidieren und neue Handlungsmöglichkeiten und Gestaltungsräume zu etablieren. Distance – Ausstieg Rechts berät vertraulich, mobil, kostenfrei und auf Wunsch anonym. Die Begleitung von Aussteigern und Aussteigerinnen ist prozessorientiert, vertrauensvoll und ressourcenorientiert.</p>
                <ul>
                    <li>Unsere Ausstiegsarbeit zielt sowohl auf eine Abwendung von rechtsextremen Szenekontexten als auch auf eine Reflexion des (extrem) rechten Weltbilds. Dazu gehören:Entwicklung demokratischer Einstellungen und einer damit vereinbaren Lebensweise</li>
                    <li>Umfassende Unterstützung bei der Neugestaltung des Lebens in allen Bereichen (Arbeit, soziales Umfeld, Freizeitgestaltung, usw.)</li>
                    <li>Reflexion der Vergangenheit und des eigenen Lebensverlaufs</li>
                    <li>Reflexion der (ehemals?) vertretenen rechten Ideologien und Überzeugungen</li>
                    <li>Stärkung des Selbstvertrauens und Erweiterung der Handlungsmöglichkeiten </li>
                </ul>
            </InformationBlock>
        </div>
    )
}