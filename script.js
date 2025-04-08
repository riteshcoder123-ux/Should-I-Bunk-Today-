function calculateAttendance() {
    const total = parseInt(document.getElementById("total").value);
    const attended = parseInt(document.getElementById("attended").value);
    const required = parseFloat(document.getElementById("required").value);
    const resultBox = document.getElementById("resultBox");
  
    if (isNaN(total) || isNaN(attended) || isNaN(required) || total <= 0) {
      resultBox.innerText = "⚠️ Please fill in all fields properly!";
      resultBox.classList.remove("hidden");
      return;
    }
  
    const currentPercentage = (attended / total) * 100;
    const requiredAttendance = required / 100;
    let message = "";
  
    if (currentPercentage >= required) {
      const maxBunk = Math.floor((attended - (requiredAttendance * total)) / requiredAttendance);
      message = `
        ✅ Attendance: <b>${currentPercentage.toFixed(2)}%</b><br>
        🎉 You're safe to bunk! You can miss <b>${maxBunk}</b> more class${maxBunk !== 1 ? "es" : ""}.<br>
        Enjoy... but don't overdo it 😎
      `;
    } else {
      let extraNeeded = 0;
      let newTotal = total;
      let newAttended = attended;
  
      while ((newAttended / newTotal) < requiredAttendance) {
        newTotal++;
        newAttended++;
        extraNeeded++;
      }
  
      message = `
        😔 Attendance: <b>${currentPercentage.toFixed(2)}%</b><br>
        You need to attend <b>${extraNeeded}</b> more class${extraNeeded !== 1 ? "es" : ""} to reach ${required}%<br>
        No bunks. Just lectures... for now 💪
      `;
    }
  
    resultBox.innerHTML = message;
    resultBox.classList.remove("hidden");
  }
  