/**
 * Created by Admin on 12/25/2016.
 */
import {Component} from '@angular/core';

@Component ({
  selector: 'character-builder',
  styles: [],
  template: require('./character-builder.template.html')
})
export class CharacterBuilder {
  chars = [{name: 'Barbarian'}, {name: 'Bard'}, {name: 'Cleric'}, {name: 'Druid'}, {name: 'Fighter'}, {name: 'Monk'}, {name: 'Paladin'}, {name: 'Ranger'}, {name: 'Rouge'}, {name: 'Sorcerer'}, {name: 'Wizard'}];
  constructor(){

  }
}
