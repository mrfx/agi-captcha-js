"use strict";

const md5 = require('md5');

module.exports =  class agiCaptcha {

  constructor () {

    // DEFAULT PARAMETERS
    this.params = {
      backgroundColor: '#000000',
      color: '#e8e8e8',
      width: 'auto',
      canvasID: 'agi-captcha-canvas',
      hiddenId: 'agi-captcha-hidden',
      parentDivId: 'cp',
      hiddenInputName: 'password-captcha',
      font: '32px Arial',
      textPosition: [10, 35]
    }

  }

  createCanvas() {

    let cWidth = this.params.width;
    if (this.params.width === 'auto') {
      try {
        cWidth = document.getElementById ( this.params.parentDivId ).clientWidth;
      } catch ( e ) {
        console.log('agicaptcha error: parent div id not exists: #' + this.params.parentDivId);
        return false;
      }
    }
    const cHeight = Math.round(cWidth / 10);
    const canvasElement = document.createElement('canvas');
    canvasElement.setAttribute('id', this.params.canvasID);
    canvasElement.setAttribute('width', cWidth);
    canvasElement.setAttribute('height', cHeight);
    canvasElement.style.backgroundColor = this.params.backgroundColor;
    const ctx = canvasElement.getContext('2d');
    const text = md5(Math.random()).substr(0,6);
    ctx.font = this.params.font;
    ctx.fillStyle = this.params.color;
    ctx.fillText(text, this.params.textPosition[0],this.params.textPosition[1], cWidth - this.params.textPosition[0]);

    const hiddenElement = document.createElement('input');
    hiddenElement.setAttribute('id', this.params.hiddenId )
    hiddenElement.setAttribute('type', 'hidden');
    hiddenElement.setAttribute('name', this.params.hiddenInputName);
    hiddenElement.setAttribute('value', md5(text));

    try {

      if(document.getElementById( this.params.canvasID )) {
        document.getElementById( this.params.canvasID ).replaceWith( canvasElement );
      } else {
        document.getElementById( this.params.parentDivId ).appendChild( canvasElement );
      }
      if (document.getElementById(this.params.hiddenId)) {
        document.getElementById(this.params.hiddenId).replaceWith( hiddenElement );
      } else {
        document.getElementById( this.params.parentDivId ).appendChild( hiddenElement );
      }

    } catch ( e ) {
      console.log('agicaptcha error: parent div id not exists: #' + this.params.parentDivId);
    }


  }

}

// window.agiCaptcha = agiCaptcha;

