kubectl create -f ./bin/monitor/monitoring-namespace.yaml
kubectl create -f ./bin/monitor/prometheus-config.yaml
kubectl create -f ./bin/monitor/prometheus-deployment.yaml
kubectl create -f ./bin/monitor/prometheus-service.yaml
kubectl create -f ./bin/monitor/grafana-deployment.yaml
kubectl create -f ./bin/monitor/grafana-service.yaml
kubectl get services --namespace=monitoring grafana -o yaml
kubectl apply -f ./bin/monitor/weavescope.yaml