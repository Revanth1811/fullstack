functionquote=()=>{
    fetch('https://type.fit/api/quotes').then((data)=>{
        return data.json()
    })
    .then((data)=>{
        let random =Math.floor(Math.random()*data.length)
        document.getElementById('quote').innerText='Quote : '+data[random].text
        document.getElementById('author').innerText='Author : '+data[random].author
    })
}
functionquote()