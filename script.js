document.addEventListener("DOMContentLoaded", function () {
  const showRacesButton = document.getElementById("showRacesButton");
  const racesList = document.getElementById("races-list");
  const elfOption = document.getElementById("elf-option");
  const drowOption = document.getElementById("drow-option");
  const raceOptions = document.getElementById("race-options");
  const highElfOption = document.getElementById("high-elf-option");
  const woodElfOption = document.getElementById("wood-elf-option");
  const lolthDrowOption = document.getElementById("lolth-drow-option");
  const seldarineDrowOption = document.getElementById("seldarine-drow-option");

  


  showRacesButton.addEventListener("click", function () {
    racesList.classList.toggle("collapse");
    raceOptions.classList.add("collapse"); // Oculta o quadro de escolha ao mostrar a lista de raças
  });

  // Adicione um evento de clique para o elemento Elf
  elfOption.addEventListener("click", function () {
    raceOptions.classList.toggle("collapse"); // Mostra ou oculta o quadro de escolha ao clicar em Elf
  });

  // Adicione eventos de clique para as opções de sub-raça
  highElfOption.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede que o clique na sub-raça se propague para o elemento Elf
    // Implemente o código para lidar com a escolha de High Elf aqui
  });

  woodElfOption.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede que o clique na sub-raça se propague para o elemento Elf
    // Implemente o código para lidar com a escolha de Wood Elf aqui
  });

  // Adicione um evento de clique para o elemento Drow
  drowOption.addEventListener("click", function () {
    raceOptions.classList.toggle("collapse"); // Mostra ou oculta o quadro de escolha ao clicar em Drow
  });

  // Adicione eventos de clique para as opções de sub-raça
  lolthDrowOption.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede que o clique na sub-raça se propague para o elemento Elf
    // Implemente o código para lidar com a escolha de High Elf aqui
  });

  seldarineDrowOption.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede que o clique na sub-raça se propague para o elemento Elf
    // Implemente o código para lidar com a escolha de Wood Elf aqui
  });
});


