const timeEl = document.getElementById('time');
const statusEl = document.getElementById('status');
const cycleEl = document.getElementById('cycle');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');


let timer = null;
let time = 1500; 
let running = false;
let cycle = 1;
let isWork = true;
