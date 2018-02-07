kubectl create -f ./config/monitor/monitoring-namespace.yaml
kubectl create -f ./config/monitor/prometheus-config.yaml
kubectl create -f ./config/monitor/prometheus-deployment.yaml
kubectl create -f ./config/monitor/prometheus-service.yaml
kubectl create -f ./config/monitor/grafana-deployment.yaml
kubectl create -f ./config/monitor/grafana-service.yaml
kubectl get services --namespace=monitoring grafana -o yaml
kubectl apply -f ./config/monitor/weavescope.yaml