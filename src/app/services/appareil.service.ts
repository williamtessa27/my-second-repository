export class AppareilService {
    appareils = [
        {
        id: 1,
        name: 'Machine a larver',
        status: 'allumer'
      },
      {
        id: 2,
        name: 'Television',
        status: 'allumer'
      },
      {
        id: 3,
        name: 'Ordinateur',
        status: 'éteint'
      }
    ];

    getAppareilById(id: number | undefined){
      const appareil = this.appareils.find(
        (appareilObject) =>{
          return appareilObject.id === id;
        }
      );
      return appareil;
    }

    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = 'allumer';
        }
    }
    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
    }

    switchOnOne(index: number){
      this.appareils[index].status = 'allumer';
    }

    switchOffOne(index: number){
      this.appareils[index].status = 'éteint';
    }
}


