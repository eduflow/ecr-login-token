import {saveState} from '@actions/core';

export const IsPost = !!process.env['STATE_isPost'];
export const registry = process.env['STATE_registry'] || '';
export const logout = /true/i.test(process.env['STATE_logout'] || '');

export function setRegistry(registry: string) {
  saveState('registry', registry);
}

export function setLogout(logout: string) {
  saveState('logout', logout);
}

if (!IsPost) {
  saveState('isPost', 'true');
}
