let all = document.querySelectorAll("*");
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks1");
let tasksDiv2 = document.querySelector(".tasks2");
let clock = document.querySelector(".time");
let calander = document.querySelector(".date");
let todaydate = document.querySelector(".todaydate");
let username = document.querySelector(".name1");
let photo = document.querySelector(".left .photo1");
let email = document.querySelector(".email1");
let password = document.querySelector(".password1");
let change = document.querySelector(".change");
let userimg = document.querySelector(".userimg");
let userimg2 = document.querySelector(".userimg2");
let userp = document.querySelector(".username");
let options = document.querySelector(".options");
let sidebar = document.querySelector(".sidebar");
let shadow = document.querySelector(".shadow");
let orignal = document.querySelector(".Orignal");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let body = document.querySelector("body");
let radios = document.querySelectorAll('input[name="option"]');
let langs = document.querySelectorAll('input[name="lang"]');
let arraytasks = [] ;
let arrdatetasks = [];
let arrnodatetasks = [];
let translation = {
    en : {
        brojectName : "Do-it" ,
        userName : "Name" ,
        todayTasks : "Today tasks" ,
        personal : "Personal" ,
        freelance : "Freelance" ,
        work : "Work",
        normal : "Normal" ,
        scheduledTasks : "Scheduled tasks" , 
        settings : "Settings" ,
        add : "Add" ,
        message1 : "No tasks" ,
        message2 : "Tasks with due dates show up here" ,
        profile : "Profile" ,
        changePhoto : "Change photo" ,
        changeName : "Change name" ,
        changeEmail : "Change email" ,
        changePassword : "Change password" ,
        save: "Save" ,
        display : "Display" ,
        dark : "Dark",
        light : "Light",
        orignal : "Orignal",
        language : "Language",
        notify : "This task added to Scheduled tasks"
    } ,
    ar : {
        brojectName : "دو-ات" ,
        userName : "الاسم" ,
        todayTasks : "مهام اليوم" ,
        personal : "شخصي" ,
        freelance : "العمل الحر" ,
        work : "العمل",
        normal : "عادي" ,
        scheduledTasks : "جدول المهام" , 
        settings : "الاعدادات" ,
        add : "اضافه" ,
        message1 : "لا يوجد مهام" ,
        message2 : "المهام ذات التواريخ تظهر هنا" ,
        profile : "الملف الشخصي" ,
        changePhoto : "تغير الصوره" ,
        changeName : "تغير الاسم" ,
        changeEmail : "تغير البريد الالكتروني" ,
        changePassword : "تغير كلمه المرور" ,
        save: "حفظ" ,
        display : "الثمات" ,
        dark : "داكن",
        light : "فاتح",
        orignal : "التقليدي",
        language : "اللغه",
        notify : "هذه المهمه تمت اضافتها الي جدول المهام" 
    }
} 


window.onload = function() {
    applySidebarStyles();
    if(window.localStorage.mode){
        body.classList = window.localStorage.mode;
    }
    if(localStorage.selectedRadio === undefined){
        localStorage.setItem("selectedRadio","Light")
    }
    if(localStorage.selectedlang === undefined){
        localStorage.setItem("selectedlang","en")
        EnglishtoArabic();
        setlanguage();
        applySidebarStyles();
        
    }
    if(window.localStorage.selectedlang){
        if (window.localStorage.selectedlang === "en") {
            body.style.direction = "ltr";
            EnglishtoArabic();
            setlanguage();
            
        }
        else if (window.localStorage.selectedlang === "ar") {
            body.style.direction = "rtl";
            ArabictoEnglish()
            setlanguage()
            
        }
    }
    if(document.title === "todaytasks"){
        if (tasksDiv.lastChild) {
            tasksDiv.lastChild.style.opacity = "";
            tasksDiv.lastChild.style.transition = "";
        }
    }
    if(document.title === "setting"){
        document.querySelectorAll('input[name="option"]').forEach(radio => {
            radio.addEventListener('change', function () {
                const savedValue = localStorage.getItem('selectedRadio');
                const radioInput = document.querySelector(`input[value="${savedValue}"]`);
                radioInput.nextElementSibling.classList.add("selected");
                document.querySelectorAll('input[name="option"]').forEach(radio2 => {
                    if(radio2 !== radioInput) {
                        radio2.nextElementSibling.classList.remove("selected")
                    }
                    
                });
            });
        });
                const savedValue = localStorage.getItem('selectedRadio');
                const radioInput = document.querySelector(`input[value="${savedValue}"]`);
                radioInput.nextElementSibling.classList.add("selected");
                // =============================================================================
        document.querySelectorAll('input[name="lang"]').forEach(radio => {
            radio.addEventListener('change', function () {
                const savedlang = localStorage.getItem('selectedlang');
                const langInput = document.querySelector(`input[value="${savedlang}"]`);
                langInput.nextElementSibling.classList.add("selectedlang");
                document.querySelectorAll('input[name="lang"]').forEach(radio2 => {
                    if(radio2 !== langInput) {
                        radio2.nextElementSibling.classList.remove("selectedlang")
                    }
                    
                });
            });
        });
                const savedlang = localStorage.getItem('selectedlang');
                const langinput = document.querySelector(`input[value="${savedlang}"]`);
                langinput.nextElementSibling.classList.add("selectedlang");

    }
}

document.querySelectorAll('input[name="option"]').forEach(radio => {
    radio.addEventListener('change', function () {
        saveRadioValue(this.value);
        all.forEach(al => {
            al.style.transition = "0.3s ease-in-out";
            shadow.style.transition = "0s";
        });
        
    });
});

window.addEventListener('change', function () {
    all.forEach(al => {
        al.style.transition = " ";
    });
});
window.addEventListener('resize', function () {
    all.forEach(al => {
        al.style.transition = "0s";
    });
});


function saveRadioValue(value) {
    localStorage.setItem('selectedRadio', value);
}

document.querySelectorAll('input[name="lang"]').forEach(radio => {
    radio.addEventListener('change', function () {
        all.forEach(al => {
            al.style.transition = "0s";
        });
        savelangValue(this.value);
    });
});

function savelangValue(value) {
    localStorage.setItem('selectedlang', value);
}


function loadRadioValue() {
    const savedValue = localStorage.getItem('selectedRadio');
    if (savedValue) {
        const radioInput = document.querySelector(`input[value="${savedValue}"]`);
        if (radioInput) {
            radioInput.checked = true;            
        }
    }
    const savedlang = localStorage.getItem('selectedlang');
    if (savedValue) {
        const radioInput = document.querySelector(`input[value="${savedlang}"]`);
        if (radioInput) {
            radioInput.checked = true;            
        }
    }

}

loadRadioValue;


radios.forEach(radio => {
radio.addEventListener('change', function() {
    if (this.checked) {
        body.classList = this.classList;
        window.localStorage.setItem("mode",this.classList[0]);
    }
});
});

langs.forEach(lang => {
lang.addEventListener('change', function() {
    sidebar.style.transition = "";
    applySidebarStyles();
    if (this.checked && this.value == "en") {
        body.style.direction = "ltr";
        EnglishtoArabic();
        setlanguage();
        
    }
    else if (this.checked && this.value == "ar") {
        body.style.direction = "rtl";
        ArabictoEnglish();
        setlanguage();
        
    }
});
});


options.addEventListener("click" , (e) => {
    sidebar.classList.toggle("slide")
    shadow.classList.toggle("shadow2")
    sidebar.style.transition = "0.3s";    
});
shadow.addEventListener("click" , (e) => {
    sidebar.classList.toggle("slide")
    shadow.classList.toggle("shadow2") 
});


if (window.localStorage.getItem("tasks")) {
    arraytasks = JSON.parse(window.localStorage.getItem("tasks"));
}

gettasksfromlocalstorage(arraytasks);


if (document.title === "todaytasks") {

    const selectedLang = localStorage.getItem('selectedlang');
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    function convertToArabicNumber(number) {
        return number.toString().split('').map(digit => arabicNumbers[parseInt(digit)]).join('');
    }
    if (selectedLang === "en") {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const monthIndex = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthName = shortMonths[monthIndex];
        const formattedDate = `${day} ${monthName} ${year}`;
        todaydate.textContent = formattedDate;
    }
    else if (selectedLang === "ar") {
        const currentDate = new Date();
        const day = convertToArabicNumber(currentDate.getDate());
        const monthIndex = currentDate.getMonth();
        const year = convertToArabicNumber(currentDate.getFullYear());
        const shortMonths = ["ياناير", "فيبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سيبتمبر", "اوكتوبر", "نوفمبر", "ديسمبر"];
        const monthName = shortMonths[monthIndex];
        const formattedDate = `${day} ${monthName} ${year}`;
        todaydate.textContent = formattedDate;
    }

    document.addEventListener("keydown" , (e) => {
        if(e.key === "Enter") {
            submit.click();
        }
    });
    

    submit.onclick = function(){
        if (document.querySelector('input[name="color"]:checked')) {
            selectedOption = document.querySelector('input[name="color"]:checked');
        }
        else {
            selectedOption = document.createElement("div");
            selectedOption.className="#bbb";
        }
        if (calander.value !== "") {
            let notify = document.querySelector(".notify");
            notify.style.animation = "none";
            notify.style.animation = "notify 6s linear" ;
        }
        if(input.value != ""){
            addtasktoarray(input.value,selectedOption,convertTime(),calander.value);
            input.value = "";
            clock.value = "";
            calander.value = "";
            if(window.localStorage.selectedlang === "en") {
                let task = document.querySelectorAll(".tasks .task");
                task.forEach(task => {
                task.style.direction = "ltr";
                })
            }
            else if(window.localStorage.selectedlang === "ar") {
                let task = document.querySelectorAll(".tasks .task");
                task.forEach(task => {
                task.style.direction = "rtl";
                })
            }

        }
    };


    tasksDiv.addEventListener("click" , (e) => {
        if (e.target.classList.contains("del"))  {
            e.target.parentElement.parentElement.remove();
            removefromlocalstorage(e.target.parentElement.parentElement.getAttribute("data-id"));
            message () ;
            
        }
        if (e.target.classList.contains("icon2"))  {
            updatethelocalstorage(e.target.parentElement.parentElement.parentElement.getAttribute("data-id"));
            e.target.parentElement.classList.toggle("done2");
        }
        if (e.target.classList.contains("check"))  {
            updatethelocalstorage(e.target.parentElement.parentElement.getAttribute("data-id"));
            e.target.classList.toggle("done2");
        }
    });
}

if(document.title === "scheduledtasks"){
    tasksDiv2.addEventListener("click" , (e) => {
        if (e.target.classList.contains("del"))  {
            if (e.target.parentElement.parentElement.parentElement.children.length == 2) {
                e.target.parentElement.parentElement.parentElement.remove();
            }
            console.log(e.target.parentElement.parentElement.parentElement.children.length);
            e.target.parentElement.parentElement.remove();
            removefromlocalstorage(e.target.parentElement.parentElement.getAttribute("data-id"));
            message () ;
        }
        if (e.target.classList.contains("icon2"))  {
            updatethelocalstorage(e.target.parentElement.parentElement.parentElement.getAttribute("data-id"));
            e.target.parentElement.classList.toggle("done2");
        }
        if (e.target.classList.contains("check"))  {
            updatethelocalstorage(e.target.parentElement.parentElement.getAttribute("data-id"));
            e.target.classList.toggle("done2");
        }
    });
}

if (document.title === "setting") {
    change.onclick = function () {
        const fr = new FileReader() ;
        if(photo.files[0]) {
            fr.readAsDataURL(photo.files[0]);
        fr.addEventListener("load", () => {
            const url = fr.result ;
            window.localStorage.setItem("photo" , url);
        });
        }
        
        if (username.value !== ""){
            window.localStorage.setItem("name" , username.value);
            window.localStorage.setItem("email" , email.value);
            window.localStorage.setItem("password" , password.value);
        }
        cahngedetails()
    }
}
cahngedetails();
function cahngedetails(){
    if (window.localStorage.name){
        userp.innerHTML = window.localStorage.name;
    }
    if (window.localStorage.photo){
        userimg.src = window.localStorage.photo ;
    }
    if (document.title === "setting") {
        if (window.localStorage.photo) {
            userimg2.src = window.localStorage.photo ;
        }
        if (window.localStorage.name) {
            username.value = window.localStorage.name; ;
        }
        if (window.localStorage.email) {
            email.value = window.localStorage.email ;
        }        
        if (window.localStorage.password) {
            password.value = window.localStorage.password ;
        }        

    }    
}

message () ;

function addtasktoarray(tasktext,selectedcolor,tasktime,taskdate) {
    let task = {
        id: Date.now(),
        title : tasktext,
        completed : false, 
        color : selectedcolor.classList[0],
        time : tasktime ,
        date : taskdate 
    }
    if(tasktime === "12:undefined AM") task.time = "";
    arraytasks.push(task);
    addeletopagefrom(arraytasks);
    message () ;
    addtaskstolocalstorage(arraytasks);
}

function addeletopagefrom(arraytasks){
    if(document.title==="todaytasks"){
        tasksDiv.innerHTML = "";
    }
    else if (document.title==="scheduledtasks") 
    tasksDiv2.innerHTML = "";
    
    
    arraytasks.forEach(task => {
        let div = document.createElement("div");
        if(task === arraytasks[arraytasks.length-1] && task.date === "") {
        div.style.opacity = "0";
        div.style.transition = "opacity 0.3s ease-in-out";
        }

        let check = document.createElement("div");
        check.className = "check";
        div.className = "task";
        if(task.completed === true){
            check.className = "check done2";
        }
        div.setAttribute("data-id", task.id);
        div.id = task.date;
        let left = document.createElement("div");
        left.className = "left";
        let point = document.createElement("div")
        point.className = "points";
        point.style.backgroundColor=task.color;
        left.appendChild(point);
        let lefttxt = document.createElement("div")
        lefttxt.className = "lefttxt";
        lefttxt.appendChild(document.createTextNode(task.title));
        left.appendChild(lefttxt);
        let time = document.createElement("div")
        if(task.time === "12:undefined AM") time.innerHTML = "";
        else time.innerHTML = task.time ;
        time.className = "timevalue";
        let icons = document.createElement("div");
        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        icon1.className = "del fa-regular fa-trash-can delete";
        icon2.className = "fa-solid fa-check icon2";
        icon2.setAttribute("title", "done");
        icon1.setAttribute("title", "delete");
        icons.className = "icons";
        check.appendChild(icon2);
        icons.appendChild(time);
        icons.appendChild(check);
        icons.appendChild(icon1);
        div.appendChild(left);
        div.appendChild(icons);
        
        if(task.date === "" && document.title === "todaytasks"){
            arrnodatetasks.push(task);
            tasksDiv.appendChild(div);
            setTimeout(() => {
                div.style.opacity = "1"; 
            }, 10); 
        
        }
        else if (task.date !== "" && document.title === "scheduledtasks") {
            let scheduleddiv = document.createElement("div");
            scheduleddiv.id = task.date ;
            let p = document.createElement("p");
            p.className = "datepergraph";
            p.innerHTML = formatDate(task.date) ; 
            scheduleddiv.appendChild(p);
            let counter = 0;
            for (let i = 0; i < tasksDiv2.children.length; i++) {
                if(div.id === tasksDiv2.children[i].id) {
                    tasksDiv2.children[i].appendChild(div)
                    break;
                }
                else counter++;
            };
            if (counter === tasksDiv2.children.length){
                scheduleddiv.appendChild(div);
                tasksDiv2.appendChild(scheduleddiv);
            }
            arrdatetasks.push(task);
            const tasksContainer = document.querySelector('.tasks');
            const tasksArray = Array.from(tasksContainer.children);
            tasksArray.sort((a, b) => new Date(a.id) - new Date(b.id));
            tasksArray.forEach(task => tasksContainer.appendChild(task));
        }

        
    });
}

function addtaskstolocalstorage(arraytasks) {
    window.localStorage.setItem("tasks",JSON.stringify(arraytasks));
}

function gettasksfromlocalstorage(arraytasks){
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addeletopagefrom(tasks);
    }
}

function removefromlocalstorage(taskid) {
    arraytasks = arraytasks.filter((task) => task.id != taskid);
    arrdatetasks = arrdatetasks.filter((task) => task.id != taskid);
    arrnodatetasks = arrnodatetasks.filter((task) => task.id != taskid);
    addtaskstolocalstorage(arraytasks);
}

function updatethelocalstorage(taskid) {
    for (let i=0; i<arraytasks.length; i++) {
        if (arraytasks[i].id == taskid) {
            if (arraytasks[i].completed == false){
                arraytasks[i].completed = true;
            }
            else arraytasks[i].completed = false;
        }
    }
    addtaskstolocalstorage(arraytasks);
}

function message () {
    if (document.title === "todaytasks") {
        if (arrnodatetasks.length  === 0) {
            let message = document.createElement("div");
            let messageimg = document.createElement("img");
            let messagep = document.createElement("p")
            let messagetxt = document.createTextNode("No tasks");
            messageimg.src = "img/2158206-removebg-preview.png";
            messagep.appendChild(messagetxt);
            message.appendChild(messageimg);
            message.appendChild(messagep);
            message.className = "message1";
            tasksDiv.append(message);
            let message1 = document.querySelector(".message1 p");
            if (localStorage.selectedlang  === "en"){
                message1.innerText = translation.en.message1;
            }
            if (localStorage.selectedlang  === "ar"){
                message1.innerText = translation.ar.message1;
            }
        }

        }
    
    else if(document.title === "scheduledtasks") {
        if (arrdatetasks.length  === 0) {
            let message = document.createElement("div");
            let messageimg = document.createElement("img");
            let messagep = document.createElement("p")
            let messagetxt = document.createTextNode("Tasks with due dates show up here");
            messageimg.src = "img/businessman-planning-events-deadlines-agenda.png";
            messagep.appendChild(messagetxt);
            message.appendChild(messageimg);
            message.appendChild(messagep);
            message.className = "message2";
            tasksDiv2.append(message);
            let message2 = document.querySelector(".message2 p");
            if (localStorage.selectedlang  === "en"){
                message2.innerText = translation.en.message2;
            }
            if (localStorage.selectedlang  === "ar"){
                message2.innerText = translation.ar.message2;
            }
        }
    }

}


function convertTime() {
    const time24 = document.querySelector(".time").value;
    const [hours, minutes] = time24.split(':');
    let hours12 = hours % 12 || 12;  // Convert hours to 12-hour format
    const amPm = hours >= 12 ? 'PM' : 'AM';  // Determine AM or PM
    const formattedTime = `${hours12.toString().padStart(2, '0')}:${minutes} ${amPm}`;
    return formattedTime;
}

function formatDate(inputDate) {
    const selectedLang = localStorage.getItem('selectedlang');
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    function convertToArabicNumber(number) {
        return number.toString().split('').map(digit => arabicNumbers[parseInt(digit)]).join('');
    }

    if(selectedLang === "en") {
        const [year, month, day] = inputDate.split('-');
        const date = new Date(year, month - 1, day);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        return formattedDate;
    }
    else if (selectedLang === "ar") {
        const [year, month, day] = inputDate.split('-');
        const date = new Date(year, month - 1, day);
        const monthNames = ["ياناير", "فيبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سيبتمبر", "اوكتوبر", "نوفمبر", "ديسمبر"];
        const formattedDate = `${convertToArabicNumber(date.getDate())} ${monthNames[date.getMonth()]} ${convertToArabicNumber(date.getFullYear())}`;
        return formattedDate;
    }
}


//===================================
function EnglishtoArabic() {
    let list = document.querySelector(".todaytasks ul");
    list.style.margin = "0 0 0 45px";
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.border = "7px solid var(--second-color)";
    sidebar.style.borderLeft = "none";
    sidebar.style.borderTopLeftRadius = "9px";
    sidebar.style.borderTopRightRadius = "0px";
    sidebar.style.borderBottomLeftRadius = "9px";
    sidebar.style.borderBottomRightRadius = "0px";
    applySidebarStyles;
    let options = document.querySelector(".options");
    options.style.right = " ";
    options.style.left = "30px";
    // =================
    let redball = document.querySelector(".redball");
    redball.style.zIndex = "1";
    redball.style.boxShadow = "0 2px 15px var(--balls1-shadow-color)";

    if(document.title === "setting") {
        let left = document.querySelector(".profile .left") ;
        left.style.paddingLeft = "0px";
        left.style.paddingRight = "10px";
        left.style.borderLeft = "none";
        left.style.borderRight = "1.5px solid var(--lite-gray-color)";
    }
    if(document.title === "todaytasks") {
        let date = document.querySelector(".date");
        let time = document.querySelector(".time");
        date.style.zIndex = "1";
        time.style.zIndex = "2";
        let input = document.querySelector(".input");
        input.placeholder = "What is your next task ?";
    }
    if(document.title === "scheduledtasks"){
        let datepergraph = document.querySelectorAll(".datepergraph");
        datepergraph.forEach(datepergraph => {
            datepergraph.style.direction = "ltr";
        })
    }
    if(document.title === "todaytasks" || document.title === "scheduledtasks"){
        let tasks = document.querySelector(".tasks");
        tasks.style.direction = "rtl";
        let task = document.querySelectorAll(".tasks .task");
        task.forEach(task => {
            task.style.direction = "ltr";
        })
    }
}
function ArabictoEnglish() {
    let list = document.querySelector(".todaytasks ul");
    list.style.margin = "0 40px 0 0";
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.border = "7px solid var(--second-color)";
    sidebar.style.borderRight = "none";
    sidebar.style.borderTopLeftRadius = "0px";
    sidebar.style.borderTopRightRadius = "9px";
    sidebar.style.borderBottomLeftRadius = "0px";
    sidebar.style.borderBottomRightRadius = "9px";
    applySidebarStyles;
    let options = document.querySelector(".options");
    options.style.left = " ";
    options.style.right = "30px";
    let redball = document.querySelector(".redball");
    redball.style.zIndex = "-1";
    redball.style.boxShadow = "0 2px 15px var(--balls2-shadow-color)";

    if(document.title === "setting") {
        let left = document.querySelector(".profile .left") ;
        left.style.paddingLeft = "10px";
        left.style.paddingRight = "0px";
        left.style.borderRight = "none";
        left.style.borderLeft = "1.5px solid var(--lite-gray-color)";
    }
    if(document.title === "todaytasks") {
        let date = document.querySelector(".date");
        let time = document.querySelector(".time");
        date.style.zIndex = "2";
        time.style.zIndex = "1";
        let input = document.querySelector(".input");
        input.placeholder = "ما هي مهمتك التاليه ؟";
    }
    if(document.title === "scheduledtasks"){
        let datepergraph = document.querySelectorAll(".datepergraph");
        datepergraph.forEach(datepergraph => {
            datepergraph.style.direction = "rtl";
        })
    }
    if(document.title === "todaytasks" || document.title === "scheduledtasks"){
        let tasks = document.querySelector(".tasks");
        tasks.style.direction = "ltr";
        let task = document.querySelectorAll(".tasks .task");
        task.forEach(task => {
            task.style.direction = "rtl";
        })
    }
    
}


    

    function applySidebarStyles() {
        const sidebar = document.querySelector('.sidebar');
        const selectedLang = localStorage.getItem('selectedlang');
        if (window.innerWidth <= 993) {
            if (selectedLang === 'en') {
                sidebar.style.left = '0';
                sidebar.style.right = '';
                sidebar.style.transform = 'translateX(-100%)';
            } else if (selectedLang === 'ar') {
                sidebar.style.right = '0';
                sidebar.style.left = ''; 
                sidebar.style.transform = 'translateX(100%)';
            }
        } else {
            sidebar.style.left = '';
            sidebar.style.right = '';
            sidebar.style.transform = '';
        }
    }

    window.addEventListener('resize', applySidebarStyles);
    applySidebarStyles;


    




function message () {
    if (document.title === "todaytasks") {
        if (arrnodatetasks.length  === 0) {
            let message = document.createElement("div");
            let messageimg = document.createElement("img");
            let messagep = document.createElement("p")
            let messagetxt = document.createTextNode("No tasks");
            messageimg.src = "img/2158206-removebg-preview.png";
            messagep.appendChild(messagetxt);
            message.appendChild(messageimg);
            message.appendChild(messagep);
            message.className = "message1";
            tasksDiv.append(message);
            let message1 = document.querySelector(".message1 p");
            if (localStorage.selectedlang  === "en"){
                message1.innerText = translation.en.message1;
            }
            if (localStorage.selectedlang  === "ar"){
                message1.innerText = translation.ar.message1;
            }
        }

        }
    
    else if(document.title === "scheduledtasks") {
        if (arrdatetasks.length  === 0) {
            let message = document.createElement("div");
            let messageimg = document.createElement("img");
            let messagep = document.createElement("p")
            let messagetxt = document.createTextNode("Tasks with due dates show up here");
            messageimg.src = "img/businessman-planning-events-deadlines-agenda.png";
            messagep.appendChild(messagetxt);
            message.appendChild(messageimg);
            message.appendChild(messagep);
            message.className = "message2";
            tasksDiv2.append(message);
            let message2 = document.querySelector(".message2 p");
            if (localStorage.selectedlang  === "en"){
                message2.innerText = translation.en.message2;
            }
            if (localStorage.selectedlang  === "ar"){
                message2.innerText = translation.ar.message2;
            }
        }
    }

}

function setlanguage() {
    let brojectName = document.querySelector(".text h2");
    let userName = document.querySelector(".text p");
    let todayTasks = document.querySelector(".todaytasks p");
    let personal = document.querySelector(".todaytasks ul li .Personal")
    let freelance = document.querySelector(".todaytasks ul li .Freelance")
    let work = document.querySelector(".todaytasks ul li .Work")
    let normal = document.querySelector(".todaytasks ul li .Normal")
    let scheduledTasks = document.querySelector(".scheduledtasks p");
    let settings = document.querySelector(".Settings p");
    let heading = document.querySelector(".heading h1");
    let add = document.querySelector(".add");
    let message1 = document.querySelector(".message1 p");
    let message2 = document.querySelector(".message2 p");
    let profile = document.querySelector(".settingscontent .settings .mainul > li .first p");
    let display = document.querySelector(".settingscontent .settings .mainul > li .second p");
    let language = document.querySelector(".settingscontent .settings .mainul > li .third p");
    let changePhoto = document.querySelector(".profile .left p");
    let changeName = document.querySelector(".profile .right .name p"); 
    let changeEmail = document.querySelector(".profile .right .email p"); 
    let changePassword = document.querySelector(".profile .right .password p"); 
    let save = document.querySelector(".profile .right button"); 
    let dark = document.querySelector(".display .Dark + p");
    let light = document.querySelector(".display .Light + p");
    let orignal = document.querySelector(".display .Orignal + p");
    let notify = document.querySelector(".notify");
    

    if (localStorage.selectedlang === "en") {
        brojectName.innerText = translation.en.brojectName;
        if(window.localStorage.name === undefined) {
            userName.innerText = translation.en.userName;
        }
        todayTasks.innerText = translation.en.todayTasks;
        personal.innerText = translation.en.personal;
        freelance.innerText = translation.en.freelance;
        work.innerText = translation.en.work;
        normal.innerText = translation.en.normal;
        scheduledTasks.innerText = translation.en.scheduledTasks;
        settings.innerText = translation.en.settings;

        if(document.title === "todaytasks"){
            add.value = translation.en.add ;
            if (arrnodatetasks.length  === 0){
                message1.innerText = translation.en.message1;
            }
            heading.innerText = translation.en.todayTasks;
            notify.innerText = translation.en.notify;
        }
        if(document.title === "scheduledtasks"){
            if (arrdatetasks.length  === 0) {
                message2.innerText = translation.en.message2;
            }
            heading.innerText = translation.en.scheduledTasks;
        }
        if(document.title === "setting"){
            profile.innerText = translation.en.profile;
            display.innerText = translation.en.display;
            language.innerText = translation.en.language;
            changePhoto.innerText = translation.en.changePhoto;
            changeName.innerText = translation.en.changeName;
            changeEmail.innerText = translation.en.changeEmail;
            changePassword.innerText = translation.en.changePassword;
            save.innerText = translation.en.save;
            dark.innerText = translation.en.dark;
            orignal.innerText = translation.en.orignal;
            light.innerText = translation.en.light;
        }
    }
    else if (localStorage.selectedlang === "ar") {
        brojectName.innerText = translation.ar.brojectName;
        if(window.localStorage.name === undefined) {
            userName.innerText = translation.ar.userName;
        }
        todayTasks.innerText = translation.ar.todayTasks;
        personal.innerText = translation.ar.personal;
        freelance.innerText = translation.ar.freelance;
        work.innerText = translation.ar.work;
        normal.innerText = translation.ar.normal;
        scheduledTasks.innerText = translation.ar.scheduledTasks;
        settings.innerText = translation.ar.settings;
        if(document.title === "todaytasks"){
            add.value = translation.ar.add ;
            if (arrnodatetasks.length  === 0){
                message1.innerText = translation.ar.message1;
            }
            heading.innerText = translation.ar.todayTasks;
            notify.innerText = translation.ar.notify;
        }
        if(document.title === "scheduledtasks"){
            if (arrdatetasks.length  === 0) {
                message2.innerText = translation.ar.message2;
            }
            heading.innerText = translation.ar.scheduledTasks;
        }
        if(document.title === "setting"){
            profile.innerText = translation.ar.profile;
            display.innerText = translation.ar.display;
            language.innerText = translation.ar.language;
            changePhoto.innerText = translation.ar.changePhoto;
            changeName.innerText = translation.ar.changeName;
            changeEmail.innerText = translation.ar.changeEmail;
            changePassword.innerText = translation.ar.changePassword;
            save.innerText = translation.ar.save;
            dark.innerText = translation.ar.dark;
            orignal.innerText = translation.ar.orignal;
            light.innerText = translation.ar.light;
        }
    }
}
