# Find The Places

Simple K8s demo app

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```
npm install
```

And 

```
minikube start

@FOR /f "tokens=*" %i IN ('minikube docker-env') DO @%i

docker build -t find_the_place:v1

npm run deploy // creates two deployment for the above image

minikube ip

```
go to url : http://<minikube ip>:30061  For Country Role

/health shows COUNTRY config
/api shows country list
/api/country/<countryprefix> shows country with  countryprefix 

go to url : http://<minikube ip>:30062  For City Role

/health shows CITY config
/api shows CITY list
/api/city/<cityprefix> shows cities with  cityprefix

