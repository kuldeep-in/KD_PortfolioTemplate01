// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var badgeObjects = "";
var visitorCountJson = "";

jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 580) {
            // Get the div
            const div = document.getElementById("left-social");

            // Get all anchor tags inside the div 
            const anchors = div.getElementsByTagName("a");

            // Loop through the anchors
            for (let i = 0; i < anchors.length; i++) {

                // Get the i tag inside
                const icon = anchors[i].getElementsByTagName("i")[0];

                // Remove the class
                icon.classList.remove("fa-2x");

            }
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});

$(document).ready(function () {
    "use strict";

    // 1. Attach an event handler to the window's "load" event
    $(window).load(function () {
        $("body").addClass("loaded");
        $("body").scrollspy({ target: ".sidebar", offset: 50 });
    });

    var o = $("html,body");
    var a = $(".nav"),
        e = $(".toggle-btn");
    e.on("click", function (o) {
        a.hasClass("show-nav") ? a.removeClass("show-nav") : a.addClass("show-nav"), o.stopPropagation();
    }),
        e.on("click", function () {
            e.hasClass("toggle-close") ? e.removeClass("toggle-close") : e.addClass("toggle-close");
        }),
        $(document).on("click", function () {
            a.hasClass("show-nav") && a.removeClass("show-nav"), e.hasClass("toggle-close") && e.removeClass("toggle-close");
        }),
        $(window).on("load resize", function () {
            var o = $(".toggle-btn").offset().top;
            $(window).on("scroll", function () {
                var s = $(window).scrollTop();
                s >= o ? (e.addClass("fixed"), a.addClass("stickyNav")) : (e.removeClass("fixed"), a.removeClass("stickyNav"));
            });
        }),
        $(window).on("load resize", function () {
            $(window).width() < 768 && (e.wrap('<div class="toggle-placeholder"></div>'), $(".toggle-placeholder").height(e.outerHeight()));
        });


    // URL of the JSON file
    const statsURL = 'https://api.visitorbadge.io/api/status?path=https%3A%2F%2Fgithub.com%2Fkuldeepsingh-in%2Fkuldeepsingh-in'

    // Fetch visitor count from api
    fetch(statsURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // JSON data has been successfully parsed
            visitorCountJson = data;
            var badgeContainer = document.getElementById("dynamicBadges");
            // Create visitor label
            var countTet = 'Visitors: ' + ' ' + visitorCountJson.total.toLocaleString();
            document.getElementById("visitorCount").innerHTML = countTet;
            //window.alert(countTet);

        });
});

// Function to handle fallback image loading
function createFallbackImageHandler(fallbackImageUrl) {
    return function () {
        this.src = fallbackImageUrl;
    };
}

