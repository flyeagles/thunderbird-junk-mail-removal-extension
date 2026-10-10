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
    // 2026-01-16
    ,'ThermiVest', 'StopIRSDebt','New York Life','MiracleBrand','Health.NativePath', 'GLP-1 by MEDVi'
    ,'Admiral UK','SpyFocus', 'Auto-Shield-Now', 'BioLife', 'Boots UK', 'Cloud storage', 'Debt - Relief'
    , 'Debt_Relief', 'DepoProveraLawsuitClaims', 'Norton™', 'Vehicle Protection USA', 'TrimRX'
    , 'Treatment Perspectives', 'HimsED', 'LendingForAllCredit', 'McAfee','Medscape Clinical'
    ,'National Rail','rate advisor', 'outback steakhouse reward', 'biolife', 'ethos', 'goldco'
    ,'liz-buys-house', 'medical negligence', 'vanguardhome', 'totalhomeauto', 'sbli.com', 'sbli '
    ,'optima_tax','optima - tax', 'tax_relief', 'nightvision', 'mine visa', 'mine credit'
    ,'soundbright','shinyhunter','shedx ','renewalbyanders','nurture life','meet seniors','gambling app'
    ,'cornerstone law','brinkshome','shedrx','rate mortgage','nyl insurance','jenny craig','bankrate'
    ,'annuity','Car Finance Claims','eharmoney', 'getsafestreet','hims partner','insurance_save','medvi support'
    ,'rushpermit','roof saving','reverse mortgage','glamory skin','brinks home','rate equity','pedagio'
    ,'pcp refund','Non-Hodgkins','dealwiki','miraclesheet','accuquote','rba replace','rate heloc','carwow'
    // 2026-08-18
    ,'CloudAccountAlert','ColonialPenn','EasyCanvasDesign','Foot Relief Offer','Free AAA Car','Hidden Jack'
    ,'Home Gutter Alert','Home Warranty Service','House Project Pro','InstaRx','loanDepot','Milestone Mastercard'
    ,'Milestone-Mastercard','PrimeWarranty','Rugiet Care','StopWatt','Visible Partner','WestShoreHome','YouthAddiction'
    ,'WindowNation','WEGO6 Capsule','RYH Flooring','Quiet Nerves','Prostate Relief','Prostate Wellness','Roota Hair'
    ,'MYCHART_MEDICARE','Mortgage Savings','LadderLife','HorseWood','Gift from Ace Hardware','Free Spin Alert'
    ,'Cloud_Storage','Cloud Backup','ClearChoice Dental','CBS News Health','CardioFlush','Bupa Customer','British Gas'
    ,'Bath Saving','BathWrapsPromo','BetnJet','BarkBox','Milestone Card','Ace Hardware','AA Member','ABC Health'
    ,'AA UK','Accredited Debt','BM Spins','Cash for Your Gold','ClearChoice','Cognitive Science Group','Direct Meds'
    ,'NDR Affiliate','NDR Ad','Prime Network','Prime Video','Prime Access','Prime Membership','SXM','SiriusXM Expiration'
    ,'Sciatica','Sams Club Expiration','Zanory Climate','AA Breakdown','AA Patrol','Car Insurance','Glyco Hawaiian'
    ,'HarmoBrain','Hemp Gummies','HouseProjectPro','Lulutox','Medvi ','MyChart','Natural Sight','Norton Security ALERT'
    ,'NeuroFlush','Ozempic','ServicePlus Home','AAA Reward','Amazon Gadgets','Better Health','Brain Honey','Brain Health'
    ,'CyberProtection','Debt HelpLine','Destiny Reward','Disney +','Disney+','DocWire','GelaBurn','Glucose'
    ,'Health Daily','HexClad','Hulu Expiration','Insurance.Save','LendingForBadCredit','Mind & Memory Daily','Paramount+'
    ,'Window Nation','Windows For Everyone','Real News Invest','Prostate Protocol','Lisa from Walmart','Glacier Breeze'
    ,'Destiny Card','Harbor Freight'
    // 2026-09-18
    ,'Your IDiyas USPTO Weekly','ALDI Card', 'yBETS','TrustedHomeOffer','AA Reward','Tails.com','Sugar Defender'
    ,'Start your winning','SpinKong','SolarQuote','Slotaza','Shopsale','Coffee Secret','Riverbend Ranch Deal'
    ,'Rewards UK','Rewards Desk','Portable AC','Play from anywhere','Pharmacy2U','PCP Claim','Ozalyn','One chance'
    ,'Night Guard','NDR Partner','MagicWin','Loft Insulation','LawsuitFinder','Last Chance','Kroger','Janice Smith'
    ,'Instacart','iCloud Termination Team','Home Energy Support','Health Reminder','GoPrivateHealth','GlucoSteady'
    ,'Get spinning','Glokore','GET BONUS','Games online','GALAXY1','FreeSpins','Home Energy Team','Free spins'
    ,'Fire JackPots','EMSense','Dust-Free Home','Chad Walding','Desenrola','Degree Network','Daily Bonus Team'
    ,'CoreRelief','Funds Approval Team','Norton Auto-Renew','Affordable Roof','Bad Credit Loan','BadCreditLoan'
    ,'Belly Fat','Big Jackpot','Bravo Play Reward','Cash out today','Hidden Treasure','Solar Quote'
];

const special_chars = new Set(["а", "е", "і", "у", "о", "ㅤ"]);

let lowerJunkFeatures = [];
for (let feature of junkFeatures) {
    let lfeature = feature.toLowerCase();
    lowerJunkFeatures.push(lfeature);
}


let train = false;

async function isRealJunk(msg) {

    try {

        let author_obj = await messenger.messengerUtilities.parseMailboxString(msg.author);
        const email = author_obj[0].email;

        const url = 'http://192.168.1.132:5000/spam?email='+email;
        // console.log(`Calling API for email ${email}: ${url}`);

        const response = await fetch(url, {
            method: "GET",
            // headers: {
            //     "Accept": "application/json"
            // }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.text();
        console.log(`API response for email ${email}: ${data}`);

        if (data == 'spam') {
            return true;
        }
    } catch (err) {
        console.error("API call failed:", err);
    }    

    return false;


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
            console.log(`Checking folder: ${folder.name}`);

            if (folder.name === "Junk") junkFolder = folder;
            if (folder.name === "垃圾邮件") junkFolder = folder;
            if (folder.name === "Trash") trashFolder = folder;
            if (folder.name === "废件箱") trashFolder = folder;

            // use for get emails list  
            if (train) {
                junkFolder = trashFolder;
            }
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

    let long_log = "";

    let matchingMessages = [];
    for (let message of allMessages) {

        if (train) {
            let author_obj = await messenger.messengerUtilities.parseMailboxString(message.author);

            long_log += author_obj[0].email + "\n";
        }

        /*
        console.log({
            // id: message.id,
            subject: message.subject.toLowerCase(),
            author: message.author.toLowerCase(),
            email: author_obj[0].email,
            date: message.date,
            // recipients: message.recipients,
        });
        */
       if (await isRealJunk(message)) {
            matchingMessages.push(message);
        }
    }

    if (train) {
        console.log(long_log);
        matchingMessages = [];
    }

    console.log(`Found ${matchingMessages.length} spam messages in Junk folder.`);

    // Filter messages with "special" in subject
    // let matchingMessages = allMessages.filter(msg => checkMessageSender(msg) );

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
