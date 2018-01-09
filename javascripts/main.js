
var resumeNode = '.resume';


$(function() {
    // resume lines appending
    var resume = new ContentManger(resumeNode);
	resume.p("<b class='alter'>== Personal Information ==</b>");
	resume.p("Name: "+info.name);
	resume.p("Preferred Name: Jeremy");
	resume.p("Date of Birth: "+info.dob);
	resume.p();
	resume.p("<b class='alter'>== Education ==</b>");
	resume.p("High School: "+"Ningbo Foreign Language School");
	resume.p("University: "+"Rensselaer Polytechnic Institute");
	resume.p();
	resume.p("<b class='alter'>== Working Experience ==</b>");
	resume.p("Huiyou Technology Software Development Lab, China (2017 Summer)");
    resume.p("Analysis of global blockchain index in scry.info, Troy, NY (2017 Winter)");
	resume.p();
	resume.p("<b class='alter'>== My Projects ==</b>");
	resume.p("<b>Completed</b>");
	resume.p("<a href='Terminal'>Terminal</a>: "+"Website version terminal emulator compatible to Linux commands");
	resume.p("<a href='EPlanner'>EPlanner</a>: "+"A HTML-based tool for chinese students to generate a plan of memorizing vocabulary by The Ebbinghaus Forgetting Curve");
	resume.p("<a href='No.100'>No.100</a>: "+"A site for people to post their emotions everyday");
	resume.p("<b>Ongoing</b>");
	resume.p("<a href='"+info.rep_base+info.account+"/Container.js'>Container.js</a>: "+"JavaScript implementation of Java Containers.");
	resume.p("<b>Scratches</b>");
	resume.p("<a href='"+info.rep_base+info.account+"/Auto-Snake'>Auto-Snake</a>: "+"Snake game with AI written by Java.");
	resume.p("<b>Old/Disposed</b>");
	resume.p("<a href='"+info.rep_base+info.account+"/Termino_Forum'>Forum</a>: "+"A forum using PHP for server, MySQL for database and bootstrap for designing");
	resume.p("<a href='./Root-Affix/'>RA School</a>: "+"A Web App for students to learn the roots and affixes written by Jquery Mobile");
	resume.p("<a href='"+info.rep_base+info.account+"/Chatter'>Chatter</a>: "+"A chat robot using Huangji, Simsimi and Tuling API, supporting Chinese and English");
});