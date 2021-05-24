(function() {
    var dropzone = document.getElementById("dropzone");

    dropzone.ondragover = function() {
      this.className = 'dropzone dragover';
      this.innerHTML = 'Отпустите мышку';
      return false;
    };

    dropzone.ondragleave = function() {
      this.className = 'dropzone';
      this.innerHTML = 'Перетащите файлы сюда';
      return false;
    };

    dropzone.ondrop = function(e) {
      alert ("Файлы успешно загружены");
      this.className = 'dropzone';
      this.innerHTML = 'Перетащите файлы сюда';
      e.preventDefault();
    };
})();