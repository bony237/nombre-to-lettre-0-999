var numbers = { 0 : "zéro",
    1 : "un", 2 : "deux",
    3 : "trois", 4 : "quatre",
    5 : "cinq", 6 : "six",
    7 : "sept", 8 : "huit",
    9 : "neuf", 10 : "dix",
    11 : "onze", 12 : "douze",
    13 : "treize", 14 : "quartorze",
    15 : "quinze", 16 : "seize",
    17 : "dix-sept", 18 : "dix-huit",
    19 : "dix-neuf", 20 : "vingt",
    30 : "trente", 40 : "quarante",
    50 : "cinquante", 60 : "soixante",
    70 : "soixante", 80 : "quatre-vingt",
    90 : "quatre-vingt"};

(function () {
    var nbre = prompt("Donnez le nombre à écrire en lettre (compris entre 0 et 999) : "), chiffres = nbre.split(""), letters = [];


    while (isNaN(nbre) || (nbre < 0 || nbre > 999)){
        if (nbre == null){
            return;
        }
        if(nbre < 0 || nbre > 999){
            nbre = prompt("\tLe nombre n'est pas compris entre 0 et 999\nDonnez le nombre à écrire en lettre (compris entre 0 et 999) : ");
            chiffres = nbre.split("");
        }else {
            nbre = prompt("\tLa valeur entrée ne correspond pas à un nombre\nDonnez le nombre à écrire en lettre (compris entre 0 et 999) : ");
            chiffres = nbre.split("");
        }

    }

    while (chiffres[0] == "0"){
        chiffres.shift();
    }

    if (chiffres.length == 3){
        letters.push("cent");
        if (chiffres[0] != "1"){
            letters.unshift(numbers[chiffres[0]]);
        }
        chiffres.shift();
    }

    while (chiffres[0] == "0"){
        chiffres.shift();
    }

    if (chiffres.length == 2){

        if (numbers[(chiffres[0] + chiffres[1])] == undefined){

            letters.push(numbers[(chiffres[0] + "0")]) ;

            if (chiffres[0] == "7" || chiffres[0] == "9"){
                letters.push(numbers[("1" + chiffres[1])]) ;
            }else {
                letters.push(numbers[chiffres[1]]) ;
            }

        }else {
            letters.push(numbers[(chiffres[0] + chiffres[1])]) ;
        }

    }else if (chiffres.length == 1){
        letters.push(numbers[(chiffres[0])]);
    }


    alert (letters.join("-"));
})();



