import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'usuarios',
    name: 'Usuarios',
    type: 'link',
    icon: 'supervised_user_circle'
  },
  {
    state: 'recursos',
    name: 'Recursos',
    type: 'link',
    icon: 'bookmarks'
  },
  
  {
    state: 'categorias',
    name: 'Categorías',
    type: 'link',
    icon: 'loyalty'
  },{
    state: 'supercategorias',
    name: 'Supercategorias',
    type: 'link',
    icon: 'loyalty'
  },
  {
    state: '/',
    name: 'Logout',
    type: 'link',
    icon: 'power_settings_new'
  }
 ];
@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
