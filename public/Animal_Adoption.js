const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septembre", "Octobre", "Novembre", "Decembre"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDateTime() {
    var date = new Date();
    var dateString = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('time').innerHTML = dateString;
}

setInterval(updateDateTime, 1000);

function validateFindCat() {
    let stateAge0To5 = document.getElementById("age_0_to_5").checked;
    let stateAge6To10 = document.getElementById("age_6_to_10").checked;
    let stateAge10AndUp = document.getElementById("age_10_and_up").checked;
    let stateSexMale = document.getElementById("sex_male").checked;
    let stateSexFemale = document.getElementById("sex_female").checked;
    let stateSexDoesNotMatter = document.getElementById("sex_does_not_matter").checked;

    if((stateAge0To5 == false && stateAge6To10 == false && stateAge10AndUp == false) || (stateSexMale == false && stateSexFemale == false && stateSexDoesNotMatter == false)) {
        alert("Some fields are empty");
        return false;
    }

    return true;
}

function validateFindDog() {
    let stateAge0To5 = document.getElementById("age_0_to_5").checked;
    let stateAge6To10 = document.getElementById("age_6_to_10").checked;
    let stateAge10AndUp = document.getElementById("age_10_and_up").checked;
    let stateSexMale = document.getElementById("sex_male").checked;
    let stateSexFemale = document.getElementById("sex_female").checked;
    let stateSexDoesNotMatter = document.getElementById("sex_does_not_matter").checked;

    if((stateAge0To5 == false && stateAge6To10 == false && stateAge10AndUp == false) || (stateSexMale == false && stateSexFemale == false && stateSexDoesNotMatter == false)) {
        alert("Some fields are empty");
        return false;
    }

    return true;
}

function validateGiveAwayPet() {
    let stateAge0To5 = document.getElementById("age_0_to_5").checked;
    let stateAge6To10 = document.getElementById("age_6_to_10").checked;
    let stateAge10AndUp = document.getElementById("age_10_and_up").checked;
    let stateSexMale = document.getElementById("sex_male").checked;
    let stateSexFemale = document.getElementById("sex_female").checked;
    let stateSexDoesNotMatter = document.getElementById("sex_does_not_matter").checked;
    let stateTemperChildrenYes = document.getElementById("temper_children_yes").checked;
    let stateTemperChildrenNo = document.getElementById("temper_children_no").checked;
    let stateTemperChildrenUnknown = document.getElementById("temper_children_unknown").checked;
    let stateTemperCatYes = document.getElementById("temper_cat_yes").checked;
    let stateTemperCatNo = document.getElementById("temper_cat_no").checked;
    let stateTemperCatUnknown = document.getElementById("temper_cat_unknown").checked;
    let stateTemperDogYes = document.getElementById("temper_dog_yes").checked;
    let stateTemperDogNo = document.getElementById("temper_dog_no").checked;
    let stateTemperDogUnknown = document.getElementById("temper_dog_unknown").checked;
    let stateAnimalComment = document.getElementById("animal_comments").value;
    let stateOwnerName = document.getElementById("owner_name").value;
    let stateOwnerEmail = document.getElementById("owner_email").value;

    // Regular expression for basic email validation
    let EmailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValidity = EmailExp.test(stateOwnerEmail);
    let ageValidity = (stateAge0To5 == false && stateAge6To10 == false && stateAge10AndUp == false);
    let sexValidity = (stateSexMale == false && stateSexFemale == false && stateSexDoesNotMatter == false);
    let temperChildrenValidity = (stateTemperChildrenYes == false && stateTemperChildrenNo == false && stateTemperChildrenUnknown == false);
    let temperCatValidity = (stateTemperCatYes == false && stateTemperCatNo == false && stateTemperCatUnknown == false);
    let temperDogValidity = (stateTemperDogYes == false && stateTemperDogNo == false && stateTemperDogUnknown == false);
    let commentValidity = (stateAnimalComment == "");
    let nameValidity = (stateOwnerName == "");

    if(!emailValidity || ageValidity || sexValidity || temperChildrenValidity || temperCatValidity || temperDogValidity || commentValidity || nameValidity) {
        alert("Some fields are empty or non-valid");
        return false;
    }

    return true;
}