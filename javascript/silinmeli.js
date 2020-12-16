OnOffStatus = true
function accord(elem) {
    let allElement = document.querySelectorAll("p")
    for (let i = 0; i < allElement.length; i++)
        allElement[i].style.display = "none"

    if (OnOffStatus) {
        console.log(OnOffStatus)
        elem.nextElementSibling.style.display = "none"
        OnOffStatus = false;
    }

    else {
        console.log(OnOffStatus)
        elem.nextElementSibling.style.display = "block"
        OnOffStatus = true;
    }
}