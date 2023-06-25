from sklearn.metrics import classification_report

def evaluate_model(model, data, labels):
    predictions = model.predict(data)
    report = classification_report(labels, predictions)
    return report
