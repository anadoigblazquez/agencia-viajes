const modal = document.querySelector('.details');
const trigger = document.querySelectorAll('.card__see-details');
const closeModalBtn = document.querySelector('.details__close');
console.log(modal);
export const toggleModal = () => {
    
    trigger.forEach(element => {
        element.addEventListener("click", (e) => {
            modal.classList.add('details--visible');
        })
    });

    closeModalBtn.addEventListener('click', (e) => {
        modal.classList.remove('details--visible');
    })
}