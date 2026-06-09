export function initContactsPage(): void {
  const btn = document.querySelector(`.btn-cont`)

  btn?.addEventListener('click', () => {
    console.log('click');
  });

  createButton()
}

const wrapper = document.querySelector(`.contacts__container`) as HTMLElement


function createButton(): HTMLButtonElement {
  const btn = document.createElement('button') as HTMLButtonElement
  btn.textContent = 'button'
  btn.style.width = '100px'
  btn.style.backgroundColor = 'coral'

  wrapper.append(btn)

  return btn
}