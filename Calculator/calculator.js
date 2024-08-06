
      let calculation = localStorage.getItem('calculation') || '';
      
      showDisplayElement();
      
      function updateCalculation(value) {
        calculation += value;
        showDisplayElement();
        localStorage.setItem('calculation', calculation);
        
      }

      function showDisplayElement(){
        document.querySelector('.js-display').innerHTML = `${calculation}`;

      }
