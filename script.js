// Write your JavaScript code here!

//const { myFetch, pickPlanet } = require("./scriptHelper");

// listen to the page be loaded
window.addEventListener("load", function() {

    //get the form element
    let form = document.querySelector("form");
    // listen to form submition
    form.addEventListener("submit", function(event){
        //prevent form submittion before validation
        event.preventDefault();

        //get input values from form fields
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        //calling formsubmittion function 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    //handling returned result
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // calling pickPlanet function to select a planet from the list
        let pickedPlanet = pickPlanet(listedPlanets);
        
        // calling addDestinationInfo function to add planet information to the document
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })
    
 });