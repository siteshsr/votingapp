const voteButton = document.getElementById('voteButton');
const message = document.getElementById('message');

voteButton.addEventListener('click', () => {
    const selectedCandidate = document.getElementById('candidates').value;
    if (selectedCandidate === ' ') {
        message.textContent = 'Please select a candidate before voting.';
    } else {
        // Simulate voting process here (you can send data to a server)
        message.textContent = `You voted for ${selectedCandidate}. Thank you for voting!`;
        voteButton.disabled = true;
    }
});
