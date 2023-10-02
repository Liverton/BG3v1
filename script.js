document.addEventListener("DOMContentLoaded", function () {
  const showRacesButton = document.getElementById("showRacesButton");
  const racesList = document.getElementById("races-list");
  const raceOptions = document.getElementById("race-options");
  const subRacePrompt = document.getElementById("subRacePrompt"); // Adicionado o ID

  showRacesButton.addEventListener("click", function () {
    racesList.classList.toggle("collapse");
    raceOptions.classList.toggle("collapse");

    // Oculta as opções de sub-raça quando a lista de raças é fechada
    if (racesList.classList.contains("collapse")) {
      const subRaceOptions = document.querySelectorAll("#race-options li");
      subRaceOptions.forEach(function (subRaceOption) {
        subRaceOption.classList.add("collapse");
      });

      // Oculta o texto "Escolha uma sub-raça:"
      subRacePrompt.classList.add("collapse");
    } else {
      // Mostra o texto "Escolha uma sub-raça:" quando a lista de raças é aberta
      subRacePrompt.classList.remove("collapse");
    }
  });

  // Função genérica para mostrar/ocultar opções de sub-raça
  function toggleSubRaceOptions(race) {
    const subRaceOptions = document.querySelectorAll("#race-options li");
    for (const subRaceOption of subRaceOptions) {
      if (subRaceOption.dataset.race === race) {
        subRaceOption.classList.remove("collapse");
      } else {
        subRaceOption.classList.add("collapse");
      }
    }
  }

  // Eventos de clique para as raças principais
  const elfOption = document.querySelector("#races-list li[data-race='Elf']");
  const drowOption = document.querySelector("#races-list li[data-race='Drow']");

  elfOption.addEventListener("click", function () {
    toggleSubRaceOptions("Elf");
    raceOptions.classList.toggle("collapse");
  });

  drowOption.addEventListener("click", function () {
    toggleSubRaceOptions("Drow");
    raceOptions.classList.toggle("collapse");
  });

  // Eventos de clique para as sub-raças
  const subRaceOptions = document.querySelectorAll("#race-options li");
  subRaceOptions.forEach(function (subRaceOption) {
    subRaceOption.addEventListener("click", function (event) {
      event.stopPropagation();
      // Lógica para lidar com a escolha da sub-raça aqui
    });
  });
});
