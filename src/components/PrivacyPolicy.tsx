import { hasAmazonAssociateTag } from "@/lib/amazon";

export function PrivacyPolicy() {
  const affiliateEnabled = hasAmazonAssociateTag();

  return (
    <div className="space-y-8 text-sm leading-7 text-ink/70">
      <p className="text-sm text-ink/55">Stand: 10. Mai 2026</p>
      <div className="space-y-8">
          <section>
            <h3 className="text-base font-semibold text-ink">1. Verantwortlicher</h3>
            <div className="mt-3 space-y-1">
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p>David Langenberger</p>
              <p>Siegfried-Aufhäuser-Str. 17</p>
              <p>86157 Augsburg</p>
              <p>
                E-Mail:{" "}
                <a
                  className="focus-ring rounded-sm underline decoration-ink/25 underline-offset-4 hover:decoration-ink/60"
                  href="mailto:david.langenberger@gmail.com"
                >
                  david.langenberger@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">2. Allgemeine Hinweise</h3>
            <div className="mt-3 space-y-3">
              <p>
                Diese Website ist als schlanke Informationsseite aufgebaut. Es gibt
                derzeit keine Registrierung, kein Kontaktformular, keinen
                Newsletter, keine Kommentarfunktion und kein eingebundenes Analyse-
                oder Werbetracking.
              </p>
              <p>
                Personenbezogene Daten werden nur insoweit verarbeitet, wie dies
                technisch zur Bereitstellung der Website, zur Gewährleistung der
                Sicherheit und bei einer Kontaktaufnahme per E-Mail erforderlich ist.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              3. Hosting und Server-Logfiles
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Diese Website wird über Vercel gehostet. Beim Aufruf der Website
                werden technisch notwendige Verbindungsdaten verarbeitet, insbesondere
                IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Inhalte,
                Referrer-URL, Informationen zum Browser und Betriebssystem sowie
                weitere technische Kommunikationsdaten.
              </p>
              <p>
                Die Verarbeitung erfolgt zur technischen Bereitstellung der Website,
                zur Stabilität, zur Fehleranalyse und zur Abwehr von Missbrauch auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
                Interesse liegt in einem sicheren und funktionsfähigen Betrieb der
                Website.
              </p>
              <p>
                Soweit wir darauf Einfluss haben, werden solche Daten nur so lange
                gespeichert, wie dies für die genannten Zwecke erforderlich ist. Im
                Übrigen richten sich Verarbeitung und Speicherdauer nach den
                technischen und vertraglichen Vorgaben des Hosters.
              </p>
              <p>
                Anbieter des Hostings ist Vercel, Inc. Weitere Informationen:
                {" "}
                <a
                  className="focus-ring rounded-sm underline decoration-ink/25 underline-offset-4 hover:decoration-ink/60"
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer nofollow external"
                >
                  Vercel Privacy Policy
                </a>
                .
              </p>
              <p>
                Eine Übermittlung personenbezogener Daten in Drittländer, insbesondere
                in die USA, kann nicht ausgeschlossen werden. Nach Angaben von Vercel
                erfolgt dies unter Nutzung geeigneter Datenschutzmechanismen; Vercel
                verweist außerdem auf eine Zertifizierung nach dem EU-U.S. Data
                Privacy Framework.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              4. Kontaktaufnahme per E-Mail
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Wenn du per E-Mail Kontakt aufnimmst, verarbeiten wir die von dir
                übermittelten Daten, insbesondere deine E-Mail-Adresse, deinen Namen
                und den Inhalt der Nachricht, um deine Anfrage zu bearbeiten.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage
                auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist,
                andernfalls Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                liegt in der sachgerechten Bearbeitung von Anfragen.
              </p>
              <p>
                Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet
                ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              5. Amazon-Links und Produktempfehlungen
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Diese Website enthält Links zu Amazon. Beim Anklicken eines solchen
                Links verlässt du diese Website und wechselst zu einem Angebot von
                Amazon. Ab diesem Zeitpunkt verarbeitet Amazon personenbezogene Daten
                in eigener Verantwortung.
              </p>
              <p>
                Dabei können insbesondere IP-Adresse, Geräte- und Browserdaten,
                Referrer-Informationen sowie Nutzungsdaten verarbeitet werden.
                Rechtsgrundlage für das Setzen des externen Links und die damit
                verbundene Weiterleitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse liegt darin, auf die konkret empfohlenen
                Produkte zu verweisen.
              </p>
              {affiliateEnabled ? (
                <p>
                  Sofern Amazon-Partnerlinks eingesetzt werden, kann Amazon erkennen,
                  dass ein Aufruf von dieser Website aus erfolgt ist. Dadurch kann
                  eine Zuordnung für das Partnerprogramm vorgenommen werden. Laut
                  Amazon-Partnerprogramm ist hierfür eine Kennzeichnung erforderlich;
                  diese Hinweise sind auf der Website sichtbar eingebunden.
                </p>
              ) : (
                <p>
                  Aktuell ist auf dieser Website nach unserem derzeitigen Stand noch
                  keine Amazon-Partner-ID hinterlegt. Die Amazon-Links dienen daher
                  momentan nur als normale externe Produktlinks. Sobald eine
                  Partner-ID eingebunden wird, wird auch diese Datenschutzerklärung
                  entsprechend aktualisiert.
                </p>
              )}
              <p>
                Weitere Informationen zur Datenverarbeitung durch Amazon findest du
                in der{" "}
                <a
                  className="focus-ring rounded-sm underline decoration-ink/25 underline-offset-4 hover:decoration-ink/60"
                  href="https://www.amazon.de/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ"
                  target="_blank"
                  rel="noreferrer nofollow external"
                >
                  Datenschutzerklärung von Amazon
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              6. Keine Cookies oder Tracking-Tools auf dieser Website
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Nach dem aktuellen Stand setzt diese Website selbst keine
                einwilligungspflichtigen Cookies und verwendet keine eingebundenen
                Tracking-, Marketing- oder Analyse-Tools.
              </p>
              <p>
                Sollte künftig Analyse-, Marketing- oder Komforttechnologie
                hinzukommen, wird diese Datenschutzerklärung angepasst und, soweit
                erforderlich, ein Einwilligungsmechanismus ergänzt.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              7. Lokal eingebundene Schriftarten
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Die auf dieser Website verwendeten Schriftarten werden technisch über
                Next.js eingebunden. Nach aktuellem Aufbau erfolgt dabei kein
                gesonderter Abruf der Schriftarten direkt von externen Anbietern durch
                deinen Browser.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              8. Empfänger personenbezogener Daten
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Empfänger personenbezogener Daten können insbesondere technische
                Dienstleister sein, die wir für den Betrieb dieser Website einsetzen,
                vor allem der Hosting-Anbieter Vercel.
              </p>
              <p>
                Beim Wechsel zu externen Zielseiten, insbesondere Amazon, werden
                personenbezogene Daten zudem von diesen Drittanbietern in eigener
                Verantwortung verarbeitet.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              9. Speicherdauer
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie dies für
                die jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
              <p>
                Bei E-Mail-Anfragen erfolgt die Löschung grundsätzlich nach
                abschließender Bearbeitung, sofern keine gesetzlichen Pflichten oder
                berechtigten Interessen eine längere Aufbewahrung erfordern.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">10. Deine Rechte</h3>
            <div className="mt-3 space-y-3">
              <p>
                Du hast nach der DSGVO insbesondere das Recht auf Auskunft,
                Berichtigung, Löschung, Einschränkung der Verarbeitung,
                Datenübertragbarkeit und Widerspruch gegen die Verarbeitung deiner
                personenbezogenen Daten.
              </p>
              <p>
                Sofern eine Verarbeitung auf einer Einwilligung beruhen sollte, hast
                du das Recht, diese Einwilligung jederzeit mit Wirkung für die Zukunft
                zu widerrufen.
              </p>
              <p>
                Zur Ausübung deiner Rechte genügt eine formlose Nachricht an die oben
                genannten Kontaktdaten.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              11. Beschwerderecht bei einer Aufsichtsbehörde
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über
                die Verarbeitung deiner personenbezogenen Daten zu beschweren.
              </p>
              <p>
                Zuständig für nicht-öffentliche Stellen in Bayern ist insbesondere:
              </p>
              <div className="space-y-1">
                <p>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</p>
                <p>Promenade 18</p>
                <p>91522 Ansbach</p>
                <p>Telefon: +49 (0) 981 180093-0</p>
                <p>
                  Website:{" "}
                  <a
                    className="focus-ring rounded-sm underline decoration-ink/25 underline-offset-4 hover:decoration-ink/60"
                    href="https://www.lda.bayern.de/de/kontakt.html"
                    target="_blank"
                    rel="noreferrer nofollow external"
                  >
                    www.lda.bayern.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-ink">
              12. Änderung dieser Datenschutzerklärung
            </h3>
            <div className="mt-3 space-y-3">
              <p>
                Wir passen diese Datenschutzerklärung an, wenn sich die Website, die
                eingesetzten Dienste oder die rechtlichen Anforderungen ändern.
              </p>
            </div>
          </section>
      </div>
    </div>
  );
}
