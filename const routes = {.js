const routes = {
    '/home': () => `
        <h1> Home </h1>
        <div> I have content!</div>
        `,
    '/about': () => `
        <h1>About</h1>
        <div>This is my page</div>
    `,
    '/notfound':() => `
    <h1>Not Found</h1>
    <div>Page not found</div>
    `
}
//above: function that returns the string. back tick (`) string on multiple lines.

function render (location) {
    const content =  document.getElementById("content")
    let renderPage = routes[location]
    
    if (renderPage === undefined) {
        renderPage = routes['/notfound']
    }
        
    content.innerHTML = renderPage()
}

window.onload = function() {
    let location = window.location.pathname
    render(location)
}

route('/home', home)
route('/about', about)

//Following 3 function have the same results.
function foo (argument) {
    return argument
}

const foo2 = (argument) => {
    return argument
}

const foo3 = (argument) => argument