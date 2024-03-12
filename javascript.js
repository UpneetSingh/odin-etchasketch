const containerDiv = document.querySelector('#container');
const containerDiv2 = document.querySelector('#container2');
const containerDiv3 = document.querySelector("#container3");
const containerDiv4 = document.querySelector("#container4");
const containerDiv5 = document.querySelector('#container5');
const containerDiv6 = document.querySelector('#container6');   


function makeDivs(gridDiv){
    
    for(i=1; i<257;i++)
    {
        const gridDiv = document.createElement('div');
       
        containerDiv.appendChild(gridDiv);
        gridDiv.classList.add('gridstyle');
        gridDiv.addEventListener('mouseover',()=>{         
            gridDiv.style.backgroundColor = 'white';
        })
        gridDiv.addEventListener('mouseout',()=>{            
            gridDiv.style.backgroundColor = 'white';
        })
        
    }

}

makeDivs();


const btnDiv = document.querySelector('#setBtn');
const gridBtn = document.createElement('button');
btnDiv.appendChild(gridBtn);
gridBtn.textContent= "Press me to tweak grid size! Only 5 tries though!"
gridBtn.style.padding = '10px';
gridBtn.style.marginLeft = '780px';
gridBtn.style.marginBottom = '50px';


gridBtn.addEventListener('click', function makeDivs(){


        const userInput = prompt("Mention Grid Size between 1 to 100");
        const gridSize = Number(userInput);
        if(gridSize>100)
        { 
            return alert("Can't input more than 100")
        }

        if(document.querySelector('#container'))
        {
            
            for(i=1; i<(gridSize*gridSize) + 1; i++)
            {    
                const gridDiv = document.createElement('div');
                gridDiv.style.height = `${(960/gridSize) - 2}px`;
                gridDiv.style.width = `${(960/gridSize) - 2}px`;
                gridDiv.style.backgroundColor = 'red';
                gridDiv.style.border = '1px solid white'; 
                containerDiv2.appendChild(gridDiv);
                containerDiv.replaceWith(containerDiv2);
                gridDiv.addEventListener('mouseover',()=>{         
                    gridDiv.style.backgroundColor = 'white';
                })
                gridDiv.addEventListener('mouseout',()=>{            
                    gridDiv.style.backgroundColor = 'white';
                })
            }
        }

        else if(document.querySelector('#container2'))
        {
            
            for(i=1; i<(gridSize*gridSize) + 1; i++)
            {   
                const gridDiv = document.createElement('div');
                gridDiv.style.height = `${(960/gridSize) - 2}px`;
                gridDiv.style.width = `${(960/gridSize) - 2}px`;
                gridDiv.style.backgroundColor = 'red';
                gridDiv.style.border = '1px solid white'; 
                containerDiv3.appendChild(gridDiv);
                containerDiv2.replaceWith(containerDiv3);
                gridDiv.addEventListener('mouseover',()=>{         
                    gridDiv.style.backgroundColor = 'white';
                })
                gridDiv.addEventListener('mouseout',()=>{            
                    gridDiv.style.backgroundColor = 'white';
                })
            }
        }

        else if(document.querySelector('#container3'))
        {
            
            for(i=1; i<(gridSize*gridSize) + 1; i++)
            {   
                const gridDiv = document.createElement('div');
                gridDiv.style.height = `${(960/gridSize) - 2}px`;
                gridDiv.style.width = `${(960/gridSize) - 2}px`;
                gridDiv.style.backgroundColor = 'red';
                gridDiv.style.border = '1px solid white'; 
                containerDiv4.appendChild(gridDiv);
                containerDiv3.replaceWith(containerDiv4);
                gridDiv.addEventListener('mouseover',()=>{         
                    gridDiv.style.backgroundColor = 'white';
                })
                gridDiv.addEventListener('mouseout',()=>{            
                    gridDiv.style.backgroundColor = 'white';
                })
            }
        }

        else if(document.querySelector('#container4'))
        {
            
            for(i=1; i<(gridSize*gridSize) + 1; i++)
            {   
                const gridDiv = document.createElement('div');
                gridDiv.style.height = `${(960/gridSize) - 2}px`;
                gridDiv.style.width = `${(960/gridSize) - 2}px`;
                gridDiv.style.backgroundColor = 'red';
                gridDiv.style.border = '1px solid white'; 
                containerDiv5.appendChild(gridDiv);
                containerDiv4.replaceWith(containerDiv5);
                gridDiv.addEventListener('mouseover',()=>{         
                    gridDiv.style.backgroundColor = 'white';
                })
                gridDiv.addEventListener('mouseout',()=>{            
                    gridDiv.style.backgroundColor = 'white';
                })
            }
        }

        else if(document.querySelector('#container5'))
        {
            
            for(i=1; i<(gridSize*gridSize) + 1; i++)
            {   
                const gridDiv = document.createElement('div');
                gridDiv.style.height = `${(960/gridSize) - 2}px`;
                gridDiv.style.width = `${(960/gridSize) - 2}px`;
                gridDiv.style.backgroundColor = 'red';
                gridDiv.style.border = '1px solid white'; 
                containerDiv6.appendChild(gridDiv);
                containerDiv5.replaceWith(containerDiv6);
                gridDiv.addEventListener('mouseover',()=>{         
                    gridDiv.style.backgroundColor = 'white';
                })
                gridDiv.addEventListener('mouseout',()=>{            
                    gridDiv.style.backgroundColor = 'white';
                })
            }
            gridBtn.disabled = true;
        }
        


   
})











