// part 1
function computeForce() {
    let m = parseFloat(document.getElementById('mass').value);
    let a = parseFloat(document.getElementById('acceleration').value);
    let force = m*a
    document.getElementById('force').innerHTML = force.toString();

    // code

}


// part 2
function computeAvgVelocity() {
    let i = parseFloat(document.getElementById('initial').value);
    let t = parseFloat(document.getElementById('time').value);
    let a = parseFloat(document.getElementById('acceleration2').value);
    let displacement = i*t-(1/2) * a*Math.pow(t,2)
    document.getElementById('displacement').innerHTML = displacement.toString();

    // code

}

function computeQuadratic() {
    let a = parseFloat(document.getElementById('sidea').value);
    let b = parseFloat(document.getElementById('sideb').value);
    let c = parseFloat(document.getElementById('sidec').value);

    let quadraticPositive = (-b + Math.sqrt(b**2 - 4*a*c)) / (2 * a)
    document.getElementById('quadraticPositive').innerHTML = quadraticPositive.toString();
    let quadraticNegative = (-b - Math.sqrt(b**2 - 4*a*c)) / (2 * a)
    document.getElementById('quadraticNegative').innerHTML = quadraticNegative.toString();
    // code
}

// part 3
function computePrincipal() {
    let pmt = parseFloat(document.getElementById('PMT').value);
    let r = parseFloat(document.getElementById('r').value);
    let n = parseFloat(document.getElementById('n').value);
    let principal = pmt * (1 - (1/Math.pow(1+r, n)))/r
    document.getElementById('principal').innerHTML = principal.toString();
    // code

}