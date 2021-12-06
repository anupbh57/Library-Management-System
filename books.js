let list = [];
let studentList = [];
let idCount = 0;
function book(name, author, date, language, available, dec) {
    this.id = Math.round(Math.random() * 9999)
    this.name = name;
    this.author = author;
    this.date = date;
    this.language = language;
    this.available = available;
    list.push(name);
    list.push(dec);
}

function student(name, dob, borrowed, bookdate, dec, bookid) {
    this.id = Math.round(Math.random() * 999);
    this.name = name;
    this.dob = dob;
    this.borrowed = borrowed;
    this.bookid = bookid;
    this.bookdate = bookdate;
    this.dec = dec;
    studentList.push(dec);
}

let newRequest = {
    id: Math.round(Math.random() * 55555),
    bookvar: undefined,
    book: undefined,
    student: undefined,
    date: () => {
        return new Date().toLocaleString();
    }
}

//Books
let ifbamn = new book('I Feel Bad About My Neck', 'Nora Ephron', 2016, 'English', true, 'ifbamn');
let bg = new book('Broken Glass', 'Alain Mabanckou', 2008, 'English', true, 'bg');
let hpatgof = new book('Harry Potter and The Goblet of fire', 'JK Rowling', 2012, 'English', false, 'hpatgof');
let all = new book('A Little Life', 'Hanya Yanagihara', 1998, 'English', true, 'all');
let cvo = new book('Chronicles:Volume One', 'Bob Dylan', 2004, 'English', true, 'cvo');
let ttp = new book('The Tipping Point', 'Malcom Gladwell', 2020, 'English', true, 'ttp');
let dark = new book('Darkmans', 'Nicola Barker', 2006, 'English', true, 'dark');
let ts = new book('The Siege', 'Helen Dunmore', 2010, 'English', true, 'ts');
let light = new book('Light', 'M John Harrison', 1995, 'English', true, 'light');
let visit = new book('Visitation', 'Jenny Erpenbeck', 2008, 'English', true, 'visit');
let bb = new book('Bad blood', 'Lorna Sage', 2006, 'English', false, 'bb');
let priest = new book('Priestdaddy', 'Patricia Lockwood', 2019, 'English', true, 'priest');
let aitr = new book('Audults in the Room', 'Yanis Varoufakis', 2009, 'English', true, 'aitr');
let tgd = new book('The God Delusion', 'Richard Dawkins', 2006, 'English', true, 'tgd');
let tcol = new book('The Cost of Living', 'Deborah Levy', 2018, 'English', true, 'tcol');
let tmhie = new book('Tell me How it Ends', 'Valeria Luiselli', 2017, 'English', true, 'tmhie');
let coral = new book('Coraline', 'Neil Gaiman', 2002, 'English', false, 'coral');
let harv = new book('Harvest', 'Jim Crace', 2013, 'English', false, 'harv');
let tsl = new book('The Spirit Level', 'Richard Wilkinson', 2009, 'English', true, 'tsl');
let catcf = new book('Charlie and the Chocolate Factory', 'Roald Dahl', 2006, 'English', false, 'catcf');

//Students
let ezraLh = new student('Ezra Leigh', 1999, false, null, 'ezraLh');
let carlieWh = new student('Carlie Whyte', 1998, false, null, 'carlieWh');
let noorMr = new student('Noor Mercer', 2000, false, null, 'noorMr');
let jayeBr = new student('Jaye Bonner', 2001, false, null, 'jayeBr');
let kesterMs = new student('Kester Mullins', 1996, false, null, 'kesterMs');
let braidenOo = new student('Braiden Orozco', 1997, false, null, 'braidenOo');
let nabilahSm = new student('Nabilah Smith', 1998, false, null, 'nabilahSm');


const bookNumber = list.length - (list.length / 2);
let borrowedNumber = borrowedList(list.length);
let availableList = bookNumber - borrowedNumber;

function statsEditor(statId, stat) {
    let elemn = document.getElementById(statId)
    elemn.innerText = stat;
}

statsEditor('tb-js', bookNumber);
statsEditor('bb-js', borrowedNumber);
statsEditor('ab-js', availableList);

function borrowedList(listlength) {
    let j = 0;
    for (let i = 1; i <= listlength; i++) {
        let aa = eval(list[i]);
        if (aa.available === false) {
            j++;
        }
        i++;
    }
    return j;
}
borrowedList(bookNumber);

function listGenerator(list) {
    for (let i = 0; i < list.length; i++) {
        let j = i;
        j++
        let createName = document.createElement('li');
        createName.className = 'list-group-item';
        createName.appendChild(document.createTextNode(list[i]));
        createName.onclick = function () { bookView(list[j]); };
        document.getElementById('listcontent').appendChild(createName);
        i++;
    }
}

listGenerator(list);

function bookView(a) {
    $("#bookView").modal();
    let obj = eval(a);
    infoWriter('bid', obj.id);
    infoWriter('bname', obj.name);
    infoWriter('bauthor', obj.author);
    infoWriter('byear', obj.date);
    infoWriter('blanguage', obj.language);
    infoWriter('bstatus', obj.available);
    if (obj.available == true) {
        document.getElementById('fatimes').style.display = "none";
        document.getElementById('facheck').style.display = "block";
    }
    else {
        document.getElementById('fatimes').style.display = "block";
        document.getElementById('facheck').style.display = "none";
    }

    function infoWriter(id, element) {
        let elemn = document.getElementById(id);
        if (element == true || element == false) {
            if (element == true) {
                element = "Available";
                document.getElementById('btn-borrow').style.display = "block";
                document.getElementById('btn-return').style.display = "none";
            } else {
                element = "Not Available";
                document.getElementById('btn-return').style.display = "block";
                document.getElementById('btn-borrow').style.display = "none";
            };
        }
        elemn.innerText = element;
    }




}

function borrowBookView() {

    $("#borrowBookView").modal();
    bookListGenerator();

    document.getElementById('bkdropdown').onfocus = () => {
        $("#bookdropdown").toggle();
        document.getElementById("studentdropdown").style.display == "none";
        console.log(document.getElementById("studentdropdown").style.display);
        if (document.getElementById("studentdropdown").style.display == "block") {
            console.log('asd');
            document.getElementById("studentdropdown").style.display == "none";
        }
    };

    //Inbuilt search for books

    document.getElementById("bkdropdown").addEventListener("keyup", function () {
        var search = this.value.toLowerCase();
        var all = document.querySelectorAll("#bookdropdown option");
        for (let i of all) {
            let item = i.innerHTML.toLowerCase();
            if (item.indexOf(search) == -1) { i.classList.add("hide"); }
            else { i.classList.remove("hide"); }
            console.log(item);
        }

    });

    studentListGenerator(studentList);

    document.getElementById('stdropdown').onfocus = () => {
        $("#studentdropdown").toggle();
        document.getElementById('bookdropdown').blur();

    };

    //Inbuilt search for students
    document.getElementById("stdropdown").addEventListener("keyup", function () {
        var search = this.value.toLowerCase();
        var all = document.querySelectorAll("#studentdropdown option");
        for (let i of all) {
            let item = i.innerHTML.toLowerCase();
            if (item.indexOf(search) == -1) { i.classList.add("hide"); }
            else { i.classList.remove("hide"); }
            console.log(item);
        }

    });
}




function bookListGenerator() {
    document.getElementById('bookdropdown').innerHTML = "";
    let blist = [];
    for (let i = 0; i < list.length; i++) {
        let j = i;
        j++;
        blist.push(list[j]);
        i++;

    }
    for (let j = 0; j< blist.length; j++) {
        if (eval(blist[j]).available == true) {
            let createName = document.createElement('option');
            createName.appendChild(document.createTextNode(eval(blist[j]).name));
            createName.className = "dropdown-item";
            createName.onclick = function () { bookSelect(blist[j]); };
            document.getElementById('bookdropdown').appendChild(createName);
        }
    }

}


// (A) WAIT FOR PAGE TO FULLY LOAD  
window.addEventListener("load", function () {
    // (B) ATTACH KEY UP LISTENER TO SEARCH BOX
    document.getElementById("search").addEventListener("keyup", function () {
        // (C) GET THE SEARCH TERM
        var search = this.value.toLowerCase();

        // (D) GET ALL LIST ITEMS
        var all = document.querySelectorAll("#listcontent li");

        // (E) LOOP THROUGH LIST ITELS - ONLY SHOW ITEMS THAT MATCH SEARCH
        for (let i of all) {
            let item = i.innerHTML.toLowerCase();
            if (item.indexOf(search) == -1) { i.classList.add("hide"); }
            else { i.classList.remove("hide"); }
        }
    });
});

function studentListGenerator(list) {
    for (let i = 0; i < list.length; i++) {

        let createName = document.createElement('option');
        createName.className = 'dropdown-item';
        createName.appendChild(document.createTextNode(list[i]));
        createName.onclick = function () { studentSelect(list[i]); };
        document.getElementById('studentdropdown').appendChild(createName);
    }
}

function bookSelect(book) {
    document.getElementById('bookdropdown').style.display = "none";
    let selectedBook = eval(book);
    document.getElementById('bkdropdown').value = selectedBook.name;
    newRequest.book = book;
}

function studentSelect(student) {
    document.getElementById('studentdropdown').style.display = "none";
    let selectedStudent = eval(student);
    document.getElementById('stdropdown').value = selectedStudent.name;
    newRequest.student = student;
}

function borrowInitiator() {
    let book = eval(newRequest.book);
    let student = eval(newRequest.student);
    if (student != undefined && book != undefined) {
        book.available = false;
        student.borrowed = true;
        student.bookid = book.id;
        student.date = new Date().toLocaleString();
        historyWriter(student.name, book.name, 'Borrow', student.date);
        document.getElementById('bkdropdown').value = "";
        document.getElementById('stdropdown').value = "";
        newRequest.book = undefined;
        newRequest.student = undefined;


        statsEditor('tb-js', bookNumber);
        statsEditor('bb-js', borrowedNumber);
        statsEditor('ab-js', availableList);
    }
}

function historyWriter(borrower, book, action, date) {
    document.getElementById('hss').style.display= 'none';
    let table = document.getElementById('history');
    let row = table.insertRow(idCount);
    idCount++;
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);   
    let cell3 = row.insertCell(2);   
    let cell4 = row.insertCell(3);   
    let cell5 = row.insertCell(4);      

    cell1.innerHTML = idCount;
    cell2.innerHTML = borrower;
    cell3.innerHTML = book;
    cell4.innerHTML = action;
    cell5.innerHTML = date;
}