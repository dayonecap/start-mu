import type { ServiceEntry } from "@/content/types";
import type { Faq } from "@/content/faqs";

export const residencyDe: Record<string, Partial<ServiceEntry>> = {
  "professional-permit": {
    title: "Occupation Permit für Angestellte",
    summary: "Für alle, die bei einem Unternehmen auf Mauritius angestellt sind.",
    intro:
      "Das Occupation Permit der Kategorie Professional erlaubt einem Ausländer, eine Anstellung bei einem mauritischen Arbeitgeber aufzunehmen. Der Arbeitgeber stellt den Antrag, die Genehmigung gilt bis zu zehn Jahre und gibt dem Inhaber und seinen Familienangehörigen das Recht, für die Dauer des Vertrags auf Mauritius zu leben.",
    facts: [
      { label: "Mindestgrundgehalt", value: "50.000 MUR monatlich, in allen Branchen, seit dem Budget 2026-27" },
      { label: "Antragsteller", value: "Der Arbeitgeber stellt den Antrag, der Arbeitnehmer ist Begünstigter" },
      { label: "Gültigkeit", value: "Bis zu 10 Jahre, oder die Laufzeit des Arbeitsvertrags, falls kürzer" },
      { label: "Familienangehörige", value: "Ehepartner oder Lebenspartner, unverheiratete unterhaltsberechtigte Kinder und Eltern" },
      { label: "Bestehende Inhaber", value: "Wer eine gültige Genehmigung nach dem früheren Kriterium von 30.000 MUR hält, hat Anspruch auf eine Verlängerung auf dieser Grundlage" },
      { label: "Kurzzeitgenehmigung", value: "Ein Short-term Occupation Permit ist für bis zu 9 Monate erhältlich, einmal um 3 Monate verlängerbar" },
      { label: "Beteiligung", value: "Ein Angestellter darf Anteile am Arbeitgeber halten, aber nicht die Mehrheit, und darf in andere Unternehmen investieren, ohne dort angestellt zu sein" },
    ],
    sections: [
      { heading: "Für wen es passt", body: [
        "Die Genehmigung ist für jemanden gedacht, der Arbeitnehmer und nicht Eigentümer sein wird. Sie ist üblich für Führungskräfte, die mit einer internationalen Gruppe umziehen, für von mauritischen Unternehmen angeworbene Spezialisten und für den Ehepartner eines Gründers, der eine Rolle im Familienunternehmen übernimmt.",
        "Die früheren Stufen ProPass und Expert Pass wurden zu einer einzigen Kategorie Professional mit einer Gehaltsschwelle zusammengeführt. Die Unterscheidung, auf die es im alten System ankam, zwischen gewöhnlicher Fachkraft und leitendem Experten, hat auf den Antrag keinen Einfluss mehr.",
      ] },
      { heading: "Anstellung im eigenen Unternehmen", body: [
        "Eine Struktur, nach der wir oft gefragt werden: Der Gründer hält das Investor Permit und der Ehepartner ist bei derselben Gesellschaft mit einem Professional Permit angestellt. Das funktioniert und kann die richtige Antwort sein, wenn beide Partner im Unternehmen aktiv sind. Das Gehalt muss echt sein, monatlich gezahlt und bei der Mauritius Revenue Authority erklärt werden, die Gesellschaft muss nachweisen können, dass sie genug verdient, um es zu zahlen, und der Angestellte darf nicht Mehrheitsgesellschafter des Arbeitgebers sein.",
      ] },
      { heading: "Arbeitgeberwechsel", body: [
        "Die Genehmigung ist an den Arbeitgeber gebunden. Wer zu einem anderen Unternehmen wechselt, braucht eine neue Genehmigung unter dem neuen Arbeitgeber, und endet die Anstellung, erlischt die Genehmigung. Es gibt eine begrenzte Frist, in der ein Inhaber auf Mauritius bleiben darf, um eine neue Anstellung oder Genehmigung zu erlangen, sofern die richtigen Schritte rechtzeitig erfolgen. Wettbewerbsverbote im alten Vertrag können einen Wechsel innerhalb derselben Branche erschweren. Wir beraten zur Reihenfolge, bevor gekündigt wird.",
      ] },
      { heading: "Was der Antrag umfasst", body: [
        "Der Arbeitgeber stellt den Antrag mit dem Arbeitsvertrag, den Unterlagen der Gesellschaft und den Qualifikationen des Antragstellers. Reglementierte Berufe erfordern eine Freigabe oder Registrierung bei der zuständigen Kammer, leitende Positionen im Bankwesen eine Freigabe der Bank of Mauritius. Nach der Genehmigung erscheint der Arbeitnehmer persönlich zur Ausstellung, begleitet von einem Vertreter des Arbeitgebers.",
      ] },
    ],
    related: [
      { label: "Investor Permit", href: "/residency/investor-permit" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Familienangehörige", href: "/residency/dependents" },
    ],
    metaTitle: "Occupation Permit für Angestellte auf Mauritius | start.mu",
    metaDescription: "Das Occupation Permit für Angestellte auf Mauritius: Gehaltsschwelle von 50.000 MUR, Antrag durch den Arbeitgeber, Gültigkeit und Familienangehörige.",
    index: { audience: "Angestellte eines mauritischen Unternehmens", threshold: "50.000 MUR Monatsgehalt", duration: "Bis zu 10 Jahre" },
  },
  "self-employed-permit": {
    title: "Occupation Permit für Selbständige",
    summary: "Für eine allein tätige Fachkraft im Dienstleistungssektor.",
    intro:
      "Das Occupation Permit der Kategorie Self-Employed ist für eine Person gedacht, die auf Mauritius auf eigene Rechnung in einer Dienstleistungstätigkeit arbeitet, ohne eine Gesellschaft zu gründen. Es wird für bis zu zehn Jahre erteilt und enthält Einkommensbedingungen, die über die Laufzeit steigen.",
    facts: [
      { label: "Mindestinvestition", value: "50.000 USD oder der Gegenwert in frei konvertierbarer Währung, innerhalb von 60 Tagen nach Erteilung aus dem Ausland auf das mauritische Bankkonto des Inhabers überwiesen" },
      { label: "Tätigkeit", value: "Nur Dienstleistungssektor, registriert beim Registrar of Businesses oder als Ein-Personen-Gesellschaft" },
      { label: "Absichtserklärungen", value: "Mindestens drei, davon mindestens zwei von potenziellen lokalen Kunden" },
      { label: "Einkommensbedingungen", value: "2 Millionen MUR jährlich ab dem dritten Jahr der Tätigkeit; 3 Millionen MUR jährlich ab dem fünften Jahr für die Verlängerung" },
      { label: "Gültigkeit", value: "Bis zu 10 Jahre, verlängerbar" },
      { label: "Personal", value: "Eine lokale Verwaltungskraft darf beschäftigt werden" },
      { label: "Familienangehörige", value: "Ehepartner oder Lebenspartner, unverheiratete unterhaltsberechtigte Kinder und Eltern" },
    ],
    sections: [
      { heading: "Für wen es passt", body: [
        "Berater, Designer, Entwickler, Coaches, Fachleute, Medienproduzenten und andere, die ihre eigene Zeit und ihr Können verkaufen und dafür keine Gesellschaft brauchen. Die Genehmigung ist persönlich und erlaubt nicht die Beschäftigung anderer Fachkräfte, wohl aber eine Verwaltungskraft.",
        "Die Wahl zwischen Selbständigem und Investor ist meist eine Frage von Größe und Struktur. Die Anfangsinvestition beträgt 50.000 USD für Selbständige gegenüber 100.000 USD für Investoren. Soll die Tätigkeit zu einem Unternehmen mit Personal, Verträgen im Namen einer Gesellschaft und getrennten Eigentumsverhältnissen wachsen, ist der Investor-Weg mit einer Domestic Company die bessere Grundlage. Bleibt die Tätigkeit die Arbeit einer einzelnen Person, ist der Selbständigen-Weg einfacher und günstiger im Unterhalt.",
      ] },
      { heading: "Der Geschäftsplan", body: [
        "Das EDB gibt die Struktur des Geschäftsplans und die Gewichtung der Abschnitte vor und erwartet Finanzprognosen über fünf Jahre. Drei Absichtserklärungen, zwei davon von lokalen Kunden, sind Pflicht. Wir erstellen den Plan mit dem Antragsteller in dem Format, an dem das EDB ihn misst, und prüfen die Einkommensprognosen vor der Einreichung gegen die Schwellen für das dritte und fünfte Jahr.",
      ] },
      { heading: "Was der Antrag umfasst", body: [
        "Die Registrierung als Unternehmen, der Nachweis der Mittel im Ausland, der Geschäftsplan und die Absichtserklärungen, Qualifikationen und die persönliche Akte. Die Genehmigung wird dem Grunde nach erteilt, die ärztliche Untersuchung findet auf Mauritius statt, und der Antragsteller erscheint persönlich zur Ausstellung; danach werden die 50.000 USD innerhalb von 60 Tagen überwiesen.",
      ] },
    ],
    related: [
      { label: "Investor Permit", href: "/residency/investor-permit" },
      { label: "Kontoeröffnung", href: "/establishment/bank-account-opening" },
      { label: "Premium Visa", href: "/residency/premium-visa" },
    ],
    metaTitle: "Occupation Permit für Selbständige auf Mauritius | start.mu",
    metaDescription: "Das Occupation Permit für Selbständige auf Mauritius: Anfangsinvestition von 50.000 USD, drei Absichtserklärungen, Einkommensbedingungen ab dem dritten und fünften Jahr, und die Vorbereitung des Geschäftsplans.",
    index: { audience: "Allein tätige Dienstleister", threshold: "50.000 USD Investition", duration: "Bis zu 10 Jahre" },
  },
  "innovator-permit": {
    title: "Occupation Permit für Innovatoren",
    summary: "Für Gründer eines innovativen Start-ups, ohne Mindestinvestition.",
    intro:
      "Die Variante für innovative Start-ups liegt innerhalb der Kategorie Investor und richtet sich an Gründer, deren Projekt beim Economic Development Board eingereicht oder bei einem akkreditierten Inkubator registriert ist. Eine Mindestinvestition gibt es nicht. Die Berechtigung ergibt sich aus dem Projekt, nicht aus dem Kapital.",
    facts: [
      { label: "Mindestinvestition", value: "Keine" },
      { label: "Zugang", value: "Ein beim EDB eingereichtes Projekt oder die Registrierung bei einem vom Mauritius Research and Innovation Council akkreditierten Inkubator" },
      { label: "Berichte", value: "Ein jährlicher Fortschrittsbericht innerhalb von drei Monaten nach Ende des ersten Jahres und am Ende des fünften Jahres ein Entwicklungsbericht, der bestätigt, dass das Projekt ein marktfähiges Minimalprodukt erreicht hat" },
      { label: "Gültigkeit", value: "Bis zu 10 Jahre, verlängerbar" },
      { label: "Familienangehörige", value: "Ehepartner oder Lebenspartner, unverheiratete unterhaltsberechtigte Kinder und Eltern" },
    ],
    sections: [
      { heading: "Für wen es passt", body: [
        "Gründer technologie- und wissensbasierter Projekte, die etwas Neues aufbauen und 100.000 USD nicht von Anfang an aufbringen können oder wollen. Software, Fintech, Biotech, erneuerbare Energien, Daten und KI sind die typischen Kandidaten. Das EDB sucht ein Projekt mit Substanz: ein Produkt, ein Team, einen Plan und einen Grund, warum die Arbeit auf Mauritius stattfinden soll.",
      ] },
      { heading: "Wie das Projekt beurteilt wird", body: [
        "Der Antrag wird am Projekt gemessen, nicht am Kontostand des Antragstellers. Die Unterlagen unterscheiden sich daher von einem gewöhnlichen Investor-Antrag: ein deutlich als innovatives Start-up gekennzeichneter Geschäftsplan, eine technische Beschreibung des Produkts, die auf Mauritius zu leistende Entwicklung, der Hintergrund des Gründerteams und der kommerzielle Weg. Ist ein akkreditierter Inkubator beteiligt, hat dessen Aufnahme Gewicht beim EDB. Die Pflicht nach der Erteilung ist eine Berichtspflicht: Fortschritte jedes Jahr, ein funktionierendes Produkt bis zum fünften Jahr.",
      ] },
      { heading: "Unsere Rolle", body: [
        "Wir strukturieren die Gesellschaft, bereiten den Antrag in der vom EDB erwarteten Form vor und stellen, wo sinnvoll, den Kontakt zu einem akkreditierten Inkubator her. Wir legen außerdem von Beginn an den Berichtskalender fest, damit die jährlichen Fortschrittsberichte und der Entwicklungsbericht im fünften Jahr gegen den vom EDB genehmigten Geschäftsplan erstellt werden.",
      ] },
    ],
    related: [
      { label: "Investor Permit", href: "/residency/investor-permit" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Occupation Permit für Innovatoren auf Mauritius | start.mu",
    metaDescription: "Die Variante für innovative Start-ups innerhalb des Investor Occupation Permit auf Mauritius: keine Mindestinvestition, Projekt beim EDB oder akkreditierter Inkubator, und wie der Antrag beurteilt wird.",
    index: { audience: "Gründer innovativer Start-ups", threshold: "Keine Mindestinvestition", duration: "Bis zu 10 Jahre" },
  },
  "retired-residence-permit": {
    title: "Aufenthaltsgenehmigung für Ruheständler",
    summary: "Für Personen ab 50 mit Einkünften aus dem Ausland.",
    intro:
      "Die Aufenthaltsgenehmigung für Retired Non-Citizens erlaubt einer Person ab 50 Jahren, bis zu zehn Jahre auf Mauritius zu leben, gestützt auf Einkünfte, die aus dem Ausland überwiesen werden. Es gibt keine Pflicht zum Immobilienkauf, keinen Mindestaufenthalt und keine Beschränkung des Wohnorts auf Mauritius.",
    facts: [
      { label: "Alter", value: "50 oder älter zum Zeitpunkt der Antragstellung" },
      { label: "Mittelnachweis", value: "Ein Kontoauszug einer Bank im Herkunfts- oder Wohnsitzland über mindestens 24.000 USD" },
      { label: "Überweisung", value: "Zunächst 2.000 USD innerhalb von 60 Tagen nach Erteilung auf eine mauritische Bank, danach 2.000 USD monatlich oder 24.000 USD jährlich" },
      { label: "Gültigkeit", value: "10 Jahre, verlängerbar" },
      { label: "Arbeit", value: "Keine Erwerbstätigkeit auf Grundlage der Genehmigung selbst. Beteiligungen an Unternehmen sind zulässig, sofern der Inhaber dort nicht angestellt ist. Eine Beschäftigung in bestimmten Branchen ist über eine gesonderte Arbeitserlaubnis oder ein Occupation Permit möglich" },
      { label: "Führungszeugnis", value: "Polizeiliches Führungszeugnis über die letzten zehn Jahre, nicht älter als sechs Monate" },
      { label: "Familienangehörige", value: "Ehepartner oder Lebenspartner und unterhaltsberechtigte Kinder" },
      { label: "Dauerhafter Aufenthalt", value: "Nach fünf Jahren berechtigt, eine 20-jährige Permanent Residence Permit zu beantragen, bei Überweisungen von insgesamt mindestens 200.000 USD in den fünf Jahren vor dem Antrag" },
    ],
    sections: [
      { heading: "Für wen es passt", body: [
        "Ein Ehepaar im Ruhestand oder Teilruhestand oder eine Einzelperson, die eine feste Basis auf Mauritius möchte, ohne dafür eine Immobilie kaufen zu müssen. Es ist der flexibelste Aufenthaltsweg für alle über 50 und häufig die richtige Antwort für Menschen, die sich zunächst nach den Immobilienprogrammen erkundigen, weil sie glauben, das sei der einzige Weg.",
      ] },
      { heading: "Steuern und die Überweisung", body: [
        "Wer in einem Steuerjahr 183 Tage oder mehr auf Mauritius verbringt, wird dort steuerlich ansässig. Mauritius besteuert ausländische Einkünfte nur bei Überweisung ins Land und verfügt über ein Netz von Doppelbesteuerungsabkommen; beides zusammen bestimmt, wie Renten, Dividenden und Mieteinkünfte aus dem Ausland behandelt werden. Die Lage hängt vom Herkunftsland des Inhabers und vom geltenden Abkommen ab. Antragsteller müssen zudem ihre anderen Wohnsitze und steuerlichen Ansässigkeiten offenlegen, die das EDB im Rahmen des Common Reporting Standard an die Mauritius Revenue Authority weitergibt.",
        "Wir sind keine Steuerberater und geben keine steuerlichen Gutachten ab. Wo die Lage von Bedeutung ist, und das ist sie meist, stellen wir vor der Antragstellung den Kontakt zu einem mauritischen Steuerspezialisten her, damit die Entscheidung zum Umzug mit vollständigem Bild getroffen wird.",
      ] },
      { heading: "Was der Antrag umfasst", body: [
        "Nachweis der Mittel im Ausland, polizeiliches Führungszeugnis, Personenstandsurkunden und die persönliche Akte. Die Genehmigung wird dem Grunde nach erteilt, die ärztliche Untersuchung findet auf Mauritius statt, und der Antragsteller erscheint persönlich zur Ausstellung. Die erste Überweisung erfolgt nach Erteilung der Genehmigung.",
      ] },
    ],
    related: [
      { label: "Aufenthalt durch Immobilienerwerb", href: "/residency/property-acquisition" },
      { label: "Premium Visa", href: "/residency/premium-visa" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Aufenthaltsgenehmigung für Ruheständler auf Mauritius | start.mu",
    metaDescription: "Die Aufenthaltsgenehmigung für Ruheständler ab 50 auf Mauritius: 24.000 USD jährlich aus dem Ausland, zehn Jahre Gültigkeit, steuerliche Ansässigkeit und der Weg zum dauerhaften Aufenthalt.",
    index: { audience: "Einzelpersonen und Paare ab 50", threshold: "24.000 USD jährlich aus dem Ausland", duration: "10 Jahre" },
  },
  "property-acquisition": {
    title: "Aufenthalt durch Immobilienerwerb",
    summary: "In einem zugelassenen Programm über der Schwelle kaufen und den Aufenthalt erhalten.",
    intro:
      "Ein Ausländer, der in einem vom EDB zugelassenen Programm eine Wohnimmobilie für mindestens 375.000 USD erwirbt, hat Anspruch auf eine Aufenthaltsgenehmigung, solange er die Immobilie hält. Sie erfasst Ehepartner und unterhaltsberechtigte Kinder des Käufers und befreit den Inhaber von der Pflicht, eine Arbeits- oder Occupation-Genehmigung zu halten.",
    facts: [
      { label: "Mindestkaufpreis", value: "375.000 USD oder der Gegenwert in einer harten konvertierbaren Währung zum Verkaufskurs am Tag der Unterzeichnung der Urkunde" },
      { label: "Zugelassene Programme", value: "Integrated Resort Scheme, Real Estate Scheme, Invest Hotel Scheme, Property Development Scheme, Smart City Scheme sowie zu Wohnzwecken genutzte Wohnungen in Gebäuden mit mindestens zwei Stockwerken über dem Erdgeschoss" },
      { label: "Gültigkeit", value: "Solange der Inhaber die Immobilie besitzt" },
      { label: "Arbeit", value: "Der Inhaber ist von der Pflicht befreit, eine Arbeits- oder Occupation-Genehmigung zu halten" },
      { label: "Familienangehörige", value: "Ehepartner oder Lebenspartner und unterhaltsberechtigte Kinder" },
      { label: "Unterhalb der Schwelle", value: "Käufe unter 375.000 USD in einem zugelassenen Programm sind erlaubt, verleihen aber keine Aufenthaltsgenehmigung" },
    ],
    sections: [
      { heading: "Für wen es passt", body: [
        "Ein Käufer, der ohnehin beschlossen hat, ein Zuhause auf Mauritius zu besitzen, und für den die Aufenthaltsgenehmigung eine Folge dieser Entscheidung ist, nicht ihr Zweck. Die Genehmigung ist an das Objekt gebunden; sie ist daher nicht der richtige Weg für jemanden, der zuerst den Aufenthalt möchte und lieber mieten würde.",
      ] },
      { heading: "Der Erwerb selbst", body: [
        "Der Kauf folgt einer festen Abfolge: Reservierung, Antrag beim EDB auf Genehmigung des Erwerbs, notarielle Urkunde und Eintragung. Käufe vor Fertigstellung unter einem VEFA-Vertrag fügen eine weitere Ebene hinzu, mit Ratenzahlungen nach Baufortschritt und einer finanziellen Garantie des Bauträgers. Wir behandeln das ausführlich im Abschnitt Immobilien und vertreten den Käufer durchgehend, an der Seite des Notars.",
      ] },
      { heading: "Die Genehmigung", body: [
        "Sobald die Urkunde unterzeichnet und der Erwerb beim EDB erfasst ist, wird die Aufenthaltsgenehmigung über das EDB beantragt und vom Passport and Immigration Office erteilt. Sie bleibt gültig, solange die Immobilie gehalten wird, und erlischt beim Verkauf, sofern sich der Inhaber bis dahin nicht über einen anderen Weg qualifiziert hat.",
      ] },
    ],
    related: [
      { label: "Immobilien im Überblick", href: "/property" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Kauf vor Fertigstellung und VEFA", href: "/property/off-plan-vefa" },
      { label: "Domestic Company mit Trust", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Aufenthaltsgenehmigung durch Immobilienerwerb auf Mauritius | start.mu",
    metaDescription: "Aufenthalt auf Mauritius über eine Immobilie: die Schwelle von 375.000 USD, zugelassene EDB-Programme, Ablauf des Erwerbs und Umfang der Genehmigung.",
    index: { audience: "Käufer in einem zugelassenen Programm", threshold: "375.000 USD Kaufpreis", duration: "Solange die Immobilie gehalten wird" },
  },
  "golden-visa": {
    title: "Golden Visa",
    summary: "Eine neue Möglichkeit für vermögende Familien, die innerhalb von zwölf Monaten 1 Million USD investieren.",
    intro:
      "Das Golden Visa ist ein Visum für mehrfache Einreise für vermögende Personen und ihre nächsten Angehörigen, im April 2026 vom Kabinett gebilligt und mit den Budgetmaßnahmen 2026-27 gesetzlich verankert. Wer innerhalb von zwölf Monaten nach Erteilung 1 Million USD auf Mauritius investiert, kann eine zwanzigjährige Permanent Residence Permit beantragen. Die Erfüllung der Voraussetzungen führt nicht automatisch zur Erteilung: Der Antrag wird in der Sache geprüft, und der Abschluss der Investition wandelt das Visum nicht automatisch um.",
    status:
      "Der Rahmen ist dem Grunde nach beschlossen, aber die Antragsrichtlinien des EDB und der Beginn des Programms stehen noch aus. Wir verfolgen die Richtlinien genau und bestätigen die geltenden Anforderungen, bevor wir ein Mandat annehmen.",
    facts: [
      { label: "Investitionszusage", value: "1 Million USD, innerhalb von zwölf Monaten nach Erteilung investiert, bei Antragstellung durch eine schriftliche Verpflichtung bestätigt" },
      { label: "Qualifizierte Investition", value: "Jede Geschäftstätigkeit außer dem Erwerb von Wohnimmobilien unter den Immobilienprogrammen des EDB. Genannt werden Fintech, künstliche Intelligenz, Biotechnologie, erneuerbare Energien und globales Treasury" },
      { label: "Erste Genehmigung", value: "Bis zu zwei Jahre, mehrfache Einreise, verlängerbar" },
      { label: "Nach Abschluss der Investition", value: "Berechtigt, eine 20-jährige Permanent Residence Permit zu beantragen. Keine automatische Umwandlung" },
      { label: "Familienangehörige", value: "Ehepartner und unterhaltsberechtigte Kinder" },
      { label: "Bearbeitungsziel", value: "Fünf Arbeitstage, vom Premierminister angekündigt" },
      { label: "Erwartetes Volumen", value: "Rund 100 Empfänger pro Jahr" },
    ],
    sections: [
      { heading: "Für wen es passt", body: [
        "Eine Familie mit Kapital, die schnell nach Mauritius ziehen und eine lange Genehmigung halten möchte, die weder an ein eigenes Haus noch an die tägliche Führung eines Unternehmens gebunden ist. Das Golden Visa verleiht für sich genommen kein Recht zu arbeiten; erwartet wird eine Investition in qualifizierte Sektoren, keine Beschäftigung.",
        "Es liegt zwischen den bestehenden Möglichkeiten. Es verlangt mehr Kapital als das Investor Permit oder die Immobilienschwelle, bietet dafür aber nach dem ersten Jahr einen zwanzigjährigen dauerhaften Aufenthalt und überlässt die Wahl der Investition dem Inhaber.",
      ] },
      { heading: "Sorgfaltsprüfung", body: [
        "Anträge laufen über das EDB mit einer behördenübergreifenden Prüfung unter Beteiligung der Financial Crimes Commission, der Financial Intelligence Unit, der Financial Services Commission, der Bank of Mauritius und des Passport and Immigration Office. Herkunft der Mittel und des Vermögens werden gründlich geprüft. Wir bereiten diese Akte auf dem Niveau vor, das die Behörden anlegen, gestützt auf die Compliance-Praxis der Gruppe.",
      ] },
      { heading: "Wohnen in der Anfangszeit", body: [
        "Der Rahmen sieht vor, dass Inhaber während der Investitionsphase in Hotels oder in Wohnimmobilien leben, die ausländischen Käufern bereits offenstehen, um den lokalen Wohnungsmarkt nicht zu belasten. Wohnimmobilien unter den EDB-Programmen bleiben Golden-Visa-Inhabern als Zuhause zugänglich, zählen aber nicht zur Million USD.",
      ] },
      { heading: "Unsere Rolle", body: [
        "Wir beraten, ob das Golden Visa oder eine bestehende Möglichkeit besser passt, bereiten den Antrag und die Sorgfaltsakte vor, strukturieren bei Bedarf die Empfängergesellschaft für die Investition und übernehmen den Concierge-Teil des Umzugs. Sobald das EDB seine Richtlinien veröffentlicht, stellen wir hier die vollständigen Dokumentationsanforderungen dar.",
      ] },
    ],
    related: [
      { label: "Investor Permit", href: "/residency/investor-permit" },
      { label: "Aufenthalt durch Immobilienerwerb", href: "/residency/property-acquisition" },
      { label: "Dauerhafter Aufenthalt", href: "/residency/permanent-residence" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Golden Visa Mauritius | start.mu",
    metaDescription: "Das Golden Visa von Mauritius: 1 Million USD Investition innerhalb von zwölf Monaten, eine zweijährige Genehmigung für mehrfache Einreise und die Berechtigung, zwanzig Jahre dauerhaften Aufenthalt zu beantragen. Aktueller Stand und was zu erwarten ist.",
    index: { audience: "Vermögende Familien", threshold: "1 Million USD in 12 Monaten", duration: "2 Jahre, dann Antrag auf 20-jährige PR möglich" },
  },
  "premium-visa": {
    title: "Premium Visa",
    summary: "Ein Langzeitvisum für Remote-Arbeiter und alle, die Mauritius vor einer Festlegung erproben.",
    intro:
      "Das Premium Visa erlaubt einem Ausländer, bis zu ein Jahr, verlängerbar, auf Mauritius zu bleiben, während er aus der Ferne für einen Arbeitgeber oder Kunden außerhalb von Mauritius arbeitet oder im Ruhestand von Einkünften aus dem Ausland lebt. Es ist keine Aufenthaltsgenehmigung, aber oft der richtige erste Schritt.",
    facts: [
      { label: "Gültigkeit", value: "Bis zu ein Jahr, verlängerbar" },
      { label: "Wer beantragen kann", value: "Remote-Arbeiter, digitale Fachkräfte, Ruheständler und Langzeitbesucher, deren Einkünfte außerhalb von Mauritius entstehen" },
      { label: "Einkünfte", value: "Nachweis ausreichender Mittel, mit einem Richtwert des EDB von 1.500 USD monatlich für den Hauptantragsteller und zusätzlichen Beträgen für mitreisende Kinder" },
      { label: "Arbeit", value: "Keine Anstellung bei einem mauritischen Arbeitgeber und kein Zugang zum lokalen Arbeitsmarkt" },
      { label: "Steuern", value: "Auf Mauritius über ausländische Karten oder Konten ausgegebene Einkünfte gelten nicht als überwiesen; die steuerliche Ansässigkeit beginnt bei 183 Tagen" },
      { label: "Kosten", value: "Keine Antragsgebühr" },
    ],
    sections: [
      { heading: "Für wen es passt", body: [
        "Jemand, der auf Mauritius leben möchte, bevor er entscheidet, sich hier niederzulassen, oder der sich gar nicht niederlassen muss, weil seine Arbeit online für Kunden anderswo stattfindet. Es ist auch eine sinnvolle Zwischenlösung für eine Familie, die vor einem Antrag auf ein Occupation Permit ankommt, oder während ein Immobilienkauf abgewickelt wird.",
      ] },
      { heading: "Vom Premium Visa zum Aufenthalt", body: [
        "Das Visum kann von Mauritius aus umgewandelt werden. Ein Remote-Arbeiter, der später eine Gesellschaft gründet und ein Investor- oder Self-Employed-Permit beantragt, oder ein Inhaber über 50, der zur Genehmigung für Ruheständler wechselt, muss das Land dafür nicht verlassen. Wir planen die Abfolge von Anfang an, damit die Zeit unter dem Premium Visa nicht verloren geht.",
      ] },
      { heading: "Was der Antrag umfasst", body: [
        "Der Antrag erfolgt online beim EDB mit Reisepass, Nachweis des geplanten Aufenthalts und der Unterkunft, Nachweis von Einkünften außerhalb von Mauritius sowie Reise- und Krankenversicherung. Die Genehmigung erfolgt in der Regel zügig. Wir behandeln sie als Teil eines umfassenderen Umzugs und nicht als Einzelleistung.",
      ] },
    ],
    related: [
      { label: "Self-Employed Permit", href: "/residency/self-employed-permit" },
      { label: "Genehmigung für Ruheständler", href: "/residency/retired-residence-permit" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Premium Visa Mauritius | start.mu",
    metaDescription: "Das Premium Visa von Mauritius für Remote-Arbeiter und Langzeitbesucher: ein Jahr Gültigkeit, verlängerbar, Einkommensanforderungen, steuerliche Behandlung und der Übergang zu einer Aufenthaltsgenehmigung.",
    index: { audience: "Remote-Arbeiter und Langzeitbesucher", threshold: "Einkünfte aus dem Ausland", duration: "1 Jahr, verlängerbar" },
  },
  dependents: {
    title: "Familienangehörige",
    summary: "Wer einen Genehmigungsinhaber begleiten darf, und zu welchen Bedingungen.",
    intro:
      "Jedes Occupation Permit und jede Aufenthaltsgenehmigung erstreckt sich über eine Genehmigung für Familienangehörige auf die engsten Familienangehörigen des Inhabers. Diese Genehmigung folgt der des Hauptinhabers und endet mit ihr.",
    facts: [
      { label: "Ehepartner", value: "Ein Ehepartner oder Lebenspartner des anderen Geschlechts, mit Heiratsurkunde oder Bescheinigung über die Lebensgemeinschaft" },
      { label: "Kinder", value: "Unverheiratete unterhaltsberechtigte Kinder bis 24 Jahre, einschließlich Stiefkinder und rechtmäßig adoptierte Kinder" },
      { label: "Eltern", value: "Die Eltern des Hauptinhabers" },
      { label: "Arbeit", value: "Familienangehörige dürfen keiner Erwerbstätigkeit nachgehen. Wer arbeiten möchte, beantragt ein eigenes Occupation Permit oder eine Arbeitserlaubnis" },
      { label: "Behörde", value: "Über Anträge von Familienangehörigen entscheidet das Passport and Immigration Office" },
      { label: "Family Occupation Permit", value: "Die frühere Kategorie Family Occupation Permit wurde mit dem Budget 2026-27 abgeschafft" },
    ],
    sections: [
      { heading: "Reihenfolge", body: [
        "Anträge für Familienangehörige werden gestellt, sobald die Hauptgenehmigung erteilt ist. In der Praxis bereiten wir ihre Akten parallel zum Hauptantrag vor, damit sie unmittelbar nach der Erteilung eingereicht werden und die Genehmigungen der Familie innerhalb kurzer Zeit gemeinsam ergehen.",
      ] },
      { heading: "Schule und Praktisches", body: [
        "Unterhaltsberechtigte Kinder brauchen Schulplätze, und die guten Schulen auf Mauritius sind früh belegt. Unser Concierge-Service übernimmt die Vorstellung bei Schulen, die Krankenversicherung und die häuslichen Vorkehrungen, die den Umzug für die ganze Familie gelingen lassen, nicht nur für den Inhaber der Genehmigung.",
      ] },
    ],
    related: [
      { label: "Concierge", href: "/concierge" },
      { label: "Alle Möglichkeiten vergleichen", href: "/residency" },
    ],
    metaTitle: "Genehmigungen für Familienangehörige auf Mauritius | start.mu",
    metaDescription: "Wer einen Inhaber eines Occupation Permit oder einer Aufenthaltsgenehmigung nach Mauritius begleiten darf: Ehepartner, Kinder und Eltern, die Reihenfolge der Anträge und die praktischen Vorkehrungen für Familien.",
  },
  "permanent-residence": {
    title: "Dauerhafter Aufenthalt",
    summary: "Die zwanzigjährige Genehmigung und die Möglichkeiten dorthin.",
    intro:
      "Eine Permanent Residence Permit wird für zwanzig Jahre erteilt und befreit den Inhaber von den Bedingungen eines Occupation Permit oder einer Aufenthaltsgenehmigung. Sie wird durch das Erfüllen dauerhafter Schwellen unter einer bestehenden Genehmigung erworben oder, sobald das Programm läuft, durch den Abschluss der Golden-Visa-Investition.",
    facts: [
      { label: "Gültigkeit", value: "20 Jahre, verlängerbar" },
      { label: "Investor", value: "Fünf Jahre mit der Genehmigung und in jedem dieser Jahre ein Jahresumsatz von mindestens 15 Millionen MUR oder ein Gesamtumsatz von 75 Millionen MUR über die fünf Jahre" },
      { label: "Angestellte", value: "Fünf Jahre mit Occupation Permit oder Arbeitserlaubnis und ein monatliches Grundgehalt von mindestens 400.000 MUR in fünf aufeinanderfolgenden Jahren" },
      { label: "Selbständige", value: "Fünf Jahre mit der Genehmigung und in jedem Jahr ein Geschäftseinkommen von mindestens 3 Millionen MUR oder ein Gesamteinkommen von 15 Millionen MUR über die fünf Jahre" },
      { label: "Ruheständler", value: "Fünf Jahre mit der Genehmigung und Überweisungen von insgesamt mindestens 200.000 USD über die fünf Jahre" },
      { label: "Frist", value: "Der Antrag ist spätestens sechs Monate nach Erfüllung der Kriterien zu stellen" },
      { label: "Aus einem Golden Visa", value: "Nach Abschluss der Investition von 1 Million USD innerhalb von zwölf Monaten" },
      { label: "Familienangehörige", value: "Ehepartner und unterhaltsberechtigte Kinder können einbezogen werden" },
    ],
    sections: [
      { heading: "Von Anfang an darauf hinarbeiten", body: [
        "Die Schwellen für den dauerhaften Aufenthalt werden über fünf aufeinanderfolgende Jahre gemessen, nicht an einem Stichtag, und sie liegen deutlich über den Schwellen für die Genehmigung selbst. Der erklärte Umsatz eines Investors, das Grundgehalt eines Angestellten und das erklärte Einkommen eines Selbständigen zählen Jahr für Jahr, und das Antragsfenster schließt sich sechs Monate nach Erfüllung der Kriterien. Wir zeichnen den Weg beim ersten Gespräch vor, damit die Entscheidungen des ersten Jahres die Tür im fünften nicht verschließen.",
      ] },
      { heading: "Was sich ändert", body: [
        "Ein dauerhaft Aufenthaltsberechtigter unterliegt nicht mehr den jährlichen Bedingungen der ursprünglichen Genehmigung. Ein Investor, Angestellter oder Selbständiger mit Permanent Residence Permit kann diese später für die Restlaufzeit in die Kategorie Ruheständler umschreiben lassen, wenn er ein verfügbares Jahreseinkommen von 40.000 USD nachweist. Für eine Familie, die angekommen ist, ist es der Punkt, an dem Mauritius aufhört, eine Genehmigung zu sein, und ein Zuhause wird.",
      ] },
    ],
    related: [
      { label: "Investor Permit", href: "/residency/investor-permit" },
      { label: "Golden Visa", href: "/residency/golden-visa" },
      { label: "Genehmigung für Ruheständler", href: "/residency/retired-residence-permit" },
    ],
    metaTitle: "Permanent Residence Permit Mauritius | start.mu",
    metaDescription: "Die zwanzigjährige Permanent Residence Permit auf Mauritius: welche Genehmigungen dorthin führen, die über die Zeit gemessenen Schwellen und was sich ändert, sobald sie erteilt ist.",
  },
  "technical-occupation-permit": {
    title: "Technical Occupation Permit",
    summary: "Eine neue Kategorie für ausländische Fachkräfte, die im Rahmen zwischenstaatlicher Vereinbarungen angeworben werden.",
    intro:
      "Das Budget 2026-27 hat im Rahmen des Programms Work and Live eine Kategorie Technical des Occupation Permit eingeführt, um die Anwerbung ausländischer Fachkräfte über zwischenstaatliche Vereinbarungen zu erleichtern. Das EDB hat den operativen Rahmen geprüft und integriert die Genehmigung in seine Systeme.",
    status:
      "Die Voraussetzungen und Richtlinien für das Technical Occupation Permit sind vom EDB noch nicht veröffentlicht. Diese Seite wird sie enthalten, sobald sie vorliegen. Bis dahin stellt eine Fachkraft mit mauritischem Arbeitgeber den Antrag in der Kategorie Professional.",
    facts: [
      { label: "Eingeführt", value: "Budget 2026-27, im Rahmen des Programms Work and Live" },
      { label: "Zweck", value: "Strategische Anwerbung ausländischer Fachkräfte über zwischenstaatliche Vereinbarungen" },
      { label: "Status", value: "Operativer Rahmen Mitte 2026 vom EDB-Vorstand geprüft; Richtlinien ausstehend" },
      { label: "Alternative heute", value: "Das Occupation Permit für Angestellte mit einem Mindestgrundgehalt von 50.000 MUR monatlich" },
    ],
    sections: [
      { heading: "Was bekannt ist", body: [
        "Das Budget beschreibt die Kategorie als Mittel strategischer Anwerbung im Rahmen zwischenstaatlicher Vereinbarungen, was darauf hindeutet, dass sie auf Sektoren zielt, in denen der Staat vereinbart hat, technisches Personal in größerer Zahl ins Land zu holen, und nicht auf einzelne Antragsteller. Ob einzelne Fachkräfte oder private Arbeitgeber sie nutzen können, ist noch offen.",
      ] },
      { heading: "Was jetzt zu tun ist", body: [
        "Wenn Sie eine Fachkraft mit einem Angebot eines mauritischen Arbeitgebers sind, ist das Professional Permit der Weg, und er steht heute offen. Wenn Sie als Arbeitgeber oder Branchenverband eine zwischenstaatliche Vereinbarung erwägen, beraten wir zum Rahmen, sobald das EDB ihn veröffentlicht.",
      ] },
    ],
    related: [
      { label: "Professional Permit", href: "/residency/professional-permit" },
      { label: "Alle Möglichkeiten vergleichen", href: "/residency" },
    ],
    metaTitle: "Technical Occupation Permit Mauritius | start.mu",
    metaDescription: "Das neue Technical Occupation Permit von Mauritius aus dem Budget 2026-27 für zwischenstaatliche Anwerbung: was bekannt ist, der aktuelle Stand und der heute verfügbare Weg.",
  },
};

export const faqsDe: Record<string, Faq[]> = {
  "professional-permit": [
    { q: "Darf ich Anteile an der Gesellschaft halten, die mich anstellt?", a: "Ja, sofern Sie nicht Mehrheitsgesellschafter sind. Sie dürfen auch in andere Unternehmen investieren, sofern Sie dort nicht angestellt sind und weder Gehalt noch Vergünstigungen daraus beziehen." },
    { q: "Was geschieht mit meiner Genehmigung bei einem Jobwechsel?", a: "Die Genehmigung ist an den Arbeitgeber gebunden. Ein Wechsel zu einem anderen Unternehmen erfordert eine neue Genehmigung unter dem neuen Arbeitgeber, die alte erlischt. Es gibt eine begrenzte Frist, in der Sie auf Mauritius bleiben dürfen, um eine neue Anstellung zu finden, sofern nach Vertragsende rechtzeitig die richtigen Schritte erfolgen." },
    { q: "Gilt die Schwelle von 50.000 MUR für meine bestehende Genehmigung?", a: "Wer bereits eine Genehmigung nach dem früheren Kriterium von 30.000 MUR hält, hat weiterhin Anspruch auf eine Verlängerung auf dieser Grundlage. Neue Anträge werden mit 50.000 MUR bewertet." },
    { q: "Kann mein Arbeitgeber eine Gesellschaft sein, die ich mit meinem Ehepartner besitze?", a: "Ja, und das ist eine gängige Struktur neben einem Investor Permit des anderen Ehepartners. Das Gehalt muss echt sein, monatlich gezahlt und erklärt werden, und Sie dürfen nicht Mehrheitsgesellschafter des Arbeitgebers sein." },
  ],
  "self-employed-permit": [
    { q: "Brauche ich eine Gesellschaft?", a: "Nein. Die Genehmigung ist für eine Person gedacht, die im eigenen Namen als Unternehmen registriert ist oder eine Ein-Personen-Gesellschaft betreibt. Wenn Sie Fachkräfte einstellen oder im Namen einer Gesellschaft Verträge schließen wollen, ist der Investor-Weg die bessere Grundlage." },
    { q: "Darf ich jemanden beschäftigen?", a: "Eine lokale Verwaltungskraft. Die Genehmigung erlaubt nicht, andere Fachkräfte in der Tätigkeit selbst zu beschäftigen." },
    { q: "Was zählt zum Dienstleistungssektor?", a: "Beratung, Design, Software, Medien, Coaching, Betreuung und ähnliche Tätigkeiten, bei denen Sie Ihre eigene Zeit und Ihr Können verkaufen. Warenhandel, Produktion und Gastgewerbe sind in dieser Kategorie nicht zulässig." },
    { q: "Was, wenn mein Einkommen im dritten Jahr keine 2 Millionen MUR erreicht?", a: "Die Schwelle wird überwacht, und ein Fehlbetrag kann zur Streichung führen. Realismus von Anfang an lohnt sich: Ist das prognostizierte Einkommen knapp, kann der Investor-Weg mit einer Gesellschaft oder das Premium Visa während der Aufbauphase die sicherere Abfolge sein." },
  ],
  "innovator-permit": [
    { q: "Gibt es wirklich keine Mindestinvestition?", a: "Für die Variante der innovativen Start-ups keine. Der Antrag wird am Projekt und am Team gemessen, und die Pflicht nach der Erteilung besteht darin, jährlich Fortschritte zu berichten und bis Ende des fünften Jahres ein marktfähiges Minimalprodukt vorzuweisen." },
    { q: "Was gilt dem EDB als innovativ?", a: "Es gibt keine feste Liste. Projekte aus Technologie, Fintech, Biotech, erneuerbaren Energien, Daten und KI sind die typischen Kandidaten. Ein bei einem vom Mauritius Research and Innovation Council akkreditierten Inkubator registriertes Projekt hat Gewicht; ein herkömmliches Unternehmen mit Website qualifiziert sich nicht." },
    { q: "Kann ich später zum regulären Investor Permit wechseln?", a: "Ja. Wer Kapital aufnimmt oder die Schwelle von 100.000 USD erreicht, kann unter Option 1 beantragen, und die Berichtspflichten des Innovator-Wegs entfallen." },
  ],
  "retired-residence-permit": [
    { q: "Muss ich eine Immobilie kaufen?", a: "Nein. Die Genehmigung beruht auf der Überweisung von 24.000 USD jährlich aus dem Ausland; ob Sie mieten oder kaufen, bleibt Ihnen überlassen. Viele, die sich zunächst nach den Immobilienprogrammen erkundigen, landen bei diesem Weg." },
    { q: "Darf ich überhaupt arbeiten?", a: "Nicht auf Grundlage der Genehmigung selbst. Sie dürfen sich als Gesellschafter an einem Unternehmen beteiligen, sofern Sie dort nicht angestellt sind. Eine Beschäftigung in bestimmten Branchen ist über eine gesonderte Arbeitserlaubnis oder ein Occupation Permit möglich." },
    { q: "Muss mein Ehepartner über 50 sein?", a: "Nein. Ein Ehe- oder Lebenspartner unter 50 wird als Familienangehöriger einbezogen. Nur der Hauptantragsteller muss 50 oder älter sein." },
    { q: "Werde ich auf Mauritius steuerpflichtig?", a: "Wenn Sie in einem Steuerjahr 183 Tage oder mehr auf Mauritius verbringen, ja. Mauritius besteuert ausländische Einkünfte nur bei Überweisung ins Land und hat Abkommen mit vielen Herkunftsländern; wie eine Rente oder Kapitalerträge behandelt werden, hängt von ihrer Quelle und dem geltenden Abkommen ab. Wo es darauf ankommt, stellen wir vor dem Antrag den Kontakt zu einem mauritischen Steuerspezialisten her." },
    { q: "Muss die Überweisung monatlich erfolgen?", a: "Entweder 2.000 USD monatlich oder 24.000 USD jährlich, nach einer ersten Überweisung von 2.000 USD innerhalb von 60 Tagen nach Erteilung. Die meisten Mandanten überweisen jährlich." },
  ],
  "property-acquisition": [
    { q: "Welche Programme qualifizieren sich?", a: "Integrated Resort Scheme, Real Estate Scheme, Invest Hotel Scheme, Property Development Scheme, Smart City Scheme sowie eine zu Wohnzwecken genutzte Wohnung in einem Gebäude mit mindestens zwei Stockwerken über dem Erdgeschoss. In jedem Fall muss der Kaufpreis mindestens 375.000 USD betragen." },
    { q: "Kann ich für weniger als 375.000 USD kaufen?", a: "Ja, innerhalb der Programme, aber der Kauf verleiht dann keine Aufenthaltsgenehmigung. Käufer unter der Schwelle, die auf Mauritius leben möchten, verbinden den Kauf mit einem anderen Weg, meist der Genehmigung für Ruheständler oder einem Occupation Permit." },
    { q: "Darf ich mit dieser Genehmigung arbeiten?", a: "Ja. Der Inhaber ist von der Pflicht befreit, eine Arbeits- oder Occupation-Genehmigung zu halten." },
    { q: "Was passiert beim Verkauf?", a: "Die Genehmigung ist an die Immobilie gebunden und erlischt beim Verkauf. Wer verkaufen und bleiben will, sollte sich vor Abschluss über einen anderen Weg qualifizieren." },
    { q: "Kann ich die Immobilie über eine Gesellschaft oder einen Trust halten?", a: "Ja. Eine mauritische Domestic Company darf Programmimmobilien erwerben, und ihre Anteile können in einem Trust gehalten werden. Die Aufenthaltsgenehmigung kann über die Struktur erlangt werden, vorbehaltlich der Bedingungen des EDB. Die Struktur muss vor der Urkunde bestehen." },
  ],
  "golden-visa": [
    { q: "Ist das Golden Visa jetzt verfügbar?", a: "Der Rahmen wurde im April 2026 vom Kabinett gebilligt und mit den Budgetmaßnahmen gesetzlich verankert, aber die Antragsrichtlinien des EDB und der Beginn des Programms stehen noch aus. Wir bestätigen die geltenden Anforderungen, bevor wir ein Mandat annehmen." },
    { q: "Zählt der Kauf eines Hauses zur Million USD?", a: "Nein. Wohnimmobilien unter den EDB-Programmen sind von der qualifizierten Investition ausgeschlossen. Sie können zusätzlich ein Zuhause unter den Programmen kaufen." },
    { q: "Darf ich mit dem Golden Visa auf Mauritius arbeiten?", a: "Das Visum verleiht für sich genommen kein Recht zu arbeiten. Erwartet wird eine Investition in qualifizierte Sektoren, keine Beschäftigung." },
    { q: "Wie verhält es sich zum Investor Permit?", a: "Es verlangt das Zehnfache an Kapital, eröffnet aber nach dem ersten Jahr den Weg, einen zwanzigjährigen dauerhaften Aufenthalt zu beantragen, statt einer zehnjährigen Genehmigung mit Umsatzbedingungen. Das Investor Permit passt für jemanden, der ein Unternehmen führt; das Golden Visa für jemanden, der Kapital einsetzt." },
  ],
  "premium-visa": [
    { q: "Kann ich vom Premium Visa zu einer Aufenthaltsgenehmigung wechseln, ohne Mauritius zu verlassen?", a: "Ja. Wer später eine Gesellschaft gründet und ein Investor- oder Self-Employed-Permit beantragt oder über 50 ist und zur Genehmigung für Ruheständler wechselt, kann das von Mauritius aus tun." },
    { q: "Darf ich für ein mauritisches Unternehmen arbeiten?", a: "Nein. Das Visum gilt für Arbeit, die aus der Ferne für einen Arbeitgeber oder Kunden außerhalb von Mauritius geleistet wird. Eine Anstellung bei einem mauritischen Arbeitgeber erfordert ein Occupation Permit oder eine Arbeitserlaubnis." },
    { q: "Werde ich auf Mauritius besteuert?", a: "Auf Mauritius über ausländische Karten oder Konten ausgegebene Einkünfte gelten nicht als überwiesen. Die steuerliche Ansässigkeit beginnt bei 183 Tagen in einem Steuerjahr; die Behandlung ausländischer Einkünfte ab diesem Punkt richtet sich nach dem Überweisungsprinzip und einem etwaigen Abkommen mit dem Herkunftsland." },
    { q: "Kann meine Familie mitkommen?", a: "Ja. Ehepartner und Kinder können einbezogen werden, mit zusätzlichem Mittelnachweis für jede Person." },
  ],
  dependents: [
    { q: "Darf mein mitreisender Ehepartner arbeiten?", a: "Nicht mit einer Genehmigung als Familienangehöriger. Ein Ehepartner, der arbeiten möchte, beantragt ein eigenes Occupation Permit oder eine Arbeitserlaubnis." },
    { q: "Bis zu welchem Alter können meine Kinder einbezogen werden?", a: "Unverheiratete unterhaltsberechtigte Kinder bis 24 Jahre, einschließlich Stiefkinder und rechtmäßig adoptierte Kinder." },
    { q: "Kann ich meine Eltern mitbringen?", a: "Ja. Die Eltern des Hauptinhabers sind als Familienangehörige berechtigt." },
    { q: "Kann ein unverheirateter Partner berücksichtigt werden?", a: "Ein Lebenspartner des anderen Geschlechts kann bei Nachweis der Lebensgemeinschaft berücksichtigt werden." },
  ],
  "permanent-residence": [
    { q: "Wie bald kann ich beantragen?", a: "Nach fünf Jahren mit der Genehmigung, sofern die Schwellen Ihrer Kategorie in jedem dieser Jahre erfüllt wurden, und spätestens sechs Monate nach ihrer Erfüllung." },
    { q: "Sind die Schwellen dieselben wie für die Genehmigung selbst?", a: "Nein. Sie liegen erheblich höher: 15 Millionen MUR Jahresumsatz für einen Investor, 400.000 MUR monatlich für einen Angestellten, 3 Millionen MUR jährlich für einen Selbständigen und 200.000 USD an Überweisungen insgesamt für einen Ruheständler. Die Planung beginnt im ersten Jahr." },
    { q: "Führt das Golden Visa schneller zum dauerhaften Aufenthalt?", a: "Möglicherweise. Der Abschluss der Investition von 1 Million USD innerhalb von zwölf Monaten berechtigt den Inhaber, die zwanzigjährige Genehmigung zu beantragen, sobald das Programm in Kraft ist. Es begründet eine Berechtigung zur Antragstellung, keine automatische Erteilung." },
  ],
};
