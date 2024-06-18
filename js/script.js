document.addEventListener("DOMContentLoaded", function () {
    const carContainer = document.getElementById("car-container");

    const cars = [
        {
            name: "Acadia",
            description_name: "GMC Acadia 2019",
            description_vehiculo: `
            <strong>Descripción detallada de la GMC Acadia 2019:</strong><br><br>
            <strong>Exterior:</strong><br>
            - Diseño imponente y moderno con parrilla tipo panal y detalles cromados<br>
            - Faros delanteros LED y luces diurnas LED<br>
            - Rines de aluminio de 18 pulgadas (en versiones SLE y SLT) o 20 pulgadas (en versión Denali)<br>
            - Barras de techo<br>
            - Vidrios tintados<br>
            - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
            - Manijas de las puertas cromadas<br>
            - Puertas traseras con apertura y cierre eléctrico (en versión Denali)<br>
            - Quemacocos eléctrico (en versión Denali)<br><br>
            <strong>Interior:</strong><br>
            - Amplio espacio para hasta 7 pasajeros en 3 filas de asientos<br>
            - Asientos delanteros con ajuste eléctrico de 8 posiciones (en versiones SLE y SLT) o 12 posiciones con memoria (en versión Denali)<br>
            - Asientos de la segunda fila con ajuste reclinable y abatibles 60/40<br>
            - Asientos de la tercera fila abatibles 50/50 (disponibles en versiones SLE y SLT)<br>
            - Tapicería de tela de alta calidad (en versiones SLE y SLT) o piel (en versión Denali)<br>
            - Volante multifunción con controles de audio, velocidad crucero y manos libres<br>
            - Sistema de infoentretenimiento GMC IntelliLink con pantalla táctil de 8 pulgadas, Apple CarPlay, Android Auto y Bluetooth<br>
            - Aire acondicionado bizona con controles independientes para el conductor y pasajeros<br>
            - Sistema de audio Bose con 8 bocinas (en versiones SLE y SLT) o 12 bocinas (en versión Denali)<br>
            - Sunroof panorámico (en versión Denali)<br><br>
            <strong>Seguridad:</strong><br>
            - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
            - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
            - Control de estabilidad StabiliTrak<br>
            - Control de tracción<br>
            - Sistema de alerta de presión de neumáticos<br>
            - Cámara de visión trasera<br>
            - Sensores de estacionamiento traseros (en versiones SLE y SLT) o delanteros y traseros (en versión Denali)<br>
            - Sistema de monitoreo de punto ciego con alerta de cambio de carril (en versión Denali)<br>
            - Alerta de tráfico cruzado trasero (en versión Denali)<br><br>
            <strong>Motor:</strong><br>
            - Motor V6 de 3.6 litros con inyección directa<br>
            - Potencia de 310 caballos de fuerza y 271 libras-pie de torque<br>
            - Transmisión automática de 6 velocidades<br>
            - Tracción delantera o integral AWD (disponible en todas las versiones)<br><br>
            <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
            - Sistema de navegación GPS<br>
            - Asientos delanteros con calefacción y ventilación<br>
            - Asientos de la segunda fila con calefacción<br>
            - Volante con calefacción<br>
            - Sistema de entretenimiento de DVD para pasajeros traseros<br>
            - Pantalla táctil de 8 pulgadas en la segunda fila (en versión Denali)<br>
            - Rines de aluminio de 20 pulgadas<br>
            - Suspensión adaptativa<br>
            - Faros LED adaptativos<br>
            - Control de crucero adaptativo<br>
            - Sistema de frenado automático de emergencia
        `,
            estado: "Seminueva",
            inventario: "Disponible",
            kilometraje: "60,000 km",
            precio: "$450,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (14).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (15).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (16).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (17).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (18).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (19).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (20).jpeg"
            ]
        },
        {
            name: "Aspen Hemi",
            description_name: "Chrysler Aspen Hemi 2007",
            description_vehiculo: `
            <strong>Descripción detallada de la Chrysler Aspen Hemi 2007:</strong><br><br>
            <strong>Exterior:</strong><br>
            - Diseño robusto y elegante con parrilla cromada y faros delanteros halógenos<br>
            - Rines de aluminio de 18 pulgadas<br>
            - Barras de techo (opcionales)<br>
            - Vidrios tintados<br>
            - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
            - Manijas de las puertas cromadas<br>
            - Puertas traseras con apertura y cierre eléctrico<br>
            - Quemacocos eléctrico (opcional)<br><br>
            <strong>Interior:</strong><br>
            - Amplio espacio para hasta ocho pasajeros en 3 filas de asientos<br>
            - Asientos delanteros con ajuste eléctrico de 8 posiciones<br>
            - Asientos de la segunda fila con ajuste reclinable y abatibles 60/40<br>
            - Asientos de la tercera fila abatibles 50/50<br>
            - Tapicería de tela de alta calidad (opciones en piel disponibles)<br>
            - Volante multifunción con controles de audio, velocidad crucero y manos libres<br>
            - Sistema de infoentretenimiento MyGIG con pantalla táctil de 7 pulgadas, DVD player, AM/FM radio y entrada auxiliar<br>
            - Aire acondicionado automático bizona<br>
            - Sistema de audio de 6 bocinas<br><br>
            <strong>Seguridad:</strong><br>
            - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
            - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
            - Control de estabilidad ESC<br>
            - Control de tracción<br>
            - Sistema de alerta de presión de neumáticos<br>
            - Cámara de visión trasera (opcional)<br>
            - Sensores de estacionamiento traseros (opcionales)<br><br>
            <strong>Motor:</strong><br>
            - Dos opciones de motor disponibles:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Motor V8 HEMI de 5.7 litros: 340 caballos de fuerza y 390 libras-pie de torque<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Motor V6 de 4.7 litros: 235 caballos de fuerza y 280 libras-pie de torque<br>
            - Transmisión automática de 5 velocidades<br>
            - Tracción trasera o integral AWD (disponible en algunas versiones)<br><br>
            <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
            - Sistema de navegación GPS<br>
            - Asientos delanteros con calefacción y ventilación<br>
            - Asientos de la segunda fila con calefacción<br>
            - Volante con calefacción<br>
            - Sistema de entretenimiento de DVD para pasajeros traseros<br>
            - Pantalla táctil de 10 pulgadas en la segunda fila<br>
            - Rines de aluminio de 20 pulgadas<br>
            - Suspensión deportiva<br>
            - Faros antiniebla<br>
            - Control de crucero automático
        `,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "150,000 km",
            precio: "$87,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (24).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (25).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (26).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (27).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (28).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (29).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (30).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (31).jpeg"
            ]
        },
        {
            name: "Audi a5",
            description_name: "Audi a5 Sline 2019",
            description_vehiculo: `
            <strong>Descripción detallada del Audi A5 S line 2019:</strong><br><br>
            <strong>Exterior:</strong><br>
            - Diseño deportivo y elegante con líneas fluidas y parrilla Singleframe distintiva<br>
            - Faros delanteros LED y luces diurnas LED<br>
            - Rines de aluminio de 19 pulgadas (en versión S line) o 20 pulgadas (en versión S5)<br>
            - Barras de techo opcionales<br>
            - Vidrios tintados<br>
            - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
            - Manijas de las puertas cromadas<br>
            - Quemacocos eléctrico (en versión S5)<br><br>
            <strong>Interior:</strong><br>
            - Amplio espacio para hasta 5 pasajeros<br>
            - Asientos deportivos con ajuste eléctrico y soporte lumbar (en versión S line) o asientos deportivos S con ajuste eléctrico, soporte lumbar y memoria (en versión S5)<br>
            - Tapicería de piel de alta calidad (en versión S line) o tapicería de piel Nappa (en versión S5)<br>
            - Volante multifunción revestido en piel con controles de audio, velocidad crucero y manos libres<br>
            - Sistema de infoentretenimiento MMI con pantalla táctil de 7 pulgadas o 8.3 pulgadas (dependiendo la versión), Apple CarPlay, Android Auto y Bluetooth<br>
            - Aire acondicionado automático bizona<br>
            - Sistema de audio Bang & Olufsen con 14 bocinas (en versión S5)<br>
            - Sunroof panorámico (opcional)<br><br>
            <strong>Seguridad:</strong><br>
            - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
            - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
            - Control de estabilidad ESC<br>
            - Control de tracción<br>
            - Sistema de alerta de presión de neumáticos<br>
            - Cámara de visión trasera<br>
            - Sensores de estacionamiento traseros y delanteros<br>
            - Sistema de monitoreo de punto ciego con alerta de cambio de carril (opcional)<br>
            - Alerta de tráfico cruzado trasero (opcional)<br>
            - Asistente de estacionamiento automático (opcional)<br><br>
            <strong>Motor:</strong><br>
            - Motores disponibles:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;2.0 TFSI de 4 cilindros: 190 caballos de fuerza y 236 libras-pie de torque (en versión S line)<br>
            - Transmisión automática S tronic de 7 velocidades<br>
            - Tracción delantera (en versión S line 2.0 TFSI)<br><br>
            <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
            - Sistema de navegación GPS<br>
            - Asientos delanteros con calefacción y ventilación<br>
            - Volante con calefacción<br>
            - Sistema de sonido Bang & Olufsen con 19 bocinas (en versión S5 Cabriolet)<br>
            - Rines de aluminio de 20 pulgadas<br>
            - Suspensión deportiva<br>
            - Faros LED adaptativos<br>
            - Control de crucero adaptativo<br>
            - Sistema de frenado automático de emergencia
        `,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "79,000 km",
            precio: "$379,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (36).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (37).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (38).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (39).jpeg"
            ]
        },
        {
            name: "BMW",
            description_name: "BMW 118i 2019",
            description_vehiculo: `
                <strong>Descripción detallada del BMW 118i 2019:</strong><br><br>
                <strong>Exterior:</strong><br>
                - Diseño compacto y deportivo con líneas elegantes y parrilla distintiva de BMW<br>
                - Faros delanteros halógenos con luz de día LED (faros LED adaptativos opcionales)<br>
                - Rines de aluminio de 17 pulgadas (en versión Sport Line) o 18 pulgadas (en versión M Sport)<br>
                - Barras de techo opcionales<br>
                - Vidrios tintados<br>
                - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
                - Manijas de las puertas cromadas<br>
                - Quemacocos eléctrico (opcional)<br><br>
                <strong>Interior:</strong><br>
                - Amplio espacio para hasta 5 pasajeros<br>
                - Asientos deportivos con ajuste manual (en versión Sport Line) o ajuste eléctrico (en versión M Sport)<br>
                - Tapicería de tela de alta calidad (en versión Sport Line) o tapicería de piel Sensatec (en versión M Sport)<br>
                - Volante multifunción revestido en piel con controles de audio, velocidad crucero y manos libres<br>
                - Sistema de infoentretenimiento iDrive con pantalla táctil de 8.8 pulgadas, Apple CarPlay, Android Auto y Bluetooth<br>
                - Aire acondicionado automático bizona<br>
                - Sistema de audio de 6 bocinas<br><br>
                <strong>Seguridad:</strong><br>
                - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
                - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
                - Control de estabilidad DSC<br>
                - Control de tracción DTC<br>
                - Sistema de alerta de presión de neumáticos<br>
                - Cámara de visión trasera (opcional)<br>
                - Sensores de estacionamiento traseros (opcionales)<br>
                - Control de crucero activo con función de frenado (opcional)<br><br>
                <strong>Motor:</strong><br>
                - Motor de 3 cilindros TwinPower Turbo de 1.5 litros<br>
                - Potencia de 140 caballos de fuerza y 162 libras-pie de torque<br>
                - Transmisión automática Steptronic de 6 velocidades<br>
                - Tracción trasera<br><br>
                <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
                - Sistema de navegación GPS<br>
                - Asientos delanteros con calefacción<br>
                - Volante con calefacción<br>
                - Sistema de sonido Harman Kardon de 12 bocinas<br>
                - Rines de aluminio de 19 pulgadas<br>
                - Suspensión deportiva M Sport<br>
                - Faros LED adaptativos<br>
                - Control de crucero adaptativo<br>
                - Asistente de estacionamiento
            `,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "25,000 km",
            precio: "$279,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (10).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (11).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (7).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (8).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (9).jpeg"
            ]
        },
        {
            name: "Bettle",
            description_name: "VW Bettle cabriolet 2004",
            description_vehiculo: `
            <strong>Descripción detallada del Volkswagen Beetle Cabriolet 2004:</strong><br><br>
            <strong>Exterior:</strong><br>
            - Diseño clásico y retro con la icónica forma del Beetle<br>
            - Techo convertible de lona en color negro o beige (dependiendo la versión)<br>
            - Faros delanteros halógenos con luz de día<br>
            - Rines de aluminio de 16 pulgadas<br>
            - Barras de techo (opcionales)<br>
            - Vidrios tintados<br>
            - Espejos laterales eléctricos con desempañador<br>
            - Manijas de las puertas cromadas<br><br>
            <strong>Interior:</strong><br>
            - Amplio espacio para hasta 4 pasajeros<br>
            - Asientos delanteros con ajuste manual<br>
            - Tapicería de tela de alta calidad<br>
            - Volante multifunción revestido en piel con controles de audio y velocidad crucero<br>
            - Sistema de infoentretenimiento con radio AM/FM, CD player y entrada auxiliar<br>
            - Aire acondicionado manual<br>
            - Sistema de audio de 6 bocinas<br><br>
            <strong>Seguridad:</strong><br>
            - Dos bolsas de aire frontales<br>
            - Frenos ABS con distribución electrónica de frenado (EBD)<br>
            - Control de estabilidad ESP<br>
            - Control de tracción ASR<br>
            - Sistema de alerta de presión de neumáticos<br>
            - Rollover bars (barras antivuelco)<br><br>
            <strong>Motor:</strong><br>
            - Motor de 2.0 litros de 4 cilindros: 115 caballos de fuerza y 122 libras-pie de torque <br>
            - Transmisión automática Tiptronic de 6 velocidades<br>
            - Tracción delantera<br><br>
            <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
            - Asientos delanteros con calefacción<br>
            - Volante con calefacción<br>
            - Sistema de sonido premium Monsoon de 8 bocinas<br>
            - Rines de aluminio de 17 pulgadas<br>
            - Suspensión deportiva<br>
            - Faros antiniebla<br>
            - Control de crucero automático
        `,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "105,000 km",
            precio: "65,900 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.05 PM.jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.06 PM.jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (1).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM.jpeg"
            ]
        },
        {
            name: "Denali yukon",
            description_name: "GMC Yukon Denali 2019 ",
            description_vehiculo: `
    <strong>Descripción detallada de la GMC Yukon Denali 2019:</strong><br><br>
    <strong>Exterior:</strong><br>
    - Diseño imponente y elegante con parrilla cromada y detalles en cromo<br>
    - Faros delanteros LED y luces diurnas LED<br>
    - Rines de aluminio de 22 pulgadas<br>
    - Barras de techo<br>
    - Vidrios tintados<br>
    - Espejos laterales eléctricos con desempañador, luces direccionales integradas y memoria<br>
    - Manijas de las puertas cromadas<br>
    - Puertas traseras con apertura y cierre eléctrico<br>
    - Quemacocos eléctrico<br><br>
    <strong>Interior:</strong><br>
    - Amplio espacio para hasta 9 pasajeros en 3 filas de asientos<br>
    - Asientos delanteros con ajuste eléctrico de 12 posiciones, memoria y calefacción/ventilación<br>
    - Asientos de la segunda fila con ajuste reclinable y abatibles 60/40 y calefacción<br>
    - Asientos de la tercera fila abatibles 50/50<br>
    - Tapicería de piel de alta calidad<br>
    - Volante multifunción revestido en piel con controles de audio, velocidad crucero, manos libres y calefacción<br>
    - Sistema de infoentretenimiento GMC IntelliLink con pantalla táctil de 10.2 pulgadas, Apple CarPlay, Android Auto y Bluetooth<br>
    - Aire acondicionado automático de tres zonas con controles independientes para el conductor, pasajeros delanteros y pasajeros traseros<br>
    - Sistema de audio Bose de 12 bocinas<br>
    - Sunroof panorámico<br><br>
    <strong>Seguridad:</strong><br>
    - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
    - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
    - Control de estabilidad StabiliTrak<br>
    - Control de tracción<br>
    - Sistema de alerta de presión de neumáticos<br>
    - Cámara de visión trasera<br>
    - Sensores de estacionamiento traseros y delanteros<br>
    - Sistema de monitoreo de punto ciego con alerta de cambio de carril<br>
    - Alerta de tráfico cruzado trasero<br>
    - Frenado automático de emergencia<br>
    - Asistente de mantenimiento de carril<br>
    - Control de crucero adaptativo<br><br>
    <strong>Motor:</strong><br>
    - Motor V8 de 6.2 litros con inyección directa<br>
    - Potencia de 420 caballos de fuerza y 460 libras-pie de torque<br>
    - Transmisión automática de 10 velocidades<br>
    - Tracción trasera o integral AWD<br><br>
    <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
    - Sistema de navegación GPS<br>
    - Asientos de la segunda fila con memoria y calefacción/ventilación<br>
    - Volante con memoria<br>
    - Sistema de entretenimiento de DVD para pasajeros traseros<br>
    - Pantalla táctil de 8 pulgadas en la segunda fila<br>
    - Rines de aluminio de 20 pulgadas<br>
    - Suspensión adaptativa<br>
    - Faros LED adaptativos<br>
    - Cámara de visión de 360 grados<br>
    - Sistema de visión nocturna<br>
    - Asistente de estacionamiento automático
`,
            estado: "Siniestrada por Reparar (Arrancando y Caminando)",
            inventario: "Disponible",
            kilometraje: "42,000 km",
            precio: "$480,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (2).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (3).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (4).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (5).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (6).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (7).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (8).jpeg"
            ]
        },
        {
            name: "Enclave",
            description_name: "Buick Enclave 2014",
            description_vehiculo: `
    <strong>Descripción detallada del Buick Enclave 2014:</strong><br><br>
    <strong>Exterior:</strong><br>
    - Diseño elegante y sofisticado con parrilla cromada distintiva de Buick<br>
    - Faros delanteros de xenón con luces diurnas LED<br>
    - Rines de aluminio de 18 pulgadas (opcional en 19 o 20 pulgadas)<br>
    - Barras de techo<br>
    - Vidrios tintados<br>
    - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
    - Manijas de las puertas cromadas<br>
    - Puertas traseras con apertura y cierre eléctrico<br>
    - Quemacocos eléctrico (opcional)<br><br>
    <strong>Interior:</strong><br>
    - Amplio espacio para hasta 7 pasajeros en 3 filas de asientos<br>
    - Asientos delanteros con ajuste eléctrico de 8 posiciones y calefacción<br>
    - Asientos de la segunda fila tipo capitán con ajuste reclinable y abatibles 60/40<br>
    - Asientos de la tercera fila abatibles 50/50<br>
    - Tapicería de piel de alta calidad<br>
    - Volante multifunción revestido en piel con controles de audio, velocidad crucero y manos libres<br>
    - Sistema de infoentretenimiento Buick IntelliLink con pantalla táctil de 6.5 pulgadas, Apple CarPlay, Android Auto y Bluetooth<br>
    - Aire acondicionado automático de tres zonas con controles independientes para el conductor, pasajeros delanteros y pasajeros traseros<br>
    - Sistema de audio premium Bose de 10 bocinas<br>
    - Sunroof panorámico (opcional)<br><br>
    <strong>Seguridad:</strong><br>
    - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
    - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
    - Control de estabilidad StabiliTrak<br>
    - Control de tracción<br>
    - Sistema de alerta de presión de neumáticos<br>
    - Cámara de visión trasera<br>
    - Sensores de estacionamiento traseros y delanteros<br>
    - Sistema de monitoreo de punto ciego con alerta de cambio de carril<br>
    - Alerta de tráfico cruzado trasero<br>
    - Asistente de mantenimiento de carril (opcional)<br>
    - Control de crucero adaptativo (opcional)<br><br>
    <strong>Motor:</strong><br>
    - Motor V6 de 3.6 litros con inyección directa<br>
    - Potencia de 288 caballos de fuerza y 270 libras-pie de torque<br>
    - Transmisión automática de 6 velocidades<br>
    - Tracción delantera o integral AWD<br><br>
    <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
    - Sistema de navegación GPS<br>
    - Asientos delanteros con ventilación<br>
    - Asientos de la segunda fila con calefacción<br>
    - Volante con calefacción<br>
    - Sistema de entretenimiento de DVD para pasajeros traseros<br>
    - Pantalla táctil de 8 pulgadas en la segunda fila<br>
    - Rines de aluminio de 20 pulgadas<br>
    - Suspensión adaptativa<br>
    - Faros LED adaptativos<br>
    - Sistema de visión nocturna<br>
    - Asistente de estacionamiento automático
`,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "119,000 km",
            precio: "$129,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (36).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (37).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (38).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (39).jpeg"
            ]
        },
        {
            name: "Honda City",
            description_name: "Honda City 2016",
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "130,000 km",
            precio: "$109,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (46).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (47).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (48).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (49).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (50).jpeg"
            ]
        },
        {
            name: "Ibiza",
            description_name: "Seat Ibiza Reference 2013",
            description_vehiculo: `
    <strong>Descripción detallada del Seat Ibiza Reference 2013:</strong><br><br>
    <strong>Exterior:</strong><br>
    - Diseño moderno y deportivo con líneas dinámicas<br>
    - Faros delanteros halógenos con luz de día<br>
    - Rines de acero de 15 pulgadas con tapones (opcional en aluminio)<br>
    - Vidrios tintados<br>
    - Espejos laterales eléctricos con desempañador<br>
    - Manijas de las puertas del color de la carrocería<br><br>
    <strong>Interior:</strong><br>
    - Espacio cómodo para hasta 5 pasajeros<br>
    - Asientos delanteros con ajuste manual<br>
    - Tapicería de tela de alta calidad<br>
    - Volante multifunción con controles de audio y velocidad crucero<br>
    - Sistema de infoentretenimiento con radio AM/FM, CD player y entrada auxiliar<br>
    - Aire acondicionado manual<br>
    - Sistema de audio de 4 bocinas<br><br>
    <strong>Seguridad:</strong><br>
    - Dos bolsas de aire frontales<br>
    - Frenos ABS con distribución electrónica de frenado (EBD)<br>
    - Control de estabilidad ESP<br>
    - Control de tracción ASR<br>
    - Sistema de alerta de presión de neumáticos<br><br>
    <strong>Motor:</strong><br>
    - Motor de 4 cilindros y 1.6 litros<br>
    - Potencia de 105 caballos de fuerza y 153 libras-pie de torque<br>
    - Transmisión manual de 5 velocidades o automática DSG de 7 velocidades<br>
    - Tracción delantera<br><br>
    <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
    - Sistema de navegación GPS<br>
    - Asientos delanteros con calefacción<br>
    - Volante con calefacción<br>
    - Sistema de sonido premium con 6 bocinas<br>
    - Rines de aluminio de 16 pulgadas<br>
    - Suspensión deportiva<br>
    - Faros antiniebla<br>
    - Control de crucero automático
`,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "80,000 km",
            precio: "$89,500 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (17).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (18).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (19).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (20).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (21).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (22).jpeg"
            ]
        },
        {
            name: "Jetta",
            description_name: "VW Jetta 2017",
            description_vehiculo: `
    <strong>Descripción detallada del VW Jetta 2017:</strong><br><br>
    <strong>Exterior:</strong><br>
    - Diseño elegante y aerodinámico con parrilla cromada<br>
    - Faros delanteros halógenos con luces diurnas LED<br>
    - Rines de aluminio de 16 pulgadas (opcional en 17 pulgadas)<br>
    - Vidrios tintados<br>
    - Espejos laterales eléctricos con desempañador<br>
    - Manijas de las puertas del color de la carrocería<br><br>
    <strong>Interior:</strong><br>
    - Espacio cómodo para hasta 5 pasajeros<br>
    - Asientos delanteros con ajuste manual<br>
    - Tapicería de tela de alta calidad<br>
    - Volante multifunción con controles de audio y velocidad crucero<br>
    - Sistema de infoentretenimiento con pantalla táctil de 5 pulgadas, radio AM/FM, CD player, Bluetooth y entrada auxiliar<br>
    - Aire acondicionado manual<br>
    - Sistema de audio de 6 bocinas<br><br>
    <strong>Seguridad:</strong><br>
    - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
    - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
    - Control de estabilidad ESP<br>
    - Control de tracción ASR<br>
    - Sistema de alerta de presión de neumáticos<br>
    - Cámara de visión trasera<br>
    - Sensores de estacionamiento traseros (opcionales)<br><br>
    <strong>Motor:</strong><br>
    - Motor de 4 cilindros y 2.0 litros<br>
    - Potencia de 115 caballos de fuerza y 125 libras-pie de torque<br>
    - Transmisión manual de 5 velocidades o automática Tiptronic de 6 velocidades<br>
    - Tracción delantera<br><br>
    <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
    - Sistema de navegación GPS<br>
    - Asientos delanteros con calefacción<br>
    - Volante con calefacción<br>
    - Sistema de sonido premium Fender con 8 bocinas<br>
    - Rines de aluminio de 17 pulgadas<br>
    - Suspensión deportiva<br>
    - Faros antiniebla<br>
    - Control de crucero adaptativo
`,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "119,000 km",
            precio: "$105,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (3).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (4).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (5).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (6).jpeg"
            ]
        },
        {
            name: "Kia Seltos",
            description_name: "Kia Seltos 2022",
            description_vehiculo: `
    <strong>Descripción detallada del Kia Seltos 2022:</strong><br><br>
    <strong>Exterior:</strong><br>
    - Diseño moderno y robusto con parrilla distintiva de Kia<br>
    - Faros delanteros LED y luces diurnas LED<br>
    - Rines de aluminio de 17 pulgadas (opcional en 18 pulgadas)<br>
    - Vidrios tintados<br>
    - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
    - Manijas de las puertas del color de la carrocería o cromadas (dependiendo de la versión)<br>
    - Quemacocos eléctrico (opcional)<br><br>
    <strong>Interior:</strong><br>
    - Espacio cómodo para hasta 5 pasajeros<br>
    - Asientos delanteros con ajuste manual o eléctrico (dependiendo de la versión)<br>
    - Tapicería de tela de alta calidad o piel sintética (dependiendo de la versión)<br>
    - Volante multifunción revestido en piel con controles de audio, velocidad crucero y manos libres<br>
    - Sistema de infoentretenimiento con pantalla táctil de 8 pulgadas o 10.25 pulgadas (dependiendo de la versión), Apple CarPlay, Android Auto y Bluetooth<br>
    - Aire acondicionado automático de una o dos zonas (dependiendo de la versión)<br>
    - Sistema de audio de 6 bocinas o sistema de sonido premium Bose de 8 bocinas (dependiendo de la versión)<br><br>
    <strong>Seguridad:</strong><br>
    - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
    - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
    - Control de estabilidad ESC<br>
    - Control de tracción TCS<br>
    - Sistema de alerta de presión de neumáticos<br>
    - Cámara de visión trasera<br>
    - Sensores de estacionamiento traseros y delanteros (dependiendo de la versión)<br>
    - Sistema de monitoreo de punto ciego con alerta de cambio de carril<br>
    - Alerta de tráfico cruzado trasero<br>
    - Frenado automático de emergencia<br>
    - Asistente de mantenimiento de carril<br>
    - Control de crucero adaptativo<br><br>
    <strong>Motor:</strong><br>
    - Motor turbo de 4 cilindros y 1.6 litros: 175 caballos de fuerza y 195 libras-pie de torque<br>
    - Transmisión automática de doble embrague de 7 velocidades<br>
    - Tracción delantera o integral AWD (dependiendo de la versión)<br><br>
    <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
    - Sistema de navegación GPS<br>
    - Asientos delanteros con calefacción y ventilación<br>
    - Volante con calefacción<br>
    - Sistema de entretenimiento para pasajeros traseros<br>
    - Rines de aluminio de 18 pulgadas<br>
    - Suspensión deportiva<br>
    - Faros LED adaptativos<br>
    - Sistema de visión de 360 grados<br>
    - Asistente de estacionamiento automático
`,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "39,000 km",
            precio: "$269,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (23).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (24).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (25).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (26).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (27).jpeg"
            ]
        },
        {
            name: "Mazda 2",
            description_name: "Mazda 2 2022",
            description_vehiculo: `
        <strong>Descripción detallada del Mazda 2 2022:</strong><br><br>
        <strong>Exterior:</strong><br>
        - Diseño compacto y moderno con parrilla distintiva de Mazda<br>
        - Faros delanteros LED y luces diurnas LED<br>
        - Rines de aluminio de 15 pulgadas (opcional en 16 pulgadas)<br>
        - Vidrios tintados<br>
        - Espejos laterales eléctricos con desempañador<br>
        - Manijas de las puertas del color de la carrocería<br><br>
        <strong>Interior:</strong><br>
        - Espacio cómodo para hasta 5 pasajeros<br>
        - Asientos delanteros con ajuste manual<br>
        - Tapicería de tela de alta calidad<br>
        - Volante multifunción revestido en piel con controles de audio y velocidad crucero<br>
        - Sistema de infoentretenimiento Mazda Connect con pantalla táctil de 7 pulgadas, Apple CarPlay, Android Auto y Bluetooth<br>
        - Aire acondicionado automático<br>
        - Sistema de audio de 6 bocinas<br><br>
        <strong>Seguridad:</strong><br>
        - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
        - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
        - Control de estabilidad DSC<br>
        - Control de tracción TCS<br>
        - Sistema de alerta de presión de neumáticos<br>
        - Cámara de visión trasera<br>
        - Sensores de estacionamiento traseros (opcional)<br><br>
        <strong>Motor:</strong><br>
        - Motor de 4 cilindros y 1.5 litros<br>
        - Potencia de 110 caballos de fuerza y 104 libras-pie de torque<br>
        - Transmisión manual de 6 velocidades o automática de 6 velocidades<br>
        - Tracción delantera<br><br>
        <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
        - Sistema de navegación GPS<br>
        - Asientos delanteros con calefacción<br>
        - Volante con calefacción<br>
        - Sistema de sonido premium Bose con 7 bocinas<br>
        - Rines de aluminio de 16 pulgadas<br>
        - Suspensión deportiva<br>
        - Faros antiniebla<br>
        - Control de crucero adaptativo
        `,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "40,000 km",
            precio: "$204,900 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (41).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (42).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (43).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (44).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (45).jpeg"
            ]
        },
        {
            name: "RIO",
            description_name: "Kia Rio 2017",
            description_vehiculo: `
    <strong>Descripción detallada del Kia Rio 2017:</strong><br><br>
    <strong>Exterior:</strong><br>
    - Diseño moderno y aerodinámico con parrilla distintiva de Kia<br>
    - Faros delanteros halógenos con luces diurnas LED<br>
    - Rines de acero de 15 pulgadas (opcional en aluminio de 16 pulgadas)<br>
    - Vidrios tintados<br>
    - Espejos laterales eléctricos con desempañador<br>
    - Manijas de las puertas del color de la carrocería<br><br>
    <strong>Interior:</strong><br>
    - Espacio cómodo para hasta 5 pasajeros<br>
    - Asientos delanteros con ajuste manual<br>
    - Tapicería de tela de alta calidad<br>
    - Volante multifunción con controles de audio y velocidad crucero<br>
    - Sistema de infoentretenimiento con pantalla táctil de 5 pulgadas, radio AM/FM, CD player, Bluetooth y entrada auxiliar<br>
    - Aire acondicionado manual<br>
    - Sistema de audio de 6 bocinas<br><br>
    <strong>Seguridad:</strong><br>
    - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
    - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
    - Control de estabilidad ESC<br>
    - Control de tracción TCS<br>
    - Sistema de alerta de presión de neumáticos<br>
    - Cámara de visión trasera<br>
    - Sensores de estacionamiento traseros (opcionales)<br><br>
    <strong>Motor:</strong><br>
    - Motor de 4 cilindros y 1.6 litros<br>
    - Potencia de 130 caballos de fuerza y 119 libras-pie de torque<br>
    - Transmisión manual de 6 velocidades o automática de 6 velocidades<br>
    - Tracción delantera<br><br>
    <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
    - Sistema de navegación GPS<br>
    - Asientos delanteros con calefacción<br>
    - Volante con calefacción<br>
    - Sistema de sonido premium con 8 bocinas<br>
    - Rines de aluminio de 17 pulgadas<br>
    - Suspensión deportiva<br>
    - Faros antiniebla<br>
    - Control de crucero automático
`,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "130,200 km",
            precio: "$142,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (12).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (13).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (14).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (15).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (16).jpeg"
            ]
        },
        {
            name: "Tida",
            description_name: "Nissan Tida 2014",
            description_vehiculo: `
                <strong>Descripción detallada del Nissan Tida 2014:</strong><br><br>
                <strong>Exterior:</strong><br>
                - Diseño compacto y funcional con parrilla cromada<br>
                - Faros delanteros halógenos<br>
                - Rines de acero de 15 pulgadas<br>
                - Vidrios tintados<br>
                - Espejos laterales eléctricos con desempañador<br>
                - Manijas de las puertas del color de la carrocería<br><br>
                <strong>Interior:</strong><br>
                - Espacio cómodo para hasta 5 pasajeros<br>
                - Asientos delanteros con ajuste manual<br>
                - Tapicería de tela de alta calidad<br>
                - Volante multifunción con controles de audio y velocidad crucero<br>
                - Sistema de infoentretenimiento con radio AM/FM, CD player y entrada auxiliar<br>
                - Aire acondicionado manual<br>
                - Sistema de audio de 4 bocinas<br><br>
                <strong>Seguridad:</strong><br>
                - Dos bolsas de aire frontales<br>
                - Frenos ABS con distribución electrónica de frenado (EBD)<br>
                - Control de estabilidad ESP<br>
                - Control de tracción TCS<br>
                - Sistema de alerta de presión de neumáticos<br><br>
                <strong>Motor:</strong><br>
                - Motor de 4 cilindros y 1.8 litros<br>
                - Potencia de 126 caballos de fuerza y 128 libras-pie de torque<br>
                - Transmisión manual de 6 velocidades o automática de 4 velocidades<br>
                - Tracción delantera<br><br>
                <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
                - Sistema de navegación GPS<br>
                - Asientos delanteros con calefacción<br>
                - Volante con calefacción<br>
                - Sistema de sonido premium con 6 bocinas<br>
                - Rines de aluminio de 16 pulgadas<br>
                - Suspensión deportiva<br>
                - Faros antiniebla<br>
                - Control de crucero automático
            `,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "123,000 km",
            precio: "$89,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (32).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (33).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (34).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (35).jpeg"
            ]
        }
        ,
        {
            name: "Toyota Sienna",
            description_name: "Toyota Sienna 2012",
            description_vehiculo: `
        <strong>Descripción detallada del Toyota Odisea 2019:</strong><br><br>
        <strong>Exterior:</strong><br>
        - Diseño moderno y robusto con parrilla distintiva de Toyota<br>
        - Faros delanteros LED y luces diurnas LED<br>
        - Rines de aluminio de 18 pulgadas (opcional en 19 pulgadas)<br>
        - Vidrios tintados<br>
        - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
        - Manijas de las puertas cromadas<br>
        - Puertas traseras con apertura y cierre eléctrico<br>
        - Quemacocos eléctrico (opcional)<br><br>
        <strong>Interior:</strong><br>
        - Espacio cómodo para hasta 8 pasajeros<br>
        - Asientos delanteros con ajuste eléctrico y memoria<br>
        - Asientos de la segunda fila con ajuste reclinable y abatibles 60/40<br>
        - Asientos de la tercera fila abatibles 50/50<br>
        - Tapicería de piel de alta calidad<br>
        - Volante multifunción revestido en piel con controles de audio, velocidad crucero y manos libres<br>
        - Sistema de infoentretenimiento con pantalla táctil de 8 pulgadas, Apple CarPlay, Android Auto y Bluetooth<br>
        - Aire acondicionado automático de tres zonas<br>
        - Sistema de audio premium JBL de 10 bocinas<br><br>
        <strong>Seguridad:</strong><br>
        - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
        - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
        - Control de estabilidad VSC<br>
        - Control de tracción TRAC<br>
        - Sistema de alerta de presión de neumáticos<br>
        - Cámara de visión trasera<br>
        - Sensores de estacionamiento traseros y delanteros<br>
        - Sistema de monitoreo de punto ciego con alerta de cambio de carril<br>
        - Alerta de tráfico cruzado trasero<br>
        - Frenado automático de emergencia<br>
        - Asistente de mantenimiento de carril<br>
        - Control de crucero adaptativo<br><br>
        <strong>Motor:</strong><br>
        - Motor V6 de 3.5 litros con inyección directa<br>
        - Potencia de 280 caballos de fuerza y 260 libras-pie de torque<br>
        - Transmisión automática de 8 velocidades<br>
        - Tracción delantera o integral AWD<br><br>
        <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
        - Sistema de navegación GPS<br>
        - Asientos delanteros con calefacción y ventilación<br>
        - Volante con calefacción<br>
        - Sistema de entretenimiento de DVD para pasajeros traseros<br>
        - Pantalla táctil de 10 pulgadas en la segunda fila<br>
        - Rines de aluminio de 19 pulgadas<br>
        - Suspensión adaptativa<br>
        - Faros LED adaptativos<br>
        - Sistema de visión de 360 grados<br>
        - Asistente de estacionamiento automático
    `,
            estado: "Seminuevo",
            inventario: "Disponible",
            kilometraje: "95,000 km",
            precio: "$125,900 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (28).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (29).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (30).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (31).jpeg"
            ]
        }
        ,
        {
            name: "Tucson",
            description_name: "Tucson 2017",
            description_vehiculo: `
                <strong>Descripción detallada del Tucson 2019:</strong><br><br>
                <strong>Exterior:</strong><br>
                - Diseño moderno y elegante con parrilla cromada<br>
                - Faros delanteros LED y luces diurnas LED<br>
                - Rines de aluminio de 17 pulgadas (opcional en 18 pulgadas)<br>
                - Vidrios tintados<br>
                - Espejos laterales eléctricos con desempañador y luces direccionales integradas<br>
                - Manijas de las puertas del color de la carrocería<br>
                - Quemacocos eléctrico (opcional)<br><br>
                <strong>Interior:</strong><br>
                - Espacio cómodo para hasta 5 pasajeros<br>
                - Asientos delanteros con ajuste manual o eléctrico (dependiendo de la versión)<br>
                - Tapicería de tela de alta calidad o piel (dependiendo de la versión)<br>
                - Volante multifunción revestido en piel con controles de audio, velocidad crucero y manos libres<br>
                - Sistema de infoentretenimiento con pantalla táctil de 7 pulgadas o 8 pulgadas (dependiendo de la versión), Apple CarPlay, Android Auto y Bluetooth<br>
                - Aire acondicionado automático de una o dos zonas (dependiendo de la versión)<br>
                - Sistema de audio de 6 bocinas o sistema de sonido premium Infinity de 8 bocinas (dependiendo de la versión)<br><br>
                <strong>Seguridad:</strong><br>
                - Seis bolsas de aire: dos frontales, dos laterales y dos de cortina<br>
                - Frenos ABS con distribución electrónica de frenado (EBD) y asistencia de frenado de emergencia (BA)<br>
                - Control de estabilidad ESC<br>
                - Control de tracción TCS<br>
                - Sistema de alerta de presión de neumáticos<br>
                - Cámara de visión trasera<br>
                - Sensores de estacionamiento traseros y delanteros (dependiendo de la versión)<br>
                - Sistema de monitoreo de punto ciego con alerta de cambio de carril<br>
                - Alerta de tráfico cruzado trasero<br>
                - Frenado automático de emergencia<br>
                - Asistente de mantenimiento de carril<br>
                - Control de crucero adaptativo<br><br>
                <strong>Motor:</strong><br>
                - Motor de 4 cilindros y 2.0 litros: 164 caballos de fuerza y 151 libras-pie de torque<br>
                - Motor turbo de 4 cilindros y 1.6 litros: 175 caballos de fuerza y 195 libras-pie de torque<br>
                - Transmisión automática de 6 velocidades o automática de doble embrague de 7 velocidades (dependiendo de la versión)<br>
                - Tracción delantera o integral AWD (dependiendo de la versión)<br><br>
                <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
                - Sistema de navegación GPS<br>
                - Asientos delanteros con calefacción y ventilación<br>
                - Volante con calefacción<br>
                - Sistema de entretenimiento para pasajeros traseros<br>
                - Rines de aluminio de 18 pulgadas<br>
                - Suspensión deportiva<br>
                - Faros LED adaptativos<br>
                - Sistema de visión de 360 grados<br>
                - Asistente de estacionamiento automático
            `,
            estado: "Seminueva",
            inventario: "Disponible",
            kilometraje: "49,000 km",
            precio: "$247,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (10).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (11).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (12).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (13).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (9).jpeg"
            ]
        }
        ,
        {
            name: "Xtrail",
            description_name: "Xtrail 2019",
            description_vehiculo: `
            <strong>Descripción del Nissan X-Trail Exclusive 2018:</strong><br><br>
            <strong>Exterior:</strong><br>
            - Diseño elegante y robusto<br>
            - Faros delanteros LED<br>
            - Rines de aluminio de 18 pulgadas<br>
            - Barras de techo<br>
            - Vidrios tintados<br>
            - Espejos laterales eléctricos con desempañador<br>
            - Apertura y cierre eléctrico del baúl<br><br>
            <strong>Interior:</strong><br>
            - Amplio y confortable para 5 o 7 pasajeros (dependiendo la versión)<br>
            - Asientos de piel con ajuste eléctrico para el conductor<br>
            - Sistema de aire acondicionado bizona<br>
            - Pantalla táctil de 7 pulgadas con sistema de navegación y cámara de reversa<br>
            - Sistema de audio BOSE con 8 bocinas<br>
            - Bluetooth para manos libres y conectividad de audio<br>
            - Volante multifunción<br>
            - Sunroof panorámico (en algunas versiones)<br><br>
            <strong>Seguridad:</strong><br>
            - Seis bolsas de aire<br>
            - Frenos ABS con distribución electrónica de frenado (EBD)<br>
            - Control de estabilidad (ESC)<br>
            - Control de tracción (TCS)<br>
            - Asistencia de frenado de emergencia (BA)<br>
            - Monitoreo de presión de neumáticos (TPMS)<br>
            - Sensores de estacionamiento<br><br>
            <strong>Motor:</strong><br>
            - Motor de 4 cilindros y 2.5 litros<br>
            - 169 caballos de fuerza<br>
            - 172 libras-pie de torque<br>
            - Transmisión CVT<br>
            - Tracción delantera o integral (AWD)<br><br>
            <strong>Equipamiento adicional (dependiendo la versión):</strong><br>
            - Tercera fila de asientos<br>
            - Asientos de piel con calefacción<br>
            - Sistema de monitoreo de punto ciego<br>
            - Alerta de tráfico cruzado<br>
            - Faros LED adaptativos<br>
            - Control de crucero adaptativo
        `,
            estado: "Seminueva",
            inventario: "Disponible",
            kilometraje: "89,000 km",
            precio: "$280,000 MXN",
            images: [
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (40).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.07 PM (41).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (1).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM (2).jpeg",
                "WhatsApp Image 2024-06-13 at 11.19.08 PM.jpeg"
            ]
        }
    ];

    cars.forEach(car => {
        const carouselId = `carousel-${car.name.replace(/\s+/g, '-')}`;
        const card = document.createElement("div");
        card.className = "col-md-4 car-card";
        card.innerHTML = `
            <div class="card shadow-lg" style="background: linear-gradient(to bottom, #FF5733, #FFC300); border-radius: 10px; border: 2px solid #ccc;">
                <div id="${carouselId}" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        ${car.images.map((image, index) => `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img src="img/${car.name}/${image}" class="d-block w-100" alt="${car.name} ${index + 1}" style="border-radius: 10px 10px 0 0;">
                            </div>
                        `).join('')}
                    </div>
                    <a class="carousel-control-prev" href="#${carouselId}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#${carouselId}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="card-body" style="background: linear-gradient(to bottom, #67666B, #031A1C);">
                    <h4 class="card-title" style="background: linear-gradient(to right, red, red); -webkit-background-clip: text; color: transparent; ">${car.description_name}</h4>
                    <p class="card-text text-white"><strong>Estado:</strong> ${car.estado}</p>
                    <p class="card-text text-white"><strong>Inventario:</strong> ${car.inventario}</p>
                    <p class="card-text text-white"><strong>Kilometraje:</strong> ${car.kilometraje}</p>
                    <p class="card-text text-white"><strong>Precio:</strong> ${car.precio}</p>
                    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#carDetailsModal" data-car='${JSON.stringify(car)}'>Ver Detalles</a>
                </div>
            </div>
        `;
        carContainer.appendChild(card);
    });

    $('#carDetailsModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget); // Botón que activa el modal
        const car = button.data('car'); // Extrae la información del auto

        const modal = $(this);
        modal.find('#carName').text(car.description_name);
        modal.find('#carDescription').html(car.description_vehiculo);

        const carImages = modal.find('.carousel-inner');
        carImages.empty(); // Limpia las imágenes anteriores

        car.images.forEach((image, index) => {
            const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
            carImages.append(`
                <div class="${itemClass}">
                    <img src="img/${car.name}/${image}" class="d-block w-100" alt="${car.name} ${index + 1}">
                </div>
            `);
        });
    });

    // Inicializa el mapa de Google Maps
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.967, lng: -89.623 }, // Latitud y longitud de Mérida, Yucatán
        zoom: 12,
    });

    const marker = new google.maps.Marker({
        position: { lat: 20.967, lng: -89.623 },
        map: map,
        title: "Ubicación de la agencia de autos"
    });
});