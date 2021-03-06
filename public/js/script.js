const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();
    addCards(cardList);
});

const cardList = [{
        title: "Kuala 2",
        image: "images/kuala2.jpeg",
        link: "About Kuala 2",
        desciption: "Demo desciption about kuala 2"
    }, {
        title: "Kuala 3",
        image: "images/kuala3.jpeg",
        link: "About Kuala 3",
        desciption: "Demo desciption about kuala 3"
    }];

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
            '</div><div class="card-content">'+
            '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
            '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text">'+item.desciption+'</p>'+
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
};