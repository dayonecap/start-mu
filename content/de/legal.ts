import { site } from "@/content/site";
import { contactRoute, type LegalDoc } from "@/content/legal";

/**
 * German editions of the two legal pages. The English originals in content/legal.ts remain
 * the reference version, which the closing section of each document states expressly.
 * Counsel should review these alongside the English before they are relied on.
 */

const updated = "8. September 2026";
const anschrift = "Aventure du Sucre Street, Block 3, First Floor, The Strand, Beau Plan, Pamplemousses, Mauritius";

export const privacyPolicyDe: LegalDoc = {
  title: "Datenschutzerklärung",
  updated,
  intro: [
    `Diese Erklärung beschreibt, welche personenbezogenen Daten ${site.legalName}, tätig unter dem Namen start.mu, über diese Website und im Rahmen eines Mandats erhebt, warum wir sie speichern, an wen wir sie weitergeben und was Sie von uns im Umgang mit ihnen verlangen können.`,
    "Sie gilt für diese Website und für die Arbeit, die aus einer darüber gestellten Anfrage folgt. Sie ist zum Lesen geschrieben, nicht zum Durchstehen; sollte etwas unklar bleiben, schreiben Sie uns, und wir erläutern es.",
  ],
  sections: [
    {
      heading: "Wer wir sind",
      body: [
        `${site.legalName} ist beim Registrar of Companies auf Mauritius als Company Secretary und Corporate Service Provider registriert und tritt unter dem Namen start.mu auf. Wir sind für die in dieser Erklärung beschriebenen personenbezogenen Daten verantwortlich.`,
        `Unsere Hauptanschrift lautet ${anschrift}. Allgemeine Anfragen erreichen uns unter ${site.email} oder über das Formular unter ${contactRoute}. Fragen zu personenbezogenen Daten sowie Anträge auf Ausübung der unten genannten Rechte erreichen unseren Datenschutzbeauftragten unter derselben Anschrift; kennzeichnen Sie sie zu seinen Händen, und sie werden weitergeleitet.`,
      ],
    },
    {
      heading: "Was wir über diese Website erheben",
      body: [
        "Das Kontaktformular fragt nach Ihrem Namen, Ihrer E-Mail-Adresse, dem Thema, über das Sie sprechen möchten, und Ihrer Nachricht. Nichts anderes auf dieser Website fragt Sie nach personenbezogenen Daten, und das Formular enthält keine versteckten Felder außer einer einzigen Spam-Falle, deren Inhalt verworfen wird.",
        "Unser Hoster zeichnet beim Abruf einer Seite die üblichen Serverprotokolle auf, darunter die IP-Adresse, die Seite und den Zeitpunkt. Diese Protokolle dienen dem Betrieb und der Sicherheit der Website.",
      ],
    },
    {
      heading: "Was wir im Rahmen eines Mandats erheben",
      body: [
        "Wird aus einer Anfrage ein Mandat, verlangen die von uns vorbereiteten Anträge diejenigen Unterlagen, die Behörden, Banken und Aufsichtsbehörden vorgeben. Je nach gewählter Möglichkeit kann dies umfassen:",
      ],
      list: [
        "Name, Geburtsdatum und Staatsangehörigkeit",
        "Angaben zu Reisepass und Personalausweis",
        "Wohnanschrift und deren Nachweis",
        "Familienstand und Familienzusammensetzung, soweit Angehörige einbezogen werden",
        "Nachweise über Einkünfte, Vermögen oder Investitionen",
        "Beruflicher Werdegang, Qualifikationen und Referenzen",
        "Angaben, die für Hintergrundprüfungen und die Herkunftsprüfung der Mittel erforderlich sind",
      ],
    },
    {
      heading: "Wozu wir sie verwenden und auf welcher Grundlage",
      body: [
        "Die über das Formular übermittelten Angaben verwenden wir, um Ihre Anfrage zu beantworten und, wenn Sie uns darum bitten, um zu beurteilen, welche Möglichkeit zu Ihnen passt. Die im Rahmen eines Mandats erhobenen Angaben verwenden wir, um Anträge vorzubereiten und einzureichen, mit den beteiligten Behörden, Banken und Berufsträgern zu korrespondieren und die Aufzeichnungen zu führen, die unsere eigenen Aufsichtsbehörden verlangen.",
        "Soweit das Recht eines europäischen Staates auf Sie anwendbar ist, sind unsere Rechtsgrundlagen die folgenden: die Beantwortung Ihrer Anfrage und die Durchführung unseres Mandats sind zur Erfüllung eines Vertrags oder für vorvertragliche Maßnahmen auf Ihre Anfrage hin erforderlich; Identifizierungs-, Prüfungs- und Aufbewahrungspflichten sind zur Erfüllung rechtlicher Verpflichtungen erforderlich, namentlich nach dem Geldwäscherecht; die Aufbewahrung eigener Aufzeichnungen über erteilte Beratung beruht auf unserem berechtigten Interesse an der Verteidigung unserer Rechtsposition; und Werbung, sollten Sie je welche von uns erhalten, beruht auf Ihrer Einwilligung.",
      ],
    },
    {
      heading: "Cookies, Analyse und Anfragen an Dritte",
      body: [
        "Diese Website setzt keine Cookies, speichert nichts in Ihrem Browser und enthält keinerlei Analyse, Werbung oder Tracking. Es gibt kein Einwilligungsbanner, weil es nichts gibt, worin einzuwilligen wäre.",
        "Sie richtet auch keine Anfragen an Dritte. Die Schriftarten werden von dieser Domain ausgeliefert und nicht von einem Schriftendienst, und kein Skript, Bild oder eingebetteter Inhalt wird von einem Dritten geladen. Der Aufruf einer Seite teilt niemandem außer uns und unserem Hoster mit, dass Sie hier waren.",
      ],
    },
    {
      heading: "Wer sie sonst zu sehen bekommt",
      body: [
        "Wir verkaufen keine personenbezogenen Daten und geben sie nicht für die Werbung Dritter weiter.",
        "Über das Kontaktformular gesendete Nachrichten werden von Resend, einem in unserem Auftrag tätigen E-Mail-Zustelldienst, an unser Postfach zugestellt. Diese Website wird von Vercel gehostet, das die oben beschriebenen Serverprotokolle verarbeitet. Beide sind vertraglich gebundene Auftragsverarbeiter, und keiner von beiden nutzt die Daten für eigene Zwecke.",
        "Im Rahmen eines Mandats geben wir das Erforderliche weiter an die Behörden, die über Ihren Antrag entscheiden, in erster Linie das Economic Development Board und das Passport and Immigration Office, an Banken, bei denen ein Konto eröffnet wird, sowie an die mit Ihrer Sache befassten Rechtsanwälte, Notare und Buchprüfer. Wir legen Daten offen, soweit ein Gesetz, eine Verordnung, eine gerichtliche Anordnung oder eine aufsichtsrechtliche Vorgabe dies verlangt, namentlich zur Identitätsprüfung, zur Hintergrundprüfung und zur Verhinderung von Geldwäsche und Terrorismusfinanzierung.",
      ],
    },
    {
      heading: "Daten, die Mauritius verlassen",
      body: [
        "Wir sind ein mauritisches Unternehmen, und unsere Auftragsverarbeiter sind außerhalb von Mauritius ansässig. Werden Daten aus Mauritius oder aus dem Europäischen Wirtschaftsraum übermittelt, geschieht dies unter den Garantien, die das anwendbare Recht verlangt; in der Praxis bedeutet das vertragliche Schutzvorkehrungen mit dem Empfänger und eine Übermittlung, die auf das für den Zweck Erforderliche beschränkt bleibt.",
      ],
    },
    {
      heading: "Wie lange wir sie aufbewahren",
      body: [
        "Eine Anfrage, aus der kein Mandat wird, bewahren wir für die Dauer des Schriftwechsels und einen angemessenen Zeitraum danach auf und löschen sie anschließend.",
        "Mandatsunterlagen bewahren wir so lange auf, wie unsere aufsichtsrechtlichen Pflichten es verlangen; für geldwäscherechtliche Unterlagen bestimmt sich diese Frist nach mauritischem Recht und läuft mehrere Jahre über das Ende der Geschäftsbeziehung hinaus. Läuft eine Aufbewahrungsfrist ab und besteht kein rechtlicher oder geschäftlicher Zweck mehr, vernichten oder anonymisieren wir die Daten auf sichere Weise.",
      ],
    },
    {
      heading: "Wie wir sie schützen",
      body: [
        "Wir treffen technische und organisatorische Maßnahmen, die der Sensibilität der von uns gehaltenen Daten entsprechen, und der Zugriff im Unternehmen ist auf diejenigen beschränkt, die ihn für Ihre Sache benötigen. Keine Übertragung über das Internet ist vollkommen sicher, E-Mail im Besonderen nicht; ist ein Dokument sensibel, vereinbaren wir mit Ihnen einen sichereren Übermittlungsweg.",
      ],
    },
    {
      heading: "Ihre Rechte",
      body: [
        "Sie können von uns eine Kopie der über Sie gespeicherten personenbezogenen Daten verlangen, deren Berichtigung, wenn sie unrichtig oder unvollständig sind, deren Löschung, die Einschränkung der Verarbeitung oder Widerspruch dagegen, die Herausgabe in einem übertragbaren Format sowie den Widerruf einer erteilten Einwilligung. Wir prüfen zuvor Ihre Identität und antworten innerhalb der Frist, die das anwendbare Recht vorsieht.",
        "Diese Rechte gelten nicht uneingeschränkt. Verlangt ein Gesetz von uns, eine Unterlage aufzubewahren, bewahren wir sie auf und nennen Ihnen den Grund. Es fallen keine Kosten an; ist ein Antrag offenkundig unbegründet, wiederholt oder exzessiv, können wir ein angemessenes Entgelt verlangen oder ihn ablehnen, und wir legen unsere Gründe dar.",
        `Zur Ausübung dieser Rechte schreiben Sie an ${site.email} zu Händen des Datenschutzbeauftragten, nutzen Sie das Formular unter ${contactRoute} oder schreiben Sie uns an die oben genannte Hauptanschrift. Sind Sie mit unserer Antwort nicht zufrieden, können Sie sich an das Data Protection Office auf Mauritius wenden und, wenn Sie in Europa sind, an die Aufsichtsbehörde Ihres Wohn- oder Arbeitsorts.`,
      ],
    },
    {
      heading: "Werbung",
      body: [
        "Gelegentlich senden wir Ihnen Beiträge oder Einladungen, von denen wir annehmen, dass sie Sie interessieren, aber nur, wenn Sie darum gebeten haben, von uns zu hören. Jede solche Nachricht enthält einen Weg, sie abzubestellen, und eine Abbestellung wirkt sich nicht auf die Arbeit aus, die wir für Sie erbringen.",
      ],
    },
    {
      heading: "Änderungen dieser Erklärung",
      body: [
        `Wir aktualisieren diese Erklärung von Zeit zu Zeit und veröffentlichen die geltende Fassung hier mit dem Datum ihres Inkrafttretens. Betrifft eine Änderung Ihre Rechte wesentlich, gilt sie nur für Daten, die nach der Änderung verarbeitet werden. Diese Fassung datiert vom ${updated}.`,
      ],
    },
    {
      heading: "Maßgebliche Fassung",
      body: [
        `Dieses Dokument ist eine Übersetzung der auf dieser Website veröffentlichten englischen Fassung. Bei Abweichungen zwischen beiden ist die englische Fassung maßgeblich. Sie ist unter ${site.url}/privacy-policy abrufbar.`,
      ],
    },
  ],
};

export const termsOfUseDe: LegalDoc = {
  title: "Nutzungsbedingungen",
  updated,
  intro: [
    `Diese Website wird von ${site.legalName}, tätig unter dem Namen start.mu, veröffentlicht. Mit ihrer Nutzung erkennen Sie diese Bedingungen an. Wenn Sie sie nicht anerkennen, nutzen Sie die Website bitte nicht.`,
  ],
  sections: [
    {
      heading: "Was diese Website ist",
      body: [
        "Die Inhalte hier sind allgemeine Informationen über Aufenthalt, Unternehmensgründung und Immobilienerwerb auf Mauritius. Sie sind sorgfältig verfasst und werden regelmäßig überprüft, bleiben aber allgemein: Sie berücksichtigen Ihre persönlichen Verhältnisse nicht und sind keine Rechts-, Steuer-, Aufenthalts-, Anlage- oder Finanzberatung.",
      ],
    },
    {
      heading: "Kein Mandatsverhältnis",
      body: [
        "Das Lesen dieser Website, das Absenden einer Anfrage darüber oder der Erhalt einer Antwort begründen kein Mandatsverhältnis. Ein Mandat beginnt erst, wenn wir Umfang und Bedingungen schriftlich mit Ihnen vereinbart haben.",
        "Was Mandanten uns anvertrauen, behandeln wir vertraulich, nach unseren Mandatsbedingungen und unseren eigenen berufs- und aufsichtsrechtlichen Pflichten. Vertraulichkeit ist nicht dasselbe wie das anwaltliche Zeugnisverweigerungsrecht. Wir sind ein Unternehmensdienstleister und keine Rechtsanwaltskanzlei; die Kommunikation mit uns genießt nicht den Schutz, den die Kommunikation mit einem Rechtsanwalt genießen kann. Kommt es für Ihre Lage auf diesen Unterschied an, ist das ein Grund, einen Rechtsanwalt einzuschalten, und wir sagen Ihnen das.",
      ],
    },
    {
      heading: "Zahlen, Schwellen und Fristen",
      body: [
        "Voraussetzungen, Investitionsschwellen, amtliche Gebühren und Bearbeitungszeiten werden von den mauritischen Behörden festgelegt und ändern sich von Zeit zu Zeit. Die Zahlen auf dieser Website sind Richtwerte, nach bestem Wissen zum angegebenen Datum zutreffend und werden vor der Vorbereitung eines Antrags an den geltenden Richtlinien der Behörden überprüft. Treffen Sie keine Entscheidung allein aufgrund einer hier gelesenen Zahl, ohne uns um Bestätigung zu bitten.",
      ],
    },
    {
      heading: "Keine Erfolgsgarantie",
      body: [
        "Entscheidungen über Genehmigungen, Aufenthalt, Bankkonten, Lizenzen und aufsichtsrechtliche Zulassungen liegen bei den zuständigen Behörden und Instituten, nicht bei uns. Wir garantieren kein Ergebnis, und nichts auf dieser Website ist als Zusage eines Ergebnisses zu verstehen.",
      ],
    },
    {
      heading: "Kein Angebot und keine Aufforderung",
      body: [
        "Nichts auf dieser Website ist ein Angebot oder eine Aufforderung zum Kauf oder Verkauf eines Wertpapiers oder Anlageprodukts, und die beschriebenen Leistungen sind nicht in jeder Rechtsordnung verfügbar. Die Website richtet sich an niemanden in einer Rechtsordnung, in der ihre Veröffentlichung gegen örtliches Recht verstieße.",
      ],
    },
    {
      heading: "Unsere Inhalte und was Sie damit tun dürfen",
      body: [
        "Texte, Gestaltung, Aufbau und Kennzeichen dieser Website gehören uns oder werden mit Erlaubnis genutzt. Sie dürfen sie gern lesen, ausdrucken und mit Quellenangabe zitieren. Ohne unsere schriftliche Erlaubnis dürfen Sie sie nicht erneut veröffentlichen, weiterverbreiten, verändern, umbenennen oder Bearbeitungen davon erstellen, und Urheberrechts- und Schutzvermerke müssen unverändert bleiben.",
        "Sie dürfen nicht versuchen, sich unbefugten Zugang zur Website oder zu einem verbundenen System zu verschaffen, ihre Sicherheit zu sondieren oder zu testen, ihren Betrieb oder die Nutzung durch andere zu stören, die Herkunft dessen zu verschleiern, was Sie darüber senden, oder sie zu einem rechtswidrigen Zweck zu nutzen.",
      ],
    },
    {
      heading: "Verfügbarkeit",
      body: [
        "Wir bemühen uns, die Website richtig, aktuell und erreichbar zu halten, gewährleisten aber nicht, dass sie ununterbrochen, fehlerfrei oder frei von Schadelementen ist, und wir können Teile davon ohne Ankündigung ändern oder entfernen. Ihr Vertrauen auf die Inhalte erfolgt auf eigenes Risiko.",
      ],
    },
    {
      heading: "Haftungsbeschränkung",
      body: [
        "Soweit gesetzlich zulässig, haften wir nicht für Schäden aus der Nutzung dieser Website oder aus dem Vertrauen auf ihre Inhalte, einschließlich entgangenen Gewinns, entgangener Gelegenheiten sowie mittelbarer Schäden und Folgeschäden. Keine Bestimmung dieser Bedingungen beschränkt eine Haftung, die nicht wirksam beschränkt werden kann, namentlich die Haftung für Arglist sowie für Tod oder Körperverletzung infolge von Fahrlässigkeit.",
      ],
    },
    {
      heading: "Links auf andere Websites",
      body: [
        "Wenn wir auf die Website einer anderen Organisation verweisen, geschieht das aus Gründen der Zweckmäßigkeit und ist keine Empfehlung. Wir haben keine Kontrolle über diese Websites und sind weder für deren Inhalte und Richtigkeit noch für deren Umgang mit Ihren personenbezogenen Daten verantwortlich.",
      ],
    },
    {
      heading: "Datenschutz",
      body: [
        "Wie wir personenbezogene Daten erheben und verwenden, ist in unserer Datenschutzerklärung dargestellt, die Bestandteil dieser Bedingungen ist.",
      ],
    },
    {
      heading: "Änderungen dieser Bedingungen",
      body: [
        `Wir können diese Bedingungen jederzeit ändern, indem wir die geänderte Fassung hier veröffentlichen. Die fortgesetzte Nutzung der Website nach Veröffentlichung einer Änderung gilt als deren Annahme. Diese Fassung datiert vom ${updated}.`,
      ],
    },
    {
      heading: "Anwendbares Recht",
      body: [
        "Diese Bedingungen unterliegen mauritischem Recht, und für Streitigkeiten aus ihnen oder aus Ihrer Nutzung dieser Website sind ausschließlich die Gerichte von Mauritius zuständig. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen in Kraft, und die unwirksame Bestimmung gilt als durch eine wirksame ersetzt, die ihrem ursprünglichen Zweck entspricht.",
      ],
    },
    {
      heading: "Kontakt",
      body: [`Fragen zu diesen Bedingungen erreichen uns unter ${site.email}.`],
    },
    {
      heading: "Maßgebliche Fassung",
      body: [
        `Dieses Dokument ist eine Übersetzung der auf dieser Website veröffentlichten englischen Fassung. Bei Abweichungen zwischen beiden ist die englische Fassung maßgeblich. Sie ist unter ${site.url}/terms abrufbar.`,
      ],
    },
  ],
};
