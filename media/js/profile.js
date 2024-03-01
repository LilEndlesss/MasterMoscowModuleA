document.addEventListener("DOMContentLoaded", function () {
    var fileDropArea = document.getElementById("file-drop-area");
    var fileInput = document.getElementById("file-input");
    var uploadedFilesList = document.getElementById("uploaded-files-list");

    fileDropArea.addEventListener("dragover", function (event) {
        event.preventDefault();
        fileDropArea.classList.add("dragover");
    });

    fileDropArea.addEventListener("dragleave", function () {
        fileDropArea.classList.remove("dragover");
    });

    fileDropArea.addEventListener("drop", function (event) {
        event.preventDefault();
        fileDropArea.classList.remove("dragover");
        var files = event.dataTransfer.files;
        handleFiles(files);
    });

    fileInput.addEventListener("change", function () {
        var files = fileInput.files;
        handleFiles(files);
    });

    function handleFiles(files) {
        for (var i = 0; i < files.length; i++) {
            var li = document.createElement("li");
            li.textContent = files[i].name;
            uploadedFilesList.appendChild(li);
        }
    }
});

function uploadFiles() {

    alert("Файлы загружены!");
}

function logout() {

    alert("Выход из профиля");
}
