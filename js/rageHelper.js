/**
 * Created by brandon on 2016-12-20.
 */

// trigger this helper to test by using this element in hyml doc:

// <input type="button" onclick="rageHelper()" value="Helper">



function rageHelper() {
    alert(" rageHelper has been fetched sucessfullt");
}


// more function and global variable definitions



//rageHelper();





/*

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 # code created by Brandon McAlpine (Serious Rage) SFR-Web development
 # licenced under mit non-commercial
 # contact Serious Rage    app-admin@seriousrageweb.com

 - - - - -- - -for commercial liscencing - - - - - - - - - -

 # visit SFR-Web development http://seriousrageweb.com
 # Serious Rage on gitHub - https://github.com/Serious-Rage

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


 Todo #1:
 build constructor for web Frames


 */

var SFR = (function ($) {

    var privateCounter = 0;
    var URL_UI_inputs = (function () {

        (function
            () {
            var thing2 =
                "<img src=\"";
            var person2 =
                "\" alt=\"badpic\">";
            var thing =

                "<iframe width=\"1060\" height=\"720\" src=\"";

            var person =

                "\" frameborder=\"1\" scrolling=\"no\" allowfullscreen></iframe>";

            var newText = document.

                getElementById("myInput").value;

            document.getElementById("stylesChanger")

                .onclick = function () {

                    newText = document.

                        getElementById("myInput").value;

                    document.getElementById(

                        "myInput2").value = thing + newText + person;

                }

        })();

        (function () {

            var thing2 = "<img src=\"";
            var person2 = "\" alt=\"Brandon\">";
            var thingYY =

                "<iframe width=\"1100\" height=\"720\" src=\"";

            var personYY =

                "\" frameborder=\"1\" scrolling=\"yes\" allowfullscreen></iframe>";

            var newText3 =

                document.getElementById("myInputYY").value;

            document.

                getElementById("stylesChanger3").onclick = function () {

                    newText3 = document.getElementById("myInputAA").value;

                    document.

                        getElementById("myInputBB").

                        value = thing2 + newText3 + person2;

                }

        }
        )();

        (function () {
            var
                thing2 = "<img src=\"";
            var person2 = "\" alt=\"badpic\">";

            var thingYY = "<iframe width=\"1100\" height=\"720\" src=\"";

            var personYY =

                "\" frameborder=\"1\" scrolling=\"yes\" allowfullscreen></iframe>"

                ;

            var newText2 = document.getElementById("myInputYY").value;

            document.getElementById("stylesChanger2").onclick =

                function () {

                    newText2 = document.getElementById("myInputYY").value;
                    document.getElementById(


                        "myInputZZ").value = thingYY + newText2 + personYY;

                }
        }
        )();

    });


    // MAKE IFRAMES ************

    // private function
    var makeFram1 =
        function (str) {

            var Odiv = document.getElementsByClassName("outer");
            Odiv = Odiv[0];

            var NSdiv =

                document.getElementsByClassName(
                    "noScrolling");
            NSdiv = NSdiv[0]
                ;

            var x =
                document.createElement("IFRAME");
            x.
                setAttribute('class', "inner");
            x.
                setAttribute('src', str);
            x.setAttribute('scrolling', "no");
            x.setAttribute('seamless'

                ,


                "seamless");
            x.setAttribute(
                'allowfullscreen',
                "allowfullscreen");

            NSdiv.appendChild(
                x);

        }


    // Public function
    function mkFrm1(str) {
        makeFram1(str);
    }




    /*
     <div class="outer">
     <div class="noScrolling">
     <iframe scrolling="no" seamless="seamless" class="inner" src="http://xhamster.com/xembed.php?video=1102053" frameborder="0" allowfullscreen></iframe>
     </div>

     SFR-container
     */


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // *********************************************************************************
    // ************************ OVERLAY NAV CONTROLS OPEN AND CLOSE ********************
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // private function
    function openNav() {
        document.getElementById(
            "mySidenav"

        ).style.width =
            "26%";
    }

    function
        closeNav() {

        document.getElementById(
            "mySidenav").style.width = "0";
    }

    // Public function
    function opnNav() {
        openNav();
    }

    function

        clsNav() {
        closeNav();
    }
    // ****************************************************************************************






    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }
    function


        publicIncrement() {
        privateFunction();
    }

    function publicGetCount() {
        //return privateCounter++;
    }



    // ********************************* webVid vidKey IIFE wip************************************
    //<iframe width="510" height="400" src="http://xhamster.com/xembed.php?video=2492943" frameborder="0" scrolling="no" allowfullscreen></iframe>
    // IIFE TEMPLATE

    // maybe keep records of host vars on static file to be iterated to form the switch /* ex: (one line as follows)
    /*

     <iframe width=\"510\" height=\"400\" src=\"http://xhamster.com/xembed.php?video=|\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>|

     */

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // *********************************************************************************
    // ************** METHOD ASSIGNMENTS ACCORDING TO HOST VARIABLE ********************
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function host(thatHost) {

        if (thatHost == "xh") {
            return function (vidKey) {
                var lead =

                    "<iframe width=\"510\" height=\"400\" src=\"http://xhamster.com/xembed.php?video=";

                var tail = "\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>";
                var strungOut = (lead + vidKey + tail);

            }
        }

        return function (vidKey) {
            console.


                log(whattosay + ' there ' + name);
        }

    }
    // ****************************************************************************************







    // Private Variable
    //var xham = host('xh');
    //xham('vidKey');



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // *********************************************************************************
    // ************************ MAKE PUBLIC ********************
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount,
        mkFrm1: mkFrm1,
        opnNav: opnNav,
        clsNav: clsNav
    };
})($);


SFR.mkFrm1("http://xhamster.com/xembed.php?video=3655311");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// *********************************************************************************
// *********************************** NOTES ***************************************
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/* - - - - - - - - - - - - - - - - -  example calls - - - - - - -  - - - - - - - - -



 //SFR.start();
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=3655311");
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=5899460");
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=2492943");
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=2649123");
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=5386211");
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=5801688");
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=3388174");
 SFR.mkFrm1("http://xhamster.com/xembed.php?video=4577434");



 */