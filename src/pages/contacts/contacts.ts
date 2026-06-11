import './contacts.scss'

export function initContactsPage(): void {
  console.log('Contacts page loaded');

  const wrapper = document.querySelector(`.contacts__container`) as HTMLElement;

  const btn = document.querySelector(`.btn-cont`)

  btn?.addEventListener('click', () => {
    console.log('click');
  });

  createButton(wrapper)
}



function createButton(wrapper: HTMLElement): HTMLButtonElement {
  const existing = wrapper.querySelector('button[data-dynamic="true"]');

  if (existing) return existing as HTMLButtonElement;

  const btn = document.createElement('button');

  btn.textContent = 'button';
  btn.style.width = '100px';
  btn.style.backgroundColor = 'coral';

  btn.dataset.dynamic = 'true';

  wrapper.append(btn);

  return btn;
}