function clearAll() {
    document.getElementById('textArea').value = '';
  }
  
  function toggleCase() {
    const textArea = document.getElementById('textArea');
    textArea.value = textArea.value.split('\n').map(line => line.toUpperCase()).join('\n');
  }
  
  function sortLines() {
    const textArea = document.getElementById('textArea');
    textArea.value = textArea.value.split('\n').sort().join('\n');
  }
  
  function reverseLines() {
    const textArea = document.getElementById('textArea');
    textArea.value = textArea.value.split('\n').map(line => line.split('').reverse().join('')).join('\n');
  }
  
  function stripBlankLines() {
    const textArea = document.getElementById('textArea');
    textArea.value = textArea.value.split('\n').filter(line => line.trim() !== '').join('\n');
  }
  
  function addNumbers() {
    const textArea = document.getElementById('textArea');
    let lines = textArea.value.split('\n');
    lines = lines.map((line, index) => `${index + 1}. ${line}`);
    textArea.value = lines.join('\n');
  }
  
  function shuffleLines() {
    const textArea = document.getElementById('textArea');
    let lines = textArea.value.split('\n');
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    textArea.value = lines.join('\n');
  }
  