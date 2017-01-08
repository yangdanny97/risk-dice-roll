function simulation(a, b) {
    if (a > 0 && a < 200 && b > 0 && b < 200) {
        console.log("Simulation start!");
        $('#console').html("Simulation start!" + '\n');
        while (a > 0 && b > 0) {
            Qa = [];
            Qb = [];

            if (a >= 3) {
                Na = 3;
            } else if (a == 2) {
                Na = 2;
            } else {
                Na = 1;
            }

            if (b >= 2) {
                Nb = 2;
            } else {
                Nb = 1;
            }

            while (Na > 0) {
                x = dice()
                Qa.push(x);
                Na -= 1;
            }

            while (Nb > 0) {
                x = dice()
                Qb.push(x);
                Nb -= 1;
            }
            Qa.sort();
            Qa.reverse();
            Qb.sort();
            Qb.reverse();
            $('#console').html($('#console').text() + Qa.toString() + '\n' + Qb.toString() + '\n');
            console.log(Qa)
            console.log(Qb)
            if (Qa.length == 1 || Qb.length == 1) {
                if (Qb[0] >= Qa[0]) {
                    a -= 1;
                } else {
                    b -= 1;
                }
            } else {
                if (Qb[0] >= Qa[0]) {
                    a -= 1;
                } else {
                    b -= 1;
                }
                if (Qb[1] >= Qa[1]) {
                    a -= 1;
                } else {
                    b -= 1;
                }
            }
            console.log("Attackers remaining:" + a.toString());
            console.log("Defenders remaining:" + b.toString());
            $('#aR').val(a.toString());
            $('#bR').val(b.toString());
            $('#console').html($('#console').text() + "Attackers remaining:" + a.toString() + '\n' + "Defenders remaining:" + b.toString() + '\n');
        }
        console.log("Simulation complete!");
        $('#console').html($('#console').text() + "Simulation complete!");
    } else {
        alert("Please ensure inputs are in correct range!");
    }
}

function dice() {
    return (Math.floor(Math.random() * 6) + 1);
}

$(document).ready(function() {
	$('#button').click(function(){
		simulation($("#a").val(),$('#b').val());
	});
});
