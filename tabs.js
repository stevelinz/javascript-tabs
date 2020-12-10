$(document).ready(
    function () {
        // event handlers


       // Some messages you want to fade out others toggle
        $(function () {
            $("#tabs").click(function () {
                $("#about1").fadeToggle(1000);
                $("#about2").fadeOut(1500);
                $("#about3").fadeToggle(2000);
            });
        });

        $("#tabs a").click(showTab);

        // Triple parallel arrays make it easy to see individual comments for each mode.

        // This is a way to VALIDATE the input for the user, a re-enforcement loop

        var scaleB = ['E:tonic ','F ','G:m3rd ','A ','A#:Blues Note ','B:5th ','C','D:7th '];
        var scaleL = ['E:4th ','F:dim5th ','G ','A:7th ','A#','B:tonic ','C','D:m3rd '];
        var scaleA = ['E:5th ','F:m6th ','G ','A:tonic ','A#','B:2nd ','C:m3rd','D '];

        var eeE = $("#eE")[0];
        $("#eTab").mouseover(function () {
            eeE.play();
        });
        var ffF = $("#fF")[0];
        $("#fTab").mouseover(function () {
            ffF.play();
        });
        var ggG = $("#gG")[0];
        $("#gTab").mouseover(function () {
            ggG.play();
        });
        var aaA = $("#aA")[0];
        $("#aTab").mouseover(function () {
            aaA.play();
        });
        var aSo = $("#aS")[0];
        $("#aSab").mouseover(function () {
            aSo.play();
        });
        var bbB = $("#bB")[0];
        $("#bTab").mouseover(function () {
            bbB.play();
        });
        var ccC = $("#cC")[0];
        $("#cTab").mouseover(function () {
            ccC.play();
        });
        var ddD = $("#dD")[0];
        $("#dTab").mouseover(function () {
            ddD.play();
        });

        // map the notes to the table
        ///////////////////BLUES//////////////////////////////

        $("#c0").mouseover(function () {
            eeE.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[0]);
        });

        $("#c1").mouseover(function () {
            ggG.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[2]);
        });

        $("#c2").mouseover(function () {
            aSo.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[4]);
        });

        $("#c3").mouseover(function () {
            ddD.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[7]);
        });

        $("#c4").mouseover(function () {
            bbB.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[5]);
        });

        $("#c5").mouseover(function () {
            eeE.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[0]);
        });

        $("#c6").mouseover(function () {
            ggG.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[2]);
        });

        $("#c7").mouseover(function () {
            aSo.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[4]);
        });

        $("#c8").mouseover(function () {
            ddD.play();
            $("#beingPlayed").html("<br>"+" Blues: " + scaleB[7]);
        });
        // map the notes to the table
     ///////////////////LOCRAIN////////////////////////////////

        $("#cl0").mouseover(function () {
            bbB.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[5]);
        });

        $("#cl1").mouseover(function () {
            ddD.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[7]);
        });

        $("#cl2").mouseover(function () {
            ffF.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[1]);
        });

        $("#cl3").mouseover(function () {
            eeE.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[0]);
        });

        $("#cl4").mouseover(function () {
            aaA.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[3]);
        });

        $("#cl5").mouseover(function () {
            eeE.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[0]);
        });

        $("#cl6").mouseover(function () {
            ddD.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[7]);
        });

        $("#cl7").mouseover(function () {
            ffF.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[1]);
        });

        $("#cl8").mouseover(function () {
            bbB.play();
            $("#beingPlayed").html("<br>"+" Locrain: " + scaleL[5]);
        });
        // map the notes to the table
        ////////////////////ASIAN///////////////////////////////////////

        $("#ca0").mouseover(function () {
            aaA.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[3]);
        });

        $("#ca1").mouseover(function () {
            eeE.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[0]);
        });

        $("#ca2").mouseover(function () {
            bbB.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[5]);
        });

        $("#ca3").mouseover(function () {
            bbB.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[5]);
        });

        $("#ca4").mouseover(function () {
            ffF.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[1]);
        });

        $("#ca5").mouseover(function () {
            ccC.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[6]);
        });

        $("#ca6").mouseover(function () {
            ccC.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[6]);
        });

        $("#ca7").mouseover(function () {
            eeE.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[0]);
        });

        $("#ca8").mouseover(function () {
            aaA.play();
            $("#beingPlayed").html("<br>"+" Asian: " + scaleA[3]);
        });

        // this function creates a backing track set to harmonize
        // uses NO intervals
        ///////////////GO BLUES/////////////////

        $("p#rollThis1").mouseover(function () {
            var speed = 1000;
            var i;
            for (i = 0; i < 7; i++) {

                $(function goBlues() {
                    eeE.play();
                    ggG.play();
                    if (i % 2 === 0) {
                        ggG.play();
                        ddD.play();

                        speed = 250;
                    }
                    if (i > 3) {
                        speed = 500;
                        eeE.play();
                        aSo.play();
                    }
                    if (i > 5) {
                        ddD.play();
                        aSo.play();
                        speed = 1000;
                    }
                });
            }
        });

        // this function creates a backing track set to harmonize
        // uses an intervals variable
        ///////////////GO LOCRAIN/////////////////

        $("p#rollThisL").mouseover(function () {
            var speed = 2250;
            var count = 0;
            var i;
            for (i = 0; i < 7; i++) {
                $(function goLocrain() {
                    var rhythm = setInterval(goLocrain,speed);
                    setInterval(goLocrain, speed);
                    aaA.play();
                    eeE.play();
                    if (i < 3) {
                        aaA.play();
                        ccC.play();
                        speed = 3500;
                        clearInterval(rhythm);
                    }
                    if (i > 3) {
                        setInterval(goLocrain, speed);
                        speed = 8500;
                        aaA.stop();
                        ccC.stop();
                        aaA.play();
                        ffF.play();
                        clearInterval(rhythm);
                    }
                    if (i < 7) {
                        setInterval(goLocrain, speed);
                        aaA.stop();
                        ffF.stop();
                        eeE.play();
                        aaA.play();
                        speed = 6000;
                        clearInterval(rhythm);
                    }
                    count++
                });
            }
        });

        // this function creates a backing track set to harmonize
        // uses an intervals variable
        ///////////////GO ASIAN/////////////////
        $("p#rollThisA").mouseover(function () {
            var speed = 2250;
            var count = 0;
            var i;
            for (i = 0; i < 7; i++) {
                $(function goAsian() {
                    var rhythm = setInterval(goAsian,speed);
                    setInterval(goAsian, speed);
                    aaA.play();
                    eeE.play();
                    if (i % 2 === 0 && i < 3) {
                        aaA.play();
                        ccC.play();
                        speed = 3500;
                        clearInterval(rhythm);
                    }
                    if (i > 3) {
                        setInterval(goAsian, speed);
                        speed = 8500;
                        aaA.stop();
                        ccC.stop();
                        aaA.play();
                        ffF.play();
                        clearInterval(rhythm);
                    }
                    if (i < 7) {
                        setInterval(goAsian, speed);
                        aaA.stop();
                        ffF.stop();
                        eeE.play();
                        aaA.play();
                        speed = 6000;
                        clearInterval(rhythm);
                    }
                    count++
                });
            }
        });


       // reload function
        $(function () {
            $("button#pause").click(function () {
                location.reload();
            });
        });

        // other functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }
    });