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

## 📌 Consideraciones técnicas

- El token se guarda en Zustand con persistencia (localStorage).
- El código está listo para crecer: se pueden agregar módulos como "Password change", "User", etc., fácilmente.
- En la vista Home, se implementó scroll infinito (infinite scroll) como estrategia de paginación para mejorar el rendimiento y la experiencia del usuario. Esta técnica permite cargar los datos de forma progresiva a medida que el usuario navega, evitando sobrecargar la memoria con los +2000 elementos desde el inicio y optimizando así los tiempos de carga y el consumo de recursos.

---

## 📄 Autor

**Gian Martinez**  
Frontend Developer  
[LinkedIn](www.linkedin.com/in/gianmartinezvilla) | [GitHub](https://github.com/gmartine32)
