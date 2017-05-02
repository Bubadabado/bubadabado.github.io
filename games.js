//console.log("cows iz cool");
(function main($) {
    var $dinoDashButton = $(".dino-dash-button");
    var $bannerButton = $(".banner-button");
    var $splash = $(".splash-screen");
    var $bannerText = $(".banner-text");
    var $gameFrame = $(".game-frame");

    $dinoDashButton.on("click", function dinoClick(){
        if ($dinoDashButton.hasClass("button-bar-selected")) {
            return;
        };
        $splash.addClass("hidden");
        $bannerText.addClass("hidden");
        $dinoDashButton.addClass("button-bar-selected");
        $bannerButton.removeClass("button-bar-selected");
        $gameFrame.attr("src", "games/dino_dash/index.html");
    });

    $bannerButton.on("click", function bannerClick(){
        if ($bannerButton.hasClass("button-bar-selected")) {
            return;
        };
        $splash.removeClass("hidden");
        $bannerText.removeClass("hidden");
        $dinoDashButton.removeClass("button-bar-selected");
        $bannerButton.addClass("button-bar-selected");
        $gameFrame.attr("src", "");
    });
})(jQuery);