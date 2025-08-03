# Wettervorhersage-App

Eine moderne Wettervorhersage-Anwendung, entwickelt mit **React**, **TypeScript** und **TailwindCSS**. Die App verwendet die **Open-Meteo-API**, um in Echtzeit Wetterdaten für beliebige Städte in Deutschland abzurufen.

## Funktionen

- Aktuelle Wetterdaten auf Basis der Geokoordinaten deutscher Städte
- Direkte Stadtvorschläge während der Eingabe (ab 3 Zeichen)
- Anzeige von Temperatur, Windgeschwindigkeit, Wetterzustand und Uhrzeit
- Sauberes, responsives Design mit TailwindCSS und SCSS
- Nutzung von Wettercodes zur Visualisierung der Wetterlage mit Icons

## Installation und Ausführung

1. Projekt herunterladen oder klonen:

   ```bash
   git clone <repository-url>
   cd <projektverzeichnis>
   ```

2. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

3. Entwicklungsserver starten:

   ```bash
   npm run dev
   ```

4. Anwendung im Browser öffnen:

   Besuchen Sie die in der Konsole angegebene Adresse (standardmäßig `http://localhost:5173`)

## Technologien

- React (mit Vite)
- TypeScript
- TailwindCSS 
- Axios für HTTP-Anfragen
- Open-Meteo Geocoding & Forecast APIs
