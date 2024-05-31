document.addEventListener('DOMContentLoaded', function() {
    let convert = document.querySelector('#click_to_convert');
    let con = document.querySelector('#convert_text');

    convert.addEventListener('click', function() {
        var speech = true;
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            con.innerHTML = transcript;
        });

        if (speech) {
            recognition.start();
        }
    });
});