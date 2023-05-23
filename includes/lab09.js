// alert("Welcome to my Lab-09!");

// declared a global variable for the filtering the superheros;
let filter = "";

// the fetch table for superheros;
function load_data_with_fetch() {
    fetch('https://deepblue.camosun.bc.ca/~c0180354/ics128/lab09/lab09_superheroes.json')
        .then(response => {
            return response.json()
        })
        .then((json) => {
            document.getElementById("demo").innerHTML = "<tr>" + 
                                                            "<th>Superhero</th>"
                                                            +"<th>Publisher</th>"
                                                            +"<th>Alter Ego</th>"
                                                            +"<th>First Appearance</th>"
                                                            +"<th>Characters</th>"
                                                            +"</tr>"

            // filtering the superheros by the publisher after we filet in;
            // filter() : In the publisher
            let filteredSuperheros = json.filter(function(superhero) {
                if (superhero.publisher === filter || filter === "Show All Superheroes") {
                    return true;
                }
                // if the publisher = filter or show all superheros, it will keep in the superhero;
                else {
                    return false;
                }
                
            });

            for (i in filteredSuperheros) {
                let superhero = filteredSuperheros[i];
                document.querySelector("#demo").innerHTML += "<tr>" + "<td>" + superhero.superhero + "</td>" 
                                                                    + "<td>" + superhero.publisher + "</td>"
                                                                    + "<td>" + superhero.alter_ego + "</td>"
                                                                    + "<td>" + superhero.first_appearance + "</td>"
                                                                    + "<td>" + superhero.characters + "</td>"
                                                                    + "</tr>";
            }
        });
}

$(document).ready(function() {
    $("#selectForm").on("change",function() {
        let $selectedForm = $("#selectForm");
        // get DOM element;
        let selectForm = $selectedForm[0];
        //let $selectedForm = $("#selectForm")
        //$selectedForm.html("<div>Hello</div>") jQuery object
        //selectIndex.innerHTML = "<div>Hello</div>" vanilla DOM element
        let options = selectForm.options;
        let selectIndex = selectForm.selectedIndex;

        if (options[selectIndex].value === "Show All Superheroes") {
            filter = "Show All Superheroes";
        }
        else if (options[selectIndex].value === "Show Marvel Superheroes") {
            filter = "Marvel Comics";
        }
        else if (options[selectIndex].value === "Show DC Superheroes") {
            filter = "DC Comics";
        }    
        // whatever what call the table out;
        load_data_with_fetch();
    })
});


