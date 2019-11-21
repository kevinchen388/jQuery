$("form").submit(function( event ) {
    var standing = $('input[name="standing"]')
    var fruit = $('input[name="fruit"]')
    console.log(standing)
    console.log(fruit)
    var fruitchecked = false;
    var standingchecked = false;


    for (let i = 0; i < fruit.length; i++){
        if (fruit[i].checked)
            fruitchecked = true;
    }
    for (let i = 0; i < standing.length; i++){
        if (standing[i].checked)
            standingchecked = true;
    }

    if (fruitchecked && standingchecked) {
        return true;
    }

    alert("You must select one of each")
    return false;
})

// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;
//
//
//
//
//
//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
//
//     // alert("You must pick a fruit!")
//     // return false;
//   }
