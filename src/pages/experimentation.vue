<template>
  <section class="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-10">
      Expérimentations matérielles
    </h1>
    <div class="space-y-16">
      <article
        id="exp1"
        class="bg-gray-50 border border-gray-200 rounded-xl p-8 scroll-mt-20"
      >
        <div class="flex items-center gap-4 mb-6">
          <span class="text-4xl font-bold text-blue-600">01</span>
          <h3 class="text-2xl font-bold text-gray-900">
            Lecture d'un tag RFID (RC522)
          </h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <img
              src="../../public/rfid1-BVTQlY3r.jpg"
              alt="Test RFID à très courte distance"
              class="w-3/4 rounded-lg shadow-md"
            />
            <p class="text-sm text-gray-600 mt-2">
              Test à distance très proche du capteur
            </p>
          </div>
          <div>
            <img
              src="../../public/rfid2-DGNk4jan.jpg"
              alt="Test RFID sous table 1cm"
              class="w-3/4 rounded-lg shadow-md"
            />
            <p class="text-sm text-gray-600 mt-2">
              Test en dessous d'une table d'environ 1cm
            </p>
          </div>
          <div>
            <img
              src="../../public/rfid3-ez4p0y7S.jpg"
              alt="Test RFID sous table 2.5cm"
              class="w-3/4 rounded-lg shadow-md"
            />
            <p class="text-sm text-gray-600 mt-2">
              Test en dessous d'une table d'environ 2.5cm
            </p>
          </div>
          <div>
            <img
              src="../../public/rfid4-D149t7n4.jpg"
              alt="Matériel RFID connecté"
              class="w-3/4 rounded-lg shadow-md"
            />
            <p class="text-sm text-gray-600 mt-2">Matériel connecté</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg mb-6">
          <h4 class="font-semibold text-lg text-gray-900 mb-4">
            Informations techniques
          </h4>
          <ul class="text-base text-gray-700 space-y-2">
            <li>
              <b>Membres de l'équipe :</b> Fabio Mora Gonzalez, Samuel
              Dussault-Gagnon
            </li>
            <li>
              <b>Technologies utilisées :</b> Arduino Uno, Capteur RFID RC522
            </li>
            <li>
              <b>Objectif principal :</b> Lire l'identifiant unique d'une carte
              RFID et l'afficher dans le moniteur série
            </li>
            <li>
              <b>Contexte d'expérimentation :</b> Test réalisé avec le module
              RC522 relié à un Arduino Uno. Le but était de valider la détection
              d'un tag RFID à courte distance et la communication. Plusieurs
              tests ont été effectués à différentes distances pour déterminer la
              portée optimale du capteur.
            </li>
          </ul>
        </div>
        <details class="mb-6 bg-white p-6 rounded-lg">
          <summary
            class="cursor-pointer text-blue-600 text-base font-semibold hover:text-blue-700"
          >
            Voir le code Arduino utilisé
          </summary>
          <pre
            class="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 mt-4 overflow-x-auto"
          >
            #include &lt;SPI.h&gt;
            #include &lt;MFRC522.h&gt;

            #define RST_PIN 9
            #define SS_PIN 10

            MFRC522 mfrc522(SS_PIN, RST_PIN);

            void setup() {
            Serial.begin(9600);
            SPI.begin();
            mfrc522.PCD_Init();
            Serial.println(F("Scan a card..."));
            }

            void loop() {
            if (!mfrc522.PICC_IsNewCardPresent()) return;
            if (!mfrc522.PICC_ReadCardSerial()) return;

            Serial.print(F("UID tag:"));
            for (byte i = 0; i &lt; mfrc522.uid.size; i++) {
                Serial.print(mfrc522.uid.uidByte[i], HEX);
                Serial.print(" ");
            }
            Serial.println();
            mfrc522.PICC_HaltA();
            }
        </pre
          >
        </details>
        <div class="bg-white p-6 rounded-lg mb-6">
          <h4 class="font-semibold text-lg text-gray-900 mb-3">
            Résultats obtenus
          </h4>
          <p class="text-base text-gray-700 mb-4">
            Le capteur a détecté correctement les tags RFID à différentes
            distances. Les identifiants s'affichaient clairement dans le
            moniteur série avec une petite latence. Les tests sous la table ont
            démontré que le capteur peut fonctionner à travers une surface fine.
          </p>
          <h4 class="font-semibold text-lg text-gray-900 mb-3">
            Analyse et recommandations
          </h4>
          <p class="text-base text-gray-700">
            Le capteur fonctionne très bien à courte distance (1.5cm maximum
            environ). Pour une détection à travers une table, nous recommandons
            une épaisseur maximale de 1cm pour maintenir une détection fiable.
            Le positionnement des tags est critique : ils doivent être bien
            alignés avec le capteur pour une lecture optimale. Cette technologie
            est idéale pour reconnaître des objets placés sur la table de jeu,
            tant que celle-ci est suffisamment fine.
          </p>
        </div>
        <div class="mt-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <img
            src="../../public/documentation-sam-XFaPtOA-.jpg"
            alt="Samuel lit la documentation Arduino"
            class="w-1/2 rounded-lg shadow-md mb-3 mx-auto"
          />
          <p class="text-sm italic text-center text-gray-700">
            Samuel consultant la documentation Arduino - un moment historique
            capturé sur pellicule
          </p>
        </div>
      </article>
      <article
        id="exp2"
        class="bg-gray-50 border border-gray-200 rounded-xl p-8 scroll-mt-20"
      >
        <div class="flex items-center gap-4 mb-6">
          <span class="text-4xl font-bold text-blue-600">02</span>
          <h3 class="text-2xl font-bold text-gray-900">
            Détection de distance avec le capteur HC-SR04
          </h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <img
              src="../../public/ultrasonique-CEIbEkwR.jpg"
              alt="Matériel capteur ultrasonique"
              class="w-3/4 rounded-lg shadow-md"
            />
            <p class="text-sm text-gray-600 mt-2">
              Montage du capteur ultrasonique HC-SR04
            </p>
          </div>
          <div>
            <img
              src="../../public/ultrasonique2-Ddz_8n5Y.jpg"
              alt="Code ultrasonique en fonction"
              class="w-3/4 rounded-lg shadow-md"
            />
            <p class="text-sm text-gray-600 mt-2">
              Démonstration du code en fonctionnement
            </p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg mb-6">
          <h4 class="font-semibold text-lg text-gray-900 mb-4">
            Informations techniques
          </h4>
          <ul class="text-base text-gray-700 space-y-2">
            <li>
              <b>Membres de l'équipe :</b> Antoine Boudreau et Gabriel Gingras
            </li>
            <li>
              <b>Technologies utilisées :</b> Arduino Uno, Capteur Ultrasonique
              HC-SR04
            </li>
            <li>
              <b>Objectif principal :</b> Mesurer la distance d'un objet
              au-dessus du capteur pour détecter la présence d'un joueur
            </li>
            <li>
              <b>Contexte d'expérimentation :</b> Test avec affichage des
              distances en centimètres dans le moniteur série. La visée était
              d'obtenir une détection stable et précise jusqu'à environ 50 cm de
              distance (selon nos tests). Le capteur utilise des ondes
              ultrasoniques pour calculer la distance en mesurant le temps de
              retour de l'écho.
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg mb-6">
          <h4 class="font-semibold text-lg text-gray-900 mb-3">
            Résultats obtenus
          </h4>
          <p class="text-base text-gray-700 mb-4">
            Les mesures de distance étaient fiables et cohérentes. Les surfaces
            lisses et planes donnaient les résultats les plus précis, tandis que
            les surfaces texturées ou absorbantes présentaient des variations
            légèrement plus importantes.
          </p>
          <h4 class="font-semibold text-lg text-gray-900 mb-3">
            Analyse et recommandations
          </h4>
          <p class="text-base text-gray-700">
            Le capteur HC-SR04 s'est révélé simple à utiliser et suffisamment
            précis pour notre application. Il permet de détecter efficacement la
            présence d'un joueur assis à la table en mesurant la distance entre
            le capteur et la personne. La portée de détection jusqu'à 50 cm est
            largement suffisante pour notre cas d'usage. Nous recommandons de
            positionner le capteur de manière à éviter les angles morts et les
            interférences avec d'autres objets sur la table.
          </p>
        </div>
      </article>
      <article
        id="exp3"
        class="bg-gray-50 border border-gray-200 rounded-xl p-8 scroll-mt-20"
      >
        <div class="flex items-center gap-4 mb-6">
          <span class="text-4xl font-bold text-blue-600">03</span>
          <h3 class="text-2xl font-bold text-gray-900">
            Test de projection sur la surface de jeu
          </h3>
        </div>
        <div class="mb-8">
          <img
            src="../../public/projecteur-y78sSTw4.jpg"
            alt="Tests de projection sur la table"
            class="w-1/2 rounded-lg shadow-md mx-auto"
          />
          <p class="text-sm text-gray-600 mt-2 text-center">
            Configuration du projecteur pour l'affichage sur la table de jeu
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg mb-6">
          <h4 class="font-semibold text-lg text-gray-900 mb-4">
            Informations techniques
          </h4>
          <ul class="text-base text-gray-700 space-y-2">
            <li>
              <b>Membres de l'équipe :</b> Gabriel Gingras et Antoine Boudreau
            </li>
            <li>
              <b>Technologies utilisées :</b> Projecteur Epson PowerLite 1780W
            </li>
            <li>
              <b>Objectif principal :</b> Vérifier la clarté, la luminosité et
              l'angle de projection sur la table pour afficher le jeu de manière
              optimale
            </li>
            <li>
              <b>Contexte d'expérimentation :</b> Le projecteur a été testé à
              différentes hauteurs et angles pour trouver la configuration
              optimale. Le film The Social Network nous à servit de média pour
              tester ce projecteur
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg mb-6">
          <h4 class="font-semibold text-lg text-gray-900 mb-3">
            Résultats obtenus
          </h4>
          <p class="text-base text-gray-700 mb-4">
            L'image projetée est remarquablement nette et claire. La luminosité
            du projecteur Epson PowerLite 1780W nécessite une pièce assez sombre
            pour bien fonctionner. Les couleurs étaient vives et fidèles, ce qui
            est essentiel pour une expérience de jeu immersive.
          </p>
          <h4 class="font-semibold text-lg text-gray-900 mb-3">
            Analyse et recommandations
          </h4>
          <p class="text-base text-gray-700">
            Le projecteur répond parfaitement aux besoins du prototype. Pour
            l'installation finale, nous devrons ajuster soigneusement la
            position du projecteur afin de minimiser les ombres projetées par
            les joueurs et leurs mains pendant le jeu.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
