import type { ServiceEntry } from "@/content/types";
import type { Faq } from "@/content/faqs";

export const establishmentDe: Record<string, Partial<ServiceEntry>> = {
  "domestic-company": {
    title: "Domestic Company",
    summary: "Die operative Gesellschaft hinter den meisten Occupation Permits und vielen Immobilienkäufen.",
    intro:
      "Eine mauritische Domestic Company ist eine Privatgesellschaft nach dem Companies Act 2001 für eine auf Mauritius ausgeübte Tätigkeit. Sie ist das Vehikel für ein Investor Occupation Permit, der Arbeitgeber für ein Professional Permit und, mit einem Trust, ein Weg, Programmimmobilien zu halten. Sie wird auf Mauritius mit 15 % auf das steuerpflichtige Einkommen besteuert, mit Teilbefreiungen für bestimmte Einkunftsarten.",
    facts: [
      { label: "Rechtsgrundlage", value: "Companies Act 2001, verwaltet vom Registrar of Companies" },
      { label: "Gesellschafter und Direktoren", value: "Ein Gesellschafter und ein Direktor genügen. Mindestens ein Direktor muss seinen gewöhnlichen Aufenthalt auf Mauritius haben" },
      { label: "Eingetragener Sitz", value: "Auf Mauritius erforderlich. Wir stellen ihn" },
      { label: "Company Secretary", value: "Erforderlich bei mehr als einem Direktor und in der Praxis für jede Gesellschaft mit Genehmigung oder Bankkonto. Wir stellen ihn" },
      { label: "Dauer", value: "Gründung in der Regel innerhalb weniger Arbeitstage nach vollständiger Akte. Das Bankkonto dauert länger" },
      { label: "Steuern", value: "15 % auf das steuerpflichtige Einkommen. Keine Kapitalertragsteuer. An Gesellschafter gezahlte Dividenden sind bei diesen einkommensteuerfrei, zählen bei ansässigen Privatpersonen aber auf die Schwelle der Fair Share Contribution" },
      { label: "Jährliche Pflichten", value: "Jahresmeldung, Jahresabschluss, Steuererklärung und, für Genehmigungsinhaber, Umsatzerklärungen an das EDB" },
    ],
    sections: [
      { heading: "Für wen sie passt", body: ["Für alle, die mit einem Investor Permit umziehen, denn die Genehmigung verlangt eine Gesellschaft. Für alle, die auf Mauritius ein echtes Geschäft aufbauen: Beratung, Handel, Technologie, Gastgewerbe, Projektentwicklung, regionale Dienstleistungen. Und für Familien, die Programmimmobilien über eine Gesellschaft statt im eigenen Namen halten möchten."] },
      { heading: "Immobilien über eine Gesellschaft mit Trust halten", body: [
        "Eine Domestic Company darf Immobilien unter den zugelassenen Programmen erwerben, und ihre Anteile können von einem Trust gehalten werden. Die Struktur trennt das Zuhause von der Person, was für die Nachfolge, für Familien mit Mitgliedern in mehreren Ländern und für Käufer zählt, die mauritische Immobilien lieber nicht persönlich halten. Das EDB hat uns bestätigt, dass die Aufenthaltsgenehmigung über eine Treuhandstruktur beantragt werden kann, vorbehaltlich der üblichen Bedingungen.",
        "Diese Struktur richten wir regelmäßig ein. Sie erfordert einen mauritischen Trustee, eine sorgfältig abgefasste Trusturkunde und die Abstimmung zwischen Notar, EDB und Bank beim Kauf. Für jedes Mandat erstellen wir ein schriftliches Angebot mit Struktur, Beteiligten, Kosten und Ablauf.",
      ] },
      { heading: "Ansässiger Direktor", body: ["Jede Domestic Company braucht mindestens einen Direktor mit gewöhnlichem Aufenthalt auf Mauritius. Ist der Eigentümer noch nicht ansässig oder möchte er nicht selbst handeln, stellen wir einen ansässigen Direktor auf Grundlage einer schriftlichen Vereinbarung, die klar festlegt, was der Direktor tut und nicht tut und wie der Eigentümer die Kontrolle behält. Wir stellen keine Direktoren für Gesellschaften, deren Tätigkeit wir nicht verstehen."] },
      { heading: "Was wir übernehmen", body: ["Namensreservierung, Gründung, Satzung, eingetragener Sitz, Company Secretary, bei Bedarf ein ansässiger Direktor, die Einführung bei der Bank, die Registrierung bei der Mauritius Revenue Authority und beim Registrar of Businesses sowie die anschließenden jährlichen Pflichten. Für Genehmigungsinhaber laufen die EDB-Meldungen parallel."] },
    ],
    related: [
      { label: "Investor Permit", href: "/residency/investor-permit" },
      { label: "Kontoeröffnung", href: "/establishment/bank-account-opening" },
      { label: "Sitz und Company Secretary", href: "/establishment/registered-office-and-secretary" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
    ],
    metaTitle: "Gründung einer Domestic Company auf Mauritius | start.mu",
    metaDescription: "Gründung einer Domestic Company auf Mauritius: Direktoren, eingetragener Sitz, 15 % Steuer, Halten von Programmimmobilien über Gesellschaft und Trust, und was start.mu übernimmt.",
    index: { audience: "Geschäft auf Mauritius, Genehmigungsinhaber, Immobilien über eine Struktur", threshold: "Tätigkeit auf Mauritius", duration: "15 % auf das steuerpflichtige Einkommen" },
  },
  "global-business-company": {
    title: "Global Business Company",
    summary: "Für internationales Geschäft von Mauritius aus, mit Substanz und Abkommenszugang.",
    intro:
      "Eine Global Business Company hält eine Global Business Licence der Financial Services Commission und betreibt ihr Geschäft überwiegend außerhalb von Mauritius, wird aber von dort geleitet und kontrolliert. Sie ist die Struktur für Holdinggesellschaften, internationalen Handel, Investmentfonds und regionale Hauptsitze, die Zugang zu den Doppelbesteuerungsabkommen von Mauritius wünschen.",
    status:
      "Global Business Companies werden von der Financial Services Commission lizenziert und müssen von einer lizenzierten Management Company verwaltet werden. Diese Mandate führen wir mit unserer Schwestergesellschaft Intrasia Management (Mauritius) Limited durch, die eine Management Licence der FSC hält. start.mu koordiniert das Mandat im Auftrag des Mandanten.",
    facts: [
      { label: "Lizenz", value: "Global Business Licence der Financial Services Commission" },
      { label: "Verwaltung", value: "Muss von einer von der FSC lizenzierten Management Company verwaltet werden" },
      { label: "Substanz", value: "Mindestens zwei ansässige Direktoren, ein Hauptbankkonto auf Mauritius, Buchführung und Prüfung auf Mauritius, Vorstandssitzungen auf Mauritius und die wesentliche einkommenserzeugende Tätigkeit auf Mauritius" },
      { label: "Steuern", value: "15 % mit einer Teilbefreiung von 80 % auf qualifizierte ausländische Einkünfte, also effektiv 3 % auf diese Einkünfte, vorbehaltlich der Substanz" },
      { label: "Abkommenszugang", value: "Berechtigt zum Netz der Doppelbesteuerungsabkommen von Mauritius, vorbehaltlich einer Ansässigkeitsbescheinigung" },
      { label: "Dauer", value: "Die Lizenzierung dauert in der Regel mehrere Wochen ab vollständiger Akte" },
    ],
    sections: [
      { heading: "Für wen sie passt", body: ["Ein Unternehmer mit Aktivitäten oder Investitionen in mehreren Ländern, besonders in Afrika und Asien, der eine stabile, gut regulierte Holdingjurisdiktion mit Abkommenszugang sucht. Sie ist nicht die richtige Struktur für ein Geschäft, das überwiegend auf Mauritius tätig ist, und sie ist für sich genommen keine Struktur für einen Genehmigungsantrag, auch wenn eine Global Business Company einen Inhaber eines Professional Permit anstellen kann."] },
      { heading: "Substanz ist nicht optional", body: ["Der Wert einer Global Business Company liegt in ihrer steuerlichen Ansässigkeit, und diese hängt von tatsächlicher Leitung und Kontrolle auf Mauritius ab. FSC und Mauritius Revenue Authority prüfen das. Direktoren müssen ansässig sein und tatsächlich leiten. Entscheidungen müssen auf Mauritius fallen. Aufwand und Personal müssen zur Tätigkeit passen. Wir richten die Struktur so ein, dass sie diese Prüfung besteht, und sagen offen, wenn eine vorgeschlagene Struktur das nicht kann."] },
      { heading: "Wie wir diese Mandate führen", body: ["Wir beurteilen das Vorhaben, bestimmen die passende Lizenz und Struktur und koordinieren den Antrag über die lizenzierte Management Company. Zieht der Eigentümer zugleich um, führen wir Genehmigung und persönlichen Teil parallel, damit beides zusammenpasst."] },
    ],
    related: [
      { label: "Authorised Company", href: "/establishment/authorised-company" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Warum Mauritius", href: "/mauritius" },
    ],
    metaTitle: "Global Business Company auf Mauritius | start.mu",
    metaDescription: "Die mauritische Global Business Company: FSC-Lizenz, Substanzanforderungen, effektiv 3 % auf qualifizierte ausländische Einkünfte, Abkommenszugang und die Koordination des Mandats.",
    index: { audience: "Internationale Holding und Handel", threshold: "Geleitet und kontrolliert auf Mauritius", duration: "Effektiv 3 % auf qualifizierte ausländische Einkünfte" },
  },
  "authorised-company": {
    title: "Authorised Company",
    summary: "Ein einfacheres Vehikel für Geschäft, das außerhalb von Mauritius betrieben und kontrolliert wird.",
    intro:
      "Eine Authorised Company wird auf Mauritius gegründet, von der Financial Services Commission zugelassen und außerhalb von Mauritius geleitet und kontrolliert. Sie gilt steuerlich als nicht ansässig und hat keinen Abkommenszugang. Sie eignet sich für internationalen Handel, Rechnungsstellung und Holdingtätigkeit, wenn kein Abkommenszugang benötigt wird.",
    status:
      "Authorised Companies werden von der Financial Services Commission zugelassen und benötigen als Registered Agent eine lizenzierte Management Company. Unsere Schwestergesellschaft Intrasia Management (Mauritius) Limited übernimmt diese Rolle, und start.mu koordiniert das Mandat im Auftrag des Mandanten.",
    facts: [
      { label: "Zulassung", value: "Durch die Financial Services Commission" },
      { label: "Registered Agent", value: "Eine von der FSC lizenzierte Management Company" },
      { label: "Leitung und Kontrolle", value: "Außerhalb von Mauritius" },
      { label: "Steuern", value: "Nicht ansässig. Keine mauritische Steuer auf ausländische Einkünfte. Kein Zugang zu Doppelbesteuerungsabkommen" },
      { label: "Tätigkeiten", value: "Handel, Beteiligungsholding, Beratung, Halten geistigen Eigentums und ähnliche außerhalb von Mauritius ausgeübte Tätigkeiten. Bankgeschäft, Finanzdienstleistungen und bestimmte andere Tätigkeiten sind ausgeschlossen" },
      { label: "Berichtspflichten", value: "Eine jährliche Finanzübersicht bei der FSC und eine jährliche Einkommenserklärung bei der Mauritius Revenue Authority" },
    ],
    sections: [
      { heading: "Für wen sie passt", body: ["Ein Unternehmer, der eine auf Mauritius gegründete Gesellschaft für internationale Tätigkeit möchte, mit geringeren Substanzanforderungen als bei einer Global Business Company, und der keinen Abkommenszugang braucht. Verbreitet bei Beratern und Händlern mit Kunden in mehreren Märkten sowie zum Halten geistigen Eigentums oder von Beteiligungen, wenn das Heimatland des Eigentümers nicht nach dem Ansässigkeitsprinzip besteuert."] },
      { heading: "Grenzen", body: ["Eine Authorised Company darf auf Mauritius keine Geschäfte mit Ansässigen betreiben, keine Global Business Licence halten und kein Occupation Permit stützen. Die eigene steuerliche Stellung des Eigentümers im Heimatland bleibt von der Wahl eines mauritischen Vehikels unberührt, und wir empfehlen Beratung im Heimatland, bevor Sie fortfahren."] },
    ],
    related: [
      { label: "Global Business Company", href: "/establishment/global-business-company" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Authorised Company auf Mauritius | start.mu",
    metaDescription: "Die mauritische Authorised Company: FSC-Zulassung, Leitung und Kontrolle außerhalb von Mauritius, steuerliche Behandlung als nicht ansässig, zulässige Tätigkeiten und Grenzen.",
    index: { audience: "Internationale Tätigkeit ohne Abkommensbedarf", threshold: "Kontrolliert außerhalb von Mauritius", duration: "Nicht ansässig, keine mauritische Steuer" },
  },
  "bank-account-opening": {
    title: "Kontoeröffnung",
    summary: "Eingeführt, bis zur Freischaltung begleitet und eröffnet, bevor der Genehmigungsantrag eingereicht wird.",
    intro:
      "Ein mauritisches Bankkonto ist Bedingung der meisten Genehmigungen und praktische Notwendigkeit für jede Gesellschaft. Die Eröffnung dauert länger als die Gründung, und die Anforderungen der Banken sind deutlich gestiegen. Wir führen Mandanten bei der Bank ein, die zu ihrem Profil passt, und begleiten die Akte bis zur Freischaltung.",
    facts: [
      { label: "Banken, mit denen wir arbeiten", value: "MCB, AfrAsia Bank, SBM, Bank One und ABSA Mauritius, unter anderen" },
      { label: "Dauer", value: "Zwei bis sechs Wochen ab vollständiger Akte, je nach Bank und Profil des Antragstellers" },
      { label: "Was die Bank verlangt", value: "Identitäts- und Adressnachweise, Herkunft des Vermögens und der Mittel, den Geschäftsplan und bei Gesellschaften Satzung und Gründungsunterlagen" },
      { label: "Privat und geschäftlich", value: "Wir organisieren beides. Das Privatkonto wird meist zuerst eröffnet" },
    ],
    sections: [
      { heading: "Warum es dauert", body: ["Mauritische Banken wenden bei nicht ansässigen Antragstellern und neuen Gesellschaften eine verstärkte Sorgfaltsprüfung an. Eine unvollständige oder widersprüchliche Akte bleibt liegen. Das Wirksamste, was wir bei einer Bankakte tun, ist die sorgfältige Vorbereitung vor der Einreichung: eine stimmige Darstellung des Vermögens, Unterlagen, die zueinander passen, und ein Geschäftsplan, dem die Compliance-Abteilung der Bank folgen kann."] },
      { heading: "Die Wahl der Bank", body: ["Die Banken unterscheiden sich in ihrer Bereitschaft nach Nationalität, Branche und Kontotyp, in Mindestguthaben, in Mehrwährungsangeboten und im Umgang mit einer noch nicht aktiven Gesellschaft. Wir wissen, wo ein bestimmtes Profil willkommen ist, und richten die Einführung danach aus, statt bei mehreren Banken einzureichen und abzuwarten, welche antwortet."] },
      { heading: "Abstimmung mit der Genehmigung", body: ["Für ein Investor Permit müssen die 100.000 USD innerhalb von 60 Tagen nach Erteilung auf das mauritische Konto der Gesellschaft überwiesen werden; für Selbständige sind es 50.000 USD und für Ruheständler zunächst 2.000 USD. Bleibt die Überweisung innerhalb der 60 Tage aus, folgen Streichung und Erlöschen der Genehmigung. Wir stimmen Bankakte und Genehmigungsakte so ab, dass das Konto vor der Erteilung offen ist und die Frist nie zur Frage wird."] },
    ],
    related: [
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Investor Permit", href: "/residency/investor-permit" },
    ],
    metaTitle: "Kontoeröffnung auf Mauritius | start.mu",
    metaDescription: "Eröffnung privater und geschäftlicher Bankkonten auf Mauritius: welche Banken, was sie verlangen, wie lange es dauert und wie das Konto mit einem Genehmigungsantrag abgestimmt wird.",
  },
  "registered-office-and-secretary": {
    title: "Eingetragener Sitz und Company Secretary",
    summary: "In unseren Büchern geführt, mit gepflegten Registern und fristgerechten Meldungen.",
    intro:
      "Jede mauritische Gesellschaft braucht einen eingetragenen Sitz auf Mauritius und in der Praxis einen Company Secretary, der die gesetzlichen Register führt und die vom Registrar of Companies verlangten Meldungen abgibt. Beides stellen wir aus unserem Büro auf Mauritius.",
    facts: [
      { label: "Eingetragener Sitz", value: "Eine mauritische Adresse für Zustellungen und amtliche Korrespondenz" },
      { label: "Company Secretary", value: "Führung des Gesellschafterregisters, des Direktorenregisters, der Protokolle und Beschlüsse sowie der Jahresmeldung" },
      { label: "Meldungen", value: "Jahresmeldung an den Registrar of Companies, Änderungen bei Direktoren und Gesellschaftern sowie Angaben zu wirtschaftlich Berechtigten" },
      { label: "Post", value: "Amtliche Post wird entgegengenommen, gescannt und weitergeleitet" },
    ],
    sections: [
      { heading: "Was enthalten ist", body: ["Die Sitzadresse, Empfang und Bearbeitung amtlicher Korrespondenz, die gesetzlichen Register, Vorstands- und Gesellschafterbeschlüsse für Routineangelegenheiten, die Jahresmeldung und Erinnerungen vor jeder Melde- und Verlängerungsfrist. Für Genehmigungsinhaber führen wir die EDB-Umsatzerklärungen im selben Kalender."] },
      { heading: "Was nicht enthalten ist", body: ["Buchführung, Prüfung und Steuererklärungen sind gesonderte Leistungen. Wir stellen im Rahmen der Gründung den Kontakt zu einem lokalen Buchhalter her und stimmen uns mit ihm ab, doch die Abschlüsse erstellt der Buchhalter. Wünscht ein Mandant einen einzigen Ansprechpartner für alles, richten wir das ein."] },
    ],
    related: [
      { label: "Jährliche Pflichten", href: "/establishment/annual-compliance" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Eingetragener Sitz und Company Secretary auf Mauritius | start.mu",
    metaDescription: "Sitz- und Sekretariatsleistungen für Gesellschaften auf Mauritius: gesetzliche Register, Jahresmeldungen, Meldungen zu wirtschaftlich Berechtigten und der Compliance-Kalender für Genehmigungsinhaber.",
  },
  "annual-compliance": {
    title: "Jährliche Pflichten",
    summary: "Die Meldungen, Erklärungen und Prüfungen, die Genehmigung und Gesellschaft in gutem Stand halten.",
    intro:
      "Genehmigung und Gesellschaft bringen jeweils jährliche Pflichten mit sich, und seit den Haushalten 2025 und 2026 werden sie genauer geprüft als zuvor. Wir führen einen Kalender für Gesellschaft, Genehmigung und Haushalt und handeln danach.",
    facts: [
      { label: "Gesellschaft", value: "Jahresmeldung, Jahresabschluss, Steuererklärung, Aktualisierung der wirtschaftlich Berechtigten, Verlängerung von Sitz und Secretary" },
      { label: "Genehmigung", value: "Jährliche Erklärung von Umsatz oder Einkommen bei der Mauritius Revenue Authority, Überwachung durch das EDB, die Schwellen im dritten und fünften Jahr und die Verlängerung mindestens einen Monat vor Ablauf" },
      { label: "Steuern", value: "Persönliche Einkommensteuererklärung bei Ansässigkeit und Körperschaftsteuererklärung für die Gesellschaft, jeweils bei der Mauritius Revenue Authority" },
      { label: "Haushalt", value: "Kfz-Zulassungen, Verlängerung der Krankenversicherung, Mietverträge, Wiedereinschreibung in der Schule" },
    ],
    sections: [
      { heading: "Die Schwelle im fünften Jahr", body: ["Investor- und Self-Employed-Permits enthalten Umsatz- oder Einkommensbedingungen ab dem dritten Jahr und höhere ab dem fünften, die über die Verlängerung entscheiden. Das EDB überwacht die Einhaltung gemeinsam mit dem Passport and Immigration Office und der Mauritius Revenue Authority, auch durch Besuche vor Ort, und kann einen Inhaber streichen, der sie nicht erfüllt, worauf die Genehmigung erlischt. Wir bereiten das vom ersten Jahr an vor, indem wir die MRA-Erklärungen konsistent halten und früh melden, wenn sich die Zahlen von den Schwellen entfernen."] },
      { heading: "Wie die Leistung funktioniert", body: ["Mandanten mit Jahresmandat erhalten einen Compliance-Kalender für das kommende Jahr, Erinnerungen vor jeder Frist, die Meldungen in ihrem Namen und ein kurzes jährliches Gespräch. Die gewöhnlichen Fragen des Lebens in einem neuen Land beantworten wir, wenn sie auftauchen."] },
    ],
    related: [
      { label: "Sitz und Company Secretary", href: "/establishment/registered-office-and-secretary" },
      { label: "Investor Permit", href: "/residency/investor-permit" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Jährliche Pflichten für Genehmigungsinhaber und Gesellschaften auf Mauritius | start.mu",
    metaDescription: "Jährliche Pflichten auf Mauritius für Inhaber eines Occupation Permit und Domestic Companies: MRA-Erklärungen, EDB-Überwachung, die Schwelle im fünften Jahr, Gesellschaftsmeldungen und die Funktionsweise des Mandats.",
  },
};

export const propertyDe: Record<string, Partial<ServiceEntry>> = {
  "property-development-scheme": {
    title: "Property Development Scheme",
    summary: "Das aktuelle Programm für neue Wohnprojekte, die ausländischen Käufern offenstehen.",
    intro:
      "Das Property Development Scheme ist der Rahmen, in dem seit 2015 die meisten neuen, für Ausländer zugänglichen Wohnprojekte zugelassen wurden. Es hat Integrated Resort Scheme und Real Estate Scheme für neue Projekte abgelöst und umfasst Villen, Reihenhäuser, Wohnungen und erschlossene Grundstücke innerhalb eines zugelassenen Projekts.",
    facts: [
      { label: "Mindestkaufpreis", value: "Keiner für den Kauf selbst. 375.000 USD für eine Aufenthaltsgenehmigung" },
      { label: "Wer kaufen darf", value: "Ausländer, Gesellschaften, Trusts und Stiftungen, mit Genehmigung des EDB" },
      { label: "Aufenthaltsgenehmigung", value: "Für Käufer, Ehepartner und unterhaltsberechtigte Kinder, gültig solange die Immobilie gehalten wird, ab 375.000 USD" },
      { label: "Registrierungsgebühr", value: "5 % des Kaufpreises, vom Käufer zu tragen" },
      { label: "Vermietung", value: "Der Eigentümer darf die Immobilie vermieten" },
      { label: "Weiterverkauf", value: "Zulässig, an einen anderen berechtigten Käufer, im selben Genehmigungsverfahren" },
    ],
    sections: [
      { heading: "Wie ein PDS-Projekt aussieht", body: ["PDS-Projekte reichen von einer Handvoll Villen auf einem Küstengrundstück bis zu mehreren hundert Wohnungen in einer geplanten Anlage mit gemeinsamen Einrichtungen. Das Programm verpflichtet den Bauträger, einen Teil des Projekts sozialen Zwecken zu widmen und Gestaltungs- und Umweltstandards einzuhalten, und jedes Projekt wird vom EDB zugelassen, bevor Einheiten an Ausländer verkauft werden dürfen."] },
      { heading: "Ablauf des Kaufs", body: ["Reservierung mit Anzahlung, Antrag des Käufers beim EDB auf Genehmigung des Erwerbs, notarielle Kaufurkunde und Eintragung. Die meisten PDS-Einheiten werden vom Plan unter einem VEFA-Vertrag verkauft, mit Ratenzahlungen nach Baufortschritt und einer Fertigstellungsgarantie der Bank des Bauträgers. Wir vertreten den Käufer an der Seite des Notars, prüfen Stand des Bauträgers und Garantie und führen den EDB-Antrag."] },
      { heading: "Halten über Gesellschaft oder Trust", body: ["Eine PDS-Einheit kann über eine mauritische Domestic Company gehalten werden, deren Anteile in einem Trust liegen. Diese Struktur richten wir regelmäßig für Familien ein, die Immobilien lieber nicht persönlich halten. Die Aufenthaltsgenehmigung kann über die Struktur erlangt werden, vorbehaltlich der Bedingungen des EDB."] },
    ],
    related: [
      { label: "Kauf vom Plan und VEFA", href: "/property/off-plan-vefa" },
      { label: "Aufenthalt durch Immobilienerwerb", href: "/residency/property-acquisition" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Property Development Scheme Mauritius | start.mu",
    metaDescription: "Kaufen unter dem Property Development Scheme auf Mauritius: Berechtigung, die Aufenthaltsschwelle von 375.000 USD, der Kaufablauf, Verkäufe vom Plan unter VEFA und das Halten über Gesellschaft und Trust.",
    index: { audience: "Neue Villen, Reihenhäuser und Wohnungen in zugelassenen Projekten", threshold: "Kein Minimum; 375.000 USD für Aufenthalt", duration: "Aktuelles Programm für neue Projekte" },
  },
  "integrated-resort-scheme": {
    title: "Integrated Resort Scheme",
    summary: "Das ursprüngliche Luxus-Resort-Programm, heute auf dem Wiederverkaufsmarkt.",
    intro:
      "Das Integrated Resort Scheme war ab 2002 der erste Rahmen, der mauritische Wohnimmobilien ausländischen Käufern öffnete. IRS-Anlagen sind große Resortsiedlungen mit Golfplätzen, Marinas oder Hotels. Seit das Property Development Scheme es abgelöst hat, wurden keine neuen IRS-Projekte mehr zugelassen, doch Wiederverkaufseinheiten in etablierten IRS-Anlagen bleiben verfügbar und tragen denselben Aufenthaltsanspruch.",
    facts: [
      { label: "Status", value: "Für neue Projekte geschlossen. Wiederverkaufseinheiten in bestehenden Anlagen verfügbar" },
      { label: "Aufenthaltsgenehmigung", value: "Ab 375.000 USD, für Käufer, Ehepartner und unterhaltsberechtigte Kinder, solange die Immobilie gehalten wird" },
      { label: "Registrierungsgebühr", value: "5 % des Kaufpreises, vom Käufer zu tragen" },
      { label: "Anlagen", value: "Anahita, Tamarina, Villas Valriche, Azuri und andere" },
    ],
    sections: [
      { heading: "Warum Käufer weiterhin IRS betrachten", body: ["Die etablierten IRS-Anlagen sind gereift: Die Bepflanzung ist gewachsen, die Einrichtungen laufen, die Verwaltungsgesellschaften haben eine Bilanz, und der Mietmarkt für die Einheiten ist bekannt. Wer Gewissheit höher schätzt als den Preis eines Neubaus, bevorzugt sie oft. Gekauft wird eine fertige Immobilie, sodass das VEFA-Risiko des Kaufs vom Plan entfällt."] },
      { heading: "Ablauf des Kaufs", body: ["Dieselbe Abfolge wie bei jedem Programmkauf: Antrag beim EDB, notarielle Urkunde und Eintragung. Da der Verkäufer meist ein Privateigentümer und kein Bauträger ist, verlagert sich die Prüfung auf Titel, Anlagengebühren und Zustand der Immobilie, die wir vor der Urkunde mit dem Notar prüfen."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Real Estate Scheme", href: "/property/real-estate-scheme" },
      { label: "Aufenthalt durch Immobilienerwerb", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Integrated Resort Scheme Mauritius | start.mu",
    metaDescription: "Kauf einer Wiederverkaufseinheit in einer Integrated-Resort-Scheme-Anlage auf Mauritius: aktueller Status, Aufenthaltsanspruch ab 375.000 USD und Ablauf des Kaufs.",
    index: { audience: "Wiederverkaufseinheiten in etablierten Resortanlagen", threshold: "375.000 USD für Aufenthalt", duration: "Für neue Projekte geschlossen" },
  },
  "real-estate-scheme": {
    title: "Real Estate Scheme",
    summary: "Kleinere Projekte aus dem Rahmen vor 2015, im Wiederverkauf verfügbar.",
    intro:
      "Das Real Estate Scheme umfasste kleinere Projekte als das IRS auf Grundstücken unter zehn Hektar und war der Weg, über den viele Boutique-Villen- und Wohnungsprojekte vor 2015 zugelassen wurden. Wie das IRS ist es für neue Projekte geschlossen, bleibt aber für den Wiederverkauf relevant.",
    facts: [
      { label: "Status", value: "Für neue Projekte geschlossen. Wiederverkaufseinheiten verfügbar" },
      { label: "Aufenthaltsgenehmigung", value: "Ab 375.000 USD, für Käufer, Ehepartner und unterhaltsberechtigte Kinder, solange die Immobilie gehalten wird" },
      { label: "Registrierungsgebühr", value: "5 % des Kaufpreises, vom Käufer zu tragen" },
    ],
    sections: [
      { heading: "Für wen es passt", body: ["Ein Käufer, der eine fertige Immobilie in einer kleineren, ruhigeren Anlage sucht, oft in Küstennähe im Norden oder Westen, zu einem Preis unter den großen Resortanlagen. Viele RES-Projekte sind gut gelegen und gut gepflegt, und der Wiederverkaufsmarkt ist aktiv."] },
      { heading: "Ablauf des Kaufs", body: ["Antrag beim EDB, notarielle Urkunde und Eintragung, mit Prüfung von Titel, Gemeinschaftskosten und Zustand der Immobilie. Wir vertreten den Käufer durchgehend gemeinsam mit dem Notar."] },
    ],
    related: [
      { label: "Integrated Resort Scheme", href: "/property/integrated-resort-scheme" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
    ],
    metaTitle: "Real Estate Scheme Mauritius | start.mu",
    metaDescription: "Kauf einer Wiederverkaufseinheit in einem Real-Estate-Scheme-Projekt auf Mauritius: Status, Aufenthaltsanspruch und Kaufverfahren.",
    index: { audience: "Wiederverkaufseinheiten in kleineren Projekten", threshold: "375.000 USD für Aufenthalt", duration: "Für neue Projekte geschlossen" },
  },
  "smart-city-scheme": {
    title: "Smart City Scheme",
    summary: "Gemischt genutzte Projekte mit Wohnungen und, für Genehmigungsinhaber, erschlossenen Grundstücken.",
    intro:
      "Smart-City-Projekte sind geplante, gemischt genutzte Anlagen aus Büros, Wohnungen, Handel, Bildung und Freizeit. Ausländer dürfen dort Wohnungen kaufen, und Inhaber eines Occupation Permit, einer Aufenthaltsgenehmigung oder einer Permanent Residence Permit können zudem ein erschlossenes Grundstück zum Bauen erwerben.",
    facts: [
      { label: "Wohnungen", value: "Für Ausländer mit Genehmigung des EDB zugänglich. Aufenthaltsgenehmigung ab 375.000 USD" },
      { label: "Erschlossene Grundstücke", value: "Für Inhaber eines Occupation Permit, einer Aufenthaltsgenehmigung oder einer Permanent Residence Permit zum Wohnungsbau, mit Größenbegrenzung und Baufrist" },
      { label: "Registrierungsgebühr", value: "5 % des Kaufpreises, vom Käufer zu tragen" },
      { label: "Projekte", value: "Beau Plan, Moka, Mon Trésor, Uniciti, Cap Tamarin und andere" },
    ],
    sections: [
      { heading: "Für wen es passt", body: ["Familien, die nahe an Schulen, Büros und Versorgung leben wollen statt in einem Küstenresort, und Berufstätige, die ein städtisches Umfeld bevorzugen. Die Smart Cities im Zentrum und Norden sind zur etablierten Wahl für Familien mit schulpflichtigen Kindern geworden."] },
      { heading: "Bauen auf einem erschlossenen Grundstück", body: ["Ein Genehmigungsinhaber darf in einer Smart City ein Grundstück kaufen und darauf ein Haus bauen. Das Grundstück ist mit Straßen und Versorgung erschlossen, der Entwurf muss den Richtlinien der Anlage entsprechen, und der Bau muss innerhalb einer festgelegten Frist beginnen. Es ist der einzige Weg, auf dem die meisten Ausländer auf Mauritius ein Haus nach eigenem Entwurf bauen können, und wir betreuen Erwerb, EDB-Genehmigung und die Vermittlung von Architekten und Bauunternehmen."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Kauf vom Plan und VEFA", href: "/property/off-plan-vefa" },
      { label: "Aufenthalt durch Immobilienerwerb", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Smart City Scheme Mauritius | start.mu",
    metaDescription: "Kauf einer Wohnung oder eines erschlossenen Grundstücks in einer Smart City auf Mauritius: Berechtigung, Aufenthalt ab 375.000 USD, Bauen auf einem Grundstück als Genehmigungsinhaber und die wichtigsten Projekte.",
    index: { audience: "Städtisches Wohnen und Baugrundstücke für Genehmigungsinhaber", threshold: "375.000 USD für Aufenthalt", duration: "Aktuelles Programm" },
  },
  "invest-hotel-scheme": {
    title: "Invest Hotel Scheme",
    summary: "Eigentum an einem Hotelzimmer oder einer Hotelvilla, an den Betreiber zurückvermietet.",
    intro:
      "Das Invest Hotel Scheme erlaubt einem Ausländer, eine Einheit in einem zugelassenen Hotel zu kaufen, sie an den Betreiber zurückzuvermieten und Mieteinnahmen zu erzielen, mit einem begrenzten Recht, die Einheit jedes Jahr selbst zu nutzen. Es ist zuerst ein Anlageprodukt und erst danach ein Zuhause.",
    facts: [
      { label: "Kaufgegenstand", value: "Ein Zimmer, eine Suite oder eine Villa in einem unter dem Programm zugelassenen Hotel" },
      { label: "Rückvermietung", value: "Die Einheit wird an den Betreiber zurückvermietet, der sie als Teil des Hotels führt und dem Eigentümer einen Anteil am Umsatz zahlt" },
      { label: "Eigennutzung", value: "Bis zu 45 Tage im Jahr" },
      { label: "Aufenthaltsgenehmigung", value: "Ab 375.000 USD, für Käufer, Ehepartner und unterhaltsberechtigte Kinder, solange die Einheit gehalten wird" },
      { label: "Registrierungsgebühr", value: "5 % des Kaufpreises, vom Käufer zu tragen" },
    ],
    sections: [
      { heading: "Für wen es passt", body: ["Ein Anleger, der am mauritischen Gastgewerbe teilhaben möchte, mit einem professionellen Betreiber, der das Objekt führt, und der Mauritius einige Wochen im Jahr besucht, statt hier zu leben. Eine Einheit ab 375.000 USD trägt wie jeder Programmkauf eine Aufenthaltsgenehmigung, doch die Grenze von 45 Tagen Eigennutzung macht sie selten zum richtigen Weg für jemanden, der dauerhaft auf Mauritius leben will."] },
      { heading: "Was zu prüfen ist", body: ["Die Bilanz des Betreibers, die Bedingungen der Rückvermietung und der Umsatzbeteiligung, die Behandlung von Renovierungskosten und die Ausstiegsregelungen. Sie unterscheiden sich von Hotel zu Hotel erheblich. Wir prüfen sie mit dem Käufer, bevor eine Reservierung erfolgt."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Aufenthalt durch Immobilienerwerb", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Invest Hotel Scheme Mauritius | start.mu",
    metaDescription: "Das Invest Hotel Scheme auf Mauritius: Kauf einer Hoteleinheit mit Rückvermietung, 45 Tage Eigennutzung im Jahr, Aufenthaltsanspruch ab 375.000 USD und was vor dem Kauf zu prüfen ist.",
    index: { audience: "Anleger in Hoteleinheiten mit Rückvermietung", threshold: "375.000 USD für Aufenthalt", duration: "45 Tage Eigennutzung" },
  },
  "ground-plus-two": {
    title: "Wohnungen ab Erdgeschoss plus zwei",
    summary: "Wohnungen in gewöhnlichen Gebäuden, außerhalb der Programme, für Ausländer.",
    intro:
      "Ein Ausländer darf mit Genehmigung des EDB überall auf Mauritius eine Wohnung in einem Gebäude mit mindestens zwei Stockwerken über dem Erdgeschoss kaufen, außerhalb der zugelassenen Programme. Dieser Weg hat ausländischen Käufern den breiteren Wohnungsmarkt geöffnet, einschließlich neuer Projekte in Stadtzentren und an der Küste.",
    facts: [
      { label: "Gebäude", value: "Mindestens drei Geschosse: Erdgeschoss plus zwei" },
      { label: "Mindestkaufpreis", value: "6 Millionen MUR" },
      { label: "Aufenthaltsgenehmigung", value: "Ab 375.000 USD, für Käufer, Ehepartner und unterhaltsberechtigte Kinder, solange die Immobilie gehalten wird" },
      { label: "Registrierungsgebühr", value: "5 % des Kaufpreises, vom Käufer zu tragen" },
      { label: "Genehmigung", value: "EDB-Genehmigung vor der Urkunde erforderlich" },
    ],
    sections: [
      { heading: "Für wen es passt", body: ["Ein Käufer, der eine Wohnung statt einer Villa möchte, an einem Ort, den die Programme nicht abdecken, zu einem niedrigeren Einstiegspreis. Viele neuere Wohnungsprojekte in Grand Baie, Tamarin, Flic en Flac und den Städten des Hochplateaus werden auf diesem Weg an Ausländer verkauft."] },
      { heading: "Kauf vom Plan", body: ["Neue Wohngebäude werden häufig vom Plan unter VEFA-Verträgen verkauft. Es gelten dieselben Schutzmechanismen und Risiken wie unter den Programmen, und die Prüfung des Bauträgers und der Fertigstellungsgarantie ist bei kleineren Bauträgern eher noch wichtiger."] },
    ],
    related: [
      { label: "Kauf vom Plan und VEFA", href: "/property/off-plan-vefa" },
      { label: "Aufenthalt durch Immobilienerwerb", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Wohnungen ab Erdgeschoss plus zwei auf Mauritius | start.mu",
    metaDescription: "Kauf einer Wohnung auf Mauritius als Ausländer über den Weg Erdgeschoss plus zwei: Mindestpreis 6 Millionen MUR, Aufenthalt ab 375.000 USD, EDB-Genehmigung und Kauf vom Plan.",
    index: { audience: "Wohnungen außerhalb der Programme", threshold: "6 Millionen MUR; 375.000 USD für Aufenthalt", duration: "Gebäude mit drei oder mehr Geschossen" },
  },
  "off-plan-vefa": {
    title: "Kauf vom Plan und VEFA",
    summary: "Wie ein Verkauf im künftigen Fertigstellungszustand funktioniert und wo das Risiko liegt.",
    intro:
      "Die meisten neuen Wohnungen, die auf Mauritius an Ausländer verkauft werden, werden vom Plan verkauft, als vente en l'état futur d'achèvement, kurz VEFA. Der Käufer wird Eigentümer des Grundstücksanteils und des Gebäudes im Zuge des Baus, zahlt in Raten nach Baufortschritt und stützt sich auf eine finanzielle Fertigstellungsgarantie der Bank des Bauträgers.",
    facts: [
      { label: "Vertrag", value: "Eine vor dem Notar unterzeichnete VEFA-Urkunde, die das Eigentum mit fortschreitendem Bau schrittweise überträgt" },
      { label: "Zahlungen", value: "In Raten nach Bauabschnitten, typischerweise bei Unterzeichnung, Fundament, Rohbau, Dach und Übergabe, in der Urkunde festgelegten Anteilen" },
      { label: "Fertigstellungsgarantie", value: "Eine garantie financière d'achèvement einer Bank oder eines Versicherers, die die Fertigstellung des Gebäudes bei Ausfall des Bauträgers abdeckt" },
      { label: "Übergabe", value: "Ein vertraglicher Übergabetermin mit in der Urkunde festgelegten Verzugsstrafen" },
      { label: "Mängel", value: "Gesetzliche Gewährleistung nach der Übergabe, einschließlich der zehnjährigen Garantie für die Bausubstanz" },
    ],
    sections: [
      { heading: "Wo das Risiko liegt", body: [
        "Der Schutz bei einer VEFA liegt in der Fertigstellungsgarantie und in der Staffelung der Zahlungen. Wer dem Bau vorausgezahlt hat oder eine schwache Garantie hält, ist gefährdet, wenn der Bauträger stockt. Die Fragen vor der Unterzeichnung lauten daher: Wer hat die Garantie ausgestellt, zu welchen Bedingungen, und folgt der Zahlungsplan in der Urkunde tatsächlich dem Bau.",
        "Wir haben Käufer in verzögerten Projekten vertreten, und der Unterschied zwischen einer wiedergutzumachenden und einer schwierigen Lage wird fast immer bei der Unterzeichnung entschieden, nicht danach.",
      ] },
      { heading: "Was wir für einen Käufer tun", body: ["Prüfung des Bauträgers, der EDB-Zulassung des Projekts, der Garantie und ihres Ausstellers, des Zahlungsplans, der Übergabebedingungen und der Strafklauseln. Abstimmung mit dem Notar. Führung des EDB-Antrags. Und wenn ein Projekt in Schwierigkeiten gerät, die Arbeit im Rahmen der Garantie mit Notar und Bauträger im Auftrag des Käufers."] },
      { heading: "Kauf über eine Struktur", body: ["Eine VEFA-Einheit kann wie jede Programmimmobilie über eine mauritische Domestic Company in einem Trust gekauft werden. Die Struktur muss vor der Urkunde bestehen, und Bank, Notar und EDB müssen ihr jeweils zustimmen. Wir bereiten die Struktur parallel zur Reservierung vor, damit sich die Urkunde nicht verzögert."] },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Wohnungen ab Erdgeschoss plus zwei", href: "/property/ground-plus-two" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Kauf vom Plan und VEFA auf Mauritius | start.mu",
    metaDescription: "Wie Immobilienkäufe vom Plan auf Mauritius unter einer VEFA funktionieren: Ratenzahlungen, Fertigstellungsgarantie, Übergabebedingungen, wo das Risiko liegt und was start.mu für den Käufer tut.",
  },
};

export const faqsBusinessDe: Record<string, Faq[]> = {
  "domestic-company": [
    { q: "Brauche ich einen mauritischen Direktor?", a: "Mindestens ein Direktor muss seinen gewöhnlichen Aufenthalt auf Mauritius haben. Ist der Eigentümer noch nicht ansässig oder möchte er nicht selbst handeln, stellen wir einen ansässigen Direktor auf Grundlage einer schriftlichen Vereinbarung, die festlegt, was der Direktor tut und nicht tut." },
    { q: "Wie wird die Gesellschaft besteuert?", a: "Mit 15 % auf das steuerpflichtige Einkommen, mit Teilbefreiungen für bestimmte Einkunftsarten. Es gibt keine Kapitalertragsteuer, und Dividenden sind beim Gesellschafter einkommensteuerfrei, zählen bei ansässigen Privatpersonen aber auf die Schwelle von 12 Millionen MUR für die Fair Share Contribution." },
    { q: "Darf die Gesellschaft ein Zuhause unter den Immobilienprogrammen besitzen?", a: "Ja, mit Genehmigung des EDB, und ihre Anteile können in einem Trust gehalten werden. Diese Struktur richten wir regelmäßig für Familien ein, die Immobilien lieber nicht persönlich halten." },
    { q: "Wie lange dauert die Gründung?", a: "Wenige Arbeitstage ab vollständiger Akte. Das Bankkonto dauert länger und bestimmt den Zeitplan." },
  ],
  "global-business-company": [
    { q: "Passt eine Global Business Company für ein Geschäft, das auf Mauritius tätig ist?", a: "Nein. Sie ist für Geschäft gedacht, das überwiegend außerhalb von Mauritius betrieben wird. Ein Unternehmen, das den mauritischen Markt bedient, nutzt eine Domestic Company." },
    { q: "Was bedeutet Substanz in der Praxis?", a: "Zwei ansässige Direktoren, die tatsächlich leiten, Vorstandssitzungen auf Mauritius, ein Hauptbankkonto und geprüfte Abschlüsse hier sowie die wesentliche einkommenserzeugende Tätigkeit auf Mauritius mit angemessenem Aufwand und Personal. Davon hängen die steuerliche Ansässigkeit und damit der Wert der Struktur ab." },
    { q: "Kann eine Global Business Company mein Occupation Permit stützen?", a: "Sie kann einen Inhaber eines Professional Permit anstellen. Sie ist für sich genommen nicht das Vehikel für ein Investor Permit, das ein auf Mauritius umsatzerzeugendes Geschäft voraussetzt." },
  ],
  "authorised-company": [
    { q: "Was ist der Unterschied zur Global Business Company?", a: "Eine Authorised Company wird außerhalb von Mauritius geleitet und kontrolliert, gilt steuerlich als nicht ansässig, zahlt keine mauritische Steuer auf ausländische Einkünfte und hat keinen Abkommenszugang. Eine Global Business Company ist ansässig, zahlt effektiv 3 % auf qualifizierte ausländische Einkünfte und hat Abkommenszugang, um den Preis echter Substanz auf Mauritius." },
    { q: "Darf sie auf Mauritius Geschäfte machen?", a: "Nein. Sie darf keine Geschäfte mit Ansässigen auf Mauritius betreiben und kein Occupation Permit stützen." },
    { q: "Ändert sie meine steuerliche Stellung im Heimatland?", a: "Nein. Ihre eigene Ansässigkeit und die Regeln Ihres Heimatlands bleiben von der Wahl eines mauritischen Vehikels unberührt, und wir empfehlen Beratung im Heimatland, bevor Sie fortfahren." },
  ],
};
