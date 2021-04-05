var projetos = {
  convMoedas: {
    id: "convMoedas",
    link: "https://codepen.io/viniciusbsilva/full/Bapapwg"
  },
  calculadora: {
    id: "calculadora",
    link: "https://codepen.io/viniciusbsilva/full/NWdGddz"
  },
  mentalista: {
    id: "mentalista",
    link: "https://codepen.io/viniciusbsilva/full/rNjOwXx"
  },
  aluraflix: {
    id: "aluraflix",
    link: "about:blank"
  },
  tabClassificacao: {
    id: "tabClassificacao",
    link: "about:blank"
  },
  supertrunfo: {
    id: "supertrunfo",
    link: "about:blank"
  },
  certificard: {
    id: "certificard",
    link: "about:blank"
  }
};

// "property" value is string so use "projetos[property]" to access it's content
for (var property in projetos) {
  /* console.log("property: " + projetos[property]);
  console.log("property.id: " + projetos[property].id);
  console.log("property.link: " + projetos[property].link);
  console.log("-------------------------------------"); */
  changeLink(projetos[property].id, projetos[property].link);
}

function changeLink(id, link) {
  console.log(`changeLink id=${id} link=${link}`);
  document.getElementById(id).href = link;
}
