console.log("Email List");

const emailDisplay = document.getElementById("email-display");

function getEmailList() {
    let emailList = [];
    const ulEl = document.createElement("ul");

    for (let i = 0; i < 10; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                //console.log("Success", res, res.data);
                emailList.push(res.data.response);
                const liEl = document.createElement("li");
                liEl.innerHTML = res.data.response;
                ulEl.appendChild(liEl);
            })
            .catch((err) => {
                alert("Error", err);
            })
    }
    emailDisplay.appendChild(ulEl);
}

getEmailList();
