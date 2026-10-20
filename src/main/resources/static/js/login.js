$(document).on("click", "#loginBtn", function () {

    let userId = $("#userId").val().trim();
    let userPass = $("#userPass").val();

    if (!userId || !userPass) {
        alert("Please enter your User ID and Password");
        return;
    }

    $.ajax({
        url: "/login",
        type: "POST",
        data: {
            userId: userId,
            userPass: userPass
        },
        success: function (response) {

            if (response === "invalid") {
                alert("Invalid username or password");

            } else if (response === "success") {
                sessionStorage.setItem("AUTH", "true");
                window.location.href = "/home";
            }
        },
        error: function (xhr, status, error) {
            if (xhr.status === 0) {
                alert("Cannot connect to server. Please check if the application is running.");
            } else if (xhr.status === 403) {
                alert("Access denied. Please refresh the page and try again.");
            } else if (xhr.status === 500) {
                alert("Server error. Please try again in a moment.");
            } else {
                alert("Login failed (HTTP " + xhr.status + "): " + (error || status));
            }
        }
    });
});
