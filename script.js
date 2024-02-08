document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.querySelector(".no");
  const noSectionContainer = document.querySelector(".noSectionContainer");

  noButton.addEventListener("click", function () {
    noSectionContainer.classList.add("show");
  });

  function handleYesButtonClick() {
    document.body.style.backgroundColor = "#F3B3A6";

    const yesButton = document.querySelector(".yes");
    const box = document.querySelector(".box");
    const messageElement = document.createElement("h2");
    messageElement.setAttribute("id","tip")
    messageElement.textContent = "Przeciągnij do skrzynki :3";
    // Dodajemy klasę .hide do elementu .box
    box.classList.add("hide");

    // Usuwamy element .box po zakończeniu animacji
    box.addEventListener("animationend", function () {
      box.remove();

      // Tworzymy nowy element SVG
      const svg1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      svg1.setAttribute("id", "svg1");
      svg1.setAttribute("width", "142");
      svg1.setAttribute("height", "122");
      svg1.setAttribute("viewBox", "0 0 142 122");
      svg1.setAttribute("fill", "none");

      const path1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path1.setAttribute(
        "d",
        "M118.741 99.9694L23.6049 100.418C18.4699 100.443 14.2871 96.2996 14.2632 91.1642L13.9784 30.8352C13.9539 25.7001 18.0973 21.5174 23.2323 21.4934L118.369 21.0443C123.504 21.0198 127.686 25.1632 127.71 30.2982L127.995 90.6271C128.02 95.7626 123.877 99.9455 118.741 99.9694Z"
      );
      path1.setAttribute("fill", "#F99F78");

      const path2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path2.setAttribute(
        "d",
        "M125.413 97.0482L83.1411 60.6739L125.068 23.9023C125.262 23.7322 125.282 23.4368 125.112 23.2422C124.942 23.0485 124.646 23.0287 124.451 23.1993L73.7735 67.6457C72.2102 69.0166 69.8427 69.0288 68.2663 67.6713L17.1715 23.7051C16.9759 23.5366 16.6805 23.5587 16.5114 23.7546C16.3428 23.9505 16.3649 24.2459 16.561 24.4141L58.8331 60.7884L16.9064 97.5601C16.7122 97.7302 16.693 98.0261 16.8631 98.2203C16.9228 98.2886 16.9981 98.3357 17.0792 98.3599C17.2286 98.405 17.397 98.374 17.5229 98.2635L59.5489 61.4045L67.6554 68.3803C68.209 68.8562 68.8413 69.1945 69.5076 69.3949C71.1634 69.8939 73.0269 69.5437 74.3897 68.3482L82.4304 61.2963L124.802 97.7567C124.854 97.801 124.912 97.8319 124.972 97.8498C125.144 97.9016 125.338 97.8519 125.462 97.7073C125.631 97.5127 125.609 97.2168 125.413 97.0482Z"
      );
      path2.setAttribute("fill", "white");

      svg1.appendChild(path1);
      svg1.appendChild(path2);

      // Dodajemy SVG do tego samego kontenera co div "box"
      const containerWrapper = document.createElement("div")
      containerWrapper.setAttribute("id","draggableDiv")
      containerWrapper.appendChild(svg1)
      document.querySelector(".container").appendChild(containerWrapper);
        dragElement(containerWrapper)
      // Animujemy SVG z 0 do 100%
      svg1.style.animation = "showSVG1 1s forwards";

      const svg2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      svg2.setAttribute("width", "791");
      svg2.setAttribute("height", "528");
      svg2.setAttribute("viewBox", "0 0 791 528");
      svg2.setAttribute("fill", "none");
      svg2.setAttribute("id", "post");

      const path3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path3.setAttribute(
        "d",
        "M609.172 111.913H594.767V526.245H609.172V111.913Z"
      );
      path3.setAttribute("fill", "#4E484A");

      const path4 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path4.setAttribute(
        "d",
        "M713.476 121.138H623.615V45.6125C623.615 20.7979 643.73 0.681946 668.545 0.681946C693.36 0.681946 713.476 20.7979 713.476 45.6125V121.138Z"
      );
      path4.setAttribute("fill", "#F66A57");

      const path5 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path5.setAttribute(
        "d",
        "M588.317 121.138H713.476L668.545 0.681946H543.387L588.317 121.138Z"
      );
      path5.setAttribute("fill", "#F66A57");

      const path6 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path6.setAttribute(
        "id",
        "path6"
      );
      path6.setAttribute(
        "d",
        "M588.317 121.138H498.456V45.6125C498.456 20.7979 518.572 0.681946 543.387 0.681946C568.201 0.681946 588.317 20.7979 588.317 45.6125V121.138Z"
      );
      path6.setAttribute("fill", "#D85648");

      const path7 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path7.setAttribute(
        "d",
        "M578.388 111.707H508.385V46.5081C508.385 27.208 524.087 11.5065 543.387 11.5065C562.687 11.5065 578.389 27.208 578.389 46.5081L578.388 111.707ZM510.148 109.944H576.626V46.5081C576.626 28.1799 561.715 13.2688 543.387 13.2688C525.059 13.2688 510.148 28.1799 510.148 46.5081V109.944Z"
      );
      path7.setAttribute("fill", "#F76A58");

      const path8 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path8.setAttribute(
        "d",
        "M693.884 55.9441H682.279V41.8348H602.746V30.2302H693.884V55.9441Z"
      );
      path8.setAttribute("fill", "#F8F9EC");
      path8.setAttribute("id", "xd");

      const path9 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path9.setAttribute(
        "d",
        "M790.302 524.742H0.696899V527.748H790.302V524.742Z"
      );
      path9.setAttribute("fill", "#4E484A");

      svg2.appendChild(path3);
      svg2.appendChild(path4);
      svg2.appendChild(path5);
      svg2.appendChild(path6);
      svg2.appendChild(path7);
      svg2.appendChild(path8);
      svg2.appendChild(path9);

      // Dodajemy SVG do tego samego kontenera co div "box"
      document.querySelector(".container").appendChild(svg2);
      document.querySelector(".container").appendChild(messageElement);

      // Animujemy SVG z dołu ekranu
      svg2.style.animation = "showSVG2 1s forwards";
    });
  }

  const yesButton = document.querySelector(".yes");
  yesButton.addEventListener("click", handleYesButtonClick);
});

function dragElement(element) {
  let pos1 = 0, pos3 = 0;

  element.addEventListener('mousedown', dragMouseDown, false);
  element.addEventListener('touchstart', dragTouchStart, false);

  function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      document.addEventListener('mouseup', closeDragElement, false);
      document.addEventListener('mousemove', elementDrag, false);
  }

  function dragTouchStart(e) {
      e.preventDefault();
      pos3 = e.touches[0].clientX;
      document.addEventListener('touchend', closeDragElement, false);
      document.addEventListener('touchmove', elementTouchDrag, false);
  }

  function elementDrag(e) {
      e.preventDefault();
      const diffX = e.clientX - pos3;
      pos3 = e.clientX;
      element.style.left = (element.offsetLeft + diffX) + "px";
  }

  function elementTouchDrag(e) {
      e.preventDefault();
      const diffX = e.touches[0].clientX - pos3;
      pos3 = e.touches[0].clientX;
      element.style.left = (element.offsetLeft + diffX) + "px";
  }

  function closeDragElement() {
      document.removeEventListener('mouseup', closeDragElement, false);
      document.removeEventListener('mousemove', elementDrag, false);
      document.removeEventListener('touchend', closeDragElement, false);
      document.removeEventListener('touchmove', elementTouchDrag, false);
      if (pos3 > 230) {
        toTheEnd();
    }
  }
}

function toTheEnd() {
  var element = document.getElementById("container");
  if (element) {
    element.style.opacity = "0";
    setTimeout(()=>{
      element.style.display="none"
      happyDog()
    },1000)
  } else {
    console.error("Element with id 'xd' not found.");
  }
}

function happyDog() {
  // Tworzenie nowych elementów
  var container = document.createElement("div");
  var header = document.createElement("h2");
  var image = document.createElement("img");

  // Dodanie klasy do kontenera dla animacji
  container.classList.add("container2");

  // Dodanie tekstu do nagłówka
  header.textContent = "Dziękuje 🥰🥰🥰";

  // Ustawienie źródła obrazka
  image.src = "./assets/figdog.gif"; // Ustaw ścieżkę do swojego obrazka

  // Dodanie elementów do kontenera
  container.appendChild(header);
  container.appendChild(image);

  // Pobranie pierwszego elementu w ciele strony
  var firstElement = document.body.firstChild;

  // Wstawienie kontenera przed pierwszym elementem w ciele strony
  document.body.insertBefore(container, firstElement);

  // Wymuszenie reflow, aby uruchomić animację
  container.offsetWidth; // eslint-disable-line no-unused-expressions

  // Dodanie klasy show po krótkim opóźnieniu, aby uruchomić animację
  setTimeout(function() {
    container.classList.add("show");
  }, 100);
}
