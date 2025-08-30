const tabs = document.querySelectorAll('.tab'); 

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      
      tabs.forEach(t => t.classList.remove('border-b-4', 'border-blue-600'));

      
      tab.classList.add('border-b-4', 'border-blue-600');
    });
  });