kubectl delete service grafana --namespace=monitoring
kubectl delete deployment grafana --namespace=monitoring

kubectl delete deployment prometheus --namespace=monitoring
kubectl delete service prometheus  --namespace=monitoring


kubectl delete service weave-scope-app
kubectl delete deployment weave-scope-app