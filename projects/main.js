{
    const costInput = document.getElementById('cost'); //getting html input element for cost 
    const litresInput = document.getElementById('litres'); //getting html input element for petrol
    const totalDisplay = document.getElementById('totalcost'); //getting the html input element for total cost
    
    document.getElementById('calculatebutton').addEventListener('click', () => //calculating the total cost on the button click
    {
        const cost = +costInput.value; // using + operator to convert the input to a flaot
        const liters = +litresInput.value; 
        totalDisplay.textContent = (cost * liters).toFixed(2);
    });
};