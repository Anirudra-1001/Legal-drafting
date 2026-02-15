function getType() {
    const params = new URLSearchParams(window.location.search);
    return params.get("type");
}

function generateDraft() {

    let type = getType();
    let court = document.getElementById("court").value;
    let caseNo = document.getElementById("caseNo").value;
    let party1 = document.getElementById("party1").value;
    let party2 = document.getElementById("party2").value;
    let facts = document.getElementById("facts").value;
    let prayer = document.getElementById("prayer").value;
    let today = new Date().toLocaleDateString();

    let heading = `<div style="text-align:center;font-weight:bold;">
    IN THE COURT OF ${court}<br>
    Civil Suit No. ${caseNo} of 2026
    </div><br>`;

    let parties = `
    ${party1}<br>........ Plaintiff<br><br>
    <div style="text-align:center;font-weight:bold;">Versus</div><br>
    ${party2}<br>........ Defendant<br><br>
    `;

    let content = "";

    if(type === "recovery") {
        content = `<b>RECOVERY SUIT</b><br><br>
        1. That the Plaintiff states that ${facts}<br><br>
        PRAYER:<br>
        It is therefore prayed that ${prayer}`;
    }

    if(type === "property") {
        content = `<b>PROPERTY DISPUTE SUIT</b><br><br>
        1. That the property in dispute is described as ${facts}<br><br>
        PRAYER:<br>
        It is therefore prayed that ${prayer}`;
    }

    if(type === "written") {
        content = `<b>WRITTEN STATEMENT</b><br><br>
        The Defendant submits that ${facts}<br><br>
        It is prayed that ${prayer}<br><br>
        VERIFICATION:<br>
        Verified on ${today}`;
    }

    if(type === "affidavit") {
        content = `<b>AFFIDAVIT</b><br><br>
        I, ${party1}, solemnly affirm that ${facts}<br><br>
        Deponent<br>
        Date: ${today}`;
    }

    document.getElementById("result").innerHTML = heading + parties + content;
}
