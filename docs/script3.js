let words = ["ноготь", "свидание", "кал", "носок", "сковорода", "наушники"];

    a = Math.round(Math.random()*(words.length - 1))
    b = Math.round(Math.random()*(words.length - 1))
    c = Math.round(Math.random()*(words.length - 1))
    d = Math.round(Math.random()*(words.length - 1))
    e = Math.round(Math.random()*(words.length - 1))
    f = Math.round(Math.random()*(words.length - 1))
    document.getElementById('word1').innerText = words[a];
    document.getElementById('word2').innerText = words[b];
    document.getElementById('word3').innerText = words[c];
    document.getElementById('word4').innerText = words[d];
    document.getElementById('word5').innerText = words[e];
    document.getElementById('word6').innerText = words[f];
