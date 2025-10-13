// renderer.js - example renderer usage
const { ipcRenderer } = require('electron');

async function testEcho() {
  const res = await ipcRenderer.invoke('echo', 'hello');
  console.log(res);
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-echo');
  if (btn) btn.addEventListener('click', testEcho);
});