function palindromo(str) {
    const strReversed = str
        .split("")
        .reverse()
        .join("");

    return strReversed === str
        ? "es palindromo"
        : "no es palindromo";
}
alert(palindromo("ala")); // es palindromo
alert(palindromo("hola")); // no es palindromo