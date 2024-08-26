window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // linke the "helloButton" to the sayHello function
    document.getElementById("helloButton").onclick = sayHello;
}

/**
 * This function creates an alert message that says hello
 * @returns String "hello o/", mostly just so the test still passes
 */
export function sayHello() {
    alert("hello o/");
    return("hello");
}
