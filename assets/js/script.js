
var sampleData = [
    {
        "name": "testing",
        "link": "https://www.google.com"
    },
    {
        "name": "test",
        "link": "https://www.facebook.com"
    },
    {
        "name": "test",
        "link": "https://www.gmail.com"
    }
]

function addCardHandler(data) {
    var cardList = document.getElementById("search-results");
    var i = 0
    while(i < data.length) {
        var card = document.createElement("div");
        var cardBody = document.createElement("div");
        var cardTitle = document.createElement("h5");
        var cardText = document.createElement("p");
        var cardBtn = document.createElement("a");
        
        cardBody.setAttribute("class", "card-body");
        cardTitle.setAttribute("class", "card-title");
        cardText.setAttribute("class", "card-text");
        cardBtn.setAttribute("class", "btn btn-primary")
        cardTitle.textContent = data[i].name
        cardText.textContent = data[i].link
        cardBtn.textContent = "link"
        cardBtn.setAttribute("href", data[i].link)
        console.log(data[2])
        
        cardBody.append(cardTitle, cardText, cardBtn)
        card.appendChild(cardBody)
        card.setAttribute("class", "card");
        console.log(card)
        cardList.append(card)
        i++
    }
    console.log(cardList)
}

addCardHandler(sampleData)