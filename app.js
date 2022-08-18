function calculator(NewValue) {
    document.getElementById('MyResult').value += NewValue;
};
function Answer() {
    let AnswerValue = document.getElementById('MyResult').value;
    const answer = eval(AnswerValue);
    document.getElementById('MyResult').value = answer;
}
function DeleteMe() {
    document.getElementById('MyResult').value = "";
}