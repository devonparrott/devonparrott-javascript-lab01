var name1 = prompt("name");

var name2 = prompt("name");

var name3 = prompt("name");


if (name1.length > name2.length && name1.length > name3.length) {
    console.log (name1);
}

if (name1.length < name2.length && name2.length > name3.length) {
    console.log(name2);
}

if (name1.length < name2.length && name2.length < name3.length) {
    console.log(name3);
}

if (name1.length == name2.length && name1.length > name3.length) {
    console.log(name1, name2);
} else {
    console.log(name3);
}

if (name2.length == name3.length && name2.length > name1.length) {
    console.log(name2, name3);
} else {
    console.log(name1);
}

if (name3.length == name1.length && name3.length > name2.lenght) {
    console.log(name3, name1);
} else {
    console.log(name2);
}