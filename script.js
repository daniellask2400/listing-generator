function generateListing() {
    const color = document.getElementById('color').value;
    const style = document.getElementById('style').value;
    const brand = document.getElementById('brand').value;
    const price = document.getElementById('price').value;
    const dimensions = document.getElementById('dimensions').value;

    const title = `[Free Delivery 🚚] Beautiful ${color} '${brand}' ${style}`;
    
    const description = `
        This stylish ${brand} ${style} is in excellent condition.
        
        ${dimensions ? 'Dimensions: ' + dimensions + '\n' : ''}
        
        •9/10 comfort rating
        •Beautiful Modern Design
        •No damage/rips/smells | No Smoking
        •High quality will last years.
        
        Asking $${price} Cash
        
        FREE Home Delivery Included🏠
        (pay after delivery obviously)
        
        Need gone ASAP
    `;

    document.getElementById('title').innerText = title;
    document.getElementById('description').innerText = description;
}
