function run() {
    var html_code = document.getElementById('html').value;
    var css_code = document.getElementById('css').value;
    var js_code = document.getElementById('js').value;
    var output = document.getElementById('output');

    output.contentDocument.body.innerHTML = html_code + "<style>" + css_code + "</style>";
    output.contentWindow.eval(js_code);
}

let btn = document.querySelector('.btn');
btn.addEventListener("click", function () {
    let txt = document.querySelector('.txt');
    txt.select();
    document.execCommand('copy');
});
let btn1 = document.querySelector('.btn1');
btn1.addEventListener("click", function () {
    let txt1 = document.querySelector('.txt1');
    txt1.select();
    document.execCommand('copy');
});
let btn2 = document.querySelector('.btn2');
btn2.addEventListener("click", function () {
    let txt2 = document.querySelector('.txt2');
    txt2.select();
    document.execCommand('copy');
});


const textarea = document.querySelector("textarea");
const filename = "test";
const btns = document.querySelector(".sve");

btns.addEventListener("click", ()=> {
    const blob = new Blob([textarea.value], {type: "text/html"});
    const fileURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = filename;
    link.href = fileURL;
    link.click();
});

const Txtarea = document.querySelector(".txt1");
const file_name = "style";
const sve_btn= document.querySelector(".sve1");

sve_btn.addEventListener("click", ()=> {
    const blob1 = new Blob([Txtarea.value], {type: "text/css"});
    const file_URL = URL.createObjectURL(blob1);
    const link1 = document.createElement("a");
    link1.download = file_name;
    link1.href = file_URL;
    link1.click();
});

const Txt_area = document.querySelector(".txt2");
const file_Name = "script";
const sve_Btn= document.querySelector(".sve2");

sve_Btn.addEventListener("click", ()=> {
    const blob2 = new Blob([Txt_area.value], {type: "text/javascript"});
    const File_URL = URL.createObjectURL(blob2);
    const link2 = document.createElement("a");
    link2.download = file_Name;
    link2.href = File_URL;
    link2.click();
});