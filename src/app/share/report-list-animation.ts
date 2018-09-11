import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const Expandin = trigger('Expandin', [
  state('in', style({transform: 'scale(0.97)', display: 'block'})),
  transition('void => *', [
    style({transform: 'scale(0.97)', display: 'none'}),
    animate(100, style({transform: 'scale(1)',  display: '*'}))
  ])
])
