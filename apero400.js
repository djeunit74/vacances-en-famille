/* 339 défis supplémentaires, générés en combinaisons originales et familiales */
const extraChallenges=[];
const sujets=['animaux','pays','villes françaises','fruits','sports','métiers','films','dessins animés','objets de cuisine','choses de vacances','animaux marins','prénoms','aliments','objets ronds','choses bleues','objets de poche','capitales européennes','choses qui font du bruit','desserts','choses commençant par P'];
const mimes=['un pingouin pressé','un serveur maladroit','un chat qui découvre l’eau','un touriste perdu','un robot en vacances','un footballeur qui marque','un chanteur d’opéra','un professeur très sévère','un super-héros fatigué','un cuisinier catastrophe','une mouette voleuse','un magicien ratant son tour','un chien qui veut jouer','un nageur champion','un pirate qui a perdu son bateau'];
const themes=['les vacances','la famille','la piscine','la plage','un voyage sur Mars','une soirée parfaite','un restaurant catastrophique','un super-pouvoir inutile','une journée sans téléphone','le meilleur dessert du monde','un animal qui parle','un camping de luxe'];
const mots=['bateau','soleil','vacances','pizza','famille','piscine','ballon','chapeau','musique','glace','apéro','serviette'];
const phrases=['Passe-moi les chips','Les vacances, c’est sérieux','Qui a mangé la dernière chips ?','Je suis le champion de l’apéro','Attention, la mouette arrive !','Ce soir, je gagne','Personne ne touche au dessert'];
function add(t,p,c){if(extraChallenges.length<339)extraChallenges.push([t,p,c])}
for(let i=0;i<sujets.length&&extraChallenges.length<339;i++){
 const s=sujets[i],n=3+(i%4),sec=10+(i%3)*5;
 add(`Cite ${n} ${s} en moins de ${sec} secondes.`,2,'Rapidité');
 add(`À tour de rôle, citez un élément de la catégorie « ${s} ». Le premier qui bloque perd.`,3,'Duel');
 add(`Donne trois indices pour faire deviner un élément de la catégorie « ${s} ».`,2,'Culture');
 add(`Trouve autour de vous quelque chose qui te fait penser à « ${s} » et explique pourquoi.`,2,'Observation');
}
for(let i=0;i<mimes.length&&extraChallenges.length<339;i++){
 const m=mimes[i];
 add(`Mime ${m}. Les autres ont 20 secondes pour trouver.`,2,'Mime');
 add(`Imite ${m} uniquement avec des sons.`,2,'Mime');
 add(`Joue une scène de 15 secondes avec ${m} comme personnage principal.`,3,'Créatif');
 add(`Fais ${m} qui essaie de commander au restaurant.`,3,'Rire');
}
for(let i=0;i<themes.length&&extraChallenges.length<339;i++){
 const t=themes[i];
 add(`Invente un slogan sur ${t}.`,2,'Créatif');
 add(`Fais un mini-discours de 20 secondes sur ${t} sans dire « je ».`,3,'Cerveau');
 add(`Choisis un adversaire : chacun donne à tour de rôle un mot sur ${t}. Premier qui bloque perd.`,3,'Duel');
 add(`Fais un toast familial de 15 secondes sur ${t}.`,1,'Ambiance');
 add(`Invente une fausse information drôle mais crédible sur ${t}.`,2,'Créatif');
}
for(let i=0;i<mots.length&&extraChallenges.length<339;i++){
 const w=mots[i];
 add(`Trouve 3 mots qui riment avec « ${w} ».`,2,'Mots');
 add(`Fais deviner « ${w} » sans prononcer le mot ni sa première lettre.`,3,'Mots');
 add(`Épelle « ${w} » à l’envers sans erreur.`,2,'Cerveau');
 add(`Invente une phrase de 8 mots exactement contenant « ${w} ».`,3,'Mots');
}
for(let i=0;i<phrases.length&&extraChallenges.length<339;i++){
 const p=phrases[i];
 add(`Dis « ${p} » avec une voix de robot.`,2,'Rire');
 add(`Dis « ${p} » comme dans un film dramatique.`,2,'Mime');
 add(`Transforme « ${p} » en mini-chanson.`,2,'Musique');
 add(`Fais deviner la phrase « ${p} » uniquement avec des gestes.`,3,'Mime');
}
const lettres='BCFMLPRSTV'.split('');
for(let i=0;i<lettres.length&&extraChallenges.length<339;i++){
 const l=lettres[i];
 for(let n=3;n<=6&&extraChallenges.length<339;n++) add(`Trouve ${n} mots commençant par ${l} en ${10+n} secondes.`,2,'Rapidité');
}
for(let start=20;start<=50&&extraChallenges.length<339;start+=5){
 for(let step=2;step<=5&&extraChallenges.length<339;step++) add(`Compte de ${start} vers 0 en retirant ${step} à chaque fois, sans erreur.`,3,'Cerveau');
}
const actions=['faire rire les autres sans les toucher','tenir une serviette pliée sur la tête','faire une statue immobile','inventer un cri d’équipe','faire une mini-chorégraphie','parler comme un présentateur télé','imiter un animal choisi par les autres','raconter une histoire absurde'];
for(let i=0;i<actions.length&&extraChallenges.length<339;i++){
 add(`Tu as 20 secondes pour ${actions[i]}.`,2,'Surprise');
 add(`Choisis un adversaire : qui réussit le mieux à ${actions[i]} ? Les autres votent.`,3,'Duel');
 add(`Toute l’équipe doit ${actions[i]}. Si tout le monde joue le jeu, chacun mérite les applaudissements.`,2,'Équipe');
}
let k=1;
while(extraChallenges.length<339){
 const s=sujets[k%sujets.length],t=themes[(k*3)%themes.length],m=mots[(k*5)%mots.length];
 add(`Défi éclair ${k} : cite ${3+k%4} ${s}, puis termine par une phrase drôle contenant « ${m} » sur ${t}.`,2+(k%2),'Mix');k++;
}
