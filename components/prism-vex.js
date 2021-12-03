(function (Prism) {
    Prism.languages.vex = Prism.languages.extend('clike', {
        'keyword': /\b(?:break|bsdf|char|color|const|continue|do|dict|else|export|float|for|forpoints|foreach|gather|hpoint|if|illuminance|import|int|integer|matrix|matrix2|matrix3|normal|point|return|string|struct|typedef|union|vector|vector2|vector4|void|while)\b/,
    });

    Prism.languages.insertBefore('vex', 'class-name', {
        'preprocessor': {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: true,
            alias: 'property',
            inside: {
                // highlight preprocessor directives as keywords
                'directive': {
                    pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                    lookbehind: true,
                    alias: 'keyword'
                }
            }
        }
    });
}(Prism));
