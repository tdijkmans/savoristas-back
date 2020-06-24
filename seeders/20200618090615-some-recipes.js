"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "recipes",
      [
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_502710-01_560x560.jpg",
          name: "Zalmrollade met basilicum-citroenpesto",
          description: "Zalmrollade met basilicum-citroenpesto",
          recipeYield: "4",
          cookTime: "PT50M",
          recipeInstructions:
            "Pureer met de staafmixer de basilicum met de pijnboompitten, knoflook en olijfolie glad. Rasp het geel van de schil van de citroen. Schep de citroenrasp met de kaas door de basilicumpasta. Breng de pesto op smaak met peper. Verwarm de oven voor tot 220 ?C. Snijd de zalmfilet horizontaal open als een boek (snijd de filet dus niet helemaal door!). Vouw de zalmfilet open en bestrijk de snijvlakken met de pesto. Rol de opengeslagen zalmfilet vanaf de brede kant als een rollade op. Rol de zalmrollade vervolgens in de hamplakjes. Bind de rollade vervolgens rondom vast met keukentouw, of zet de rollade vast met cocktailprikkers. Leg de rollade in de braadslede en bestrooi met peper naar smaak.     Bak de zalmrollade in de voorverwarmde oven in 20-25 min. bruin en vanbinnen rosé of naar wens gaar.",
        },
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_347434-01_560x560.jpg",
          name: "Stufato di carne",
          description: "Stufato di carne",
          recipeYield: "4",
          cookTime: "PT120M",
          recipeInstructions:
            "Verhit de olie in een braadpan. Bestrooi de hamlappen met zout en peper naar smaak en bak ze in ca. 4 min. aan beide kanten bruin aan. Neem het vlees uit de pan. Fruit de ui met de bleekselderij en de bospeen ca. 1 min. in het bakvet. Schep de laurier, de tijm en de rozemarijn erdoor. Voeg de tomatenpuree toe en bak alles ca. 1 min. Voeg de knoflook en de wijn toe en verwarm nog ca. 1 min. Schenk de bouillon in de pan en breng aan de kook. Leg het vlees terug in de pan. Draai het vuur laag en stoof de hamlappen afgedekt in 1.5 uur gaar. Kook ondertussen de sugarsnaps in water met zout in ca. 3 min. beetgaar. Giet af, spoel ze onder koud stromend water en zet ze apart. Voeg vlak voor het serveren de balsamicoazijn, de sugarsnaps, de basilicum en zout en peper naar smaak aan de hamlappen toe.",
        },
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_500514-01_560x560.jpg",
          name: "Antipasto van groenten met balsamicovinagrette",
          description: "Antipasto van groenten met balsamicovinagrette",
          recipeYield: "4",
          cookTime: "PT15M",
          recipeInstructions:
            "Verhit een grillpan. Bestrijk de courgette en de paprika dun met olijfolie en gril de groenten in 3 min. per kant mooi bruin en beetgaar. Leg de groenten in een schaal. Besprenkel ze met olijfolie en bestrooi met zout en peper naar smaak. Meng de uienringen en de tomaten met de helft van de vinaigrette. Snijd ¹?? van de ciabatta in stukken. Schep het brood om met de laatste olijfolie. Rooster het brood in een droge koekenpan goudbruin en krokant. Schep het brood door de tomatensalade. Verdeel de gegrilde groenten over de borden. Besprenkel met de rest van de vinaigrette. Schep er de tomatensalade bij. Maak de borden af met de olijven en de basilicumblaadjes. Serveer met de rest van de ciabatta.",
        },
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_502978-01_560x560.jpg",
          name: "Knapperige worteltjes met lente-olie",
          description: "Knapperige worteltjes met lente-olie",
          recipeYield: "4",
          cookTime: "PT15M",
          recipeInstructions:
            "Kook de worteltjes in water met zout in 1-2 min. beetgaar. Giet ze af en laat goed uitlekken. Laat ze daarna op een brede schaal afkoelen tot kamertemperatuur. Doe de olijfolie in een schaaltje. Rasp de gember boven de olie. Voeg de komijn, kruiden en peper naar smaak toe. Verdeel de worteltjes over 4 borden. Schep er de kruidenolie over (of schep er de helft over en geef de rest van de olie er apart bij). Garneer de worteltjes met een toef tuinkers.",
        },
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_501098-01_560x560.jpg",
          name: "Tomaten-basilicumsoep met kaascrostini",
          description: "Tomaten-basilicumsoep met kaascrostini",
          recipeYield: "4",
          cookTime: "PT30M",
          recipeInstructions:
            "Verwarm de oven voor tot 200 °C. Verhit de olie in een soeppan. Fruit de ui, bleekselderij en knoflook 5 min. zonder te laten kleuren. Voeg de tomaten toe en bak 3 min. mee. Schenk het water in de pan en voeg de stelen van het basilicum toe; houd het blad apart. Breng de soep aan de kook. Draai het vuur laag en kook de soep 15 min. Leg intussen de plakjes stokbrood op de bakplaat en bestrooi ze met de kaas. Rooster het brood in de voorverwarmde oven in 8 min. goudbruin en krokant. Snijd of hak de basilicumblaadjes fijn. Neem de soep van het vuur en pureer met de staafmixer. Breng op smaak met het fijngehakte basilicum, zout naar smaak en peper. Schep de soep in 4 kommen en serveer met de kaascrostini.",
        },
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_501699-01_560x560.jpg",
          name: "Groentetajine met wilde perzik en pistache",
          description: "Groentetajine met wilde perzik en pistache",
          recipeYield: "4",
          cookTime: "PT25M",
          recipeInstructions:
            "Halveer de perziken, verwijder de pitten en snijd het vruchtvlees in partjes. Verhit in een tajine of hapjespan de olijfolie. Bak de wortel en ui 3  min. Schep de komijn, kaneel en perzik erdoor en bak nog 1 min. zachtjes. Schenk de tomatenblokjes in de pan. Schep de kikkererwten erdoor en stoof de tajine afgedekt 10 min. Bereid intussen de couscous volgens de aanwijzingen op de verpakking. Schep de couscous op 4 borden. Breng de tajine op smaak met peper en schep bij de couscous. Bestrooi met de munt en pistachenoten.",
        },
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_501298-01_560x560.jpg",
          name: "Bramenbavarois met kaneelroom",
          description: "Bramenbavarois met kaneelroom",
          recipeYield: "4",
          cookTime: "PT305M",
          recipeInstructions:
            "Week de blaadjes gelatine 5 min. in een kom met ruim koud water. Breng in een steelpan de bevroren bramen met 75 g suiker tegen de kook aan, draai het vuur laag en laat de suiker oplossen. Neem de pan van het vuur en pureer de bramen met de staafmixer.Los de goed uitgeknepen blaadjes gelatine in de puree op. Zet de pan in een bak met ijskoud water met ijsblokjes en laat de bramenpuree in 30-40 min. lobbig worden; roer af en toe.Klop met de mixer 250 ml slagroom bijna stijf (lobbig). Spatel de bramenpuree door de slagroom. Klop in een vetvrije kom met schone mixerhaken de eiwitten met een mespunt zout stijf. Spatel het eiwit in 2-3 porties door de bramenroom.Schep het mengsel in de vorm. Zet minimaal 4 uur in de koelkast. Klop de resterende slagroom met de kaneel en 25 g suiker stijf. Neem de bavarois uit de koelkast en stort op een schaal. Garneer met verse bramen en munt. Bestrooi met de poedersuiker. Serveer met de kaneelroom.",
        },
        {
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_501822-01_560x560.jpg",
          name: "Gepofte appel met gemberroom en walnoten",
          description: "Gepofte appel met gemberroom en walnoten",
          recipeYield: "4",
          cookTime: "PT40M",
          recipeInstructions:
            "Steek de barbecue aan. Verwijder met de appelboor de klokhuizen uit de appels. Zet de appels op een vel aluminiumfolie.Prak met een vork de suiker en vanillesuiker door de boter. Vul de appels met de vanilleboter. Steek er een kaneelstokje bij.Vouw de folie rond de appel omhoog en draai dicht. Pof de appels op de nagloeiende barbecue in 15-20 min. gaar. Meng intussen de gember met 2 el van de siroop door de crème fraîche.Zet de appelpakketjes op 4 borden en vouw ze iets open. Schep er de gemberroom bij en bestrooi met de walnoten.",
        },
        {
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_500287-01_560x560.jpg",
          name: "Pannenkoekjes met blauwe bessen en gembersiroop",
          description: "Pannenkoekjes met blauwe bessen en gembersiroop",
          recipeYield: "4",
          cookTime: "PT30M",
          recipeInstructions:
            "Zeef de bloem boven een kom. Voeg, al kloppend met een garde, het ei en de karnemelk langzaam toe. Klop tot een glad beslag.Verhit steeds een beetje olie in een koekenpan. Schep een soeplepel beslag in de pan en bak het pannenkoekje in 3 min. aan beide kanten goudbruin en gaar. Bak met de rest van de olie en het beslag nog 7 kleine pannenkoekjes. Houd de pannenkoekjes op een bord onder een deksel warm. Meng intussen de bessen met de gembersiroop.Vouw de pannenkoekjes in vieren en leg op de borden. Verdeel er de blauwe bessen met de gembersiroop over. Bestrooi met de munt.",
        },
        {
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            "https://static-images.jumbo.com/product_images/Recipe_500971-01_560x560.jpg",
          name: "Gerookte zalm met spicy zwartebonensalade",
          description: "Gerookte zalm met spicy zwartebonensalade",
          recipeYield: "4",
          cookTime: "PT33M",
          recipeInstructions:
            "Bestrijk de zalmfilets met de helft van de olijfolie en bestrooi met zout en peper. Meng voor de salade de kruiden met de rode peper, de gember en de bonen. Voeg de rest van de olijfolie toe en breng op smaak met zout en peper. Maak de rookoventjes gereed: schep ? van het zakje rookhout in de kleine compartimenten (lees ook de aanwijzingen op het zakje). Leg de zalm in de grote compartimenten. Plaats het aluminiumfoliedeksel op de bakjes en vouw de randen netjes en strak om de rand van de rookoventjes.Zet de rookoventjes op het metalen rooster van de barbecue en sluit de barbecue met een deksel. Afhankelijk van de temperatuur is de zalm in ca. 15-20 min. gaar.Verdeel de salade over de borden. Maak de rookoventjes voorzichtig open en serveer de zalm bij de salade.",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("recipes", null, {});
  },
};
