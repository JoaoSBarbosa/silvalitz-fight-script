const defaultCharacter = {
   name: '',
   life: 1,
   maxLife: 1,
   attack:0,
   defense:0
}

const createKnight = (name)=>{
   return{
      ...defaultCharacter,
      name,
      life: 100,
      maxLife: 100,
      attack:10,
      defense:8
   }
}
const createSorcerer =(name)=>{
   return{
      ...defaultCharacter,
      name,
      life:50 ,
      maxLife: 50,
      attack: 14,
      defense: 3
   }
}

const createLittleMonster = (name) =>{
   return{
      ...defaultCharacter,
      name: "Estalador",
      life:40,
      maxLife:40,
      attack:4,
      defense:4
   }
}
const createBigMonster =(name) =>{
   return {
      ...defaultCharacter,
      name:'Necrofigo',
      life:,
      maxLife:,
      attack:,
      defense:
   }
}