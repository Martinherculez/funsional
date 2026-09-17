Module.exports = {
    semi : true,
    singleQuote : true,
    tabWidth : 4,
    useTabs : true,
    plugins : [require('prettier-plugin-tailwindcss')],
    overrides : [
        {
            files : ['*.ts', '*.tsx'],  
            options : {
                parser : 'typescript',
            },
        },  
        ],
};
