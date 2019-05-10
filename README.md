# 🍶Varnelli

A simple block explorer client, built on top of the [social wallet api](https://github.com/Commonfare-net/social-wallet-api).

## Prerequisites

In order to use Varnelli, you need to have swapi up and running on your machine.
Follow the instruction from the [official repo](https://github.com/Commonfare-net/social-wallet-api) to spin up an instance of swapi locally.

## Getting started

#### 1. Clone the project
``` shell
git clone https://github.com/ivanminutillo/varnelli.git

cd varnelli
```
#### 2. Install javascript dependencies

``` shell
npm install
```

#### 3. Rename ```apikey.cljs.test``` to ```apikey.cljs``` and paste the apikey value generated during the swapi build fase 

#### 4. Start the server

``` shell
shadow-cljs watch app
```

#### 5. Navigate to http://localhost:8700

# Tech
Varnelli is built in clojurescript, relevant libraries are:

- [shadow-cljs](http://shadow-cljs.org/): a clojurescript build tool 
- [Reagent](https://github.com/reagent-project/reagent): a wrapper interface to React
- [Reitit](https://github.com/metosin/reitit): Routing libraries
- [cljss](https://github.com/clj-commons/cljss): CSS-in-JS for ClojureScript
- [Oz](https://github.com/metasoarous/oz/): a wrapper to the awesome vega/vega-lite dataviz library
