
      let submit = ()=>{
        let email = document.getElementById('user')
        let password = document.getElementById('pass')
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                // var errorCode = error.code;
               var errorMessage = error.message;

                console.log(errorMessage)
            });

           
    } 

