console.log("Email List");

function getEmailList() {
    let emailList = [];
    for (let i = 0; i < 10; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                //console.log("Success", res, res.data);
                emailList.push(res.data.response);
            })
            .catch((err) => {
                alert("Error", err);
            })
    }
    console.log(emailList);
}

getEmailList();
