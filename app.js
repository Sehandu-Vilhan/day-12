


// setTimeout(() => {
//     console.log("amma ude nagittawala kade yanna kiynawa");
//         setTimeout(() => {
//          console.log("nagitala dath madda ");
//                    setTimeout(() => {
//                     console.log("muna hodanawa");
//                         setTimeout(() => {
//                             console.log("kade yana wa");
//                                 setTimeout(() => {
//                                     console.log("yaluwek paredi haba wenwa  ");
//                                     setTimeout(() => {
//                                         console.log("yaluwa ekka katha karanawa");
//                                             setTimeout(() => {
//                                                 console.log("kade ta  awa , polime balagena inwa");
//                                                     setTimeout(() => {
//                                                         console.log("badu tika ganwa");
//                                                             setTimeout(() => {
//                                                                 console.log("gedara enwa");
//                                                                     setTimeout(() => {
//                                                                         console.log("badu tika ammata genath denawa");
//                                                                             setTimeout(() => {
//                                                                                 console.log("apahu nida gannwa ");

//                                                                             }, 3000);
//                                                                     }, 3000);
//                                                             }, 3000);

//                                                     }, 3000);
//                                             }, 3000);

//                                     },3000);

//                                 }, 3000);
//                         }, 3000);
//                    },3000);
//         },3000);   
// }, 3000);

















// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "Bearer ");
// myHeaders.append("Cookie", "__cf_bm=_U3iWbyKb5G_1kP54bUNBkhwR8ID4azIEfO8AfZDHAY-1795073664.7692878-1.0.1.1-VJhUKk8TTAfBSWj5GZdBt1RPRvRNYL4KqNxXmxsULjcMoATIE3NRCeejbz7e3wC96M1lAN0Kw.mCeMafQTUcOvmsqgwfIxQMGUbtmLGAjYRu6Oey3lOx_jbM2uGri.GP");

// const raw = JSON.stringify({
//   "model": "openai/gpt-oss-20b",
//   "messages": [
//     {
//       "role": "user",
//       "content": document.getElementById("txtSample").value
//     }
//   ]
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };



const His1 = [];

function click1() {






    const myHeaders = new Headers();``
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", "Bearer +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   ");


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

            clickMe_H();




        })




}





console.log(His1);






function clickMe_H() {


    document.getElementById("hhh").innerHTML = "";

    for (let i = 0; i < His1.length; i++) {


        // document.getElementById("hhh").innerHTML += His1[i];
        document.getElementById("hhh").innerHTML += `<li>${His1[i]}</li>`;

    }




}