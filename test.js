const lib = require('./index');

test('capitalize', () => {
    expect(lib.capitalize('hello')).toBe('Hello');
    });
    
    
    test('all caps', () => {
    expect(lib.allCaps('i am small')).toBe('I AM SMALL');
    });
    
    
    test('capitalize words', () => {
        expect(lib.capitalizeWords('hello hello')).toBe('Hello Hello');
        });
    
        
    test('remove extra spaces', () => {
        expect(lib.removeExtraSpaces('  henlo    henlo   ')).toBe('henlo henlo');
        });
    
    
    test('kebob case', () => {
            expect(lib.kebobCase('oh no')).toBe('oh-no');
            });
    
    test('snake case', () => {
        expect(lib.snakeCase('oh what')).toBe('oh_what');
            });
    
    
    test('camel case ', () => {
        expect(lib.camelCase('hello camel case')).toBe('hello Camel Case');
            });
    
    test('shift', () => {
        expect(lib.shift('hello')).toBe('elloh');
            });
            