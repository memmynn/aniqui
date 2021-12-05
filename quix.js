//script for quiz

var quiz_topic = "Guess the animal"; // Topic name for Quiz
var curr_index = -1;
var score = 0; // Saves total score
var scores = [] // Saves cumulative score for individual questions


// Changes question and option text if questions not exhausted or else shows result graph

function changeQuestion() {
            
    curr_index++;
    $('.myb').prop('disabled', false);

    if (curr_index >= total) {
        time_tot = document.getElementById("timer").textContent;
        var element2 = document.getElementById("canvas");
        element2.style.display = 'none';
        showGraph();

    } else {
        // Reset the color of option buttons
        var elements = document.getElementsByClassName('option');
        for (i = 0; i < elements.length; i++) {
            ob = elements[i];
            $(ob).removeClass('btn-danger');
            $(ob).removeClass('btn-success');

        }

        var q_obj = questions[curr_index];
        var q_text = q_obj.question;
        var opt1 = q_obj.choices[0];
        var opt2 = q_obj.choices[1];
        var opt3 = q_obj.choices[2];
        var opt4 = q_obj.choices[3];
        document.getElementById("q_id").textContent = 'Question ' + (curr_index + 1) + '/' + total;
        document.getElementById("score").textContent = 'Score ' + score + '/' + (100 * total);
        let sound_source = document.getElementById("sound_source"); sound_source.src = q_text;         
        var sound = document.getElementById("question_sound"); sound.load(); sound.play();
        document.getElementById("op4source").src = opt1; document.getElementById("op4source").load();
        document.getElementById("option2").textContent = opt2;
        document.getElementById("option3").textContent = opt3;
        document.getElementById("option4").textContent = opt4;
        document.getElementById("resource").value = quiz_topic;

        


    }
};

// Used to check clicked answer and change color to red or green accordingly by adding and removing the respective class.
        // Also increments scores if necessary
        function changeColor(obj) {
            var selected_ans = obj.firstElementChild.src;
            if (selected_ans.includes(questions[curr_index].answer)) {
                $(obj).addClass('btn-success');
                score += 100;
            } else {
                $(obj).addClass('btn-danger');
                var elements = document.getElementsByClassName('option');
                for (i = 0; i < elements.length; i++) {
                    ob = elements[i];
                    var selected_ans = ob.firstElementChild;

                    if (selected_ans.src === questions[curr_index].answer) {
                        $(ob).addClass('btn-success');
                    };
                    $(obj).blur();

                }

            }

            // Gives a transition effect
            setTimeout(function() {
                $("#canvas").fadeOut();
                setTimeout(function() {
                     $("#canvas").fadeIn("slow" );changeQuestion();
                }, 1000);

            }, 1500);
            scores.push(score); // Add cumulative score to score array
        }