import Button from "@/components/button/button";
import InformationBlock from "@/components/information/informationBlock";

export default function Home() {

  return (
    <div className="container block">
      <InformationBlock imageRight={true} image="home.png" width="300px">
        <h1>Du kennst jemanden, der oder die Hilfe beim Verlassen der linken Szene braucht?</h1>
        <p>
          Wenn Du jemanden kennst, die oder der…
        </p>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li>… linkes Gedankengut hat, aber vielleicht davon abrücken möchte,</li>
          <li>… in der linken Szene Probleme hat,</li>
          <li>… sich weiterentwickeln möchte,</li>
          <li>… aussteigen möchte</li>
          <li>
            und Du wissen möchtest, wie ein Kontakt zu uns hergestellt oder vermittelt werden kann, kannst Du Dich an uns wenden.
          </li>
        </ul>
        <p>
          Junge Deutsche sind in der Vergangenheit häufiger in linke Kreise geraten,
          ein Umstand, der zwar bedauerlich ist,
          aber bereits erhebliche Verbesserungen erfahren hat.
          Wir setzen uns in enger Zusammenarbeit mit der AfD Thüringen dafür ein,
          jungen Menschen zu helfen, nicht in diesem schädlichen Milieu gefangen zu bleiben.
          Das Team von Ausstieg Links kann euch dabei professionell begleiten.
          Gemeinsam schaffen wir auch deine persönliche Wende!
        </p>
        <Button path="kontakt" text="weiterlesen" />
      </InformationBlock>

      <InformationBlock imageRight={false} image='icons/dark_4.png' width="200px">
        <h1>Ausstiegsbegleitung durch Ausstieg Links</h1>
        <p>
          Das Beratungs- und Begleitungsangebot richtet sich an Menschen, die mit extrem linken Szenen sympathisieren oder sich als Teil dieser verstehen und sich nun aus unterschiedlichsten Beweggründen distanzieren oder sich über eine Distanzierung informieren möchten.
        </p>
        <p>
          Ebenso richtet sich unser Angebot an Multiplikatoren aller Disziplinen,
          die beruflich oder ehrenamtlich mit linksorientierten/linksextremen Menschen zusammenarbeiten.
          Falls diese einen Wunsch oder Impuls zur Veränderung der eigenen Lebenssituation haben,
          eventuell sogar einen Szeneausstieg in Erwägung ziehen,
          bieten wir in diesem Kontext Beratung und Hilfe an.
        </p>
        <Button path="ausstieg" text="weiterlesen" />
      </InformationBlock>

      <InformationBlock imageRight={true} image='icons/5.png' width="200px">
        <h1>Verständnis von Ausstieg</h1>
        <p>
        „Ein gelungener Ausstieg ist das Ergebnis eines professionell begleiteten Prozesses. 
        Ein solcher Prozess beinhaltet die kritische Auseinandersetzung mit der Vergangenheit und der menschenverachtenden Einstellung, 
        eine gelungene Distanzierung, die Hinwendung zu einer Lebensweise, 
        die mit den Grund-werten von Demokratie und Pluralität vereinbar ist, und den Verzicht auf Gewalt. Es ist ein flexibler, 
        freiwilliger, zeitlich begrenzter, ergebnisoffener Prozess.“
        </p>
        <Button path="ausstieg" text="weiterlesen" />
      </InformationBlock>

      <InformationBlock imageRight={false} image='icons/dark_1.png' width="200px">
        <h1>Arbeitsweise</h1>
        <p>
        Das Ziel unseres Ausstiegsangebots ist es, Eigenständigkeit, 
        Selbstbewusstsein und Selbstwirksamkeit zu fördern. 
        Diese Faktoren sind grundlegend, damit Aussteiger aus der linken Szene sich nachhaltig von linkem Gedankengut distanzieren können. 
        Wir legen Wert darauf, dass am linken Stammtisch widersprochen werden kann, 
        und bieten dir die nötigen Werkzeuge dafür.
        </p>
        <p>
        Unsere Ausstiegsarbeit zielt sowohl auf eine Abwendung von linksextremen Szenekontexten als auch auf eine Reflexion des (extrem) linken Weltbilds ab.
        </p>
        <Button path="wer-sind-wir" text="weiterlesen" />
      </InformationBlock>

      <InformationBlock imageRight={true} image='icons/3.png' width="200px">
        <h1>Veröffentlichungen</h1>
        <p>Hier findest du alle aktuellen Veröffentlichungen und weiterführende Informationen.</p>
        <Button path="veroeffentlichungen" text="weiterlesen" />
      </InformationBlock>

      <InformationBlock imageRight={false} image='icons/dark_2.png' width="200px">
        <h1>Du brauchst unsere Hilfe oder hast Fragen?</h1>
        <p>Melde dich bei uns und mach den ersten Schritt!</p>
        <Button path="kontakt" text="weiterlesen" />
      </InformationBlock>

      <InformationBlock
        imageRight={true} image='map.png' width="300px">
        <h1>Du brauchst unsere Hilfe oder hast Fragen?</h1>
        <p>Melde dich bei uns und mach den ersten Schritt!</p>
        <Button path="wer-sind-wir" text="weiterlesen" />
      </InformationBlock>
    </div>
  )
}
