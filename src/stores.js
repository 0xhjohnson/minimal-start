import { writable } from 'svelte/store';

function createMode() {
  let next;

  const hydrate = {
    mode: localStorage.getItem('mode'),
  };

  if (!hydrate.mode) {
    next = 'dark';
    localStorage.setItem('mode', next);
    hydrate.mode == next;
  }

  const { subscribe, update } = writable(hydrate.mode);

  const switchMode = (curr) => {
    if (curr == 'light') next = 'dark';
    else next = 'light';

    localStorage.setItem('mode', next);
    return next;
  };

  return {
    subscribe,
    switch: () => update(m => switchMode(m)),
  };
}

export const mode = createMode();
