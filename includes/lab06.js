alert ("Welcome to My Lab-06!");

class Hotal {

    constructor(name, city, rooms, booked, gym) {
        this._name = name;
        this._city = city;
        this._rooms = rooms;
        this._booked = booked;
        this._gym = gym;
        this._roomTypes = [];
        this._location = "Richmond";
        this._swimmingpool = true;
        this._airportShuttle = false;
        this._restaurants = [];
    }

    // -----Getter
    get name() {
        return this._name;
    }

    get city() {
        return this._city;
    }
    
    get rooms() {
        return this._rooms;
    }

    get booked() {
        return this._booked;
    }

    get gym() {
        return this._gym;
    }

    get roomTypes() {
        return this._roomTypes;
    }

    get location() {
        return this._location;
    }

    get swimmingpool() {
        return this._swimmingpool;
    }

    get airportShuttle() {
        return this._airportShuttle;
    }

    get restaurants() {
        return this._restaurants;
    }

    // -----Setter
    set name(n) {
        return this._name = n;
    }

    set city(c) {
        return this._city = c;
    }

    set rooms(r) {
        return this._rooms = r;
    }

    set booked(b) {
        return this._booked = b;
    }

    set gym(g) {
        return this._gym = g;
    }

    set roomTypes(roomTypes) {
        return this._roomTypes = roomTypes;
    }

    set location(location) {
        return this._location = location;
    }
    set swimmingpool(swimmingpool) {
        return this._swimmingpool = swimmingpool;
    }
    set airportShuttle(airportShuttle) {
        return this._airportShuttle = airportShuttle;
    }
    set restaurants(restaurants) {
        return this._restaurants = restaurants;
    }


    // when user book a room , and +1 on booked room.
    bookRoom() {
        this._booked += 1;
        return `The room was booked. There are ${this._rooms - this._booked} rooms remaining for booking.` 
    }
    
    // when user cancel a room , and -1 on booked room.
    cancelRoom() {
        this._booked -= 1;
        return `The room was cancelled. There are ${this._rooms - this._booked} rooms remaining for booking.`
    }

}


// Name: Markkiott, Location: Richmond, Total room: 30, Booked room: 15, Gym available: True;
var hotal1 = new Hotal ("Marriott","Richmond",30,15,true);

// Declare the map for roomType;
hotal1.roomTypes = ["twin","double","suite","Honeymoon"];
// Declare the map for restaurant:
hotal1.restaurants = [["Harolds", "American"], ["Kyoto", "Japanese"], ["Relax", "Fusion"]];

for (let [key, value] of hotal1.restaurants) {
    document.getElementById("hotalRestaurant").innerHTML += "<b>" + key + "</b>" + ": " + value + "<br>";
}


// call the fountion for bookRoom and cancelRoom;
var message = hotal1.bookRoom();
var message2 = hotal1.cancelRoom();



document.getElementById("nameLocation").innerHTML = `The hotal is a ${hotal1.name}, located in ${hotal1.city}`; 
document.getElementById("roomAvailable").innerHTML = `There are ${hotal1.booked} rooms available today`
document.getElementById("bookMessage").innerHTML =  message;
document.getElementById("cancelMessage").innerHTML = message2;
document.getElementById("roomType").innerHTML = `The available rooms are: ${hotal1.roomTypes}`;
document.getElementById("hotalShuttle").innerHTML = `<b>Hotal has a shuttle?</b> ${hotal1.airportShuttle}`;
document.getElementById("hotalSwimmingpool").innerHTML = `<b>Hotal has a swimming pool?</b> ${hotal1.swimmingpool}`;

/* ----------------------------------------------------------------------------------------------------------------- */

// extends Hotal to new class Resort
class Resort extends Hotal {
    
    constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub) {
        super(name,city,rooms, booked, gym);
        this._resortType = resortType;
        this._beachFront = beachFront;
        this._kidsClub = kidsClub;
    }

    // Getter
    get resortType() {
        return this._resortType;
    }
    get beachFront() {
        return this._beachFront;
    }
    get kidsClub() {
        return this._kidsClub;
    }

    //Setter
    set resortType(resortType) {
        return this._resortType = resortType;
    }
    set beachFront(beachFront) {
        return this._beachFront = beachFront;
    }
    set kidsClub(kidsClub) {
        return this._kidsClub = kidsClub;
    }
} 

// Declare a new variable to assign a new Resort map;
var resort1 = new Resort( "Renaissance Phuket", "Phuket", 30, 15, true, "family", true, true);


document.getElementById("resortType").innerHTML = `<b>A new Resort has been created: </b>${resort1.name} located in ${resort1.city}. It is a ${resort1.resortType}resort`;
document.getElementById("beachFront").innerHTML = `<b>Is it on the beach? </b>${resort1.beachFront}`;
document.getElementById("kidsClub").innerHTML = `<b>Does it have a kids club? </b>${resort1.kidsClub}`

document.getElementById("errorMessage").innerHTML = "Oh no! The kids club is being renovated!";
// when the kidClub is being renovated, kidsClub assign to false.
resort1.kidsClub = false;

document.getElementById("kidsClub2").innerHTML = "<b>Does it have a kids club </b>" + resort1.kidsClub;


