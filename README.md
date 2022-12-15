# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Brianne de Deugd

  #### Je startniveau:
  Rood

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp

  #### Screenshot(s) van de eerste pagina (small screen): 
  BOL.COM - homepagina  
  <img src="readme-images/bolhome.jpeg" width="375px" alt="de homepagina van bol.com, zonder ingelogd te zijn">

  #### Screenshot(s) van de tweede pagina (small screen):
  BOL.COM - boekpagina  
  <img src="readme-images/bolboek.jpeg" width="375px" alt="een boekpagina van bol.com, zonder filters">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details open>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  Op Bol.com zijn er wel heel veel koppen, omdat elke knop (zoals de categorieën) als kop wordt beschouwd. Daardoor duurt het heel lang om te navigeren door de gehele homepagina.

  Koppen kunnen als links worden beschouwd als ze verwijzen naar een andere pagina zoals de categorieën. In dat geval heb je een kop 'categorieën' en kan de gebruiker zelf kiezen of ze deze allemaal opgelezen willen of niet.


  #### Muis en Toetsenbord 
  Met tab kan je op bol.com alles selecteren, maar er is geen manier om dropdowns 'down' te laten 'droppen'. Ook kan je met tab niet teruggaan, dus als je per ongeluk twee keer op tab kunt heb je geen manier om terug te gaan.

  Tab moet gebruiksvriendelijker dan het nu is. Hoe kan je elementen uitvouwen? Hoe kan je terug? Etc.


  #### Motoriek (shocks, elastiekjes)
  Door de shocks duurde het heel lang om de vinger op de juiste knop te krijgen. Je bent constant bezig met wat er gebeurt in je lichaam, waardoor je focus verliest als het gaat om het behalen van je doel, je wordt tegengehouden van de dingen die je wil doen.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hemifield Loss - je denkt alles te zien, maar dat is niet zo. In eerste instantie lijkt het of er geen verschil is. Maar je mist van alles.

  Peripheral Field Loss - je kijkt eigenlijk letterlijk door een notendop, dus in plaats van dat je je ogen beweegt, moet je wel je hoofd bewegen. Bol heeft veel grote elementen met tekst die over een groot deel van de breedte spreid, waardoor je beter en langer moet lezen. Dit kan opgelost worden door meer gebruik te maken van kolommen.

  Low Contrast - geeft veel hoofdpijn, en laat alleen globale kleuren zien. Wel heb je soms roze vlakken met blauwe tekst erop, dat is nauwelijks te lezen. 

  Al in al kunnen er meer kolommen gebruikt worden zodat meer elementen in één opslag te vinden/bekijken zijn. Ook mag het contrast veel hoger in geval van kleurenblindheid.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/htmlbreakdowns.jpg" width="375px" alt="breakdown van de hele pagina">

</details>





## Voortgang 1 (week 2)

<details open>
<summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Flexbox en order ging goed. Ook scrollen binnen containers, custom forms etc.
  <img src="./readme-images/menuv1.png" alt="Screenshot van de header">
  <img src="./readme-images/codecategorie.png" alt="Screenshot van de code van de categorie sectie">
  <img src="./readme-images/categoriev1.png" alt="Screenshot van de sectie 'Kies een categorie'">


  ### Agenda voor meeting

  | Brianne                        | Taurese                  | Lars H.                  | student 4                |
  | ---                            | ---                      | ---                      | ---                      |
  | Ik kan niet altijd :nth-of-    | Wil een li veranderen    | Wat is de beste start    | ...                      |
  | child gebruiken. Bijv. als ik  | dmv een timer            | voor het css'en?         | ...                      |
  | de 1e section een background-  |                          |                          | ...                      |
  | image wil geven. Wat moet ik   |                          |                          | ...                      |
  | dan doen? (zelfde met links)   |                          |                          | ...                      |        


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Het is gelukt om meer met specifiekere selectoren te doen, zoals :first-of-type en '>' om directe kinderen te selecteren.

</details>





## Voortgang 2 (week 3)

<details open>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  Ik ben heel blij met hoe mijn hamburger-menu is geworden:
  <img src="./readme-images/hamburgermenu.png" width="375px" alt="Hamburger menu screenshot">
  En ik ben ook trots op mijn footer:
  <img src="./readme-images/footer.png" width="375px" alt="Footer screenshot">
  Ik vind dat de spacing hier echt goed is gelukt en dat het er netjes uitziet! Ook ben ik denk ik goed bezig geweest met nieuwe dingen
  zoals ":not(:first-of-type):"
  <img src="./readme-images/codeselector.png" width="375px" alt="Code van CSS screenshot">



  ### Agenda voor meeting
  samen met je groepje opstellen

  Brianne:
  Ik loop nu tegen kleine dingen aan, zoals de ruimte onder mijn header+ de alignment van de 'ontdek meer' knop. Daarnaast weet ik niet waar ik moet beginnen met de toggle van het onderste menu.

  Taurese:
  Wil weten hoe je een dropdown in een footer plaatst.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - De ruimte is gefixt! Ik kan ook de methode van de toggles en de responsiveness ervan verwerken voor mijn navbar en de footer.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details open>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Je website gaat hierarchies van onder naar boven met de reader. Eerst het logo, dan hamburger menu, de Items in het hamburger menu, de header links (de logo’tjes), zoekbalk input, zoek logo dingetje om je zoekopdracht te zoeken. Kies een categorie (kop niveau twee zegt hij) hij leest dat niet voor (kies een categorie/ shop de look, ontdek alles bij bol). Alt bij afbeeldingen missen niet dat gaat goed. Ontdek alle looks, Bij ontdek alles bij bol: alle kopjes zoals boek / muziek film games. Service & contact leest hij niet voor, meld je aan leest hij als enige voor.

  Met de screenreader gaat alles goed, ik moet alleen kijken waarom hij 'Service & Contact' niet voorleest.


  #### Muis en Toetsenbord 
  Tabs & Muis

  Tabjes - pagina 1: In het begin is het nog niet duidelijk genoeg als je met de tabjes start. Hij begint bij je logo en dan gaat hij naar je menu. Het duurt 8 tabs voor je de andere icoontjes krijgt. De header pakt hij niet qua active state. Kies een categorie, shop de look en ontdek alles bij bol selecteert hij goed. Alles in de footer pakt hij ook met tabben. Tabben door je hamburger menu gaat gemakkelijk. 
  Tabjes -  pagina 2: De tab pagina werkt op alle linkjes, ook de hamburger menu, zelfde verhaal als pag 1. 

  Met muis  - pagina 1: 
  Klikken op het menu gaat gemakkelijk. Alleen het sluiten, de sluitknop (het kruisje) zit niet op dezelfde hoogte. Alle linkjes op je site reageren nog niet als states, maar je ziet wel dat de curser in een handje veranderd dus dat is goed. Alleen nu nog wat verduidelijken. Verder zie ik geen states uitgewerkt, die moeten nog toegevoegd worden. 
  Met muis - pagina 2: Zelfde verhaal als pag 1.

  Dark mode & kleuren

  Dark mode - pagina 1: Heeft geen dark mode, moet nog toegevoegd worden. 
  Dark mode - pagina 2:  Heeft geen dark mode, moet nog toegevoegd worden. 

  Kleuren testen - pagina 1:  Bol heeft al de juiste kleuren, misschien met states dat je daar extra op kan letten als je het kleurtje veranderd / toevoegd. 
  Kleuren testen - pagina 2: Blue Cone Monochromacy / Achromatomaly (De gele knop heeft minder contrast). Bij Monochromacy / Achromatopsia (Hierbij is het contrast werkelijk minder, hier zou je naar kunnen kijken, niet per se nodig. Blue-Blind / Tritanopia (Hierbij lijkt het blauw allemaal een beetje hetzelfde).


  Wat ik hiermee ga doen: Dark mode toevoegen.


  #### Motoriek (shocks, elastiekjes)
  Parkison: Wat naar om Parkinson te hebben, de site bedienen gaat wel goed. 
  Concentratie: De website bedienen als je niet geconcentreerd bent gaat goed, sommige iconen kunnen een beetje groter.

  Ik kan iconen iets groter maken.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Visuele beperking voor beide pagina’s: Combined Loss Diabetic Eye Disease, Hemifield Loss (Alles kan ik goed zien), Peripheral Field Loss (Je ziet niks, komt niet door de site), Central field loss (Dingen met zwart zijn lastiger te zien),  Color Yellow (Je ziet geen contrast, dat is gek). 

  Ik kan kijken of iconen iets groter te maken zijn en bij de verschillende states misschien animaties toevoegen zodat deze niet alleen afhankelijk zijn van kleur.,

</details>





## Voortgang 3 (week 4)

<details open>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  Ik ben trots op het feit dat ik mijn nav bar responsive heb gemaakt met grid!
  <img src="./readme-images/menuv2.png" width="375px" alt="Navbar op klein scherm screenshot">
  <img src="./readme-images/menuv2-grootscherm.png" width="375px" alt="Navbar op groot scherm screenshot">

  ### Agenda voor meeting
  samen met je groepje opstellen

  Brianne: ik wil graag weten hoe ik iconen (images) verander als de grootte van mijn scherm verandert met JavaScript en Css, en of het semantisch correct is om meerdere p’s onder elkaar te hebben of dat daar een andere mogelijkheid voor is. Als laatste wil ik mijn foto’s en tekstgroottes responsive maken.

  Taurese: Ik weet niet hoe ik de header die we in de les hebben gemaakt er goed uit kan laten zien op de desktop versie. En dat mijn navigatie voor een of andere reden niet opent op mijn tweede pagina desondanks de code precies hetzelfde is (css & javascript).

  Lars: Ik wil graag weten hoe ik het best de icons uit de site krijg. Verder wil ik weten hoe je mijn menue omzet naar een dropdown. Ook wil ik een beetje info over hoe ik mijn site kan laten verspringen naar 2/3 rows op desktop.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - svg helemaal in html plakken en dan met fill: in css de kleur veranderen.
  - in media query de em van images en tekst aanpassen om te scalen
  - section::-webkit-scrollbar {
    display:none;
    }
    om de scrollbar te verbergen in die ene categorieën.

</details>





## Eindgesprek (week 5)

<details open>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Pagina 1: De homepagina
  <img src="readme-images/BriannesBolhome_Kleinscherm.png" width="375px" alt="uitkomst opdracht 1 homepagina klein">
  <img src="readme-images/BriannesBolhome_Middelscherm.png" width="375px" alt="uitkomst opdracht 1 homepagina middel">
  <img src="readme-images/BriannesBolhome_Grootscherm.png" width="375px" alt="uitkomst opdracht 1 homepagina groot">

  Pagina 2: De boekpagina
  <img src="readme-images/BriannesBolboek_Kleinscherm.png" width="375px" alt="uitkomst opdracht 1 boekpagina klein">
  <img src="readme-images/BriannesBolboek_Middelscherm.png" width="375px" alt="uitkomst opdracht 1 boekpagina middel">
  <img src="readme-images/BriannesBolboek_Grootscherm.png" width="375px" alt="uitkomst opdracht 1 boekpagina groot">

  ### Dit ging goed/Heb ik geleerd: 
  Ik heb geleerd hoe ik elementen responsive maak door ze uit te klappen en de code te veranderen, waarbij ik ook heb geleerd hoe ik @media gebruik voor responsiveness. Hierbij ben ik vooral trots op de responsiveness van mijn header en footer, die volgens mij best lijken op de originelen.

  <img src="readme-images/responsivefooter.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Eigenlijk is alles wat ik wilde gelukt. Als ik meer tijd had gehad, had ik waarschijnlijk meer sections toegevoegd aan de homepagina om het wat voller te laten ogen, maar ik heb alles wat ik van tevoren had gepland wel uit kunnen voeren, dus ik vind niet dat ik daarover mag klagen.

  Wat ik wel jammer vind is dat het niet gelukt is om de site donker te maken bij het uitklappen van mijn dropdowns in het menu van het grote scherm. Op zich was dit namelijk gelukt, maar omdat ik het met een transparante div had gedaan die boven de main zat, kon ik vervolgens nergens op klikken. Ik heb dit uiteindelijk maar weggelaten omdat ik er echt niet uitkwam.

  <img src="readme-images/homecontent.png" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. A Complete Guide To Flexbox: voor align-items, align-content, justify-content en het uitlijnen van icons met tekst.
    (https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties)
  2. StackOverflow: om erachter te komen wat de reden was achter het feit dat align-self niet leek te werken. Het kwam omdat ik display: flex gebruikte.
    (https://stackoverflow.com/questions/61767121/css-flex-box-justify-self-align-self-not-working)
  3. Developer.mozilla.org: mijn padding-left leek niet te werken, bleek dat het kwam omdat ik op een andere regel voor hetzelfde element een padding-left gebruikte en hij die overnam. Aan de bron had ik dus niet veel, maar het was wel erg informatief. 
    (https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
  4. Codepen.io: de codepen die we tijdens het tweede voortgangsgesprek volgden heb ik gebruikt voor de responsive dropdowns op home en in mijn footer, met een aantal aanpassingen.
    (https://codepen.io/shooft/pen/zYamYyx)
  5. StackOverflow: ik was even kwijt hoe ik ookweer een image netjes naast mijn tekst kon alignen, in een button bijvoorbeeld. Dat was gewoon met justify-content.
    (https://stackoverflow.com/questions/489340/vertically-align-text-next-to-an-image)
  6. Codepen.io: voor de responsive header wilde ik graag weten hoe ik op een hover een dropdown kon maken. Ik heb daarvoor een paar dingen uit deze codepen kunnen halen.
    (https://codepen.io/una/pen/Gxwogy)
  7. Discourse.webflow.com: Bij de hover van de header moest de rest van de pagina donkerder worden om het contrast te verhogen. Da's gelukt met deze 'tip'.
    (https://discourse.webflow.com/t/how-do-i-darken-the-rest-of-the-page-behind-a-dropdown-menu/17492)

</details>