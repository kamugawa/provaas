function openTab(evt, tabName) {
    // GANBIARRA FOFA 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove as classes para tudo ficar bonitinho ( coisa besta )
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "#007bff";
    }
  
    // mostra as budegas
    document.getElementById(tabName).style.display = "block";
  
    // deixa as coisas mais inviadadas 
    evt.currentTarget.style.backgroundColor = "#0056b3";
  }
  
  // Define a materia do inferno
  document.getElementsByClassName("tablink")[0].click();
  

  // Função para os exercícios de Aritmética
function exercicioAritmetica() {
  let soma = 15 + 30;
  let divisao = 100 / 4;

  alert("Respostas:\n1) 15 + 30 = " + soma + "\n2) 100 / 4 = " + divisao);
}

// Função para os exercícios de Geometria
function exercicioGeometria() {
  let hipotenusa = Math.sqrt(3 * 3 + 4 * 4); // Usando Pitágoras
  let perimetroQuadrado = 4 * 5; // Perímetro de um quadrado com lado 5

  alert("Respostas:\n1) Hipotenusa = " + hipotenusa + "\n2) Perímetro do quadrado = " + perimetroQuadrado + " cm");
}

// Função para os exercícios de Álgebra
function exercicioAlgebra() {
  let equacao1 = (11 + 4) / 3; // Resolver 3x - 4 = 11
  let delta = 4 * 4 - 4 * 1 * 4; // Delta para equação x² - 4x + 4 = 0
  let raiz1 = (-4 + Math.sqrt(delta)) / 2;
  let raiz2 = (-4 - Math.sqrt(delta)) / 2;

  alert("Respostas:\n1) x = " + equacao1 + "\n2) Raízes = " + raiz1 + " e " + raiz2);
}

// Função para os exercícios de Funções
function exercicioFuncoes() {
  let funcao1 = 2 * 5 + 3; // f(x) = 2x + 3 onde x = 5
  let funcao2 = -1 * 2 + 6; // f(x) = -x + 6 onde x = 2

  alert("Respostas:\n1) f(5) = " + funcao1 + "\n2) f(2) = " + funcao2);
}
