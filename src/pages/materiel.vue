<template>
    <main class="min-h-screen bg-gray-200 py-10 px-6 sm:px-10 lg:px-20">
        <section
            class="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10"
        >
            <h2 class="text-lg font-medium text-gray-900 mb-6">
                Matériel utilisé
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
                    <h3 class="font-semibold text-gray-900 mb-2">
                        Raspberry Pi 4
                    </h3>
                    <ul class="text-sm text-gray-700 space-y-1">
                        <li><b>Fabricant :</b> Raspberry Pi Foundation</li>
                        <li><b>Modèle :</b> Raspberry Pi 4 Model B</li>
                        <li>
                            <b>Lien :</b>
                            <a
                                href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/"
                                target="_blank"
                                class="text-blue-500 underline"
                                >Fiche technique</a
                            >
                        </li>
                        <li>
                            <b>Usage :</b> Gère la logique du jeu et l’affichage
                            à l’écran
                        </li>
                        <li>
                            <b>Justification :</b> Petit ordinateur fiable et
                            assez puissant pour tout gérer
                        </li>
                        <li>
                            <b>Expérimenté par :</b> Antoine Boudreau, Samuel
                            Dussault-Gagnon
                        </li>
                    </ul>
                </div>

                <div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
                    <h3 class="font-semibold text-gray-900 mb-2">
                        Arduino Uno
                    </h3>
                    <ul class="text-sm text-gray-700 space-y-1">
                        <li><b>Fabricant :</b> Arduino.cc</li>
                        <li><b>Modèle :</b> Arduino Uno R3</li>
                        <li>
                            <b>Lien :</b>
                            <a
                                href="https://store.arduino.cc/products/arduino-uno-rev3"
                                target="_blank"
                                class="text-blue-500 underline"
                                >Fiche technique</a
                            >
                        </li>
                        <li>
                            <b>Usage :</b> Reçoit les données des capteurs et
                            les envoie au Raspberry Pi
                        </li>
                        <li>
                            <b>Justification :</b> Simple à utiliser et parfait
                            pour connecter plusieurs capteurs
                        </li>
                        <li><b>Expérimenté par :</b> Samuel Dussault-Gagnon</li>
                    </ul>
                </div>

                <div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
                    <h3 class="font-semibold text-gray-900 mb-2">
                        Capteur Ultrasonique HC-SR04
                    </h3>
                    <ul class="text-sm text-gray-700 space-y-1">
                        <li><b>Fabricant :</b> Waveshare</li>
                        <li><b>Modèle :</b> HC-SR04</li>
                        <li>
                            <b>Lien :</b>
                            <a
                                href="https://www.sparkfun.com/products/15569"
                                target="_blank"
                                class="text-blue-500 underline"
                                >Fiche technique</a
                            >
                        </li>
                        <li>
                            <b>Usage :</b> Mesure la distance pour détecter si
                            un joueur est assis
                        </li>
                        <li>
                            <b>Justification :</b> Précis, peu coûteux et facile
                            à tester avec Arduino
                        </li>
                        <li><b>Expérimenté par :</b> Antoine Boudreau</li>
                    </ul>
                </div>

                <div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
                    <h3 class="font-semibold text-gray-900 mb-2">
                        Capteur RFID RC522
                    </h3>
                    <ul class="text-sm text-gray-700 space-y-1">
                        <li><b>Fabricant :</b> MFRC522</li>
                        <li><b>Modèle :</b> RC522 RFID Reader</li>
                        <li>
                            <b>Lien :</b>
                            <a
                                href="https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf"
                                target="_blank"
                                class="text-blue-500 underline"
                                >Fiche technique</a
                            >
                        </li>
                        <li>
                            <b>Usage :</b> Identifier des cartes ou des objets
                            placés sur la table
                        </li>
                        <li>
                            <b>Justification :</b> Permet d’ajouter une
                            interaction unique entre les joueurs et le jeu
                        </li>
                        <li><b>Expérimenté par :</b> Fabio Mora Gonzalez</li>
                    </ul>
                </div>

                <div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
                    <h3 class="font-semibold text-gray-900 mb-2">Projecteur</h3>
                    <ul class="text-sm text-gray-700 space-y-1">
                        <li><b>Fabricant :</b> Epson</li>
                        <li><b>Modèle :</b> H795A (PowerLite 1780W)</li>
                        <li>
                            <b>Lien :</b>
                            <a
                                href="https://epson.ca/For-Work/Projectors/Portable/PowerLite-1780W-Wireless-WXGA-3LCD-Projector/p/V11H795020-F"
                                target="_blank"
                                class="text-blue-500 underline"
                                >Fiche technique</a
                            >
                        </li>
                        <li>
                            <b>Usage :</b> Projette le jeu directement sur la
                            table
                        </li>
                        <li>
                            <b>Justification :</b> Bonne luminosité et image
                            nette, idéale pour les tests
                        </li>
                        <li><b>Expérimenté par :</b> Gabriel Gingras</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>
