import { site } from "@/content/site";
import { contactRoute, type LegalDoc } from "@/content/legal";

/**
 * French editions of the two legal pages. The English originals in content/legal.ts remain
 * the reference version, which the closing section of each document states expressly.
 * Counsel should review these alongside the English before they are relied on.
 */

const updated = "8 septembre 2026";
const adresse = "Aventure du Sucre Street, Block 3, First Floor, The Strand, Beau Plan, Pamplemousses, Maurice";

/** The clause that resolves any divergence between the language editions. */
const prevalence = {
  heading: "Version de référence",
  body: [
    `Ce document est une traduction de la version anglaise publiée sur ce site. En cas de divergence entre les deux, la version anglaise fait foi. Elle est consultable à ${site.url}/privacy-policy.`,
  ],
};

export const privacyPolicyFr: LegalDoc = {
  title: "Politique de confidentialité",
  updated,
  intro: [
    `La présente politique explique quelles données personnelles ${site.legalName}, exerçant sous le nom start.mu, recueille par l'intermédiaire de ce site et dans le cadre d'une mission, pourquoi nous les conservons, avec qui nous les partageons et ce que vous pouvez nous demander d'en faire.`,
    "Elle porte sur ce site et sur le travail qui découle d'une demande formulée par son intermédiaire. Elle est écrite pour être lue, non pour être subie ; si un point vous paraît obscur, écrivez-nous et nous vous l'expliquerons.",
  ],
  sections: [
    {
      heading: "Qui nous sommes",
      body: [
        `${site.legalName} est enregistrée comme Company Secretary et Corporate Service Provider auprès du Registrar of Companies de Maurice et exerce sous le nom start.mu. Nous sommes le responsable du traitement des données personnelles décrites dans la présente politique.`,
        `Notre adresse principale est ${adresse}. Les demandes générales nous parviennent à ${site.email} ou via le formulaire disponible à ${contactRoute}. Les questions relatives aux données personnelles, ainsi que les demandes d'exercice des droits exposés ci-dessous, parviennent à notre Délégué à la protection des données à la même adresse ; indiquez qu'elles lui sont destinées et elles lui seront transmises.`,
      ],
    },
    {
      heading: "Ce que nous recueillons via ce site",
      body: [
        "Le formulaire de contact demande votre nom, votre adresse e-mail, le sujet que vous souhaitez aborder et votre message. Rien d'autre sur ce site ne vous demande de données personnelles, et le formulaire ne comporte aucun champ caché, hormis un unique piège anti-spam dont le contenu est supprimé.",
        "Notre hébergeur enregistre les journaux de serveur habituels lors de l'appel d'une page, dont l'adresse IP, la page consultée et l'heure. Ces journaux servent à assurer le fonctionnement et la sécurité du site.",
      ],
    },
    {
      heading: "Ce que nous recueillons pendant une mission",
      body: [
        "Lorsqu'une demande devient une mission, les dossiers que nous préparons exigent les documents que les autorités, les banques et les régulateurs imposent. Selon la voie retenue, cela peut comprendre :",
      ],
      list: [
        "Vos nom, date de naissance et nationalité",
        "Les données de votre passeport et de votre carte nationale d'identité",
        "Votre adresse de résidence et son justificatif",
        "Votre situation matrimoniale et la composition de votre famille, lorsque des personnes à charge sont incluses",
        "Les justificatifs de revenus, de fonds ou d'investissement",
        "Votre parcours professionnel, vos qualifications et vos références",
        "Les informations nécessaires aux vérifications d'antécédents et au contrôle de l'origine des fonds",
      ],
    },
    {
      heading: "Pourquoi nous les utilisons, et sur quel fondement",
      body: [
        "Nous utilisons les informations que vous transmettez par le formulaire pour répondre à votre demande et, si vous nous le demandez, pour déterminer quelle voie vous convient. Nous utilisons les informations recueillies pendant une mission pour préparer et déposer les dossiers, correspondre avec les autorités, les banques et les professionnels concernés, et tenir les registres qu'exigent nos propres régulateurs.",
        "Lorsque le droit d'un pays européen vous est applicable, nos bases légales sont les suivantes : répondre à votre demande et exécuter notre mission sont nécessaires à un contrat ou à des mesures prises à votre demande ; les obligations d'identification, de vérification et de conservation sont nécessaires au respect d'obligations légales, notamment en matière de lutte contre le blanchiment ; la conservation de nos propres archives des conseils donnés relève de notre intérêt légitime à défendre notre position ; et la prospection, si vous en recevez un jour de notre part, repose sur votre consentement.",
      ],
    },
    {
      heading: "Cookies, mesure d'audience et requêtes vers des tiers",
      body: [
        "Ce site ne dépose aucun cookie, n'enregistre rien dans votre navigateur et ne comporte aucun outil de mesure d'audience, de publicité ou de suivi. Il n'y a pas de bandeau de consentement parce qu'il n'y a rien à consentir.",
        "Il n'adresse pas davantage de requêtes à des tiers. Les polices de caractères sont servies depuis ce domaine et non depuis un service de polices, et aucun script, aucune image et aucun contenu intégré n'est chargé depuis un tiers. Ouvrir une page n'apprend votre visite à personne d'autre qu'à nous et à notre hébergeur.",
      ],
    },
    {
      heading: "Qui d'autre y a accès",
      body: [
        "Nous ne vendons pas de données personnelles et nous n'en partageons pas à des fins de prospection pour le compte de tiers.",
        "Les messages envoyés via le formulaire de contact sont acheminés vers notre boîte aux lettres par Resend, un service d'envoi d'e-mails agissant sur nos instructions. Ce site est hébergé par Vercel, qui traite les journaux de serveur décrits ci-dessus. Tous deux agissent en qualité de sous-traitants, sous contrat, et aucun n'utilise ces informations à ses propres fins.",
        "Dans le cadre d'une mission, nous partageons ce qui est nécessaire avec les autorités qui statuent sur votre dossier, principalement l'Economic Development Board et le Passport and Immigration Office, avec les banques lorsqu'un compte est ouvert, et avec les avocats, notaires et experts-comptables intervenant sur votre dossier. Nous communiquons des informations lorsqu'une loi, un règlement, une décision de justice ou une instruction réglementaire l'exige, notamment aux fins de vérification d'identité, de contrôle des antécédents et de prévention du blanchiment de capitaux et du financement du terrorisme.",
      ],
    },
    {
      heading: "Les informations qui quittent Maurice",
      body: [
        "Nous sommes un cabinet mauricien et nos sous-traitants sont établis hors de Maurice. Lorsque des informations sont transférées hors de Maurice, ou hors de l'Espace économique européen, nous procédons sous les garanties qu'impose le droit applicable, ce qui signifie en pratique des protections contractuelles avec le destinataire et des transferts limités à ce que la finalité exige.",
      ],
    },
    {
      heading: "Combien de temps nous les conservons",
      body: [
        "Une demande qui ne débouche pas sur une mission est conservée pendant la durée de nos échanges et un délai raisonnable ensuite, puis supprimée.",
        "Les dossiers de mission sont conservés pendant la durée qu'imposent nos obligations réglementaires ; pour les documents relatifs à la lutte contre le blanchiment, cette durée est fixée par le droit mauricien et court plusieurs années après la fin de la relation. À l'expiration d'une durée de conservation, et lorsqu'aucune finalité légale ou professionnelle ne subsiste, nous détruisons ou anonymisons les informations de manière sécurisée.",
      ],
    },
    {
      heading: "Comment nous les protégeons",
      body: [
        "Nous appliquons des mesures techniques et organisationnelles adaptées à la sensibilité de ce que nous détenons, et l'accès au sein du cabinet est limité aux personnes qui en ont besoin pour votre dossier. Aucune transmission par internet n'est parfaitement sûre, et l'e-mail en particulier ne l'est pas ; lorsqu'un document est sensible, nous conviendrons avec vous d'un moyen d'envoi plus sûr.",
      ],
    },
    {
      heading: "Vos droits",
      body: [
        "Vous pouvez nous demander une copie des données personnelles que nous détenons à votre sujet, leur rectification si elles sont inexactes ou incomplètes, leur effacement, la limitation du traitement ou son opposition, leur communication dans un format portable, et retirer tout consentement que vous avez donné. Nous vérifierons votre identité avant d'agir et nous répondrons dans le délai que prévoit le droit applicable.",
        "Ces droits ne sont pas absolus. Lorsqu'une loi nous impose de conserver un document, nous le conserverons et vous en expliquerons la raison. Aucun frais n'est demandé ; si une demande est manifestement infondée, répétitive ou excessive, nous pouvons facturer des frais raisonnables ou la refuser, en motivant notre décision.",
        `Pour exercer l'un de ces droits, écrivez à ${site.email} à l'attention du Délégué à la protection des données, utilisez le formulaire disponible à ${contactRoute}, ou écrivez-nous à notre adresse principale ci-dessus. Si notre réponse ne vous satisfait pas, vous pouvez saisir le Data Protection Office de Maurice et, si vous résidez en Europe, l'autorité de contrôle du lieu où vous vivez ou travaillez.`,
      ],
    },
    {
      heading: "Prospection",
      body: [
        "Il nous arrive de vous adresser des publications ou des invitations susceptibles de vous intéresser, mais uniquement si vous avez demandé à recevoir de nos nouvelles. Chacun de ces messages comporte un moyen d'y mettre fin, et y mettre fin est sans effet sur le travail que nous accomplissons pour vous.",
      ],
    },
    {
      heading: "Modifications de la présente politique",
      body: [
        `Nous actualisons cette politique de temps à autre et publions ici la version en vigueur avec sa date d'effet. Lorsqu'une modification affecte substantiellement vos droits, elle ne s'applique qu'aux informations traitées après cette modification. La présente version est datée du ${updated}.`,
      ],
    },
    prevalence,
  ],
};

export const termsOfUseFr: LegalDoc = {
  title: "Conditions d'utilisation",
  updated,
  intro: [
    `Ce site est publié par ${site.legalName}, exerçant sous le nom start.mu. En l'utilisant, vous acceptez les présentes conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser ce site.`,
  ],
  sections: [
    {
      heading: "Ce qu'est ce site",
      body: [
        "Le contenu publié ici constitue une information générale sur la résidence, la création de sociétés et l'acquisition immobilière à Maurice. Il est rédigé avec soin et revu régulièrement, mais il demeure général : il ne tient pas compte de votre situation et ne constitue ni un conseil juridique, fiscal, migratoire, en investissement ou financier.",
      ],
    },
    {
      heading: "Absence de relation client",
      body: [
        "La lecture de ce site, l'envoi d'une demande par son intermédiaire ou la réception d'une réponse ne créent pas de relation client. Une mission ne commence que lorsque nous en avons convenu par écrit avec vous l'étendue et les conditions.",
        "Nous traitons comme confidentiel ce que nos clients nous confient, au titre de nos conditions de mission et de nos propres obligations professionnelles et réglementaires. La confidentialité n'est pas le secret professionnel de l'avocat. Nous sommes un prestataire de services aux sociétés, non un cabinet d'avocats, et les échanges avec nous ne bénéficient pas de la protection dont peuvent bénéficier les échanges avec un avocat. Lorsque cette distinction importe pour votre situation, c'est une raison de consulter un avocat, et nous vous le dirons.",
      ],
    },
    {
      heading: "Chiffres, seuils et délais",
      body: [
        "Les critères d'éligibilité, les seuils d'investissement, les frais officiels et les délais de traitement sont fixés par les autorités mauriciennes et évoluent. Les chiffres figurant sur ce site sont indicatifs, exacts à notre connaissance à la date indiquée, et vérifiés au regard des directives en vigueur des autorités avant la préparation de tout dossier. Ne vous engagez pas sur la foi d'un chiffre lu ici sans nous demander de le confirmer.",
      ],
    },
    {
      heading: "Aucune garantie de résultat",
      body: [
        "Les décisions relatives aux permis, à la résidence, aux comptes bancaires, aux licences et aux agréments réglementaires appartiennent aux autorités et aux institutions compétentes, non à nous. Nous ne garantissons aucun résultat, et rien sur ce site ne doit être lu comme la promesse d'un résultat.",
      ],
    },
    {
      heading: "Absence d'offre ou de sollicitation",
      body: [
        "Rien sur ce site ne constitue une offre ou une sollicitation d'achat ou de vente d'un titre ou d'un produit d'investissement, et les services décrits ne sont pas disponibles dans toutes les juridictions. Ce site ne s'adresse à personne dans une juridiction où sa publication serait contraire au droit local.",
      ],
    },
    {
      heading: "Notre contenu et ce que vous pouvez en faire",
      body: [
        "Les textes, la conception, la structure et les marques figurant sur ce site nous appartiennent ou sont utilisés avec autorisation. Vous êtes libre de les lire, de les imprimer et de les citer en indiquant la source. Vous ne pouvez pas les republier, les rediffuser, les modifier, les rebaptiser ni en tirer des œuvres dérivées sans notre autorisation écrite, et vous devez laisser intactes les mentions de droits d'auteur et de propriété.",
        "Vous ne devez pas tenter d'accéder sans autorisation au site ou à un système connexe, sonder ou tester sa sécurité, perturber son fonctionnement ou l'usage qu'en fait un autre lecteur, dissimuler l'origine de ce que vous y transmettez, ni l'utiliser à une fin illicite.",
      ],
    },
    {
      heading: "Disponibilité",
      body: [
        "Nous nous efforçons de maintenir le site exact, à jour et accessible, mais nous ne garantissons pas qu'il sera ininterrompu, exempt d'erreurs ou de tout élément nuisible, et nous pouvons en modifier ou en retirer toute partie sans préavis. Vous vous fiez au contenu à vos propres risques.",
      ],
    },
    {
      heading: "Limitation de responsabilité",
      body: [
        "Dans toute la mesure permise par la loi, nous ne sommes pas responsables des préjudices résultant de votre utilisation de ce site ou de la confiance accordée à son contenu, y compris la perte de profit, la perte d'opportunité ou tout préjudice indirect ou consécutif. Rien dans les présentes conditions ne limite une responsabilité qui ne peut légalement l'être, notamment en cas de fraude ou de décès ou dommage corporel causé par une négligence.",
      ],
    },
    {
      heading: "Liens vers d'autres sites",
      body: [
        "Lorsque nous renvoyons vers le site d'une autre organisation, c'est par commodité et non à titre de recommandation. Nous ne contrôlons pas ces sites et ne répondons ni de leur contenu, ni de son exactitude, ni de la manière dont ils traitent vos données personnelles.",
      ],
    },
    {
      heading: "Confidentialité",
      body: [
        "La manière dont nous recueillons et utilisons les données personnelles est exposée dans notre politique de confidentialité, qui fait partie des présentes conditions.",
      ],
    },
    {
      heading: "Modifications des présentes conditions",
      body: [
        `Nous pouvons réviser les présentes conditions à tout moment en publiant ici la version révisée. La poursuite de l'utilisation du site après la publication d'une révision vaut acceptation de celle-ci. La présente version est datée du ${updated}.`,
      ],
    },
    {
      heading: "Droit applicable",
      body: [
        "Les présentes conditions sont régies par le droit mauricien, et tout litige né de celles-ci ou de votre utilisation de ce site relève de la compétence exclusive des tribunaux de Maurice. Si une stipulation était jugée inapplicable, les autres demeureraient en vigueur et la stipulation inapplicable serait réputée remplacée par une stipulation valable reflétant son intention initiale.",
      ],
    },
    {
      heading: "Contact",
      body: [`Les questions relatives aux présentes conditions nous parviennent à ${site.email}.`],
    },
    {
      heading: "Version de référence",
      body: [
        `Ce document est une traduction de la version anglaise publiée sur ce site. En cas de divergence entre les deux, la version anglaise fait foi. Elle est consultable à ${site.url}/terms.`,
      ],
    },
  ],
};
