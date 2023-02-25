const getInputText=()=>{
    const inputText=document.getElementById('text-input');
    const inputTextValue=inputText.value;
    // console.log(inputTextValue)
    loadDataApi(inputTextValue)
    inputText.value=''
}

const loadDataApi=(word)=>{
  const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
   try{
    fetch(url)
    .then(res=>res.json())
    .then(data=>wordMeaningShow(data))
   }
   catch(error){
    console.log(error)
   }
}

const wordMeaningShow=(data)=>{
    console.log(data.message)
    const meaningContainer=document.getElementById('meaning-container');
    meaningContainer.innerText=''
    for(const info of data){
        const div=document.createElement('div');
        div.classList.add('col');
        console.log(info)
        div.innerHTML=`
        <p>${info.meanings[0].definitions[0].definition}</p>
        `
        meaningContainer.appendChild(div)
}
}