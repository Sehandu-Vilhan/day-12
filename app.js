
const His1 = [];

function click1() {
    const myHeaders = new Headers(); ``
    myHeaders.append("Content-Type", "application/json");








             // add api key  here  

    myHeaders.append("Authorization", "Bearer        ++++++++++++++++++++++            ");


                // add api key  








    myHeaders.append("Cookie", "__cf_bm=_U3iWbyKb5G_1kP54bUNBkhwR8ID4azIEfO8AfZDHAY-1795073664.7692878-1.0.1.1-VJhUKk8TTAfBSWj5GZdBt1RPRvRNYL4KqNxXmxsULjcMoATIE3NRCeejbz7e3wC96M1lAN0Kw.mCeMafQTUcOvmsqgwfIxQMGUbtmLGAjYRu6Oey3lOx_jbM2uGri.GP");
    const raw = JSON.stringify({
        "model": "openai/gpt-oss-20b",
        "messages": [
            {
                "role": "user",
                "content": document.getElementById("txtSample").value
            }
        ]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };





    fetch("https://api.groq.com/openai/v1/chat/completions", requestOptions)
        .then((response) => response.json())


        .then((result) => {
            //  document.getElementById("lbldispaly").innerText = result.choices[0].message.content;

            console.log(result.choices[0].message.content);


            His1.push(result.choices[0].message.content);

            document.getElementById("txtSample").value = "";
            clickMe_H();




        })




}






console.log(His1);
function clickMe_H() {


    document.getElementById("hhh").innerHTML = "";

    for (let i = 0; i < His1.length; i++) {


        // document.getElementById("hhh").innerHTML += His1[i];
        const cleanHtml = typeof marked !== "undefined" ? marked.parse(His1[i]) : His1[i];
        document.getElementById("hhh").innerHTML += `<li>${cleanHtml}</li>`;

    }

    window.scrollTo(0, document.body.scrollHeight);


}



function hideWelcomeTitle() {
    const welcomeHeader = document.getElementById("welcomeHeader");
    if (welcomeHeader) {
        welcomeHeader.style.display = "none";
    }
}

feffefef 