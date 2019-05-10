# Varnelli

A simple block explorer client build on top of the [social wallet api](https://github.com/Commonfare-net/social-wallet-api).

## Prerequisites

In order to use Varnelli, you need to have swapi up and running on your machine.
To start swapi locally, you can follow the instruction from the [original repository](https://github.com/Commonfare-net/social-wallet-api)
Once swapi is running fine, you should copy/paste the 
## Getting started

Clone the project
``` shell
git clone https://github.com/ivanminutillo/varnelli.git

cd varnelli
```
Install javascript dependencies

``` shell
npm install
```

Start the server

``` shell
shadow-cljs watch app
```

Navigate to http://localhost:8700

# Tech
Varnelli is built in clojurescript, relevant libraries are:

- [shadow-cljs](http://shadow-cljs.org/): a clojurescript build tool 
- [Reagent](https://github.com/reagent-project/reagent): a wrapper interface to React
- [Reitit](https://github.com/metosin/reitit), [Accountant](https://github.com/venantius/accountant): Routing libraries
- [cljss](https://github.com/clj-commons/cljss): CSS-in-JS for ClojureScript
- [Oz](https://github.com/metasoarous/oz/): a wrapper to the awesome vega/vega-lite dataviz library
