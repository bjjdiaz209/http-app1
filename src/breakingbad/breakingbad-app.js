
/**
 * @returns {Promise<Object>}
 */


const fetchQoute = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
     
    console.log(data[0]);
    return data[0];

}


export const BreakingbadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking App';
    element.innerHTML = 'loading ....';
    ///await fetchQoute();

    const qouteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQouteButton  = document.createElement('button');
    nextQouteButton.innerText = 'Next Quote';


    const renderQoute = (data) => {
        qouteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(qouteLabel,authoLabel,nextQouteButton);
    }

    // anadir listener
    nextQouteButton.addEventListener('click',async() => {
        element.innerHTML = 'loading ...';
        const quote = await fetchQoute();
        renderQoute(quote);
    })

    fetchQoute()
    .then(renderQoute);
    

}