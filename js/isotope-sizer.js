new Isotope("section", {
    itemSelector: ".item",
    percentPosition: true,
    transitionDuraition: "0.8s",
    masonry: {
        columnWidth: ".item-sizer"
    }
})

$("#navi li").find("a").on("click", function(e){
    e.preventDefault();

    let target = $(this).attr("href");
    $(this).parent().parent().parent().find(".wrap").removeClass("on");
    $(target).addClass("on");

    $(this).parent().parent().find("li").removeClass("on");
    $(this).parent().addClass("on");
});