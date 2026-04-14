

// // displays the icons of each post
// // function displayIcon(icon, icon_alt, iconIndex) {
// //     //declarations
// //     let img = document.createElement("img");
// //     let a = document.createElement("a");
// //     let li = document.createElement("li");

// //     img.src = icon;
// //     img.alt = icon_alt;

// //     // label the correct class
// //     switch (iconIndex) {
// //         case 0: 
// //             li.classList.add("like");
// //             break;
// //         case 1:
// //             li.classList.add("dislike");
// //             break;
// //         case 2:
// //             li.classList.add("comment");
// //             break;
// //         case 3:
// //             li.classList.add("share");
// //             break;
// //         case 4:
// //             li.classList.add("user");
// //             break;
// //         default: 
// //             break;
// //     }
        
// //     //append
// //     a.appendChild(img);
// //     li.appendChild(a);
// //     return li;
// // }

// // displays a single post and all of its contents
// function displayPost(photo, description, postId) {
//     //variable and class assignment

//     // var article = document.createElement("article");
//     // article.classList.add("post");
//     // let figure = document.createElement("figure");
//     // figure.classList.add("figContainer");
//     // var img = document.createElement("img");
//     // img.classList.add("mainPhoto");
//     // let figcaption = document.createElement("figcaption");
//     // figcaption.classList.add("description");




//     // img.src = photo;
//     // img.alt = "Post image";
//     // figcaption.textContent = description;

//     // figure.appendChild(img);
//     // figure.appendChild(figcaption);
//     // article.appendChild(figure);


//     // let ul = document.createElement("ul");
//     // ul.classList.add("interact");

//     // display icons (li elements) for each post
//     // for (let i = 0; i < icons.length; i++) {
//     //     let li = Icons.displayIcon(icons[i].icon, icons[i].icon_alt, i);
//     //     ul.appendChild(li);

//     // }
//             // li.addEventListener("click", function() {
//         //     interaction(postId, li, i);
//         // });


//     // article.appendChild(ul)
//     document.getElementById("maincontent").appendChild(article);
// }

// // activate the button
// function interaction(postId, button, iconIndex) {
//     let like = document.querySelectorAll(".like");
//     let dislike = document.querySelectorAll(".dislike");

    
//     switch (iconIndex) {
//         case 0: 
//             button.classList.toggle("clicked");
//             dislike[postId].classList.remove("clicked");
//             break;
//         case 1:
//             button.classList.toggle("clicked");
//             like[postId].classList.remove("clicked");
//             break;
//         default: 
//             button.classList.toggle("clicked");  

//             break;
//     }
// }











