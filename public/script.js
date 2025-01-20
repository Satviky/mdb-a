async function castVote(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const response = await fetch('/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ choice: selectedOption.value }),
        });
        const data = await response.json();
        if (data.success) {
            updateResults(data.votes);
        } else {
            alert('There was an error submitting your vote.');
        }
    } else {
        alert('Please select an option before voting.');
    }
}

function updateResults(votes) {
    document.getElementById('votes1').innerText = votes[0];
    document.getElementById('votes2').innerText = votes[1];
    document.getElementById('votes3').innerText = votes[2];
    document.getElementById('votes4').innerText = votes[3];
    document.getElementById('results').style.display = 'block';
}
