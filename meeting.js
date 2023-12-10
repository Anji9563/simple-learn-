function validateMeeting() {
    var meetingDate = document.getElementById("meetingDate").value;
    var meetingTopic = document.getElementById("meetingTopic").value;
    var numPeople = document.getElementById("numPeople").value;
    var startTime = document.getElementById("startTime").value;
    var currentDate = new Date();
    var selectedDateObj = new Date(meetingDate);
    if (selectedDateObj <= currentDate) {
        alert("Please select a future date for the meeting.");
        return false;
    }
    if (meetingTopic.trim() === "") {
        alert("Please enter a meeting topic.");
        return false;
    }
    if (numPeople <= 0) {
        alert("Please enter a valid number of people.");
        return false;
    }
    if (startTime.trim() === "") {
        alert("Please enter a valid start time.");
        return false;
    }
    alert("Meeting information is valid!");
    return true;
}