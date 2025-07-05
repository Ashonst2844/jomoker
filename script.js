const radioMember = document.getElementsByClassName("radio-member");
const previewMember = document.getElementsByClassName("preview");

const memberNames = [
    "galih", "kale", "raffi", "vyrtyno", "ahsan",
    "emir", "sheba", "dion", "hizkia", "yuda", "masagus"
];

let memberIndex = 0;

function changeIndex(index) {
    const selectedRadio = radioMember[index];

    if (selectedRadio.checked) {
        memberIndex = index;

        // Sembunyikan semua preview
        for (let i = 0; i < previewMember.length; i++) {
            previewMember[i].style.display = "none";
        }

        // Tampilkan preview yang sesuai
        previewMember[index].style.display = "flex";
    }
}

// Setup event listener
for (let i = 0; i < radioMember.length; i++) {
    radioMember[i].addEventListener("change", () => changeIndex(i));
}

const imageParent = document.getElementById("imageParent")
const totalImage = 10


for (let i = 0; i < totalImage; i++) {
    const createImage = document.createElement("img")
    createImage.setAttribute("src", "galleries/gallery"+(i+1)+".jpeg")
    imageParent.appendChild(createImage)
    console.log("success")
}