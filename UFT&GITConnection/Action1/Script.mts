SystemUtil.Run "chrome.exe","https://csdb-qac.arvato-systems.de/CSDB2/?l=de_DE#/login"
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("username").Set "qa-default" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("password").SetSecure "5f0e6a658618e1d21ae90595559337963ab5e8d4ca612ccce808" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebButton("Anmelden").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebList("Mandant").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebElement("QAMandant").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebButton("Anmelden").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebElement("perm_identityRolle").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebButton("add Neu").Click @@ script infofile_;_ZIP::ssf8.xml_;_
rndno = Randonnumber(0,99)
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("alias").Set "NewRole-"&rndno @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebList("Mandant").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebEdit("description").Set "For UFT POC" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebElement("DE-001 Auftragsbasierte").Click
Browser("arvato CSDB").Page("arvato CSDB").WebButton("Speichern").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("arvato CSDB").Page("arvato CSDB").WebElement("Abmelden").Click
Browser("arvato CSDB").Page("arvato CSDB").WebElement("DE-001 Auftragsbasierte_2").Click

