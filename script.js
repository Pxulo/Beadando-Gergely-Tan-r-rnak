function hide_click(id, button) {
    console.log(id, button)
    var div = document.getElementById(id)

    div.hidden = !div.hidden
    if (button != undefined) {
        if (div.hidden) {
            button.innerText = "Megjelenítés"
        }
        else {
            button.innerText = "Rejtés"
        }
    }
}

function resize_pic(num) {
    var pic = document.getElementById('beloved_game_pic')

    switch (num) {
        case 0: pic.style.width = '30%';  break;
        case 1: pic.style.width = '60%';  break;
        case 2: pic.style.width = '100%'; break;
    }
}

function load_list() {
    var beloved_sentences = document.getElementsByClassName('beloved_rows')
    var list              = document.getElementById('beloved_list')

    if (beloved_sentences.length == 0) {
        list.innerHTML = "A betöltés eredménye: A lista Üres."
    }
    else {
        let inHtml = ""

        for (let i = 0; i < beloved_sentences.length; i++) {
            inHtml += "<div>" + (i + 1) + ": " + beloved_sentences[i].innerText + "</div>"
        }

        list.innerHTML = inHtml
    }
}

function submit() {
    eredmenyek = document.getElementById('eredmenyek')
    nev        = document.getElementById('inp_nev').value
    email      = document.getElementById('inp_email').value
    cim        = document.getElementById('inp_cim').value
    szul_ev    = document.getElementById('inp_szul_datum').value

    if (nev == '') {
        alert("Nem adtál meg nevet!")
    }
    else if (email == '') {
        alert("Nem adtál meg emailt!")
    }
    else if (cim == '') {
        alert("Nem adtál meg címet!")
    }
    else if (szul_ev == '') {
        alert("Nem adtál meg születési évet!")
    }
    else {
        mail_check_l = email.split('@')
        if (mail_check_l.length != 2) {
            alert("Hibás email formátum!")
            return
        }
        else {
            domain = mail_check_l[1].split('.')
            if (domain.length < 2) {
                alert("Hibás email formátum!")
                return
            }
        }

        eredmenyek.innerHTML =  "Név: " + nev + "<br>"
        eredmenyek.innerHTML += `Email: ${email}<br>`
        eredmenyek.innerHTML += `Cím:   ${cim}<br>`
        eredmenyek.innerHTML += `Születési év: ${szul_ev}<br>`
    }
}