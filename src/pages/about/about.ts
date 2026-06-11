import './about.scss'
import { add } from '../../shared/events/events';

export function initAboutPage(): void {
  console.log('About page loaded');

  // const btn = document.querySelector('#about-btn');

  add('click', '#about-btn', (_, el) => {
    // console.log('clicked', el);
    // document.body.style.backgroundColor = 'red'

    el.classList.toggle('active')

  })
  // btn?.addEventListener('click', () => {
  //   console.log('click');
  // });
}


