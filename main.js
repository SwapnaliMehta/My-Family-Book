var images = ["My father.jpg", "My Mother.png"];

var names = ["My Family", "Amit Mehta", "Swapnali Mehta"];

var i = 0;

function update() {
    i++;
    var number_of_family_member_in_array = 3
    if (i > number_of_family_member_in_array) {
        i = 0;
    }
    var updatedImages = images[i];
    var updatedNames = names[i];
    document.getElementById("My Family").src = updatedImages;
    document.getElementById("family_member_name").src = updatedNames;
}