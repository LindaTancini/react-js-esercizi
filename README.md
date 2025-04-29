# Esercizi React JS – useState, useEffect, Form, Router

Questi esercizi aiutano a comprendere e applicare i concetti fondamentali di React:

## ✅ Esercizio 1 – Form di Registrazione (`useState`)

**Obiettivo:**  
Creare un form controllato con i campi `nome`, `email` e `password`.

**Funzionalità:**

- Ogni campo usa `useState` per aggiornare lo stato.
- Al submit, i dati vengono mostrati in console o con un alert.

**Cosa impari:**

- Gestione degli input controllati
- `onChange`, `onSubmit`, `preventDefault()`

---

## ✅ Esercizio 2 – Lista utenti da API (`useEffect` + `useState`)

**Obiettivo:**  
Recuperare e visualizzare una lista di utenti da una API al caricamento.

**API suggerita:**  
https://jsonplaceholder.typicode.com/users

**Cosa impari:**

- Uso di `useEffect` al mount
- Chiamata API con `fetch()`
- Gestione array di oggetti e `.map()`

---

## ✅ Esercizio 3 – Aggiunta dinamica con un form

**Obiettivo:**  
Creare un form per aggiungere nuovi utenti a una lista già esistente.

**Funzionalità:**

- Campi: `nome`, `email`
- Aggiunta dinamica alla lista (senza ricaricare)
- La lista è gestita con `useState`

**Cosa impari:**

- Modifica dello stato array con spread operator
- Concetto di `key` nel rendering di liste

---

## ✅ Esercizio 4 – Routing Base (`react-router-dom`)

**Obiettivo:**  
Creare una piccola SPA con due pagine: `Home` e `About`.

**Tecnologie:**

- `react-router-dom`
- Componenti: `<Routes>`, `<Route>`, `<Link>`

**Cosa impari:**

- Navigazione client-side
- Suddivisione in pagine
- Creazione di una base per progetti più grandi

---

## 🐱 Bonus – The Cat API (Immagini e razze di gatti)

**Obiettivo:**  
Usare una API gratuita per ottenere immagini casuali di gatti

**URL:**  
https://api.thecatapi.com/v1/images/search

**Caratteristiche:**

- Migliaia di immagini di gatti.
