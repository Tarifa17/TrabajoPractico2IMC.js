function calcularIMC(peso, altura){
    let imc = 0; 
    imc = (peso / Math.pow(altura, 2)); //(altura ** 2);

    console.log("Peso:", peso);
    console.log("Altura:", altura);
    console.log("IMC calculado:", imc);

    let nombre = document.getElementById('formGroupExampleInput').value;
    let apellido = document.getElementById('formGroupExampleInput2').value;

    const imcSpan = document.getElementById('imcSpan');
    imcSpan.textContent = imc.toFixed(2);
    const paciente = document.getElementById('paciente');
    paciente.textContent = nombre + apellido;
    const nivelPeso = document.getElementById('nivelPeso');
    nivelPeso.textContent = 'Bajo Peso';

    if (imc < 18.5) {
        /* const imcSpan = document.getElementById('imcSpan');
        imcSpan.textContent = imc;
        const paciente = document.getElementById('paciente');
        paciente.textContent = nombre + apellido;
        const nivelPeso = document.getElementById('nivelPeso');
        nivelPeso.textContent = 'Bajo Peso'; */
        console.log("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        nivelPeso.textContent = 'Peso Saludable' ;
        console.log("Peso saludable");
    } else if (imc >= 25.0 && imc <= 29.9) {
        nivelPeso.textContent = 'Sobrepeso' ;
        console.log("Sobrepeso");
    }
    else {
        nivelPeso.textContent = 'Obesidad' ;
        console.log("Obesidad");
    } 
}
function calcular(){
    let altura = parseFloat(document.getElementById('height').value);
    let peso = parseFloat(document.getElementById('kg').value);
    calcularIMC(peso, altura);
};

/*document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();*/

