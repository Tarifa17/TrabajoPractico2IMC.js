function calcularIMC(peso, altura){
    let imc = 0; 
    imc = peso / altura ^ 2;
    let nombre = document.getElementById('formGroupExampleInput');
    let apellido = document.getElementById('formGroupExampleInput2');
    if (imc < 18.5) {
        const imcSpan = document.getElementById('imcSpan');
        imcSpan.textContent = imc;
        const paciente = document.getElementById('paciente');
        paciente.textContent = nombre + apellido;
        const nivelPeso = document.getElementById('nivelPeso');
        nivelPeso.textContent = 'Bajo Peso';
        console.log("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        let nivelPeso = "Peso saludable";
        document.createElement(nivelPeso);
        console.log("Peso saludable");
    } else if (imc >= 25.0 && imc <= 29.9) {
        let nivelPeso = "Sobrepeso";
        document.createElement(nivelPeso);
        console.log("Sobrepeso");
    }
    else {
        let nivelPeso = "Obesidad";
        document.createElement(nivelPeso);
        console.log("Obesidad");
    } 
}
function calcular(){
    let altura = document.getElementById('height');
    let peso = document.getElementById('kg');
    calcularIMC(peso, altura);
};

