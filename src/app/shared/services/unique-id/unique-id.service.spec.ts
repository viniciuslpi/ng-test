import { UniqueIdService } from './unique-id.service';

// expect(true).toBeTrue();   // só aceita objeto do tipo true literal
// expect(true).toBe(true);   // os objetos tem q ser iguais
// expect(true).toBeTruthy(); // é o mais generico, passa tudo o que for true 

describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null;
    beforeEach(() => {
        service = new UniqueIdService();
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate id when called multiple times`, () => {
        const ids = new Set();
        for(let i = 0;i < 50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    } );

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
    should throw when called with empty`, () => {
        const emptyValue = [null, undefined, ''];
        emptyValue.forEach(emptyValue => {
            expect(() => service.generateUniqueIdWithPrefix(emptyValue))
            .withContext(`Empty value: ${emptyValue}`)
            .toThrow();
        })
    });

});
