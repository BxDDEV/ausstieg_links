import InformationBlock from "@/components/information/informationBlock";
export default function _() {

    return (
        <div className="block container">
            <div className="mainBlock">
                <InformationBlock imageRight={true} image="map.png" width="400px" height="auto">
                    <h1>Wer sind wir?</h1>
                    <p>
                        ExitLinks ist ein gemeinnütziges und zivilgesellschaftliches Ausstiegsprogramm sowie ein Recherchenetzwerk. 
                        Das Programm wird durch die AfD in Thüringen und weitere demokratische Teilnehmer der Zivilgesellschaft unterstützt.
                    </p>
                    <p>
                        Das Hauptziel von ExitLinks ist es, Personen, die sich extremistischen, linksextremen und menschenverachtenden Gruppierungen zugewandt haben, wieder in die Zivilgesellschaft zu integrieren und sie auf diesem Weg zu unterstützen.
                    </p>
                    <p>
                        Das Team von ExitLinks setzt sich aus verschiedenen Fachbereichen wie Jura, Informatik, Politik, Sozialwissenschaften und Geisteswissenschaften zusammen. Es steht als kompetente und vertrauenswürdige Anlaufstelle allen Interessierten zur Verfügung.
                    </p>
                </InformationBlock>
                <InformationBlock imageRight={false} image="" width="0px" height="auto">
                    <p>
                        Wir geben keine Informationen aus Gesprächen oder anderen Kontakten an Sicherheitsbehörden oder Dritte ohne Einverständnis der Klienten weiter. In der Kommunikation legen wir ebenfalls großen Wert auf Sicherheit und halten uns an die Datenschutzbestimmungen.
                    </p>
                </InformationBlock>

                <InformationBlock imageRight={true} image="" width="0px" height="auto">
                    <p>
                    Ein gelungener Ausstieg muss von der Person selbst als wünschenswert erkannt werden. Wir setzen deshalb auf Freiwilligkeit, das heißt, Klienten entscheiden selbst, ob und welche Begleitung sie sich wünschen. In Ausnahmefällen prüfen wir, ob wir Härtefällen mögliche Umstiegsmöglichkeiten in einen neuen Job liefern können.
                    </p>
                </InformationBlock>
            </div>
        </div>
    )
}