(function(){
    "use strict";
    console.log("Works");

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split('|')

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    console.log(planetsArray.join('<br>'));
    console.log(typeof planetsArray.join('<br>'));

//    THE BONUS ATTEMPT:

    planetsArray.unshift("<ul>")
    planetsArray.push("</ul>");

    let liTagPlanetString = planetsArray.join('<li>')
    console.log(liTagPlanetString);

//    ------------------ Instructor solution ----------------

    // let planetsUl = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";


})();
