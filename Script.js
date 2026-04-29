function calculateTip() {
    let bill = document.getElementById("bill").value;
    let tip = document.getElementById("tip").value;
    let people = document.getElementById("people").value;

    if (bill === "" || tip === "" || people === "" || people <= 0) {
        document.getElementById("result").innerText = "Please enter valid values!";
        return;
    }

    let totalTip = (bill * tip) / 100;
    let totalAmount = Number(bill) + totalTip;
    let perPerson = totalAmount / people;

    document.getElementById("result").innerHTML =
        "Total Tip: ₹" + totalTip.toFixed(2) + "<br>" +
        "Total Amount: ₹" + totalAmount.toFixed(2) + "<br>" +
        "Per Person: ₹" + perPerson.toFixed(2);
}
