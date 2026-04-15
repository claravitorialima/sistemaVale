// Lógica de Login Simples
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
});

function logout() {
    location.reload();
}

// Simulação de Sensores e Gêmeo Digital
function simularVazamento() {
    const grease = document.getElementById('grease-val');
    const temp = document.getElementById('temp-val');
    const model = document.getElementById('bearing-model');
    const statusText = document.getElementById('status-text');

    // Alterando valores para simular falha
    grease.innerText = "42%";
    grease.style.color = "#57ff486e";
    
    temp.innerText = "85°C";
    temp.style.color = "#57ff486e";

    // Atualizando o "Gêmeo Digital" visual
    model.classList.add('critical');
    statusText.innerText = "ALERTA: Vazamento Detectado - Risco de Atrito";
    statusText.style.color = "#57ff486e";

    alert("🚨 Alerta enviado para o sensor físico do Vagão #MN-402!");
}