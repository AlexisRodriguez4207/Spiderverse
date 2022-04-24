const Spiderman = require('./../App/Spiderman')

describe("Unit Tests for Spiderman Class", () => {
    test('1) Create an Spiderman object', () =>{

        // Aqui escribimos el codigo que queremos usar tal cual
        // Quiero poder instanciar un objeto Spiderman con esta informacion
        const AndrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield",31, "Sony")

        // Validamos que este codigo funcione de al forma esperada
        expect(AndrewGarfield.name).toBe("Spiderman Sony")
        expect(AndrewGarfield.age).toBe(31)
        expect(AndrewGarfield.actor).toBe("Andrew Garfield")
        expect(AndrewGarfield.movies).toBe(31)
        expect(AndrewGarfield.studio).toBe("Sony")
    });

    test('2) Use the method getInfo()', () =>{
        const TomHolland = new Spiderman ("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

        // Validacion del Codigo
        expect(TomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
})