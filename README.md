# Tekton Labs / Tenpo - Desafío Técnico Frontend

Este proyecto es una prueba técnica desarrollada en **React + TypeScript**

## 🧠 Funcionalidad

- Pantalla de login con validación básica y login simulado (`fake-token`).
- Home protegida por autenticación, que consume una API pública, puedes aplicar filtros y listar +2000 elementos (Paginado implementando infinite Scroll).
- Logout que limpia el estado de sesión y redirige al login.
- Arquitectura basada en contexto (migrado a Zustand) para separar rutas públicas y privadas.
- Interceptor de Axios configurado para incluir token en cada request.

---

## 🛠️ Tecnologías utilizadas

- React 18 + TypeScript
- Zustand (gestión global de estado)
- Axios (fetching de datos)
- React Router 6
- TailwindCSS (estilos)
- Vite (tooling rápido)
- NVD NIST API (fuente de datos)

---

## 🚀 Instalación

Asegúrate de tener Node.js v22.15.1 (o compatible) instalado.

1. Clona el repositorio:

```bash
git clone https://github.com/gmartine32/challenge-frontend
cd tenpo-tech-challenge
```

2. Instala dependencias:

```bash
npm install
```

3. Levanta el proyecto en desarrollo:

```bash
npm run dev
```

4. Credenciales:

```bash
Email: admin@example.com
Password: password123
```

---

## 🌐 API utilizada

Se utiliza la API pública de vulnerabilidades del **National Vulnerability Database (NVD)** de NIST.

**Endpoint base:**

```
https://services.nvd.nist.gov/rest/json/cves/2.0
```

### 🔍 Ejemplo de llamada

```http
GET /rest/json/cves/2.0?resultsPerPage=2000
```

### 📦 Respuesta esperada

```json
{
  "resultsPerPage": 2000,
  "startIndex": 0,
  "totalResults": 45000,
  "vulnerabilities": [
    {
      "cve": {
        "id": "CVE-2023-1234",
        "sourceIdentifier": "example.com",
        "published": "2023-12-01T00:00Z",
        "descriptions": [
          {
            "lang": "en",
            "value": "Vulnerability in example software..."
          }
        ]
      }
    },
    ...
  ]
}
```

**⚠️ Nota:** No requiere autenticación.

---

## 🧩 Estructura del proyecto

```
src/
├── assets/            # Imágenes o íconos
├── core/              # Componentes reutilizables
├── context/           # (opcional) contexto no migrado a Zustand
├── layouts/           # PrivateLayout
├── pages/             # Login, Home, User y PasswordChange
├── routes/            # Configuración de rutas
├── services/          # Configuración de Axios
├── store/             # Zustand (authStore.ts)
├── styles/            # Tailwind y configuraciones
├── types/             # Tipado global
├── utils/             # Funciones auxiliares (sleep, etc.)
└── main.tsx           # Entrada principal
```


---
## 🏗️ Arquitectura: Rutas públicas y privadas

El proyecto implementa una arquitectura modular basada en la separación de rutas utilizando **React Router** y **Zustand** como gestor de estado para el manejo de autenticación.

- **Rutas públicas**: son accesibles sin necesidad de estar autenticado. Se utilizan principalmente para procesos iniciales como el inicio de sesión o cambio de contraseña (`/login`, `/password-change`).
- **Rutas privadas**: están protegidas mediante un `PrivateLayout`, que verifica la existencia de un token almacenado en Zustand antes de renderizar cualquier componente privado (`/home`, `/user`, etc.).

Esta separación clara permite una escalabilidad eficiente: cada nuevo módulo puede integrarse fácilmente como público o privado sin afectar el resto de la aplicación. Además, la estructura facilita el mantenimiento y mejora la experiencia de usuario al controlar el acceso a las vistas protegidas de forma centralizada.

---

## 🚀 Propuesta de mejora: Abstracción del cliente HTTP

Actualmente, el proyecto maneja las peticiones al backend mediante una instancia de Axios con interceptores para incluir el token y gestionar la renovación de credenciales expiradas. Si bien esta solución es funcional, su acoplamiento directo a Axios puede dificultar futuras migraciones o integraciones con otras herramientas como `fetch`, `ky`, `GraphQL` u otros entornos de testing.

### 🔧 Solución propuesta: Clase HttpClient desacoplada

Se propone implementar una clase `HttpClient` que encapsule toda la lógica de peticiones, incluyendo:

- Agregado automático del token en los headers.
- Manejo del estado de renovación de tokens (`refreshToken`).
- Reintento automático de peticiones fallidas por expiración de token.
- Capacidad de alternar entre Axios, Fetch o cualquier otro motor sin reescribir la lógica de autenticación.

### 🎯 Beneficios

- **Desacoplamiento**: no dependemos directamente de Axios, lo que facilita cambiar de librería si es necesario.
- **Reusabilidad**: se puede usar el mismo cliente HTTP en entornos distintos (web, móvil, SSR).
- **Escalabilidad**: nuevas funcionalidades (timeout global, métricas, logs, reintentos automáticos) pueden añadirse sin modificar cada petición.
- **Mantenibilidad**: centraliza la lógica de autenticación y errores comunes en un solo lugar.

### 📌 Justificación

Aunque la implementación actual basada en `axios.interceptors` funciona correctamente, al crecer el proyecto o requerir soporte multiplataforma, es más sostenible usar una clase desacoplada. Esto permite escalar la lógica sin fricciones y seguir principios como **Open/Closed** y **Single Responsibility** del diseño orientado a objetos.

---


## 📌 Consideraciones técnicas

- El token se guarda en Zustand con persistencia (localStorage).
- El código está listo para crecer: se pueden agregar módulos como "Password change", "User", etc., fácilmente.
- En la vista Home, se implementó scroll infinito (infinite scroll) como estrategia de paginación para mejorar el rendimiento y la experiencia del usuario. Esta técnica permite cargar los datos de forma progresiva a medida que el usuario navega, evitando sobrecargar la memoria con los +2000 elementos desde el inicio y optimizando así los tiempos de carga y el consumo de recursos.

---

## 🌐 Despliegue

Como valor agregado, se realizó el despliegue completo de la aplicación en producción:

🔗 [Ver aplicación desplegada](https://challenge-front.lmcdigitalriver.online/)

Esto permite visualizar y probar el sistema en un entorno real.



## 📄 Autor

**Gian Martinez**  
Frontend Developer  
[LinkedIn](www.linkedin.com/in/gianmartinezvilla) | [GitHub](https://github.com/gmartine32)
