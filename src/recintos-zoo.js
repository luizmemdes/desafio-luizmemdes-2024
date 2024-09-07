class RecintosZoo {

    constructor() {
        this.recintos = [
          { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ especie: 'macaco', quantidade: 3, tamanho: 1 }] },
          { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
          { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ especie: 'gazela', quantidade: 1, tamanho: 2 }] },
          { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
          { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ especie: 'leao', quantidade: 1, tamanho: 3 }] },
        ];
    
        this.animaisInfo = {
          'LEAO': { tamanho: 3, biomas: ['savana'], carnivoro: true },
          'LEOPARDO': { tamanho: 2, biomas: ['savana'], carnivoro: true },
          'CROCODILO': { tamanho: 3, biomas: ['rio'], carnivoro: true },
          'MACACO': { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
          'GAZELA': { tamanho: 2, biomas: ['savana'], carnivoro: false },
          'HIPOPOTAMO': { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
        };

      }
    analisaRecintos(animal, quantidade) {
        if (!this.animaisInfo[especie]) {
            return { erro: "Animal inválido" };
          }
          if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
          }
      
          const infoAnimal = this.animaisInfo[especie];
          const recintosViaveis = this.recintos.filter(recinto => {
            const totalAnimais = recinto.animais.reduce((total, animal) => total + animal.tamanho * animal.quantidade, 0);
            const espacoRestante = recinto.tamanho - totalAnimais;
      
            
            if (!infoAnimal.biomas.includes(recinto.bioma)) return false;
      
            if (infoAnimal.carnivoro && recinto.animais.length > 0 && recinto.animais[0].especie !== especie) return false;
   
            return espacoRestante >= infoAnimal.tamanho * quantidade;
          }).map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanho - quantidade * infoAnimal.tamanho} total: ${recinto.tamanho})`);
      
          if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
          }
      
          return { recintosViaveis };
        }
      }
export { RecintosZoo as RecintosZoo };
class RecintosZoo {

    constructor() {
        this.recintos = [
          { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ especie: 'macaco', quantidade: 3, tamanho: 1 }] },
          { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
          { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ especie: 'gazela', quantidade: 1, tamanho: 2 }] },
          { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
          { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ especie: 'leao', quantidade: 1, tamanho: 3 }] },
        ];
    
        this.animaisInfo = {
          'LEAO': { tamanho: 3, biomas: ['savana'], carnivoro: true },
          'LEOPARDO': { tamanho: 2, biomas: ['savana'], carnivoro: true },
          'CROCODILO': { tamanho: 3, biomas: ['rio'], carnivoro: true },
          'MACACO': { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
          'GAZELA': { tamanho: 2, biomas: ['savana'], carnivoro: false },
          'HIPOPOTAMO': { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
        };

      }
    analisaRecintos(animal, quantidade) {
        if (!this.animaisInfo[especie]) {
            return { erro: "Animal inválido" };
          }
          if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
          }
      
          const infoAnimal = this.animaisInfo[especie];
          const recintosViaveis = this.recintos.filter(recinto => {
            const totalAnimais = recinto.animais.reduce((total, animal) => total + animal.tamanho * animal.quantidade, 0);
            const espacoRestante = recinto.tamanho - totalAnimais;
      
            
            if (!infoAnimal.biomas.includes(recinto.bioma)) return false;
      
            if (infoAnimal.carnivoro && recinto.animais.length > 0 && recinto.animais[0].especie !== especie) return false;
   
            return espacoRestante >= infoAnimal.tamanho * quantidade;
          }).map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanho - quantidade * infoAnimal.tamanho} total: ${recinto.tamanho})`);
      
          if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
          }
      
          return { recintosViaveis };
        }
      }
export { RecintosZoo as RecintosZoo };
