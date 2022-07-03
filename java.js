const slidePage = document.querySelector(".slidepage");
const firstNextbtn = document.querySelector(".nextbtn");
const firstPrevbtn = document.querySelector(".prev-1")
const secNextbtn = document.querySelector(".next-1")
const secPrevbtn = document.querySelector(".prev-2")
const thrdNextbtn = document.querySelector(".next-2")
const thirdPrevbtn = document.querySelector(".prev-3")
const submit = document.querySelector(".submit")

firstNextbtn.addEventListener('click', function() {
    slidePage.style.marginLeft = "-25%";


});
secNextbtn.addEventListener('click', function() {
    slidePage.style.marginLeft = "-50%";

});
thrdNextbtn.addEventListener('click', function() {
    slidePage.style.marginLeft = "-75%";

});




firstPrevbtn.addEventListener('click', function() {
    slidePage.style.marginLeft = "0%";

});
secPrevbtn.addEventListener('click', function() {
    slidePage.style.marginLeft = "-25%";

});
thirdPrevbtn.addEventListener('click', function() {
    slidePage.style.marginLeft = "-50%";

});


const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const gender = document.getElementById("gender");
const occupation = document.getElementById("occupation");
const number = document.getElementById("number");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const qualification = document.getElementById("qualification");
const pfirstname = document.getElementById("pfirstname");
const plastname = document.getElementById("plastname");
const pnumber = document.getElementById("pnumber");
const village = document.getElementById("village");
const pincode = document.getElementById("pincode");
const state = document.getElementById("state");
const postoffice = document.getElementById("postoffice");
const field = document.getElementsByClassName("field")

// value of every thing for data 
const emailval = email.value.trim();




const namevalidate = () => {
    const firtnameval = firstName.value.trim();
    if (firtnameval === "") {
        setErrorMsg(firstName)
    } else {
        setSuccessMsg(firstName)
    }
}
const snamevalidate = () => {
    const lastNameval = lastName.value.trim();

    if (lastNameval === "") {
        setErrorMsg(lastName)
    } else {
        setSuccessMsg(lastName)
    }
}
const gendervalidate = () => {
    const genderval = gender.value.trim();

    if (genderval === "") {
        setErrorMsg(gender)
    } else {
        setSuccessMsg(gender)
    }
}
const occupationvalidate = () => {
    const occupationval = occupation.value.trim();

    if (occupationval === "") {
        setErrorMsg(occupation)
    } else {
        setSuccessMsg(occupation)
    }
}
const numbervalidate = () => {
    const numberval = number.value.trim();

    if (numberval == "") {
        setErrorMsg(number)
    } else {
        setSuccessMsg(number)
    }
}
const dobvalidate = () => {
    const dobval = dob.value.trim();


    if (dobval == "") {
        setErrorMsg(dob)
    } else {
        setSuccessMsg(dob)
    }
}
const qulavalidate = () => {
    const qualificationval = qualification.value.trim();


    if (qualificationval == "") {
        setErrorMsg(qualification)
    } else {
        setSuccessMsg(qualification)
    }
}
const pfnamevalidate = () => {
    const pfirtnameval = pfirstname.value.trim();

    if (pfirtnameval === "") {
        setErrorMsg(pfirstname)
    } else {
        setSuccessMsg(pfirstname)
    }
}
const plnamevalidate = () => {
    const plastnameval = plastname.value.trim();

    if (plastnameval == "") {
        setErrorMsg(plastname)
    } else {
        setSuccessMsg(plastname)
    }
}
const pnumbervalidate = () => {
    const pnumberval = pnumber.value.trim();

    if (pnumberval === "") {
        setErrorMsg(pnumber)
    } else {
        setSuccessMsg(pnumber)
    }
}
const villagevalidate = () => {
    const villageval = village.value.trim();

    if (villageval === "") {
        setErrorMsg(village)
    } else {
        setSuccessMsg(village)
    }
}
const pofficevalidate = () => {
    const postofficeval = postoffice.value.trim();

    if (postofficeval === "") {
        setErrorMsg(postoffice)
    } else {
        setSuccessMsg(postoffice)
    }
}
const statevalidate = () => {
    const stateval = state.value.trim();

    if (stateval === "") {
        setErrorMsg(state)
    } else {
        setSuccessMsg(state)
    }
}
const pinvalidate = () => {
    const pincodeval = pincode.value.trim();

    if (pincodeval === "") {
        setErrorMsg(pincode)
    } else {
        setSuccessMsg(pincode)
    }
}


submit.addEventListener('click', (event) => {
    event.preventDefault();

    numbervalidate();
    dobvalidate();
    qulavalidate();
    pfnamevalidate();
    plnamevalidate();
    pnumbervalidate();
    villagevalidate();
    pofficevalidate();
    statevalidate();
    pinvalidate();

})




function setErrorMsg(input) {
    const fieldt = input.parentElement;
    fieldt.className = "field error";

}

function setSuccessMsg(input) {
    const fieldt = input.parentElement;
    fieldt.className = "field success";

}