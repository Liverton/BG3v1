document.addEventListener("DOMContentLoaded", function () {
  const showRacesButton = document.getElementById("showRacesButton");
  const racesList = document.getElementById("races-list");
  const raceOptions = document.getElementById("race-options");
  const subRacePrompt = document.getElementById("subRacePrompt");

  showRacesButton.addEventListener("click", function () {
    racesList.classList.toggle("collapse");

    // Verifique se a raça selecionada tem sub-raças
    const selectedRace = document.querySelector("#races-list li:not(.collapse)");
    const raceHasSubraces = selectedRace && selectedRace.dataset.subrace !== undefined;

    if (raceHasSubraces) {
      raceOptions.classList.toggle("collapse");
      // Mostra o texto "Escolha uma sub-raça:" quando a lista de raças é aberta
      subRacePrompt.classList.remove("collapse");
    } else {
      // Se não houver sub-raças, oculte a seção de sub-raças e o texto
      raceOptions.classList.add("collapse");
      subRacePrompt.classList.add("collapse");
    }
  });

  // Função genérica para mostrar/ocultar opções de sub-raça
  function toggleSubRaceOptions(race) {
    const subRaceOptions = document.querySelectorAll("#race-options li");
    subRaceOptions.forEach(function (subRaceOption) {
      if (subRaceOption.dataset.race === race) {
        subRaceOption.classList.toggle("active");
      } else {
        subRaceOption.classList.remove("active");
      }
    });
  }

  // Eventos de clique para as raças principais (including the new races)
  const mainRaceOptions = document.querySelectorAll("#races-list li[data-race]");
  mainRaceOptions.forEach(function (mainRaceOption) {
    mainRaceOption.addEventListener("click", function () {
      const race = mainRaceOption.dataset.race;
      toggleSubRaceOptions(race);
      raceOptions.classList.toggle("collapse");
    });
  });

  // Eventos de clique para as sub-raças (including the new sub-races)
  const subRaceOptions = document.querySelectorAll("#race-options li[data-subrace]");
  subRaceOptions.forEach(function (subRaceOption) {
    subRaceOption.addEventListener("click", function (event) {
      event.stopPropagation();
      // Lógica para lidar com a escolha da sub-raça aqui
    });
  });
});
