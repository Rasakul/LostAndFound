Diese Anwendung wurde explizit nur f�r mobile Ger�te und Browser entwickelt und getestet. 
Unterst�tzt werden dabei alle g�ngigen Browser au�er der Android-Default-Browser.

Als Folge werden keine Desktop-Browser unterst�tzt - hier funktioniert beispielsweise der Offcanvas 
nicht.

Um die Webseite zu testen muss deswegen auf einen Responsiv-Design-Modus eines Entwicklertools z.B. 
in Firefox oder Chrome zur�ckgegriffen werden. (Es sei explizit darauf hingewiesen, dass es *nicht* 
reicht die Gr��e des Fensters zu verkleinern. 
Alternativ ist die Webseite auch unter 88.116.5.26:4555/sign_in.html erreichbar um sie direkt auf 
einem mobilen Ger�t zu testen. Empfohlen werden dabei neuere Ger�te mit entsprechend hoher Aufl�sung.

Die Entscheidung, nur f�r mobile Ger�te zu entwickeln ist eine Konsequenz der expliziten 
Einschr�nkung der Zielgruppe auf Festivalbesucher - welche �blicherweise nur mobile Ger�te 
und keine Laptops etc zu Hand haben. Die genauen Einschr�nkungen sind auf der Impressum-Seite
nachzulesen.

Weitere erw�hnenswerte getroffenen Entscheidungen:
	- Eine Registrierung des Users wurde als (kleine) Hemmschwelle f�r Missbrauch der Plattform 
	eingef�hrt
	- Ein interner Messenger wurde vorgesehen aus folgenden Gr�nden:
		- Ziel war es mit m�glichst wenig Schritten (als eingeloggter User) 
		seinen Gegenstand zu finden. Um dies zu erreichen sollte 		
		nicht erst umst�ndlich eine Kommunikation extern aufgebaut werden (z.b. �ber Email), 
		bei der dann zwischen Plattform und Kommunikationsapp herumgesprungen werden m�sste.
		- Da dennoch weitere Daten zur Kommunikation angezeigt werden k�nnen im Userprofil, 
		wurde dies �ber den Messenger aus Datenschutzgr�nden "versteckt". 
		Dadurch sieht nicht jeder eingeloggter User die Daten in der �bersichtsseite der 
		Gegenst�nde, sondern erst, wenn der User den Kontakt �ber den Messenger aufnimmt
	- Um sicherzustellen, dass bei einem verlorenen Gegenstand nicht eine Gesucht- und eine 
	Gefunden-Anzeige existiert, die sich nie finden, wird der User dazu "gezwungen", 
	zuerst alle bereits vorhandenen Anzeigen, die den Filterkriterien entsprechen, anzusehen, 
	bevor eine eigene Anzeige erstellt wird.
	- Um eine Datenflut f�r den User zu verhindern, wird die Liste der gesuchten/gefundenen
	Gegenst�nde mit einem fixierten Filter nach Kategorie und Veranstaltung gefiltert (da dies
	Eingaben sind, die feststehen). Zus�tzlich kann die Liste danach noch nach GPS-Standort 
	(falls der genaue Ort nicht bekannt ist) und dem Datum (falls das genaue Datum nicht bekannt
	ist) gefiltert werden.
	- Der Filter "Veranstaltung" kann von den Usern erweitert werden, um administrativen Aufwand
	f�r die Seitenbetreiber zu reduzieren. Bei einer Implementierung wird dabei ein 
	Duplikat-Ableich empfohlen

Folgende (groben) UseCases sind vorhanden:
	- Gegenstand wird gefunden
		- Gegenstand wird bereits auf der Plattform gesucht 
		(anschlie�ende Kommunikation + entfernen der Suchanzeige)
		- Gegenstand wird noch nicht auf der Plattform gesucht
	- Gegenstand geht verloren
		- Gegenstand wurde bereits gefunden und auf der Plattform publiziert
		(anschlie�ende Kommunikation + entfernen der Gefundenanzeige)
		- Gegenstand wurde noch nicht gefunden