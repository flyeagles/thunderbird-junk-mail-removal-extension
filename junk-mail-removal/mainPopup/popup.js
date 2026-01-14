// Below is what we'll log to the console.

console.log('Hello, Thunderbird World! - from popup.js');

let junkFeatures = [
    "empiretoday", "metal roof", "usa wild seafood", "usawildseafood",
     "debtrelief", "debt relief", "uk refund", "shopmiracle",
    "aarp", "tax relief", "carshield", "cаrshiеld", "jacuzzi", "canvas print", "canvasprint",
    "miracle sheet", "renewal by andersen", "christianmatch", "casino",
    "wtc-settlement", "life line screen", "lifelinescreen",
     "blissy ad", "usaa survey", "wentworth",
    "forhers", "debtrelіef", "trugreen lawn", "blissy associate", "affordable windows usa"
    , "insurify", "cаnvаs print", "dеbtrеliеf", "еmріrетоdау", "lifе linе scrееn",
    "nicotine", "orangetheory", "weight loss", "metalroof", "destiny cash",
    "vsp individual", "betterhelp", "cancer", "americor", "bareearth", "aptive pest",
    "blissy", "creditcardbonus", "eharmony", "endurance auto", "timeshare", "fahw",
    "first american home", "healthcare.com", "laseraway", "mutualofomaha", "saatva",
    "warbypark", "individual vision plan", "vivint", "debtfind", "trugreen", "somerpointe",
    "roof replace", "lymphoma", "lexington law", "keranique", "medicareadvantage",
    "rate.com", "rba.home", "glucosemonitor", "hims.com", "home flooring", "liz buys","liz.buys",
    "capitalwallet", "night vision", "endurance", "empire®", "destiny master",
    "proctor subaru", "lowe’s rewards", "ameriquote", "cholesterol", "the zebra", "rfk jr",
    "heathcare.com", "insurance save", "disease risk screening", "sam’s club"
    , "sam's club", "hearing aids", "watchdogs", "claim your"
    , ".onmicrosoft.com", "northstar-loans", "energybill cruncher", "good ranchers",
    "insurance: save", 'ulta beauty department', 'vanguard home warranty ad'
    , ' ad partner', 'vanguard home warranty', 'the photostick', 'santa letter'
    ,'mcafee cyber security partner', 'lawn care', 
    // 2026-01-13
    'auto-shield-now', 'cheech & chong Space'
    ,'Drive-Safe-Insure', 'EZ Insurance Bundle', 'Provide Insurance Quote', 'StopIRSDebt'
    ,'Telluride Ski', 'ThermiVest', 'VeteranInsurance', 'rba window', 'Quick-auto-coverage'
    ,'GetThePhotoStick', 'Frances & Patrick', 'forkfulmeal','Bathandshowerpro','Car Finance Check'
    ,'Costa Coffee','ENLARGED PROSTATE','Omaha Steak','EZInsurance'
];

const special_chars = new Set(["а", "е", "і", "у", "о", "ㅤ"]);

let lowerJunkFeatures = [];
for (let feature of junkFeatures) {
    let lfeature = feature.toLowerCase();
    lowerJunkFeatures.push(lfeature);
}


function isRealJunk(msg) {
    for (let lfeature of lowerJunkFeatures) {
        if ((msg.subject && msg.subject.toLowerCase().includes(lfeature))
            || (msg.author && msg.author.toLowerCase().includes(lfeature))
            )
            return true;
    }

    let combo_str = "";
    if (msg.subject) {
        combo_str += msg.subject.toLowerCase();
    }
    if (msg.author) {
        combo_str += msg.author.toLowerCase();
    }

    let special_count = 0
    for (let ch of combo_str) {
        if (special_chars.has(ch)) special_count += 1;
        
        if (special_count >= 2)  
            return true;
    }

    let space_count = 0;
    let all_count = 0;
    for (let ch of msg.subject.toLowerCase()) {
        all_count += 1;

        if (ch == ' ') space_count += 1;
        
        if (space_count > 3 && all_count < 2.5 * space_count)  
            return true;
    }

    space_count = 0;
    all_count = 0;
    for (let ch of msg.author.toLowerCase()) {
        all_count += 1;

        if (ch == ' ') space_count += 1;
        
        if (space_count > 3 && all_count < 2.5 * space_count)  
            return true;
    }

    if (msg.author[0] == '~') 
        return true;

    return false;
}



async function moveSpecialMessagesToTrash() {
    let accounts = await browser.accounts.list();
    let junkFolder, trashFolder;

    // Find Junk and Trash folders
    for (let account of accounts) {
        for (let folder of account.folders) {
            if (folder.name === "Junk") junkFolder = folder;
            if (folder.name === "Trash") trashFolder = folder;
        }
        if (junkFolder && trashFolder) break;
    }

    if (!junkFolder || !trashFolder) {
        console.error("Junk or Trash folder not found.");
        return "Error";
    }

    // Get all messages from Junk folder
    let allMessages = [];
    let list = await browser.messages.list(junkFolder);
    allMessages.push(...list.messages);

    while ( list.id != null ) {
        list = await browser.messages.continueList(list.id);
        allMessages.push(...list.messages);
    }

    for (let message of allMessages) {
        console.log({
            // id: message.id,
            subject: message.subject.toLowerCase(),
            author: message.author.toLowerCase(),
            date: message.date,
            // recipients: message.recipients,
        });
    }

    // Filter messages with "special" in subject
    let matchingMessages = allMessages.filter(msg => isRealJunk(msg) );

    // Move them to Trash
    if (matchingMessages.length > 0) {
        const start = performance.now();
        
        let idsToMove = matchingMessages.map(msg => msg.id);
        await browser.messages.move(idsToMove, trashFolder);
        console.log(`Moved ${idsToMove.length} messages to Trash.`);

        const end = performance.now();
        const milliseconds = Math.round(end - start);

        // Save both count and time
        await browser.storage.local.set({
            movedCount: idsToMove.length,
            moveTimeMillseconds: milliseconds
        });
        
        return `You moved ${idsToMove.length} messages to Trash in ${milliseconds} ms.`;
    } 
    
    console.log("No matching messages found.");
    return "No matching messages found.";
}

console.log(`[${new Date().toISOString()}] Start moving real junk messages to Trash folder.`);
let displayText;
displayText = await moveSpecialMessagesToTrash();
console.log(`[${new Date().toISOString()}] ====> DONE moving real junk messages to Trash folder.`);

document.getElementById("count").textContent = displayText;

/*
browser.storage.local.get("movedCount").then(result => {
    document.getElementById("count").textContent = displayText;
});
*/
