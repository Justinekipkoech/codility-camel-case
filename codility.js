function toCamelCase(string) {
    return string.replace(/-([a-z])/g, 
    function (g) {
        return g[1].toUpperCase();
    });

   

}