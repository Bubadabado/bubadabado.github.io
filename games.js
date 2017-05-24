//console.log("cows iz cool");
(function main($) {
    var $dinoDashButton = $(".dino-dash-button");
    var $bannerButton = $(".banner-button");
    var $splash = $(".splash-screen");
    var $bannerText = $(".banner-text");
    var $gameFrame = $(".game-frame");
    var $gameButton = $(".game-button");

    $dinoDashButton.on("click", function dinoClick(){
        if ($dinoDashButton.hasClass("button-bar-selected")) {
            return;
        };
        $splash.addClass("hidden");
        $bannerText.addClass("hidden");
        $gameFrame.removeClass("game-frame-large");
        $dinoDashButton.addClass("button-bar-selected");
        $bannerButton.removeClass("button-bar-selected");
        $gameButton.removeClass("button-bar-selected");
        $gameFrame.attr("src", "games/dino_dash/index.html");
    });

    $bannerButton.on("click", function bannerClick(){
        if ($bannerButton.hasClass("button-bar-selected")) {
            return;
        };
        $splash.removeClass("hidden");
        $bannerText.removeClass("hidden");
        $gameFrame.removeClass("game-frame-large");
        $dinoDashButton.removeClass("button-bar-selected");
        $gameButton.removeClass("button-bar-selected");
        $bannerButton.addClass("button-bar-selected");
        $gameFrame.attr("src", "");
    });
        $gameButton.on("click", function gameClick(){
        if ($gameButton.hasClass("button-bar-selected")) {
            return;
        };
        $splash.addClass("hidden");
        $gameFrame.addClass("game-frame-large");
        $bannerText.addClass("hidden");
        $dinoDashButton.removeClass("button-bar-selected");
        $bannerButton.removeClass("button-bar-selected");
        $gameButton.addClass("button-bar-selected");
        $gameFrame.attr("src", "games/dodge_game/index.html");
    });
})(jQuery);