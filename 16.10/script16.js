const ones = []
const message = document.getElementById('message');

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name.length < 1) {
        message.textContent = 'Nome de usuário inválido. Por favor digite pelo menos 1 caractere.';
    } else {
        if (email.length < 1) {
            message.textContent = 'E-mail inválido. Por favor digite pelo menos 1 caractere.';
        } else {
            message.textContent = '';
            const one = { name, email}
            ones.push(one);
            update();
        }
    }
}

function update() {
    const nametbody = document.getElementById('name-tbody');
    nametbody.innerHTML = '';
    for (let i = 0; i < ones.length; i++) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdEmail = document.createElement('td');
        tdName.innerText = ones[i].name;
        tdEmail.innerText = ones[i].email;
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        nametbody.appendChild(tr);
    }
}