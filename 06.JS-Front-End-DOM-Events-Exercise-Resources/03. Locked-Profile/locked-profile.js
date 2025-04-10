document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let profiles = document.querySelectorAll('.profile');

    for(let profile of profiles){
        let showButton = profile.querySelector('button');
        let hiddenFields = profile.querySelector('.hidden-fields');
        let unlockRadio = profile.querySelector('input[value="unlock"]') || profile.querySelector('input[id$="Unlock"]');
        showButton.addEventListener('click', () => {
            let isUnlocked = profile.querySelector('input[type="radio"][value="unlock"]')?.checked ||
                             profile.querySelector('input[id$="Unlock"]')?.checked;

            if (isUnlocked) {
                if (showButton.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    showButton.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    showButton.textContent = 'Show more';
                }
            }
        });
    }
}