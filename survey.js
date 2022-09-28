const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Name? ', (answer) => {
  console.log(`\n...\n`);
  const name = answer;
  
  rl.question('Age? ', (answer) => {
    console.log(`\n...\n`);
    const age = answer;
    
    rl.question('Nationality? ', (answer) => {
      console.log(`\n...\n`);
      const nation = answer;
      
      rl.question('Occupation? ', (answer) => {
        console.log(`\n...\n`);
        const occ = answer;

        rl.question('Purpose and duration of stay? ', (answer) => {
          console.log(`\n...\n`);
          const pAndD = answer;
          
          rl.question('Address during stay? ', (answer) => {
            const add = answer;

            console.log('\n\n\n\n\n\n\n');
            console.log(`Name: ${name}\nAge: ${age}\nNationality: ${nation}\nOccupation: ${occ}\nPurpose and Duration of Stay: ${pAndD}\nAddress during stay: ${add}\n\nTEMPORARY VISA GRANTED\n\nParadis Island Border Services\n`);

            rl.close();
          });
        
        });

      });
      
    });
  
  });

});

