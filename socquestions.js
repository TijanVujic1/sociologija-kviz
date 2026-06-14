// questions.js
// 1. DEL – Osnove sociologije, kultura, socializacija, norme, vrednote

const QUESTIONS = [
  // =========================
  // OSNOVE SOCIOLOGIJE
  // =========================

  {
    id: 1,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj je sociologija?",
    options: [
      "Veda o naravnih pojavih.",
      "Veda o človekovem telesu.",
      "Veda, ki sistematično preučuje družbo in družbeno življenje.",
      "Veda o gospodarstvu.",
    ],
    answer: 2,
    explanation:
      "Sociologija je družbena veda, ki preučuje družbo, družbene odnose in življenje posameznika v družbi.",
  },

  {
    id: 2,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj je predmet preučevanja sociologije?",
    options: ["Narava.", "Družba.", "Človeško telo.", "Politika."],
    answer: 1,
    explanation: "Glavni predmet preučevanja sociologije je družba.",
  },

  {
    id: 3,
    category: "osnove",
    difficulty: "easy",
    question: "Kdo je prvi uporabil izraz 'sociologija'?",
    options: ["Max Weber", "Emile Durkheim", "August Comte", "Karl Marx"],
    answer: 2,
    explanation: "Izraz sociologija je leta 1838 prvi uporabil August Comte.",
  },

  {
    id: 4,
    category: "osnove",
    difficulty: "medium",
    question: "Kateri sociolog je družbene pojave obravnaval kot 'stvari'?",
    options: ["Marx", "Weber", "Durkheim", "Parsons"],
    answer: 2,
    explanation:
      "Durkheim je trdil, da moramo družbena dejstva preučevati kot stvari.",
  },

  {
    id: 5,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj je po Weberju naloga sociologije?",
    options: [
      "Merjenje naravnih pojavov.",
      "Razumevanje in razlaga družbenega delovanja.",
      "Raziskovanje biologije človeka.",
      "Preučevanje gospodarstva.",
    ],
    answer: 1,
    explanation:
      "Weber je poudarjal razumevanje pomenov, ki jih ljudje pripisujejo svojim dejanjem.",
  },

  // =========================
  // KULTURA
  // =========================

  {
    id: 6,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj je kultura?",
    options: [
      "Sistem zakonov.",
      "Način razmišljanja, čustvovanja in vedenja pripadnikov družbe.",
      "Sistem političnih strank.",
      "Religiozna organizacija.",
    ],
    answer: 1,
    explanation:
      "Kultura določa sprejete načine vedenja in razmišljanja v določeni družbi.",
  },

  {
    id: 7,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj pomeni idealna kultura?",
    options: [
      "Kultura bogatih.",
      "To, v kar verjamemo, da je prav.",
      "Kultura mladih.",
      "Resnično vedenje ljudi.",
    ],
    answer: 1,
    explanation:
      "Idealna kultura predstavlja vrednote in norme, ki jih družba zagovarja.",
  },

  {
    id: 8,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj pomeni realna kultura?",
    options: [
      "Kultura preteklosti.",
      "To, kako ljudje dejansko ravnajo.",
      "Kultura otrok.",
      "Religiozna kultura.",
    ],
    answer: 1,
    explanation: "Realna kultura pomeni dejansko vedenje ljudi.",
  },

  // =========================
  // SOCIALIZACIJA
  // =========================

  {
    id: 9,
    category: "socializacija",
    difficulty: "easy",
    question: "Kaj je socializacija?",
    options: [
      "Proces staranja.",
      "Proces učenja kulture družbe.",
      "Proces industrializacije.",
      "Proces globalizacije.",
    ],
    answer: 1,
    explanation: "S socializacijo posameznik postane član družbe.",
  },

  {
    id: 10,
    category: "socializacija",
    difficulty: "easy",
    question: "Kako dolgo traja socializacija?",
    options: [
      "Do 18. leta.",
      "Samo v otroštvu.",
      "Vse življenje.",
      "Do konca šolanja.",
    ],
    answer: 2,
    explanation: "Socializacija je vseživljenjski proces.",
  },

  {
    id: 11,
    category: "socializacija",
    difficulty: "easy",
    question: "Katera socializacija poteka v družini?",
    options: ["Sekundarna", "Primarna", "Poklicna", "Formalna"],
    answer: 1,
    explanation: "Primarna socializacija poteka predvsem v družini.",
  },

  {
    id: 1,
    category: "socializacija",
    difficulty: "easy",
    question: "Kateri dejavnik socializacije je prvi?",
    options: ["Mediji", "Šola", "Družina", "Prijatelji"],
    answer: 2,
    explanation: "Družina je prvi in najpomembnejši dejavnik socializacije.",
  },

  {
    id: 12,
    category: "socializacija",
    difficulty: "easy",
    question: "Kateri dejavnik socializacije posreduje znanje in vrednote?",
    options: ["Šola", "Mediji", "Internet", "Sosedje"],
    answer: 0,
    explanation: "Šola poleg znanja posreduje tudi norme in vrednote.",
  },

  {
    id: 13,
    category: "socializacija",
    difficulty: "easy",
    question: "Kateri dejavnik socializacije močno vpliva na mladostnike?",
    options: ["Vrstniki", "Zdravniki", "Politiki", "Duhovniki"],
    answer: 0,
    explanation: "Vrstniške skupine imajo velik vpliv predvsem v adolescenci.",
  },

  {
    id: 14,
    category: "socializacija",
    difficulty: "medium",
    question: "Kaj dokazujejo primeri volčjih otrok?",
    options: [
      "Pomen biologije.",
      "Pomen prehrane.",
      "Pomen socializacije za razvoj človeka.",
      "Pomen šole.",
    ],
    answer: 2,
    explanation: "Izolacija od družbe povzroči trajne posledice.",
  },

  {
    id: 15,
    category: "socializacija",
    difficulty: "medium",
    question: "Volčji otroci imajo največ težav pri:",
    options: ["Televiziji.", "Razvoju govora.", "Branju.", "Hoji."],
    answer: 1,
    explanation: "Brez zgodnje socializacije se govor pogosto ne razvije.",
  },

  // =========================
  // NORME
  // =========================

  {
    id: 16,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj so norme?",
    options: ["Vrednote.", "Pravila vedenja.", "Statusi.", "Kazni."],
    answer: 1,
    explanation: "Norme določajo sprejemljivo vedenje v družbi.",
  },

  {
    id: 17,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj so formalne norme?",
    options: ["Običaji.", "Navade.", "Zakoni in pravilniki.", "Mnenja."],
    answer: 2,
    explanation: "Formalne norme so zapisane in uradno sprejete.",
  },

  {
    id: 18,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj so neformalne norme?",
    options: [
      "Zakoni.",
      "Moralna pravila in običaji.",
      "Ustava.",
      "Sodni postopki.",
    ],
    answer: 1,
    explanation: "Neformalne norme nastajajo spontano.",
  },

  {
    id: 19,
    category: "osnove",
    difficulty: "medium",
    question: "Kako se uveljavljajo norme?",
    options: [
      "S sankcijami.",
      "Z volitvami.",
      "S tehnologijo.",
      "S propagando.",
    ],
    answer: 0,
    explanation: "Norme vzdržujemo s pozitivnimi in negativnimi sankcijami.",
  },

  {
    id: 20,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj je primer neformalne sankcije?",
    options: ["Zapor.", "Denarna kazen.", "Posmeh.", "Tožba."],
    answer: 2,
    explanation: "Posmeh je tipična neformalna sankcija.",
  },

  // =========================
  // VREDNOTE
  // =========================

  {
    id: 21,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj so vrednote?",
    options: [
      "Zakoni.",
      "Prepričanja o tem, kaj je dobro in pomembno.",
      "Kazni.",
      "Pravila.",
    ],
    answer: 1,
    explanation: "Vrednote usmerjajo naše cilje in ravnanje.",
  },

  {
    id: 22,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj velja za vrednoto v zahodnih družbah?",
    options: ["Materialni uspeh.", "Lakota.", "Vojna.", "Revščina."],
    answer: 0,
    explanation: "Materialni uspeh velja za pomembno vrednoto.",
  },

  {
    id: 23,
    category: "osnove",
    difficulty: "medium",
    question: "Kakšen je odnos med normami in vrednotami?",
    options: [
      "Norme odražajo vrednote.",
      "Vrednote določajo biologijo.",
      "Norme so zakoni narave.",
      "Med njimi ni povezave.",
    ],
    answer: 0,
    explanation: "Norme pogosto izhajajo iz vrednot družbe.",
  },

  // =========================
  // STATUS
  // =========================

  {
    id: 24,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj je status?",
    options: ["Kazen.", "Položaj posameznika v družbi.", "Norma.", "Vrednota."],
    answer: 1,
    explanation: "Status pomeni družbeni položaj posameznika.",
  },

  {
    id: 25,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj je pripisan status?",
    options: ["Poklic.", "Izobrazba.", "Plemiški naziv.", "Zakonski stan."],
    answer: 2,
    explanation: "Pripisani status dobimo ob rojstvu ali brez lastnega vpliva.",
  },

  {
    id: 26,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj je pridobljeni status?",
    options: ["Spol.", "Barva kože.", "Poklic.", "Starost."],
    answer: 2,
    explanation: "Pridobljeni status dosežemo s svojim delovanjem.",
  },

  {
    id: 27,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj je družbena vloga?",
    options: [
      "Vrsta kazni.",
      "Skupina norm, povezanih s statusom.",
      "Vrsta sankcije.",
      "Vrsta kulture.",
    ],
    answer: 1,
    explanation: "Vloga določa pričakovano vedenje posameznika.",
  },

  // =========================
  // SOCIOLOŠKE TEORIJE
  // =========================

  {
    id: 28,
    category: "teorije",
    difficulty: "easy",
    question: "Kaj so sociološke teorije?",
    options: [
      "Zakoni države.",
      "Niz idej, ki razlagajo delovanje družbe.",
      "Mnenja politikov.",
      "Naravoslovne teorije.",
    ],
    answer: 1,
    explanation:
      "Sociološke teorije skušajo pojasniti delovanje družbe ali njenih delov.",
  },

  {
    id: 29,
    category: "teorije",
    difficulty: "easy",
    question: "Kateri pristop preučuje družbo kot celoto?",
    options: [
      "Mikrosociologija",
      "Interakcionizem",
      "Makrosociologija",
      "Fenomenologija",
    ],
    answer: 2,
    explanation: "Makrosociologija preučuje velike družbene sisteme.",
  },

  {
    id: 30,
    category: "teorije",
    difficulty: "easy",
    question: "Kateri pristop preučuje vsakodnevne interakcije?",
    options: [
      "Makrosociologija",
      "Mikrosociologija",
      "Marksizem",
      "Funkcionalizem",
    ],
    answer: 1,
    explanation: "Mikrosociologija se osredotoča na odnose med posamezniki.",
  },

  // =========================
  // FUNKCIONALIZEM
  // =========================

  {
    id: 31,
    category: "teorije",
    difficulty: "easy",
    question: "Kaj poudarja funkcionalizem?",
    options: [
      "Konflikte med razredi.",
      "Konsenz in stabilnost družbe.",
      "Vlogo posameznika.",
      "Pomen revolucije.",
    ],
    answer: 1,
    explanation:
      "Funkcionalizem vidi družbo kot stabilen sistem medsebojno povezanih delov.",
  },

  {
    id: 32,
    category: "teorije",
    difficulty: "medium",
    question: "S čim funkcionalisti primerjajo družbo?",
    options: [
      "S podjetjem.",
      "Z računalnikom.",
      "S človeškim organizmom.",
      "Z družino.",
    ],
    answer: 2,
    explanation:
      "Tako kot organi sodelujejo v telesu, sodelujejo tudi deli družbe.",
  },

  {
    id: 33,
    category: "teorije",
    difficulty: "easy",
    question: "Kdo velja za predstavnika funkcionalizma?",
    options: ["Marx", "Weber", "Parsons", "Goffman"],
    answer: 2,
    explanation: "Parsons je eden najpomembnejših funkcionalistov.",
  },

  {
    id: 34,
    category: "teorije",
    difficulty: "medium",
    question: "Kaj so funkcionalni predpogoji?",
    options: [
      "Zakoni države.",
      "Temeljne potrebe družbe za preživetje.",
      "Vrste sankcij.",
      "Pravila vedenja.",
    ],
    answer: 1,
    explanation:
      "Gre za pogoje, ki morajo biti izpolnjeni za delovanje družbe.",
  },

  {
    id: 35,
    category: "teorije",
    difficulty: "medium",
    question: "Kako se doseže družbeni ekvilibrij?",
    options: [
      "Z revolucijo.",
      "S socializacijo in družbenim nadzorom.",
      "S stavkami.",
      "S privatizacijo.",
    ],
    answer: 1,
    explanation: "Družbeni red se vzdržuje prek socializacije in nadzora.",
  },

  // =========================
  // MERTON
  // =========================

  {
    id: 36,
    category: "teorije",
    difficulty: "easy",
    question: "Kaj so manifestne funkcije?",
    options: [
      "Skrite funkcije.",
      "Načrtovane in znane funkcije.",
      "Naključne funkcije.",
      "Nezakonite funkcije.",
    ],
    answer: 1,
    explanation: "Manifestne funkcije so namerne in pričakovane posledice.",
  },

  {
    id: 37,
    category: "teorije",
    difficulty: "easy",
    question: "Kaj so latentne funkcije?",
    options: [
      "Nezavedne in nenačrtovane posledice.",
      "Zakonske obveznosti.",
      "Kazni.",
      "Formalna pravila.",
    ],
    answer: 0,
    explanation: "Latentne funkcije niso načrtovane.",
  },

  {
    id: 38,
    category: "teorije",
    difficulty: "medium",
    question: "Kaj je latentna funkcija šolanja?",
    options: [
      "Pridobitev izobrazbe.",
      "Vzpostavljanje stikov in sprejemanje avtoritete.",
      "Pisanje testov.",
      "Branje knjig.",
    ],
    answer: 1,
    explanation: "Šola poleg znanja posreduje tudi norme in hierarhijo.",
  },

  // =========================
  // MARKSIZEM
  // =========================

  {
    id: 39,
    category: "marksizem",
    difficulty: "easy",
    question: "Kaj poudarja marksizem?",
    options: [
      "Stabilnost.",
      "Konflikte med družbenimi razredi.",
      "Interakcije posameznikov.",
      "Biologijo.",
    ],
    answer: 1,
    explanation: "Marksizem vidi konflikt kot temeljno značilnost družbe.",
  },

  {
    id: 40,
    category: "marksizem",
    difficulty: "easy",
    question: "Kdo je avtor marksistične teorije?",
    options: ["Durkheim", "Parsons", "Marx", "Mead"],
    answer: 2,
    explanation: "Marksizem temelji predvsem na delu Karla Marxa.",
  },

  {
    id: 41,
    category: "marksizem",
    difficulty: "easy",
    question: "Kdo predstavlja vladajoči razred?",
    options: ["Proletariat", "Buržoazija", "Kmetje", "Sužnji"],
    answer: 1,
    explanation: "Buržoazija ima v lasti proizvodna sredstva.",
  },

  {
    id: 42,
    category: "marksizem",
    difficulty: "easy",
    question: "Kdo predstavlja delavski razred?",
    options: ["Buržoazija", "Plemstvo", "Proletariat", "Kapitalisti"],
    answer: 2,
    explanation: "Proletariat prodaja svojo delovno silo.",
  },

  {
    id: 43,
    category: "marksizem",
    difficulty: "medium",
    question: "Kaj je ekonomska baza?",
    options: [
      "Religija.",
      "Proizvodna sredstva in lastništvo.",
      "Mediji.",
      "Šolstvo.",
    ],
    answer: 1,
    explanation: "Ekonomska baza določa družbeno nadstavbo.",
  },

  {
    id: 44,
    category: "marksizem",
    difficulty: "medium",
    question: "Kaj je družbena nadstavba?",
    options: [
      "Vojska.",
      "Proizvodna sredstva.",
      "Institucije, vrednote in verovanja.",
      "Tehnologija.",
    ],
    answer: 2,
    explanation: "Nadstavba vključuje ideje in institucije družbe.",
  },

  {
    id: 45,
    category: "marksizem",
    difficulty: "medium",
    question: "Kaj pomeni lažna zavest?",
    options: [
      "Delavci razumejo izkoriščanje.",
      "Delavci sprejemajo sistem kot pravičen.",
      "Kapitalisti izgubijo oblast.",
      "Delavci postanejo kapitalisti.",
    ],
    answer: 1,
    explanation: "Ideologija vladajočega razreda prikrije neenakosti.",
  },

  {
    id: 46,
    category: "marksizem",
    difficulty: "medium",
    question: "Kaj pomeni 'razred po sebi'?",
    options: [
      "Razred, ki se zaveda interesov.",
      "Delavci sprejemajo obstoječe stanje.",
      "Kapitalisti.",
      "Srednji razred.",
    ],
    answer: 1,
    explanation: "Delavci še ne prepoznajo skupnih interesov.",
  },

  {
    id: 47,
    category: "marksizem",
    difficulty: "medium",
    question: "Kaj pomeni 'razred za sebe'?",
    options: [
      "Razred se organizira in bori za spremembe.",
      "Buržoazija.",
      "Fevdalci.",
      "Politiki.",
    ],
    answer: 0,
    explanation: "Delavci se zavedo svojega položaja in ukrepajo.",
  },

  {
    id: 48,
    category: "marksizem",
    difficulty: "hard",
    question: "Koliko oblik odtujitve razlikuje Marx?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "Marx razlikuje štiri oblike odtujitve.",
  },

  {
    id: 49,
    category: "marksizem",
    difficulty: "hard",
    question: "Od česa delavec NI odtujen po Marxu?",
    options: ["Od produkta.", "Od procesa dela.", "Od družbe.", "Od vremena."],
    answer: 3,
    explanation: "Odtujitev zajema produkt, delo, samega sebe in družbo.",
  },

  // =========================
  // INTERAKCIONIZEM
  // =========================

  {
    id: 50,
    category: "interakcionizem",
    difficulty: "easy",
    question: "Na kaj se osredotoča interakcionizem?",
    options: [
      "Globalizacijo.",
      "Interakcije med posamezniki.",
      "Kapitalizem.",
      "Državo.",
    ],
    answer: 1,
    explanation: "Interakcionizem preučuje vsakdanje odnose med ljudmi.",
  },

  {
    id: 51,
    category: "interakcionizem",
    difficulty: "easy",
    question: "Kako interakcionisti razumejo družbo?",
    options: [
      "Kot biološki organizem.",
      "Kot rezultat vsakdanjih interakcij.",
      "Kot politično stranko.",
      "Kot gospodarstvo.",
    ],
    answer: 1,
    explanation: "Družba nastaja skozi delovanje posameznikov.",
  },

  {
    id: 52,
    category: "interakcionizem",
    difficulty: "medium",
    question: "Kaj pomeni interakcija?",
    options: [
      "Kaznovanje.",
      "Sodelovanje med posamezniki.",
      "Tekmovanje.",
      "Socializacija.",
    ],
    answer: 1,
    explanation: "Interakcija pomeni vzajemno delovanje.",
  },

  {
    id: 53,
    category: "interakcionizem",
    difficulty: "medium",
    question: "Kaj je 'zrcalni jaz'?",
    options: [
      "Odsev v ogledalu.",
      "Predstava o sebi, oblikovana skozi odzive drugih.",
      "Biološka lastnost.",
      "Vrsta sankcije.",
    ],
    answer: 1,
    explanation: "Naša samopodoba nastaja skozi interakcije.",
  },

  // =========================
  // MEDIJI
  // =========================

  {
    id: 54,
    category: "mediji",
    difficulty: "easy",
    question: "Kaj so množični mediji?",
    options: [
      "Sredstva za prenos informacij velikemu številu ljudi.",
      "Vrste političnih strank.",
      "Sredstva za proizvodnjo.",
      "Državne institucije.",
    ],
    answer: 0,
    explanation:
      "Množični mediji omogočajo širjenje informacij velikemu občinstvu.",
  },

  {
    id: 55,
    category: "mediji",
    difficulty: "easy",
    question: "Kaj pomeni, da mediji konstruirajo realnost?",
    options: [
      "Da vedno prikazujejo resnico.",
      "Da izbirajo in oblikujejo informacije.",
      "Da ustvarjajo zakone.",
      "Da vplivajo le na otroke.",
    ],
    answer: 1,
    explanation: "Mediji izbirajo, katere dogodke bodo predstavili in kako.",
  },

  {
    id: 56,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj pomeni gatekeeping?",
    options: [
      "Nadzor meja.",
      "Izbiranje informacij, ki pridejo v javnost.",
      "Urejanje interneta.",
      "Policijski nadzor.",
    ],
    answer: 1,
    explanation:
      "Uredniki in novinarji odločajo, katere informacije bodo objavljene.",
  },

  {
    id: 57,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj pomeni infotainment?",
    options: [
      "Združevanje informacij in zabave.",
      "Izobraževalni program.",
      "Politična propaganda.",
      "Športni program.",
    ],
    answer: 0,
    explanation: "Infotainment pomeni zabavno podajanje informacij.",
  },

  {
    id: 58,
    category: "mediji",
    difficulty: "medium",
    question: "Katera funkcija medijev pomeni obveščanje javnosti?",
    options: [
      "Informativna funkcija.",
      "Nadzorna funkcija.",
      "Integrativna funkcija.",
      "Zabavna funkcija.",
    ],
    answer: 0,
    explanation: "Ena najpomembnejših nalog medijev je obveščanje.",
  },

  {
    id: 59,
    category: "mediji",
    difficulty: "hard",
    question: "Kateri sistem medijev je značilen za demokracijo?",
    options: [
      "Popoln državni nadzor.",
      "Pluralizem in svoboda medijev.",
      "Prepoved kritike oblasti.",
      "Cenzura.",
    ],
    answer: 1,
    explanation: "V demokraciji deluje več neodvisnih medijev.",
  },

  // =========================
  // TOTALNE INSTITUCIJE
  // =========================

  {
    id: 60,
    category: "totalne",
    difficulty: "easy",
    question: "Kaj je totalna institucija?",
    options: [
      "Politična stranka.",
      "Kraj, kjer ljudje živijo ločeno od družbe pod nadzorom.",
      "Podjetje.",
      "Prostovoljno društvo.",
    ],
    answer: 1,
    explanation:
      "Goffman je totalne institucije opisal kot ločene in strogo organizirane skupnosti.",
  },

  {
    id: 61,
    category: "totalne",
    difficulty: "easy",
    question: "Kateri primer spada med totalne institucije?",
    options: ["Nakupovalni center.", "Knjižnica.", "Zapor.", "Park."],
    answer: 2,
    explanation: "Zapor je klasičen primer totalne institucije.",
  },

  {
    id: 62,
    category: "totalne",
    difficulty: "easy",
    question: "Kaj pomeni mortifikacija jaza?",
    options: [
      "Krepitev samozavesti.",
      "Razgradnja stare identitete posameznika.",
      "Napredovanje.",
      "Izobraževanje.",
    ],
    answer: 1,
    explanation: "Posamezniku odvzamejo del njegove prejšnje identitete.",
  },

  {
    id: 63,
    category: "totalne",
    difficulty: "medium",
    question: "Kdo je proučeval totalne institucije?",
    options: ["Marx", "Parsons", "Goffman", "Weber"],
    answer: 2,
    explanation: "Erving Goffman je razvil teorijo totalnih institucij.",
  },

  {
    id: 64,
    category: "totalne",
    difficulty: "medium",
    question: "Kako Goffman imenuje osebe v totalnih institucijah?",
    options: ["Gojenci.", "Stranke.", "Delničarji.", "Volivci."],
    answer: 0,
    explanation: "Posameznike v instituciji imenuje gojenci.",
  },

  {
    id: 65,
    category: "totalne",
    difficulty: "medium",
    question: "Kateri NI primer totalne institucije?",
    options: [
      "Samostan.",
      "Psihiatrična bolnišnica.",
      "Vojašnica.",
      "Osnovna šola.",
    ],
    answer: 3,
    explanation: "Osnovna šola ni totalna institucija.",
  },

  // =========================
  // BIROKRACIJA
  // =========================

  {
    id: 66,
    category: "birokracija",
    difficulty: "easy",
    question: "Kdo je razvil teorijo birokracije?",
    options: ["Marx", "Durkheim", "Weber", "Parsons"],
    answer: 2,
    explanation: "Max Weber je oblikoval idealni tip birokracije.",
  },

  {
    id: 67,
    category: "birokracija",
    difficulty: "easy",
    question: "Kaj je značilno za birokracijo?",
    options: [
      "Nepredvidljivost.",
      "Pravila in hierarhija.",
      "Anarhija.",
      "Naključnost.",
    ],
    answer: 1,
    explanation: "Birokracija temelji na pravilih in jasni organizaciji.",
  },

  {
    id: 68,
    category: "birokracija",
    difficulty: "medium",
    question: "Koliko oblik oblasti razlikuje Weber?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation:
      "Weber razlikuje tradicionalno, karizmatično in racionalno-pravno oblast.",
  },

  {
    id: 69,
    category: "birokracija",
    difficulty: "medium",
    question: "Katera oblika oblasti temelji na običajih?",
    options: [
      "Karizmatična.",
      "Tradicionalna.",
      "Racionalno-pravna.",
      "Demokratična.",
    ],
    answer: 1,
    explanation: "Tradicionalna oblast temelji na navadah in tradiciji.",
  },

  {
    id: 70,
    category: "birokracija",
    difficulty: "medium",
    question: "Kaj pomeni 'železna kletka'?",
    options: [
      "Vrsta zapora.",
      "Pretirana racionalizacija družbe.",
      "Vojaška disciplina.",
      "Politična represija.",
    ],
    answer: 1,
    explanation:
      "Weber je opozarjal, da lahko birokracija omejuje svobodo posameznika.",
  },

  // =========================
  // GLOBALIZACIJA
  // =========================

  {
    id: 71,
    category: "globalizacija",
    difficulty: "easy",
    question: "Kaj je globalizacija?",
    options: [
      "Povezovanje družb po svetu.",
      "Izolacija držav.",
      "Propad gospodarstva.",
      "Vojaško povezovanje.",
    ],
    answer: 0,
    explanation: "Globalizacija pomeni vse večjo povezanost sveta.",
  },

  {
    id: 72,
    category: "globalizacija",
    difficulty: "easy",
    question: "Kateri dejavnik prispeva h globalizaciji?",
    options: [
      "Tehnološki razvoj.",
      "Zmanjšanje komunikacij.",
      "Zapiranje meja.",
      "Izolacija.",
    ],
    answer: 0,
    explanation: "Razvoj tehnologije je močno pospešil globalizacijo.",
  },

  {
    id: 73,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kaj so multinacionalke?",
    options: [
      "Lokalna podjetja.",
      "Podjetja, ki poslujejo v več državah.",
      "Politične organizacije.",
      "Banke v eni državi.",
    ],
    answer: 1,
    explanation: "Multinacionalke delujejo na mednarodni ravni.",
  },

  {
    id: 74,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kateri dvom o globalizaciji je izpostavil Stiglitz?",
    options: [
      "Pravila niso vedno pravična.",
      "Ni tehnološkega razvoja.",
      "Ni trgovine.",
      "Ni medijev.",
    ],
    answer: 0,
    explanation: "Stiglitz opozarja na nepravična pravila globalnega sistema.",
  },

  {
    id: 75,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kaj pomeni amerikanizacija?",
    options: [
      "Selitev v ZDA.",
      "Širjenje ameriške kulture po svetu.",
      "Ameriška politika.",
      "Vojaško posredovanje.",
    ],
    answer: 1,
    explanation: "Gre za vpliv ameriške kulture na druge družbe.",
  },

  // =========================
  // DRUŽBENA NEENAKOST
  // =========================

  {
    id: 76,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj pomeni družbena neenakost?",
    options: [
      "Enake možnosti za vse.",
      "Neenaka razporeditev dobrin in moči.",
      "Enaka plača.",
      "Demokracija.",
    ],
    answer: 1,
    explanation: "Ljudje nimajo enakega dostopa do virov in položajev.",
  },

  {
    id: 77,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj meri Gini koeficient?",
    options: [
      "Stopnjo inflacije.",
      "Stopnjo brezposelnosti.",
      "Neenakost dohodkov.",
      "Rast prebivalstva.",
    ],
    answer: 2,
    explanation: "Višji Gini koeficient pomeni večjo neenakost.",
  },

  {
    id: 78,
    category: "osnove",
    difficulty: "medium",
    question: "Kateri sistem temelji na dednih družbenih položajih?",
    options: ["Razredi.", "Kaste.", "Demokracija.", "Kapitalizem."],
    answer: 1,
    explanation: "V kastnem sistemu je družbeni položaj določen z rojstvom.",
  },

  {
    id: 79,
    category: "osnove",
    difficulty: "hard",
    question: "Kaj pomeni družbena mobilnost?",
    options: [
      "Selitev v drugo državo.",
      "Spreminjanje družbenega položaja posameznika.",
      "Menjava službe.",
      "Politično delovanje.",
    ],
    answer: 1,
    explanation: "Gre za premikanje med različnimi družbenimi sloji.",
  },

  // =========================
  // DEMOGRAFSKA TRANZICIJA
  // =========================

  {
    id: 80,
    category: "globalizacija",
    difficulty: "easy",
    question: "Kaj preučuje demografija?",
    options: [
      "Gospodarstvo države.",
      "Prebivalstvo in njegove spremembe.",
      "Politične sisteme.",
      "Množične medije.",
    ],
    answer: 1,
    explanation:
      "Demografija preučuje prebivalstvo, njegovo sestavo in gibanje.",
  },

  {
    id: 81,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kaj pomeni demografska tranzicija?",
    options: [
      "Prehod iz agrarne v industrijsko družbo.",
      "Prehod iz visoke rodnosti in umrljivosti v nizko rodnost in umrljivost.",
      "Selitev prebivalstva.",
      "Povečanje števila mest.",
    ],
    answer: 1,
    explanation:
      "Demografska tranzicija opisuje spremembe rodnosti in umrljivosti skozi razvoj družbe.",
  },

  {
    id: 82,
    category: "globalizacija",
    difficulty: "hard",
    question:
      "Za katero fazo demografske tranzicije je značilna nizka rodnost in nizka umrljivost?",
    options: ["1. faza", "2. faza", "3. faza", "4. faza"],
    answer: 3,
    explanation: "V 4. fazi sta tako rodnost kot umrljivost nizki.",
  },

  // =========================
  // TEORIJE RAZVOJA DRUŽBE
  // =========================

  {
    id: 83,
    category: "globalizacija",
    difficulty: "easy",
    question: "Kaj trdi modernizacijska teorija?",
    options: [
      "Vse družbe sledijo podobni poti razvoja.",
      "Razvite države izkoriščajo nerazvite.",
      "Razvoj ni mogoč.",
      "Napredek povzroča le tehnologija.",
    ],
    answer: 0,
    explanation:
      "Modernizacijska teorija predpostavlja, da družbe napredujejo po podobnih stopnjah.",
  },

  {
    id: 84,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kaj poudarja teorija odvisnosti?",
    options: [
      "Pomen socializacije.",
      "Nerazvite države so odvisne od razvitih.",
      "Enakost med državami.",
      "Vlogo medijev.",
    ],
    answer: 1,
    explanation: "Teorija odvisnosti opozarja na neenake odnose med državami.",
  },

  {
    id: 85,
    category: "globalizacija",
    difficulty: "hard",
    question:
      "Katera teorija trdi, da bogate države ohranjajo revščino revnih držav?",
    options: [
      "Funkcionalizem",
      "Modernizacijska teorija",
      "Teorija odvisnosti",
      "Interakcionizem",
    ],
    answer: 2,
    explanation:
      "Teorija odvisnosti poudarja izkoriščanje manj razvitih držav.",
  },

  // =========================
  // DRŽAVA IN GOSPODARSTVO
  // =========================

  {
    id: 86,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kaj pomeni minimalna država?",
    options: [
      "Država brez zakonov.",
      "Država z omejenim poseganjem v gospodarstvo.",
      "Majhna država.",
      "Država brez vlade.",
    ],
    answer: 1,
    explanation: "Minimalna država posega v gospodarstvo le v omejenem obsegu.",
  },

  {
    id: 87,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kaj pomeni neoliberalizem?",
    options: [
      "Večji nadzor države.",
      "Več svobodnega trga in manj državnega poseganja.",
      "Prepoved trgovine.",
      "Socializem.",
    ],
    answer: 1,
    explanation:
      "Neoliberalizem zagovarja prosti trg in zmanjšanje vloge države.",
  },

  // =========================
  // GDP / GNI
  // =========================

  {
    id: 88,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj pomeni kratica GDP (BDP)?",
    options: [
      "Bruto domači proizvod.",
      "Globalni dohodek prebivalstva.",
      "Bruto državni prihodek.",
      "Gospodarska produktivnost.",
    ],
    answer: 0,
    explanation:
      "BDP predstavlja skupno vrednost proizvodov in storitev v državi.",
  },

  {
    id: 89,
    category: "osnove",
    difficulty: "hard",
    question: "Kaj pomeni GNI?",
    options: [
      "Bruto domači proizvod.",
      "Bruto nacionalni dohodek.",
      "Gospodarski indeks.",
      "Globalna neenakost.",
    ],
    answer: 1,
    explanation:
      "GNI meri dohodek prebivalcev države ne glede na lokacijo ustvarjanja.",
  },

  // =========================
  // DODATNA VPRAŠANJA
  // =========================

  {
    id: 90,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj je cenzura?",
    options: [
      "Svobodno izražanje mnenj.",
      "Nadzor in omejevanje informacij.",
      "Objavljanje vseh informacij.",
      "Neodvisno novinarstvo.",
    ],
    answer: 1,
    explanation: "Cenzura pomeni omejevanje dostopa do določenih informacij.",
  },

  {
    id: 91,
    category: "mediji",
    difficulty: "medium",
    question: "Katera funkcija medijev omogoča sprostitev in zabavo?",
    options: ["Informativna.", "Nadzorna.", "Zabavna.", "Socializacijska."],
    answer: 2,
    explanation: "Mediji imajo poleg obveščanja tudi zabavno funkcijo.",
  },

  {
    id: 92,
    category: "globalizacija",
    difficulty: "hard",
    question: "Katera je ena izmed negativnih posledic globalizacije?",
    options: [
      "Hitrejši pretok informacij.",
      "Večja kulturna raznolikost.",
      "Povečevanje neenakosti.",
      "Boljša komunikacija.",
    ],
    answer: 2,
    explanation:
      "Globalizacija lahko povečuje razlike med bogatimi in revnimi.",
  },

  {
    id: 93,
    category: "globalizacija",
    difficulty: "medium",
    question: "Katera je ena izmed pozitivnih posledic globalizacije?",
    options: [
      "Večja dostopnost informacij.",
      "Popolna enakost.",
      "Odprava vseh konfliktov.",
      "Izginotje revščine.",
    ],
    answer: 0,
    explanation:
      "Globalizacija omogoča hitrejši dostop do znanja in informacij.",
  },

  {
    id: 94,
    category: "osnove",
    difficulty: "hard",
    question: "Kaj pomeni etnocentrizem?",
    options: [
      "Sprejemanje vseh kultur kot enakovrednih.",
      "Presojanje drugih kultur skozi vrednote lastne kulture.",
      "Poznavanje tujih jezikov.",
      "Kulturna izmenjava.",
    ],
    answer: 1,
    explanation:
      "Etnocentrizem pomeni, da svojo kulturo dojemamo kot merilo za presojanje drugih.",
  },

  {
    id: 95,
    category: "osnove",
    difficulty: "hard",
    question: "Kaj pomeni kulturni relativizem?",
    options: [
      "Prepričanje, da je ena kultura najboljša.",
      "Razumevanje kultur v njihovem lastnem kontekstu.",
      "Zavračanje drugih kultur.",
      "Posnemanje drugih kultur.",
    ],
    answer: 1,
    explanation:
      "Kulturni relativizem spodbuja razumevanje in ne obsojanje kulturnih razlik.",
  },

  {
    id: 106,
    category: "socializacija",
    difficulty: "hard",
    question: "Kaj je skriti kurikul?",
    options: [
      "Uradni učni načrt.",
      "Neformalno učenje vrednot, discipline in vedenjskih vzorcev v šoli.",
      "Vrsta sankcije.",
      "Šolski pravilnik.",
    ],
    answer: 1,
    explanation:
      "Skriti kurikul vključuje vse, kar se učenci naučijo poleg uradne učne snovi.",
  },

  {
    id: 107,
    category: "socializacija",
    difficulty: "hard",
    question: "Kaj so govorni vzorci?",
    options: [
      "Načini sporazumevanja, značilni za različne družbene skupine.",
      "Vrste medijev.",
      "Zakoni.",
      "Vrste sankcij.",
    ],
    answer: 0,
    explanation:
      "Bernstein je razlikoval med različnimi govornimi vzorci glede na družbeni sloj.",
  },

  {
    id: 108,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj je družbena moč?",
    options: [
      "Fizična moč.",
      "Zmožnost vplivanja na vedenje drugih kljub njihovemu odporu.",
      "Ugled posameznika.",
      "Bogastvo.",
    ],
    answer: 1,
    explanation:
      "Moč pomeni sposobnost doseganja ciljev in vplivanja na druge.",
  },

  {
    id: 109,
    category: "osnove",
    difficulty: "easy",
    question: "Kaj pomeni ugled?",
    options: [
      "Materialno bogastvo.",
      "Spoštovanje ali čast, povezana z družbenim položajem.",
      "Vrsta moči.",
      "Vloga.",
    ],
    answer: 1,
    explanation: "Ugled pomeni stopnjo družbenega spoštovanja.",
  },

  {
    id: 110,
    category: "osnove",
    difficulty: "hard",
    question: "Kako Linton opredeli kulturo?",
    options: [
      "Kot biološko dediščino.",
      "Kot način življenja članov družbe.",
      "Kot politični sistem.",
      "Kot religijo.",
    ],
    answer: 1,
    explanation:
      "Linton kulturo razume kot način življenja članov določene družbe.",
  },

  {
    id: 111,
    category: "teorije",
    difficulty: "medium",
    question: "Kaj pomeni funkcija v funkcionalizmu?",
    options: [
      "Prispevek institucije k delovanju družbe.",
      "Vrsta norme.",
      "Način socializacije.",
      "Vrsta sankcije.",
    ],
    answer: 0,
    explanation: "Funkcija pomeni prispevek dela družbe k njenemu vzdrževanju.",
  },

  {
    id: 112,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kaj je disfunkcija birokracije?",
    options: [
      "Pozitivna lastnost birokracije.",
      "Težave, ki nastanejo zaradi pretirane birokratizacije.",
      "Vrsta oblasti.",
      "Sistem nagrajevanja.",
    ],
    answer: 1,
    explanation:
      "Merton je opozarjal, da lahko birokracija postane neučinkovita.",
  },

  {
    id: 113,
    category: "globalizacija",
    difficulty: "medium",
    question: "Na kateri vrsti oblasti temelji birokracija?",
    options: [
      "Karizmatični.",
      "Tradicionalni.",
      "Racionalno-pravni.",
      "Demokratični.",
    ],
    answer: 2,
    explanation: "Birokracija temelji na racionalno-pravni oblasti.",
  },

  {
    id: 114,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kaj funkcionalisti poudarjajo pri profesijah?",
    options: [
      "Usmerjenost v osebni dobiček.",
      "Strokovno znanje in služenje družbi.",
      "Politično moč.",
      "Družbeni konflikt.",
    ],
    answer: 1,
    explanation:
      "Funkcionalisti profesije vidijo kot pomembne za dobro delovanje družbe.",
  },

  {
    id: 115,
    type: "truefalse",
    category: "teorije",
    question: "Marksisti menijo, da v družbah prevladuje konflikt.",
    options: ["DA", "NE"],
    answer: 0,
    explanation: "Marksizem temelji na ideji razrednega konflikta.",
  },

  {
    id: 116,
    category: "osnove",
    difficulty: "hard",
    question: "Kaj zagovarja pozitivizem?",
    options: [
      "Uporabo naravoslovnih metod v sociologiji.",
      "Zavračanje znanstvenega raziskovanja.",
      "Proučevanje le posameznika.",
      "Pomen religije.",
    ],
    answer: 0,
    explanation:
      "Pozitivizem zagovarja objektivno opazovanje in merjenje družbenih pojavov.",
  },

  {
    id: 117,
    category: "osnove",
    difficulty: "medium",
    question: "Kaj so družbena dejstva po Durkheimu?",
    options: [
      "Mnenja posameznika.",
      "Načini delovanja, ki vplivajo na posameznika od zunaj.",
      "Zakoni države.",
      "Biološke lastnosti.",
    ],
    answer: 1,
    explanation:
      "Družbena dejstva imajo svojo realnost in vplivajo na posameznika.",
  },

  {
    id: 118,
    category: "osnove",
    difficulty: "medium",
    question: "Kateri status je pridobljen?",
    options: ["Plemiški naziv.", "Spol.", "Poklic.", "Rasa."],
    answer: 2,
    explanation: "Pridobljeni status dosežemo skozi življenje.",
  },

  {
    id: 119,
    category: "teorije",
    difficulty: "medium",
    question: "Kaj so funkcionalni predpogoji?",
    options: [
      "Temeljne potrebe družbe za preživetje.",
      "Kazni.",
      "Zakoni.",
      "Norme.",
    ],
    answer: 0,
    explanation: "Družba mora izpolnjevati določene pogoje, da lahko obstaja.",
  },

  {
    id: 120,
    category: "teorije",
    difficulty: "medium",
    question: "Kaj pomeni vrednotni konsenz?",
    options: [
      "Da imajo ljudje različne vrednote.",
      "Da ljudje delijo iste temeljne vrednote.",
      "Da ni norm.",
      "Da ni pravil.",
    ],
    answer: 1,
    explanation:
      "Funkcionalisti menijo, da skupne vrednote omogočajo stabilnost družbe.",
  },

  {
    id: 121,
    category: "teorije",
    difficulty: "hard",
    question: "Kaj je presežna vrednost?",
    options: [
      "Plača delavca.",
      "Dobiček, ki nastane iz neplačanega dela delavca.",
      "Davek.",
      "Vrednost strojev.",
    ],
    answer: 1,
    explanation:
      "Po Marxu kapitalist prisvoji del vrednosti, ki jo ustvari delavec.",
  },

  {
    id: 122,
    category: "teorije",
    difficulty: "hard",
    question: "Kaj pomeni izraz 'razred po sebi'?",
    options: [
      "Delavci se zavedajo skupnih interesov.",
      "Delavci sprejemajo obstoječe stanje.",
      "Kapitalisti.",
      "Srednji razred.",
    ],
    answer: 1,
    explanation: "Delavci še nimajo razredne zavesti.",
  },

  {
    id: 123,
    category: "teorije",
    difficulty: "hard",
    question: "Kaj pomeni izraz 'razred za sebe'?",
    options: [
      "Kapitalisti.",
      "Delavci se zavedajo skupnih interesov in ukrepajo.",
      "Plemiči.",
      "Politiki.",
    ],
    answer: 1,
    explanation: "Delavci razvijejo razredno zavest.",
  },

  {
    id: 124,
    category: "teorije",
    difficulty: "medium",
    question: "Kaj pomeni zrcalni jaz?",
    options: [
      "Odsev v ogledalu.",
      "Samopodoba, oblikovana skozi odzive drugih.",
      "Biološka lastnost.",
      "Vrsta sankcije.",
    ],
    answer: 1,
    explanation: "Naša predstava o sebi nastaja v interakciji z drugimi.",
  },

  {
    id: 125,
    category: "teorije",
    difficulty: "hard",
    question: "Kdo so moralni podjetniki?",
    options: [
      "Podjetniki, ki poslujejo pošteno.",
      "Posamezniki z družbeno močjo, ki določajo, kaj je odklonsko.",
      "Politiki.",
      "Novinarji.",
    ],
    answer: 1,
    explanation:
      "Interakcionisti poudarjajo njihovo vlogo pri označevanju deviantnosti.",
  },

  {
    id: 126,
    category: "osnove",
    difficulty: "hard",
    question:
      "Zakaj naravoslovne metode niso vedno primerne za preučevanje ljudi?",
    options: [
      "Ker ljudje nimajo ciljev.",
      "Ker imajo ljudje zavest, namene in občutke.",
      "Ker jih ni mogoče opazovati.",
      "Ker niso zanesljive.",
    ],
    answer: 1,
    explanation:
      "Ljudje delujejo zavestno in svojemu ravnanju pripisujejo pomen.",
  },

  {
    id: 127,
    type: "truefalse",
    category: "teorije",
    question: "Funkcionalisti menijo, da družbo povezuje vrednotni konsenz.",
    options: ["DA", "NE"],
    answer: 0,
    explanation: "Skupne vrednote omogočajo stabilnost družbe.",
  },

  {
    id: 128,
    type: "truefalse",
    category: "osnove",
    question: "Socializacija traja vse življenje.",
    options: ["DA", "NE"],
    answer: 0,
    explanation: "Socializacija ni omejena le na otroštvo.",
  },

  {
    id: 129,
    type: "truefalse",
    category: "teorije",
    question: "Marksizem poudarja konsenz med družbenimi skupinami.",
    options: ["DA", "NE"],
    answer: 1,
    explanation: "Marksizem poudarja konflikt.",
  },

  {
    id: 130,
    type: "truefalse",
    category: "osnove",
    question: "Vrednote so bolj splošne kot norme.",
    options: ["DA", "NE"],
    answer: 0,
    explanation: "Norme pogosto izhajajo iz vrednot.",
  },

  {
    id: 131,
    type: "truefalse",
    category: "teorije",
    question: "Mikrosociologija proučuje vsakodnevne interakcije.",
    options: ["DA", "NE"],
    answer: 0,
    explanation: "Mikrosociologija se osredotoča na medosebne odnose.",
  },

  {
    id: 132,
    category: "mediji",
    difficulty: "easy",
    question:
      "Iz katerih štirih virov ljudje pridobivamo informacije o dogajanju okoli nas?",
    options: [
      "Osebne izkušnje, pomembni drugi, druge družbene skupine in množični mediji.",
      "Televizija, radio, časopisi in internet.",
      "Družina, šola, vrstniki in mediji.",
      "Politiki, znanstveniki, prijatelji in internet.",
    ],
    answer: 0,
    explanation:
      "Informacije pridobivamo iz osebnih izkušenj, pomembnih drugih, drugih družbenih skupin in množičnih medijev.",
  },

  {
    id: 133,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj je prineslo revolucijo v komuniciranju konec 20. stoletja?",
    options: ["Radio.", "Televizija.", "Internet.", "Časopis."],
    answer: 2,
    explanation:
      "Internet je združil sliko, zvok in besedilo ter omogočil objavljanje in iskanje informacij.",
  },

  {
    id: 134,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj pomeni izraz 'medijska konstrukcija realnosti'?",
    options: [
      "Mediji vedno prikazujejo resnično stanje.",
      "Mediji izbirajo in oblikujejo podobo realnosti.",
      "Mediji poročajo samo o dejstvih.",
      "Mediji nimajo vpliva na družbo.",
    ],
    answer: 1,
    explanation: "Mediji niso zrcalo realnosti, ampak jo soustvarjajo.",
  },

  {
    id: 135,
    category: "mediji",
    difficulty: "hard",
    question: "Kaj je poudarjal Luhmann glede razvedrilnih vsebin?",
    options: [
      "Da nimajo vpliva na ljudi.",
      "Da vplivajo na konstrukcijo realnosti.",
      "Da so namenjene le otrokom.",
      "Da zmanjšujejo kriminaliteto.",
    ],
    answer: 1,
    explanation: "Tudi zabavne vsebine vplivajo na naše dojemanje sveta.",
  },

  {
    id: 136,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj se lahko zgodi zaradi vpliva medijev?",
    options: [
      "Ljudje lahko zamenjajo fiktivno in dejansko realnost.",
      "Ljudje izgubijo spomin.",
      "Mediji izgubijo vpliv.",
      "Družba postane bolj enotna.",
    ],
    answer: 0,
    explanation: "Primeri so radijska igra Vojna svetov ali vpliv serije CSI.",
  },

  {
    id: 137,
    category: "mediji",
    difficulty: "hard",
    question: "Kaj je ugotovil McQuail glede medijske realnosti?",
    options: [
      "Da mediji poročajo popolnoma objektivno.",
      "Da mediji pogosto popačijo realnost.",
      "Da mediji nimajo vpliva.",
      "Da mediji ne ustvarjajo stereotipov.",
    ],
    answer: 1,
    explanation: "McQuail je opisal več načinov popačenja medijske realnosti.",
  },

  {
    id: 138,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj je ključno za delovanje medijev?",
    options: [
      "Veliko zaposlenih.",
      "Državno financiranje.",
      "Zaupanje javnosti.",
      "Internet.",
    ],
    answer: 2,
    explanation: "Ljudje spremljajo novice, ker verjamejo, da so resnične.",
  },

  {
    id: 139,
    category: "mediji",
    difficulty: "hard",
    question: "Kaj pomeni 'prevara transparentnosti'?",
    options: [
      "Mediji prikrivajo svoj obstoj.",
      "Strategije, s katerimi mediji ustvarjajo vtis popolne objektivnosti.",
      "Prepoved oglaševanja.",
      "Cenzura.",
    ],
    answer: 1,
    explanation:
      "Novinarji uporabljajo različne pristope za ohranjanje podobe objektivnosti.",
  },

  {
    id: 140,
    category: "mediji",
    difficulty: "medium",
    question: "Kaj je osrednji motiv tržnega novinarstva?",
    options: [
      "Izobraževanje ljudi.",
      "Objektivnost.",
      "Ustvarjanje dobička.",
      "Politična nevtralnost.",
    ],
    answer: 2,
    explanation: "Večje občinstvo pomeni več prihodkov in večji dobiček.",
  },

  {
    id: 141,
    category: "mediji",
    difficulty: "hard",
    question: "Katera je izjema med mediji glede odvisnosti od oglaševanja?",
    options: [
      "Komercialne televizije.",
      "Časopisi.",
      "RTV Slovenija.",
      "Internetni portali.",
    ],
    answer: 2,
    explanation:
      "Javni mediji so manj odvisni od komercialnih pritiskov, čeprav jim vse bolj sledijo.",
  },

  {
    id: 142,
    type: "truefalse",
    category: "mediji",
    question: "Mediji so zgolj nevtralni prenašalci informacij.",
    options: ["DA", "NE"],
    answer: 1,
    explanation: "Mediji so tudi konstruktorji družbene realnosti.",
  },

  {
    id: 143,
    type: "truefalse",
    category: "mediji",
    question: "Večje občinstvo običajno pomeni večji dobiček medijev.",
    options: ["DA", "NE"],
    answer: 0,
    explanation: "Prihodki od oglaševanja rastejo z večjo gledanostjo.",
  },

  {
    id: 144,
    type: "truefalse",
    category: "mediji",
    question: "Ljudje medijem ne zaupajo.",
    options: ["DA", "NE"],
    answer: 1,
    explanation: "Zaupanje javnosti je temelj delovanja medijev.",
  },

  {
    id: 145,
    category: "totalne",
    difficulty: "medium",
    question: "Kaj je glavna vloga totalnih institucij?",
    options: [
      "Zagotavljanje zabave.",
      "Razbitje ločnic med vsakodnevnimi dejavnostmi posameznika.",
      "Povečevanje dobička.",
      "Izobraževanje prebivalstva.",
    ],
    answer: 1,
    explanation:
      "Totalne institucije združijo delo, prosti čas in bivanje pod isto avtoriteto.",
  },

  {
    id: 146,
    category: "totalne",
    difficulty: "medium",
    question: "Kaj je značilno za delovanje totalnih institucij?",
    options: [
      "Aktivnosti potekajo na različnih krajih.",
      "Vsaka oseba sama načrtuje svoj dan.",
      "Aktivnosti potekajo na istem mestu pod isto avtoriteto.",
      "Popolna svoboda odločanja.",
    ],
    answer: 2,
    explanation: "Vse aktivnosti potekajo pod nadzorom istih avtoritet.",
  },

  {
    id: 147,
    category: "totalne",
    difficulty: "hard",
    question: "Kaj je test ubogljivosti?",
    options: [
      "Preverjanje inteligence.",
      "Poniževanje in kaznovanje posameznika, dokler se ne podredi.",
      "Sprejemni izpit.",
      "Vojaški trening.",
    ],
    answer: 1,
    explanation: "Namen testa je zlomiti odpor posameznika.",
  },

  {
    id: 148,
    category: "totalne",
    difficulty: "easy",
    question: "Kaj pomeni uniformiranost v totalnih institucijah?",
    options: [
      "Vsak ima drugačna pravila.",
      "Vsi so obravnavani kot enaki in na istem položaju.",
      "Posebne pravice za posameznike.",
      "Samostojno odločanje.",
    ],
    answer: 1,
    explanation: "Uniformiranost zmanjšuje individualnost.",
  },

  {
    id: 149,
    category: "totalne",
    difficulty: "hard",
    question: "Kateri elementi sestavljajo mortifikacijo jaza?",
    options: [
      "Hišna pravila, nagrade in kazni.",
      "Delo, prosti čas in počitek.",
      "Prijateljstvo, družina in šola.",
      "Pravila, demokracija in svoboda.",
    ],
    answer: 0,
    explanation:
      "Mortifikacija vključuje hišna pravila, nagrade za ubogljivost in kazni.",
  },

  {
    id: 150,
    category: "totalne",
    difficulty: "hard",
    question:
      "Koliko načinov prilagajanja življenju v totalni instituciji opisuje Goffman?",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "Goffman opiše pet načinov prilagajanja.",
  },

  {
    id: 151,
    category: "totalne",
    difficulty: "hard",
    question: "Kateri način prilagajanja je po Goffmanu najpogostejši?",
    options: [
      "Kolonizacija.",
      "Drža nesprejemanja.",
      "Playing it cool.",
      "Konverzija.",
    ],
    answer: 2,
    explanation:
      "'Playing it cool' pomeni ohranjanje mirne krvi in prilagajanje situaciji.",
  },

  {
    id: 152,
    category: "totalne",
    difficulty: "hard",
    question: "Kaj pomeni situacijski umik?",
    options: [
      "Beg iz institucije.",
      "Minimaliziranje interakcij in umik pozornosti.",
      "Sprejemanje pravil.",
      "Sodelovanje z osebjem.",
    ],
    answer: 1,
    explanation:
      "Posameznik se osredotoči le na tisto, kar neposredno vpliva nanj.",
  },

  {
    id: 153,
    type: "truefalse",
    category: "totalne",
    question:
      "V totalnih institucijah je življenje v družini omejeno ali onemogočeno.",
    options: ["DA", "NE"],
    answer: 0,
    explanation: "Gojenci so ločeni od običajnega družinskega življenja.",
  },

  {
    id: 154,
    type: "truefalse",
    category: "totalne",
    question: "Nadzorniki živijo v totalni instituciji enako kot gojenci.",
    options: ["DA", "NE"],
    answer: 1,
    explanation:
      "Nadzorniki opravljajo službo in ostajajo povezani z zunanjim svetom.",
  },

  {
    id: 155,
    category: "birokracija",
    difficulty: "easy",
    question: "Kaj so birokratske organizacije?",
    options: [
      "Organizacije brez pravil.",
      "Organizacije s hierarhijo plačanih uslužbencev, ki tvorijo verigo ukazovanja.",
      "Prostovoljne organizacije.",
      "Družinske skupnosti.",
    ],
    answer: 1,
    explanation: "Gre za hierarhično organizacijo plačanih uslužbencev.",
  },

  {
    id: 156,
    category: "birokracija",
    difficulty: "medium",
    question: "Zakaj je poznavanje birokratizacije pomembno?",
    options: [
      "Ker birokracije ni več.",
      "Ker so skoraj vse sodobne institucije organizirane po birokratskih načelih.",
      "Ker obstaja samo v vojski.",
      "Ker je značilna le za preteklost.",
    ],
    answer: 1,
    explanation: "Večina sodobnih organizacij temelji na birokratskih načelih.",
  },

  {
    id: 157,
    category: "birokracija",
    difficulty: "hard",
    question: "Katere tipe delovanja je razlikoval Weber?",
    options: [
      "Afektivno, tradicionalno in racionalno.",
      "Formalno, neformalno in racionalno.",
      "Čustveno, politično in versko.",
      "Individualno, skupinsko in racionalno.",
    ],
    answer: 0,
    explanation:
      "Weber razlikuje afektivno, tradicionalno in racionalno delovanje.",
  },

  {
    id: 158,
    category: "birokracija",
    difficulty: "medium",
    question: "Kaj je po Webru postalo prevladujoče v industrijski družbi?",
    options: [
      "Tradicionalno delovanje.",
      "Afektivno delovanje.",
      "Racionalno delovanje.",
      "Religiozno delovanje.",
    ],
    answer: 2,
    explanation: "Industrijska družba temelji na racionalizaciji.",
  },

  {
    id: 160,
    category: "birokracija",
    difficulty: "medium",
    question: "Na katerem načelu temelji organizacija uradov?",
    options: ["Demokraciji.", "Hierarhiji.", "Naključju.", "Tradiciji."],
    answer: 1,
    explanation: "Višji uradi nadzirajo nižje.",
  },

  {
    id: 161,
    category: "birokracija",
    difficulty: "hard",
    question: "Kako mora idealni uslužbenec opravljati svoje naloge?",
    options: [
      "Čustveno.",
      "Brezosebno.",
      "Po lastni presoji.",
      "Po želji strank.",
    ],
    answer: 1,
    explanation: "Naloge opravlja brez osebnih čustev in pristranskosti.",
  },

  {
    id: 162,
    category: "birokracija",
    difficulty: "medium",
    question: "Na podlagi česa so imenovani uslužbenci v idealni birokraciji?",
    options: [
      "Sorodstvenih vezi.",
      "Strokovnega znanja in kvalifikacij.",
      "Prijateljstev.",
      "Starosti.",
    ],
    answer: 1,
    explanation: "Položaj temelji na strokovnosti.",
  },

  {
    id: 163,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kako je Giddens opredelil globalizacijo?",
    options: [
      "Kot širjenje kapitalizma.",
      "Kot dejstvo, da ljudje vedno bolj živimo v enem svetu in postajamo soodvisni.",
      "Kot proces amerikanizacije.",
      "Kot razvoj interneta.",
    ],
    answer: 1,
    explanation:
      "Giddens poudarja vse večjo povezanost in soodvisnost ljudi po svetu.",
  },

  {
    id: 164,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kaj po Stiglitzu vključuje globalizacija?",
    options: [
      "Le mednarodno trgovino.",
      "Tok idej, znanja, deljenje kultur, globalno civilno družbo in okoljska gibanja.",
      "Samo gospodarske spremembe.",
      "Le razvoj interneta.",
    ],
    answer: 1,
    explanation: "Stiglitz vidi globalizacijo kot večdimenzionalen proces.",
  },

  {
    id: 165,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kaj poudarja Beck pri globalizaciji?",
    options: [
      "Krepitev nacionalnih držav.",
      "Transnacionalni akterji spodkopavajo moč nacionalnih držav.",
      "Izolacijo držav.",
      "Propad interneta.",
    ],
    answer: 1,
    explanation: "Beck poudarja zmanjševanje moči nacionalnih držav.",
  },

  {
    id: 166,
    category: "globalizacija",
    difficulty: "easy",
    question: "Ali globalizacija poteka samo na ekonomskem področju?",
    options: ["DA", "NE"],
    answer: 1,
    explanation:
      "Globalizacija vpliva tudi na kulturo, politiko, tehnologijo in okolje.",
  },

  {
    id: 167,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kateri dejavniki vplivajo na globalizacijo?",
    options: [
      "Tehnološki razvoj, ekonomski dejavniki in politične spremembe.",
      "Le internet.",
      "Le gospodarstvo.",
      "Le politika.",
    ],
    answer: 0,
    explanation:
      "Na globalizacijo vplivajo tehnologija, ekonomija in politika.",
  },

  {
    id: 168,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kaj zmanjšata razvoj informacijske tehnologije in prometa?",
    options: [
      "Kulturne razlike.",
      "Vpliv prostorske in časovne oddaljenosti.",
      "Število prebivalcev.",
      "Davke.",
    ],
    answer: 1,
    explanation: "Svet postaja manjši zaradi hitre komunikacije in transporta.",
  },

  {
    id: 169,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kaj pomeni McDonaldizacija?",
    options: [
      "Širjenje ameriške hitre prehrane.",
      "Poenotenje življenjskih slogov in kulturnih vzorcev.",
      "Razvoj interneta.",
      "Globalno segrevanje.",
    ],
    answer: 1,
    explanation:
      "McDonaldizacija pomeni standardizacijo in poenotenje družbenega življenja.",
  },

  {
    id: 170,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kaj je elektronska ekonomija?",
    options: [
      "Nakupovanje preko spleta.",
      "Upravljanje s kapitalom po svetu s klikom miške.",
      "Digitalno bančništvo.",
      "Kriptovalute.",
    ],
    answer: 1,
    explanation: "Kapital se lahko danes hitro premika po svetu.",
  },

  {
    id: 171,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kako Bauman imenuje države v času globalizacije?",
    options: [
      "Močne države.",
      "Šibke države.",
      "Digitalne države.",
      "Minimalne države.",
    ],
    answer: 1,
    explanation: "Bauman govori o šibkih državah.",
  },

  {
    id: 172,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kako Beck imenuje države v času globalizacije?",
    options: [
      "Šibke države.",
      "Socialne države.",
      "Minimalne države.",
      "Subsidirane države.",
    ],
    answer: 2,
    explanation: "Beck uporablja izraz minimalne države.",
  },

  {
    id: 173,
    category: "globalizacija",
    difficulty: "hard",
    question: "Kako Močnik imenuje države v času globalizacije?",
    options: [
      "Subsidirane države.",
      "Minimalne države.",
      "Socialne države.",
      "Močne države.",
    ],
    answer: 0,
    explanation: "Močnik govori o subsidiranih državah.",
  },

  {
    id: 174,
    category: "globalizacija",
    difficulty: "hard",
    question:
      "Kaj omogoča transnacionalnim korporacijam izigravanje nacionalnih držav?",
    options: [
      "Možnost selitve proizvodnje in kapitala.",
      "Vojaška moč.",
      "Podpora EU.",
      "Mediji.",
    ],
    answer: 0,
    explanation: "Podjetja lahko iščejo države z nižjimi stroški in davki.",
  },

  {
    id: 175,
    category: "globalizacija",
    difficulty: "medium",
    question: "Kaj je povzročil padec komunizma v vzhodni Evropi?",
    options: [
      "Izolacijo držav.",
      "Širjenje kapitalistične ureditve.",
      "Konec globalizacije.",
      "Propad trgovine.",
    ],
    answer: 1,
    explanation: "Države so začele prehajati v kapitalistični sistem.",
  },
];
