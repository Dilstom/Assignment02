let firstInt = prompt('Enter the language code: "es/de/en/fr"');

firstInt === 'fr' ? document.write('Hello World translated in French is: Bonjour le monde') : firstInt === 'de' ?  document.write('Hello World translated in German is: Hallo Welt') : firstInt === 'es' ?  document.write('Hello World translated in Spanish is: Hola Mundo') : firstInt === 'en' ?  document.write('Hello World translated in English is: Hello World') : document.write('Hello World translated in English is: Hello World');