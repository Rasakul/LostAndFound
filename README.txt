Diese Anwendung wurde explizit nur für mobile Geräte und Browser entwickelt und getestet. 
Unterstützt werden dabei alle gängigen Browser außer der Android-Default-Browser.

Als Folge werden keine Desktop-Browser unterstützt - hier funktioniert beispielsweise der Offcanvas 
nicht.

Um die Webseite zu testen muss deswegen auf einen Responsiv-Design-Modus eines Entwicklertools z.B. 
in Firefox oder Chrome zurückgegriffen werden. (Es sei explizit darauf hingewiesen, dass es *nicht* 
reicht die Größe des Fensters zu verkleinern. 
Alternativ ist die Webseite auch unter 88.116.5.26:4555/sign_in.html erreichbar um sie direkt auf 
einem mobilen Gerät zu testen. Empfohlen werden dabei neuere Geräte mit entsprechend hoher Auflösung.

Die Entscheidung, nur für mobile Geräte zu entwickeln ist eine Konsequenz der expliziten 
Einschränkung der Zielgruppe auf Festivalbesucher - welche üblicherweise nur mobile Geräte 
und keine Laptops etc zu Hand haben. Die genauen Einschränkungen sind auf der Impressum-Seite
nachzulesen.

Weitere erwähnenswerte getroffenen Entscheidungen:
	- Eine Registrierung des Users wurde als (kleine) Hemmschwelle für Missbrauch der Plattform 
	eingeführt
	- Ein interner Messenger wurde vorgesehen aus folgenden Gründen:
		- Ziel war es mit möglichst wenig Schritten (als eingeloggter User) 
		seinen Gegenstand zu finden. Um dies zu erreichen sollte 		
		nicht erst umständlich eine Kommunikation extern aufgebaut werden (z.b. über Email), 
		bei der dann zwischen Plattform und Kommunikationsapp herumgesprungen werden müsste.
		- Da dennoch weitere Daten zur Kommunikation angezeigt werden können im Userprofil, 
		wurde dies über den Messenger aus Datenschutzgründen "versteckt". 
		Dadurch sieht nicht jeder eingeloggter User die Daten in der Übersichtsseite der 
		Gegenstände, sondern erst, wenn der User den Kontakt über den Messenger aufnimmt
	- Um sicherzustellen, dass bei einem verlorenen Gegenstand nicht eine Gesucht- und eine 
	Gefunden-Anzeige existiert, die sich nie finden, wird der User dazu "gezwungen", 
	zuerst alle bereits vorhandenen Anzeigen, die den Filterkriterien entsprechen, anzusehen, 
	bevor eine eigene Anzeige erstellt wird.
	- Um eine Datenflut für den User zu verhindern, wird die Liste der gesuchten/gefundenen
	Gegenstände mit einem fixierten Filter nach Kategorie und Veranstaltung gefiltert (da dies
	Eingaben sind, die feststehen). Zusätzlich kann die Liste danach noch nach GPS-Standort 
	(falls der genaue Ort nicht bekannt ist) und dem Datum (falls das genaue Datum nicht bekannt
	ist) gefiltert werden.
	- Der Filter "Veranstaltung" kann von den Usern erweitert werden, um administrativen Aufwand
	für die Seitenbetreiber zu reduzieren. Bei einer Implementierung wird dabei ein 
	Duplikat-Ableich empfohlen

Folgende (groben) UseCases sind vorhanden:
	- Gegenstand wird gefunden
		- Gegenstand wird bereits auf der Plattform gesucht 
		(anschließende Kommunikation + entfernen der Suchanzeige)
		- Gegenstand wird noch nicht auf der Plattform gesucht
	- Gegenstand geht verloren
		- Gegenstand wurde bereits gefunden und auf der Plattform publiziert
		(anschließende Kommunikation + entfernen der Gefundenanzeige)
		- Gegenstand wurde noch nicht gefunden