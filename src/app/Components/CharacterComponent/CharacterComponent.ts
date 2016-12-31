/**
 * Created by Admin on 12/25/2016.
 */
import {Component} from '@angular/core';

@Component ({
  selector: 'character-builder',
  styles: [require('./character-builder.style.css')],
  template: require('./character-builder.template.html')
})
export class CharacterBuilder {
  campaignTypes = [{name: 'Roll for Stats', value: 0}, {name: 'Low Fantasy', value: 10}, {name: 'Standard Fantasy', value: 15}, {name: 'High Fantasy', value: 20}, {name: 'Epic Fantasy', value: 25}];
  campaignType:Number = 0;
  chars = [{name: 'Barbarian'}, {name: 'Bard'}, {name: 'Cleric'}, {name: 'Druid'}, {name: 'Fighter'}, {name: 'Monk'}, {name: 'Paladin'}, {name: 'Ranger'}, {name: 'Rouge'}, {name: 'Sorcerer'}, {name: 'Wizard'}];
  userStep:any = 0;
  character:any = {};
  stepTitleArray:String[] = ['Select a Class', 'Select your levels'];
  constructor(){

  }

  getActive(step){
    if(step === this.userStep){
      return 'active';

    }

    return '';
  }

  stepTitle(){
    return this.stepTitleArray[this.userStep];
  }

  selectClass(char){
    this.character = char;
    this.userStep += 1;
    console.log(char);
  }

  resetBuild(){
    this.userStep = 0;
    this.character = {};

  }

  logChange(e){
    let select = e.currentTarget;
    let value = select.selectedOptions[0].value;
    if(value === this.campaignType){
      return true;
    }
    else {
      this.campaignType = value;
    }
  }
}
